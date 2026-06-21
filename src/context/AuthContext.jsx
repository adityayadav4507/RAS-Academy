import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  onSnapshot 
} from 'firebase/firestore';
import { auth, db, googleProvider, isFirebaseConfigured } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState('free'); // 'free' or 'premium'
  const [planType, setPlanType] = useState('free'); // 'free', 'monthly', or 'lifetime'

  // Log in using Google (supports both real and sandbox mock flows)
  const loginWithGoogle = async () => {
    if (isFirebaseConfigured && auth && googleProvider) {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
      } catch (error) {
        console.error("Google sign in failed:", error);
        throw error;
      }
    } else {
      // Sandbox Mode: Mock Sign In
      const mockUser = {
        uid: "mock-uid-12345",
        displayName: "RAS Aspirant (एस्पिरेंट)",
        email: "ras.aspirant@example.com",
        photoURL: "https://api.dicebear.com/7.x/adventurer/svg?seed=ras-aspirant"
      };
      localStorage.setItem("mock_user", JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }
  };

  // Sign out (supports both real and sandbox mock flows)
  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Sign out failed:", error);
      }
    } else {
      // Sandbox Mode: Mock Sign Out
      localStorage.removeItem("mock_user");
      localStorage.removeItem("mock_sub_status");
      localStorage.removeItem("mock_plan_type");
      setCurrentUser(null);
      setSubscriptionStatus('free');
      setPlanType('free');
    }
  };

  // Update subscription status in DB or LocalStorage
  const upgradeSubscription = async (chosenPlan, paymentDetails = {}) => {
    // chosenPlan will be 'monthly' or 'lifetime'
    if (isFirebaseConfigured && db && currentUser) {
      try {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, {
          subscriptionStatus: 'premium',
          planType: chosenPlan,
          paymentId: paymentDetails.razorpay_payment_id || "",
          orderId: paymentDetails.razorpay_order_id || "",
          paymentSignature: paymentDetails.razorpay_signature || "",
          paymentTimestamp: new Date().toISOString()
        });
      } catch (e) {
        console.error("Failed to update status in Firestore:", e);
      }
    } else {
      // Sandbox Mode: Save to LocalStorage
      localStorage.setItem("mock_sub_status", "premium");
      localStorage.setItem("mock_plan_type", chosenPlan);
      localStorage.setItem("mock_payment_id", paymentDetails.razorpay_payment_id || "mock-pay-id");
      setSubscriptionStatus('premium');
      setPlanType(chosenPlan);
    }
  };

  // Listen to Auth State Changes
  useEffect(() => {
    let unsubscribeUser = () => {};
    let unsubscribeFirestore = () => {};

    if (isFirebaseConfigured && auth) {
      unsubscribeUser = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setCurrentUser(user);
          const userRef = doc(db, "users", user.uid);
          
          unsubscribeFirestore = onSnapshot(userRef, (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.data();
              setSubscriptionStatus(data.subscriptionStatus || 'free');
              setPlanType(data.planType || 'free');
            } else {
              // Create user record in Firestore
              setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                subscriptionStatus: 'free',
                planType: 'free',
                createdAt: new Date().toISOString()
              });
              setSubscriptionStatus('free');
              setPlanType('free');
            }
            setLoading(false);
          }, (err) => {
            console.error("Firestore onSnapshot error:", err);
            setLoading(false);
          });
        } else {
          setCurrentUser(null);
          setSubscriptionStatus('free');
          setPlanType('free');
          setLoading(false);
        }
      });
    } else {
      // Sandbox Mode Initialization
      const savedMockUser = localStorage.getItem("mock_user");
      const savedSubStatus = localStorage.getItem("mock_sub_status");
      const savedPlanType = localStorage.getItem("mock_plan_type");

      if (savedMockUser) {
        setCurrentUser(JSON.parse(savedMockUser));
        setSubscriptionStatus(savedSubStatus || 'free');
        setPlanType(savedPlanType || 'free');
      } else {
        setCurrentUser(null);
        setSubscriptionStatus('free');
        setPlanType('free');
      }
      setLoading(false);
    }

    return () => {
      unsubscribeUser();
      unsubscribeFirestore();
    };
  }, []);

  const value = {
    currentUser,
    loading,
    subscriptionStatus,
    planType,
    isSandbox: !isFirebaseConfigured,
    loginWithGoogle,
    logout,
    upgradeSubscription
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
