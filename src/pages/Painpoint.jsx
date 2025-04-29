import { useEffect, useState } from 'react';

function Painpoint() {
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
        <h2>The Challenge</h2>
        <p style={{ fontSize: '20px' }}>
          When climate disasters strike, bureaucracy slows response
        </p>
      </div>

      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
        <div className={`col ${isVisible ? 'fade-in' : ''}`} style={{ flex: '1 1 400px' }}>
          <div className="image-container">
            <div style={{ 
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(./damage.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '1px 1px 3px black'
            }}>
            </div>
          </div>
        </div>

        <div className={`col ${isVisible ? 'slide-up' : ''}`} style={{ flex: '1 1 400px' }}>
          <div className="challenge-points" style={{ color: 'white' }}>
            <div className="challenge-point" style={{ marginBottom: '2rem' }}>
              <h3>Bureaucratic Delays</h3>
              <p>Solutions exist — but decisions move through layers of authority.</p>
            </div>
            
            <div className="challenge-point" style={{ marginBottom: '2rem' }}>
              <h3>Time Is Critical</h3>
              <p>Weeks pass. Fields turn to dust.</p>
            </div>
            
            <div className="challenge-point">
              <h3>Economic Impact</h3>
              <p>Harvests are lost. Incomes vanish. Families struggle.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="#solution" className="btn btn-white">Discover the Solution</a>
      </div>
    </div>
  );
}

export default Painpoint;