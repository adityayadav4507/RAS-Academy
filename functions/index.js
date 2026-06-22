require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const admin = require("firebase-admin");
const Razorpay = require("razorpay");
const crypto = require("crypto");

// 1. Initialize Firebase Admin SDK
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log("Firebase Admin initialized successfully using service account JSON.");
  } catch (error) {
    console.error("Failed to initialize Firebase Admin with service account JSON, falling back...", error);
    admin.initializeApp();
  }
} else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      })
    });
    console.log("Firebase Admin initialized successfully using individual credentials.");
  } catch (error) {
    console.error("Failed to initialize Firebase Admin with individual credentials, falling back...", error);
    admin.initializeApp();
  }
} else {
  admin.initializeApp();
  console.log("Firebase Admin initialized using default credentials (GCP/emulator environment).");
}

const db = admin.firestore();

// 2. Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// 3. Initialize Express App
const app = express();

// 4. Configure Request Logging
app.use(morgan("dev"));

// 5. Configure CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map(origin => origin.trim())
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    const isLocal = origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:");
    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin) || isLocal) {
      return callback(null, true);
    }
    return callback(new Error(`Origin ${origin} not allowed by CORS`));
  },
  credentials: true
};
app.use(cors(corsOptions));

// 6. Parse JSON payloads
app.use(express.json());

// 7. Firebase Auth Authentication Middleware
const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "लॉगिन आवश्यक है। / User must be logged in." });
  }

  const token = authHeader.split("Bearer ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Firebase ID Token verification failed:", error);
    return res.status(401).json({ error: "अमान्य टोकन। / Invalid or expired token." });
  }
};

// 8. API Routes

// Health Check Endpoint (Render uses this to check if backend is healthy)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Root Endpoint
app.get("/", (req, res) => {
  res.status(200).send("RAS Academy Backend Server is running.");
});

// Endpoint: Create Razorpay Order
app.post("/api/create-order", authenticate, async (req, res, next) => {
  const { plan } = req.body;
  if (plan !== "monthly" && plan !== "lifetime") {
    return res.status(400).json({ error: "अमान्य योजना प्रकार। / Invalid plan type." });
  }

  // Determine amount on backend to prevent client-side manipulation
  const amountInPaise = plan === "monthly" ? 900 : 49900; // ₹9 or ₹499

  try {
    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_order_${req.user.uid}_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    return res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return res.status(500).json({ error: error.message || "Failed to create order" });
  }
});

// Endpoint: Verify Payment and Upgrade User Status
app.post("/api/verify-payment", authenticate, async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, plan } = req.body;
  
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !plan) {
    return res.status(400).json({ error: "भुगतान मापदंडों का अभाव। / Missing payment parameters." });
  }

  try {
    // Verify signature securely
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ error: "भुगतान सत्यापन विफल रहा। / Payment verification failed." });
    }

    const uid = req.user.uid;
    const userRef = db.collection("users").doc(uid);

    // Securely update status in Firestore
    await userRef.set({
      subscriptionStatus: "premium",
      planType: plan,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paymentSignature: razorpay_signature,
      paymentTimestamp: new Date().toISOString()
    }, { merge: true });

    return res.json({ success: true });
  } catch (error) {
    console.error("Firestore user status update failed:", error);
    return res.status(500).json({ error: "सक्रियता विफल रही। / Failed to activate subscription." });
  }
});

// 9. Error Handling Middleware (Prevent silent crashes, log all errors)
app.use((err, req, res, next) => {
  console.error("Unhandled Express Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "production" ? "Something went wrong" : err.message
  });
});

// 10. Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received. Shutting down gracefully...");
  server.close(() => {
    console.log("Express server closed.");
  });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception! Preventing silent crash:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
