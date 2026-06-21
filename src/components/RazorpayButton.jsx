import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import { CreditCard, Loader2 } from 'lucide-react';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const RazorpayButton = ({ className, plan = 'monthly', amount = 9, onSuccess }) => {
  const { currentUser, upgradeSubscription } = useAuth();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!currentUser) {
      alert("कृपया पहले लॉगिन करें। / Please login first.");
      return;
    }

    setLoading(true);
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      alert("Razorpay SDK लोड करने में विफल। / Failed to load Razorpay SDK.");
      setLoading(false);
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_o9fE5s32Hsd3wz";
    const amountInPaise = amount * 100;
    const planName = plan === 'monthly' ? "RAS Monthly Subscription" : "RAS Lifetime Pass";

    const options = {
      key: keyId,
      amount: amountInPaise,
      currency: "INR",
      name: "RAS Academy",
      description: planName,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=ras-academy",
      // Set options to prioritize UPI payments
      prefill: {
        name: currentUser.displayName || "",
        email: currentUser.email || "",
        contact: "9999999999",
        method: "upi" // Defaulting to highlight UPI checkout
      },
      handler: async function (response) {
        setLoading(false);
        await upgradeSubscription(plan, response);
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });

        if (onSuccess) {
          onSuccess(response);
        }
      },
      notes: {
        address: "Rajasthan, India",
        userId: currentUser.uid,
        selectedPlan: plan
      },
      theme: {
        color: "#d97706"
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const buttonText = plan === 'monthly'
    ? `₹${amount}/महीना (Monthly) अनलॉक करें`
    : `₹${amount} लाइफटाइम (Lifetime) अनलॉक करें`;

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`relative overflow-hidden group px-6 py-3.5 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${className}`}
      style={{
        background: plan === 'monthly' 
          ? 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)' 
          : 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
        border: plan === 'monthly'
          ? '1px solid rgba(59, 130, 246, 0.4)'
          : '1px solid rgba(251, 191, 36, 0.4)',
        boxShadow: plan === 'monthly'
          ? '0 10px 15px -3px rgba(29, 78, 216, 0.25)'
          : '0 10px 15px -3px rgba(217, 119, 6, 0.25)',
        cursor: 'pointer'
      }}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin w-4 h-4 text-white" />
          <span>प्रोसेसिंग... / Processing...</span>
        </>
      ) : (
        <>
          <CreditCard className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
          <span>{buttonText}</span>
        </>
      )}
    </button>
  );
};
export default RazorpayButton;
