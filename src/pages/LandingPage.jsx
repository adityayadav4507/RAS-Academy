import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Sparkles, CheckCircle, ShieldCheck, ChevronRight, GraduationCap, FileText, BarChart } from 'lucide-react';
import { RazorpayButton } from '../components/RazorpayButton';

export const LandingPage = () => {
  const { currentUser, subscriptionStatus, planType, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleStartLearning = async () => {
    if (currentUser) {
      navigate('/dashboard');
    } else {
      try {
        await loginWithGoogle();
        navigate('/dashboard');
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="animate-glow" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(217, 119, 6, 0.1)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          borderRadius: '9999px',
          padding: '0.4rem 1rem',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#f59e0b',
          marginBottom: '2rem'
        }}>
          <Sparkles className="w-4 h-4" />
          RAS अभ्यर्थियों के लिए सबसे बेहतरीन कोर्स / Best Curation for RAS Aspirants
        </div>

        <h1 style={{
          fontSize: '3.2rem',
          lineHeight: 1.15,
          maxWidth: '900px',
          margin: '0 auto 1.5rem',
        }}>
          व्यवस्थित वीडियो लेक्चर्स से <br />
          <span className="text-royal-gradient">RAS प्रीलिम्स & मेन्स (Prelims & Mains)</span> दोनों की पूर्ण तैयारी करें
        </h1>

        <p style={{
          color: 'hsl(var(--text-muted))',
          fontSize: '1.15rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          यूट्यूब पर सही वीडियो ढूंढने में समय बर्बाद न करें। यहाँ RAS प्रीलिम्स और मेन्स दोनों के सम्पूर्ण सिलेबस के अनुसार व्यवस्थित टॉपिक-वाइज़ लेक्चर्स प्राप्त करें।
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handleStartLearning}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 700,
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)',
              transition: 'transform 0.2s'
            }}
          >
            <span>मुफ़्त पढ़ाई शुरू करें / Start Free</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <a
            href="#pricing"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background 0.2s'
            }}
          >
            फीस योजनाएं / View Fees Plans
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        maxWidth: '1000px',
        margin: '0 auto 4rem',
        padding: '0 2rem'
      }}>
        <div className="glass" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          padding: '2.5rem',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'hsl(var(--accent))' }}>100%</h3>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', marginTop: '0.25rem' }}>संपूर्ण सिलेबस कवरेज / Syllabus Cover</p>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <h3 style={{ fontSize: '2rem', color: '#60a5fa' }}>200+</h3>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', marginTop: '0.25rem' }}>चुनिंदा वीडियो क्लासेस / Video Lectures</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: 'hsl(var(--success))' }}>1-क्लिक</h3>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', marginTop: '0.25rem' }}>प्रोग्रेस ट्रैकर & पर्सनल नोट्स / Track Progress</p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 5rem',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2.25rem',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          तैयारी के लिए <span className="text-gold-gradient">RAS Academy</span> क्यों चुनें?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div className="glass-interactive" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{
              background: 'rgba(37, 99, 235, 0.1)',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <GraduationCap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>सिलेबस अनुसार वर्गीकरण</h3>
            <p style={{ color: 'hsl(var(--text-muted))', lineHeight: 1.5, fontSize: '0.9rem' }}>
              हम चुनिंदा यूट्यूब वीडियो को व्यवस्थित करते हैं। सर्च में समय बर्बाद किए बिना सटीक तैयारी करें।
            </p>
          </div>

          <div className="glass-interactive" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{
              background: 'rgba(217, 119, 6, 0.1)',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <FileText className="w-6 h-6 text-amber-500" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>पर्सनल नोट्स एडिटर</h3>
            <p style={{ color: 'hsl(var(--text-muted))', lineHeight: 1.5, fontSize: '0.9rem' }}>
              वीडियो देखते-देखते नीचे अपने नोट्स लिखें और सेव करें। आपका पर्सनल रिवीजन डाटा यहीं सुरक्षित रहेगा।
            </p>
          </div>

          <div className="glass-interactive" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <BarChart className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>प्रोग्रेस ट्रैकर</h3>
            <p style={{ color: 'hsl(var(--text-muted))', lineHeight: 1.5, fontSize: '0.9rem' }}>
              पढ़े गए टॉपिक्स को टिक-मार्क करें और प्रतिशत में देखें कि सिलेबस कितना पूरा हुआ।
            </p>
          </div>
        </div>
      </section>

      {/* Dual Pricing Section */}
      <section id="pricing" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2.25rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          हमारी फीस योजनाएं / <span className="text-gold-gradient">Pricing Plans</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'hsl(var(--text-muted))',
          marginBottom: '3rem'
        }}>
          UPI (Google Pay, PhonePe, Paytm, QR) द्वारा सुरक्षित भुगतान सुविधा उपलब्ध।
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Card 1: Monthly Plan */}
          <div className="glass" style={{
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'between',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.4)',
            position: 'relative'
          }}>
            <div>
              <span style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#3b82f6',
                fontWeight: 700,
                fontSize: '0.75rem',
                padding: '0.35rem 0.8rem',
                borderRadius: '9999px',
                textTransform: 'uppercase'
              }}>
                मंथली प्लान / Monthly
              </span>

              <h3 style={{ fontSize: '1.75rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>मंथली मेंबरशिप</h3>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem' }}>सस्ता एवं सरल सदस्यता प्लान</p>

              <div style={{ margin: '2rem 0' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>₹9</span>
                <span style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem' }}> / महीना (per month)</span>
              </div>

              <ul style={{
                listStyle: 'none',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.9rem',
                marginBottom: '2.5rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-blue-500" />
                  <span>30 दिनों के लिए सभी विषय अनलॉक</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-blue-500" />
                  <span>पर्सनल डिजिटल स्टडी नोट्स</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-blue-500" />
                  <span>सिलेबस प्रोग्रेस ट्रैकर सक्रिय</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 'auto' }}>
              {subscriptionStatus === 'premium' ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                >
                  डैशबोर्ड पर जाएं / Go to Dashboard
                </button>
              ) : (
                <RazorpayButton 
                  className="w-full" 
                  plan="monthly"
                  amount={9}
                  onSuccess={() => navigate('/dashboard')}
                />
              )}
            </div>
          </div>

          {/* Card 2: Lifetime Plan */}
          <div className="glass" style={{
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'between',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 15px 35px -10px rgba(0,0,0,0.5)',
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.06) 0%, transparent 60%)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  textTransform: 'uppercase'
                }}>
                  लाइफटाइम पास / Lifetime
                </span>
                <span style={{ fontSize: '0.7rem', color: 'hsl(var(--accent))', fontWeight: 700 }}>लोकप्रिय / POPULAR</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>लाइफटाइम एक्सेस</h3>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem' }}>बिना किसी बार-बार भुगतान के एक बार फीस</p>

              <div style={{ margin: '2rem 0' }}>
                <span style={{ fontSize: '1.25rem', textDecoration: 'line-through', color: 'hsl(var(--text-muted))', marginRight: '0.5rem' }}>₹1,999</span>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'white' }}>₹499</span>
                <span style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem' }}> / एक बार (one-time)</span>
              </div>

              <ul style={{
                listStyle: 'none',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.9rem',
                marginBottom: '2.5rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-amber-500" />
                  <span>हमेशा के लिए सभी विषय अनलॉक</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-amber-500" />
                  <span>असीमित स्टडी नोट्स स्टोरेज</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle className="w-4.5 h-4.5 text-amber-500" />
                  <span>लाइफटाइम सिलेबस ट्रैकर अपडेट्स</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 'auto' }}>
              {subscriptionStatus === 'premium' ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                >
                  डैशबोर्ड पर जाएं / Go to Dashboard
                </button>
              ) : (
                <RazorpayButton 
                  className="w-full" 
                  plan="lifetime"
                  amount={499}
                  onSuccess={() => navigate('/dashboard')}
                />
              )}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.25rem',
          fontSize: '0.8rem',
          color: 'hsl(var(--text-muted))'
        }}>
          <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
          UPI एवं डेबिट कार्ड द्वारा सुरक्षित Razorpay गेटवे (Test Mode)
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
