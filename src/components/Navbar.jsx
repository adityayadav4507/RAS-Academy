import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogIn, LogOut, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const { currentUser, subscriptionStatus, planType, isSandbox, loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Brand Logo */}
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
        color: 'inherit'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #d97706 100%)',
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
        }}>
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            RAS <span className="text-gold-gradient">ACADEMY</span>
          </span>
        </div>
      </Link>

      {/* Nav Links & User Actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        {/* Sandbox Indicator */}
        {isSandbox && (
          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#f59e0b',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <ShieldCheck className="w-3.5 h-3.5" />
            सैंडबॉक्स मोड / Sandbox
          </div>
        )}

        {currentUser && (
          <Link 
            to="/dashboard" 
            style={{
              color: location.pathname === '/dashboard' ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'color 0.2s'
            }}
          >
            डैशबोर्ड / Dashboard
          </Link>
        )}

        <Link 
          to="/billing" 
          style={{
            color: location.pathname === '/billing' ? 'hsl(var(--accent))' : 'hsl(var(--text-muted))',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            transition: 'color 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          {subscriptionStatus === 'premium' ? (
            <>
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>प्रिमियम सक्रिय / Premium Active</span>
            </>
          ) : (
            <span>कीमतें / Pricing</span>
          )}
        </Link>

        {currentUser ? (
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '0.5rem 0.8rem',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <img 
                src={currentUser.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.displayName}`} 
                alt="Profile" 
                style={{ width: '24px', height: '24px', borderRadius: '50%' }}
              />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{currentUser.displayName}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {dropdownOpen && (
              <div className="glass" style={{
                position: 'absolute',
                right: 0,
                marginTop: '0.5rem',
                width: '220px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  padding: '0.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: '0.25rem',
                  fontSize: '0.75rem',
                  color: 'hsl(var(--text-muted))'
                }}>
                  लॉगिन / Logged in as <br/>
                  <strong style={{ color: '#fff', wordBreak: 'break-all' }}>{currentUser.email}</strong>
                  <div style={{ marginTop: '0.5rem' }}>
                    {subscriptionStatus === 'premium' ? (
                      <span className="badge-premium">
                        {planType === 'monthly' ? "मंथली पास / Monthly Pass" : "लाइफटाइम पास / Lifetime Pass"}
                      </span>
                    ) : (
                      <span className="badge-free">मुफ़्त खाता / Free User</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    padding: '0.5rem',
                    textAlign: 'left',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    width: '100%',
                    transition: 'background 0.2s'
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  लॉगआउट / Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '0.6rem 1.2rem',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
            }}
          >
            <LogIn className="w-4 h-4" />
            गूगल से लॉगिन / Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
