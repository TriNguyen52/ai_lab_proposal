import { useEffect, useState } from 'react';

function Introduction() {
  const [isVisible, setIsVisible] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Get the height of the navbar to offset content
    const navbar = document.querySelector('.nav-container');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section-content" style={{ 
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./delta.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      width: '100vw',
      height: '100vh',
      maxWidth: '100%',
      margin: 0,
      padding: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: navHeight + 'px' // Add padding for the navbar height
    }}>
      <div className="rice-pattern"></div>
      <div className="decorative-plant decorative-plant-left"></div>
      
      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`} style={{ 
        zIndex: 2, 
        color: 'white',
        textShadow: '1px 1px 3px black',
        padding: '2rem',
        marginTop: '6rem' 
      }}>
        <p className="subtitle" style={{ fontSize: '24px', fontStyle: 'italic' }}>
          Empowering Farmers in the Mekong Delta Through AI
        </p>
      </div>

      <div className={`content-container ${isVisible ? 'fade-in' : ''}`} style={{
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        textShadow: '1px 1px 3px black',
        margin: '3rem 0',
        padding: '0 2rem'
      }}>
        <p style={{ fontSize: '24px', maxWidth: '80%', textAlign: 'center', margin: '0 auto' }}>
          "In the Mekong Delta, rice fields are the lifeblood of families..."
        </p>
        <p style={{ fontSize: '24px', maxWidth: '80%', textAlign: 'center', margin: '20px auto 0' }}>
          "But when disaster strikes, help arrives too late."
        </p>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ textAlign: 'center', zIndex: 2, margin: '2rem' }}>
        <a href="#painpoint" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
}

export default Introduction;