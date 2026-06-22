import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import { CreditCard, Loader2 } from 'lucide-react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../firebase';

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
  const { currentUser, upgradeSubscription, isSandbox } = useAuth();
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
    const planName = plan === 'monthly' ? "RAS Monthly Subscription" : "RAS Lifetime Pass";
    
    let orderId = "";
    let amountInPaise = amount * 100;

    const apiUrl = import.meta.env.VITE_API_URL;

    if (!isSandbox) {
      try {
        if (apiUrl) {
          const idToken = await currentUser.getIdToken();
          const response = await fetch(`${apiUrl}/api/create-order`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${idToken}`
            },
            body: JSON.stringify({ plan })
          });
          if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `HTTP error ${response.status}`);
          }
          const orderResult = await response.json();
          orderId = orderResult.orderId;
          amountInPaise = orderResult.amount;
        } else if (functions) {
          const createOrderCallable = httpsCallable(functions, 'createRazorpayOrder');
          const orderResult = await createOrderCallable({ plan });
          orderId = orderResult.data.orderId;
          amountInPaise = orderResult.data.amount;
        }
      } catch (error) {
        console.error("Order creation failed:", error);
        alert("ऑर्डर जनरेट करने में विफल। / Failed to generate order: " + (error.message || error));
        setLoading(false);
        return;
      }
    }

    const options = {
      key: keyId,
      amount: amountInPaise,
      currency: "INR",
      name: "RAS Academy",
      description: planName,
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=ras-academy",
      order_id: orderId || undefined,
      prefill: {
        name: currentUser.displayName || "",
        email: currentUser.email || "",
        contact: "9999999999",
        method: "upi"
      },
      handler: async function (response) {
        try {
          if (isSandbox) {
            await upgradeSubscription(plan, response);
          } else if (apiUrl) {
            const idToken = await currentUser.getIdToken();
            const res = await fetch(`${apiUrl}/api/verify-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${idToken}`
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                plan
              })
            });
            if (!res.ok) {
              const errData = await res.json().catch(() => ({}));
              throw new Error(errData.error || `HTTP error ${res.status}`);
            }
          } else if (functions) {
            const verifyPaymentCallable = httpsCallable(functions, 'verifyPayment');
            await verifyPaymentCallable({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              plan
            });
          }
          
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
          });

          if (onSuccess) {
            onSuccess(response);
          }
        } catch (error) {
          console.error("Payment verification failed:", error);
          alert("भुगतान सत्यापन विफल रहा। / Payment verification failed: " + (error.message || error));
        } finally {
          setLoading(false);
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
