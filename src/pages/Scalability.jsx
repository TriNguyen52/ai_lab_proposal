import { useEffect, useState } from 'react';

function Scalability() {
  const [isVisible, setIsVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // World map animation zoom effect
    let currentZoom = 0;
    const zoomInterval = setInterval(() => {
      if (currentZoom < 2) {
        currentZoom += 1;
        setZoomLevel(currentZoom);
      } else {
        clearInterval(zoomInterval);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(zoomInterval);
    };
  }, []);

  // Define regions to highlight at each zoom level
  const getMapContent = () => {
    switch (zoomLevel) {
      case 0:
        return (
          <div style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'Playfair Display, serif' }}>Vietnam</div>
            <div style={{ fontSize: '1.2rem', marginTop: '15px' }}>Mekong Delta Focus</div>
          </div>
        );
      case 1:
        return (
          <div style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'Playfair Display, serif' }}>ASEAN Region</div>
            <div style={{ fontSize: '1.2rem', marginTop: '15px' }}>Regional Expansion</div>
          </div>
        );
      case 2:
      default:
        return (
          <div style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'Playfair Display, serif' }}>Global Impact</div>
            <div style={{ fontSize: '1.2rem', marginTop: '15px' }}>Rice-growing nations worldwide</div>
          </div>
        );
    }
  };

  return (
    <div className="section-content">
      <div className="rice-pattern"></div>
      
      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`}>
        <h2>Global Scalability</h2>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
          From the Mekong Delta to the world
        </p>
      </div>

      <div className="world-map-container" style={{ margin: '3rem auto', position: 'relative' }}>
        <div className={`image-container ${isVisible ? 'fade-in' : ''}`} style={{ maxWidth: '800px', position: 'relative' }}>
          <div style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), 
                             url(https://images.unsplash.com/photo-1589519160732-57fc6a9105f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--brown-primary)'
          }}>
            {/* Visual effect representing regions */}
            <div style={{ 
              position: 'absolute', 
              top: '40%',
              left: '70%',
              width: '100px', 
              height: '100px', 
              backgroundColor: 'rgba(76,175,80,0.4)',
              borderRadius: '50%',
              transition: 'all 2s ease-in-out',
              transform: `scale(${1 + zoomLevel * 1.5})`,
              opacity: 0.7,
              border: '2px solid rgba(76,175,80,0.6)'
            }}></div>
            
            <div style={{ 
              position: 'relative', 
              zIndex: 2, 
              backgroundColor: 'rgba(255,255,255,0.9)', 
              padding: '20px 40px',
              borderRadius: '15px',
              transition: 'all 0.5s ease',
              boxShadow: '0 5px 20px var(--shadow-light)'
            }}>
              {getMapContent()}
            </div>
          </div>
        </div>

        {/* Expansion indicators */}
        <div className={`expansion-indicators ${isVisible && zoomLevel >= 1 ? 'fade-in' : 'opacity-0'}`} style={{ 
          position: 'absolute', 
          top: '10%', 
          right: '10%', 
          opacity: isVisible && zoomLevel >= 1 ? 1 : 0,
          transition: 'opacity 1s ease'
        }}>
          <div style={{ 
            backgroundColor: 'var(--green-primary)', 
            color: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 5px 15px var(--shadow-light)'
          }}>
            +5M
          </div>
        </div>

        <div className={`expansion-indicators ${isVisible && zoomLevel >= 2 ? 'fade-in' : 'opacity-0'}`} style={{ 
          position: 'absolute', 
          bottom: '20%', 
          left: '10%',
          opacity: isVisible && zoomLevel >= 2 ? 1 : 0,
          transition: 'opacity 1s ease'
        }}>
          <div style={{ 
            backgroundColor: 'var(--yellow-primary)', 
            color: 'var(--text-dark)',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 5px 15px var(--shadow-light)',
            fontWeight: 'bold'
          }}>
            +15M
          </div>
        </div>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ maxWidth: '900px', margin: '3rem auto' }}>
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '2rem',
          boxShadow: '0 5px 15px var(--shadow-light)'
        }}>
          <h3>Key Scalability Features</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1.5rem' }}>
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--green-primary)', borderBottom: '1px solid var(--beige-light)', paddingBottom: '0.5rem' }}>
                Adaptable Infrastructure
              </h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Language localization for multiple regions</li>
                <li>Cultural adaptations for farming practices</li>
                <li>Region-specific crop disease databases</li>
                <li>Weather pattern integration for different climates</li>
              </ul>
            </div>
            
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--green-primary)', borderBottom: '1px solid var(--beige-light)', paddingBottom: '0.5rem' }}>
                Implementation Strategy
              </h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Partnership with local agricultural ministries</li>
                <li>Training program for regional data collectors</li>
                <li>API integration with existing farm management systems</li>
                <li>Telecommunication partnerships for SMS functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`}>
        <p style={{ fontSize: '22px' }}>
          <span className="highlight">AgriAssist:</span> Empowering farmers across rice-growing nations.
        </p>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="#action" className="btn btn-primary">Join The Mission</a>
      </div>
    </div>
  );
}

export default Scalability;