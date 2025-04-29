import { useEffect, useState } from 'react';

function Solution() {
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
      <div className="decorative-plant decorative-plant-right"></div>
      
      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`}>
        <h2>The Solution</h2>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
          An AI assistant designed specifically for farmers in the Mekong Delta
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <div className={`${isVisible ? 'fade-in' : ''}`} style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: 'var(--white)', 
            padding: '20px', 
            borderRadius: '20px', 
            boxShadow: '0 10px 30px var(--shadow-dark)'
          }}>
            <div style={{ 
              border: '2px solid var(--yellow-primary)',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '400px',
                backgroundColor: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: 'var(--green-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '20px',
                  color: 'var(--white)',
                  fontSize: '2.5rem',
                  boxShadow: '0 5px 15px var(--shadow-light)'
                }}>
                  AI
                </div>
                <div style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  marginTop: '10px'
                }}>
                  AgriAssist
                </div>
                <div style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  color: 'var(--text-dark)',
                  fontSize: '1rem'
                }}>
                  Your AI farming companion
                </div>
                
                <div style={{
                  backgroundColor: 'var(--beige-light)',
                  borderRadius: '10px',
                  padding: '15px',
                  margin: '20px 0',
                  width: '85%',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ backgroundColor: 'var(--green-primary)', color: 'white', width: '25px', height: '25px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>✓</span>
                    <span>Real-time crop analysis</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ backgroundColor: 'var(--green-primary)', color: 'white', width: '25px', height: '25px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>✓</span>
                    <span>Disease detection</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ backgroundColor: 'var(--green-primary)', color: 'white', width: '25px', height: '25px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>✓</span>
                    <span>Offline support via SMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`} style={{ marginTop: '3rem' }}>
          <p style={{ fontSize: '24px' }}>
            <span className="highlight">Now, imagine a different future.</span>
          </p>
          <p style={{ fontSize: '24px' }}>
            A tool that empowers farmers to act immediately, without bureaucratic delays.
          </p>
        </div>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="#howitworks" className="btn btn-primary">See How It Works</a>
      </div>
    </div>
  );
}

export default Solution;