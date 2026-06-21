import React from 'react';
import { useAuth } from '../context/AuthContext';
import { RazorpayButton } from '../components/RazorpayButton';
import { ShieldCheck, Award, BookOpen, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Billing = () => {
  const { currentUser, subscriptionStatus, planType } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '4rem 2rem 6rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3.5rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>सदस्यता एवं कीमतें / Pricing</h1>
        <p style={{ color: 'hsl(var(--text-muted))' }}>
          RAS की संपूर्ण तैयारी के लिए अपना प्लान चुनें। / Unlock the complete RAS preps.
        </p>
      </div>

      {/* Current Subscription Status */}
      <section className="glass" style={{
        borderRadius: '20px',
        padding: '2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>आपका सक्रिय प्लान / Your Active Plan</h3>
        
        {subscriptionStatus === 'premium' ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--success))', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                <Award className="w-6 h-6" />
                <span>
                  {planType === 'monthly' ? "मंथली पास सक्रिय (₹9/Month)" : "लाइफटाइम पास सक्रिय (₹499 Lifetime)"}
                </span>
              </div>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem', lineHeight: 1.5 }}>
                बधाई हो! आपकी प्रीमियम मेंबरशिप सक्रिय है। आप सभी विषय, अध्याय, प्रोग्रेस ट्रैकर और स्टडी नोट्स एक्सेस कर सकते हैं।
              </p>
            </div>
            
            <button 
              onClick={() => navigate('/dashboard')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)'
              }}
            >
              पढ़ाई शुरू करें (Dashboard)
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--text-muted))', fontWeight: 700, fontSize: '1.1rem' }}>
              <BookOpen className="w-5 h-5" />
              <span>मुफ़्त ट्रायल प्लान / Free Trial Plan</span>
            </div>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem', lineHeight: 1.5 }}>
              आप अभी मुफ़्त प्लान पर हैं। आपको प्रत्येक 5 प्रीमियम विषयों के बाद केवल 1 विषय ही ट्रायल के लिए मिलेगा। पूर्ण सिलेबस एक्सेस करने के लिए नीचे से अपग्रेड करें।
            </p>
          </div>
        )}
      </section>

      {/* Upgrading plans (only visible if not premium or to switch) */}
      {subscriptionStatus !== 'premium' && (
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Plan 1: Monthly */}
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>मंथली पास / Monthly</h3>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.8rem', marginBottom: '1.5rem' }}>सभी प्रिमियम विषयों का मासिक पास</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem' }}>₹9<span style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}> / महीना</span></div>
            </div>
            <RazorpayButton className="w-full" plan="monthly" amount={9} onSuccess={() => window.location.reload()} />
          </div>

          {/* Plan 2: Lifetime */}
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>लाइफटाइम पास / Lifetime</h3>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.8rem', marginBottom: '1.5rem' }}>सदा के लिए वन-टाइम भुगतान</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '2rem' }}>₹499<span style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}> / एक बार</span></div>
            </div>
            <RazorpayButton className="w-full" plan="lifetime" amount={499} onSuccess={() => window.location.reload()} />
          </div>
        </section>
      )}

      {/* Comparison table */}
      <section className="glass" style={{ borderRadius: '20px', padding: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>फीचर्स तुलना / Features Comparison</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <th style={{ padding: '1rem 0.5rem', color: 'white' }}>फीचर्स / Features</th>
              <th style={{ padding: '1rem 0.5rem', color: 'hsl(var(--text-muted))', width: '150px' }}>मुफ़्त / Free</th>
              <th style={{ padding: '1rem 0.5rem', color: 'hsl(var(--accent))', width: '150px' }}>प्रीमियम / Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <td style={{ padding: '1rem 0.5rem', color: 'white' }}>मुफ़्त विषय (जैसे- राजस्थान इतिहास, विज्ञान टेक)</td>
              <td style={{ padding: '1rem 0.5rem', color: 'hsl(var(--success))' }}>✔ उपलब्ध / Free</td>
              <td style={{ padding: '1rem 0.5rem', color: 'hsl(var(--success))' }}>✔ उपलब्ध / Unlocked</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <td style={{ padding: '1rem 0.5rem', color: 'white' }}>प्रीमियम विषय (जैसे- भारतीय इतिहास, अर्थशास्त्र)</td>
              <td style={{ padding: '1rem 0.5rem', color: '#ef4444' }}>❌ बंद / Locked</td>
              <td style={{ padding: '1rem 0.5rem', color: 'hsl(var(--success))' }}>✔ अनलॉक / Unlocked</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <td style={{ padding: '1rem 0.5rem', color: 'white' }}>डिजिटल स्टडी नोट्स सेविंग</td>
              <td style={{ padding: '1rem 0.5rem', color: '#ef4444' }}>❌ बंद / Locked</td>
              <td style={{ padding: '1rem 0.5rem', color: 'hsl(var(--success))' }}>✔ असीमित / Unlimited</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <td style={{ padding: '1rem 0.5rem', color: 'white' }}>सिलेबस पूर्णता ट्रैकर ग्राफ</td>
              <td style={{ padding: '1rem 0.5rem', color: '#ef4444' }}>❌ बंद / Locked</td>
              <td style={{ padding: '1rem 0.5rem', color: 'hsl(var(--success))' }}>✔ सक्रिय / Active</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.25rem',
        fontSize: '0.8rem',
        color: 'hsl(var(--text-muted))',
        marginTop: '-1.5rem'
      }}>
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        UPI, कार्ड और नेटबैंकिंग द्वारा सुरक्षित भुगतान सुविधा (Razorpay)
      </div>
    </div>
  );
};
export default Billing;
