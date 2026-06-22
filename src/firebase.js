import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDk6UsKyWgNklr5mxjrTsu5I_04Ob5Rm4A",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ras-academy.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ras-academy",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ras-academy.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "341632414779",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:341632414779:web:83c0ebb7a4e3bd2a63981e"
};

// Verify if actual credentials are present (not empty or placeholders)
export const isFirebaseConfigured = !!(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey.trim() !== "" &&
  !firebaseConfig.apiKey.includes("YOUR_")
);

let app = null;
let auth = null;
let db = null;
let googleProvider = null;
let functions = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
    functions = getFunctions(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

export { app, auth, db, googleProvider, functions };
