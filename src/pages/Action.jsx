import { useEffect, useState } from 'react';

function Action() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section-content">
      <div className="rice-pattern"></div>
      
      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`}>
        <h2 style={{ color: 'var(--text-light)', fontSize: '48px', marginBottom: '1.5rem' }}>Join the future of farming today</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '20px', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
          AgriAssist helps farmers respond to challenges in real-time, 
          providing personalized guidance when it matters most.
        </p>
      </div>

      <div className={`cta-cards ${isVisible ? 'fade-in' : ''}`} style={{ 
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '3rem',
        maxWidth: '1100px',
        margin: '2rem auto'
      }}>
        <div style={{
          flex: '1 1 300px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          padding: '2.5rem',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
          textAlign: 'center',
          color: 'var(--text-light)',
          backdrop: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 1.5rem auto',
            fontSize: '2.2rem'
          }}>
            🌱
          </div>
          <h3 style={{ color: 'var(--text-light)', fontFamily: 'Playfair Display, serif' }}>For Organizations</h3>
          <p style={{ fontSize: '18px', marginBottom: '2rem' }}>Partner with us to bring AgriAssist to your community. Empower local farmers with AI-driven solutions.</p>
          <button className="btn" style={{
            backgroundColor: 'var(--white)',
            color: 'var(--green-primary)',
            border: 'none',
            marginTop: '1rem'
          }}>
            Get Involved
          </button>
        </div>
        
        <div style={{
          flex: '1 1 300px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          padding: '2.5rem',
          borderRadius: '15px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
          textAlign: 'center',
          color: 'var(--text-light)',
          backdrop: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 1.5rem auto',
            fontSize: '2.2rem'
          }}>
            🔬
          </div>
          <h3 style={{ color: 'var(--text-light)', fontFamily: 'Playfair Display, serif' }}>For Researchers</h3>
          <p style={{ fontSize: '18px', marginBottom: '2rem' }}>See how our AI model integrates with regional data to provide timely, targeted interventions for farmers.</p>
          <button className="btn" style={{
            backgroundColor: 'var(--white)',
            color: 'var(--green-primary)',
            border: 'none',
            marginTop: '1rem'
          }}>
            Get Involved
          </button>
        </div>
      </div>

      <div className={`contact-info ${isVisible ? 'slide-up' : ''}`} style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Contact Information</h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '3rem', 
          marginTop: '1rem',
          color: 'var(--text-light)'
        }}>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</div>
            <div>tri.nguyen@uni.minerva.edu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Action;