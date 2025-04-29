import { useEffect, useState } from 'react';
import FeatureDemo from '../components/FeatureDemo';

function Howitworks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Cycle through steps automatically
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(stepInterval);
    };
  }, []);

  const steps = [
    {
      icon: '📷',
      title: 'Photo Analysis',
      description: 'Farmer takes a picture of sick crops using the app or SMS.'
    },
    {
      icon: '📚',
      title: 'Knowledge Matching',
      description: 'AI matches it with scholarly knowledge + live regional data.'
    },
    {
      icon: '📝',
      title: 'Immediate Guidance',
      description: 'Personalized step-by-step guidance appears for the farmer.'
    },
    {
      icon: '🚨',
      title: 'Alert System',
      description: 'If disease outbreak detected, automatic alerts escalate to authorities.'
    }
  ];

  return (
    <div className="section-content">
      <div className="rice-pattern"></div>
      
      <div className={`text-overlay ${isVisible ? 'slide-up' : ''}`}>
        <h2>How AgriAssist Works</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '20px' }}>
          The system matches farmers' crop conditions with relevant action plans and scholarly knowledge
        </p>
      </div>

      <div className={`step-container ${isVisible ? 'fade-in' : ''}`} style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem',
        margin: '3rem auto',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`step ${activeStep === index ? 'active' : ''}`}
            style={{
              flex: '1 1 220px',
              width: '220px',
              maxWidth: '220px',
              minHeight: '200px',
              transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
              boxShadow: activeStep === index ? '0 10px 30px rgba(74,157,60,0.2)' : '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '1.5rem 1rem'
            }}
            onClick={() => setActiveStep(index)}
          >
            <div className="step-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
            <div className="step-content">
              <div className="step-title" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem' }}>{step.title}</div>
              <div className="step-description" style={{ fontSize: '14px' }}>{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-overlay">
        <p className={`${isVisible ? 'fade-in' : ''}`} style={{ 
          fontWeight: 'bold', 
          fontSize: '22px',
          color: 'var(--green-primary)' 
        }}>
          Fast detection. Fast action. No more waiting.
        </p>
      </div>
      
      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ margin: '3rem auto' }}>
        <FeatureDemo />
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ marginTop: '4rem' }}>
        <h3>Additional Capabilities</h3>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          maxWidth: '1200px', 
          margin: '2rem auto' 
        }}>
          <div className="feature-card" style={{ 
            flex: '1 1 300px',
            maxWidth: '200px',
            maxHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'rgba(76, 175, 80, 0.1)', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              💧
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '1rem', height: '50px', display: 'flex', alignItems: 'center' }}>Predictive Resource Monitoring</h3>
            <p style={{ fontSize: '14px' }}>Models seasonal water availability and saltwater intrusion risk, providing early warnings.</p>
          </div>
          
          <div className="feature-card" style={{ 
            flex: '1 1 300px',
            maxWidth: '200px',
            maxHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'rgba(76, 175, 80, 0.1)', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              🌱
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '1rem', height: '50px', display: 'flex', alignItems: 'center' }}>Input Optimization</h3>
            <p style={{ fontSize: '14px' }}>Suggests efficient fertilizer and water use based on crop status and soil condition data.</p>
          </div>
          
          <div className="feature-card" style={{ 
            flex: '1 1 300px',
            maxWidth: '200px',
            maxHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'rgba(76, 175, 80, 0.1)', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              📱
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '1rem', height: '50px', display: 'flex', alignItems: 'center' }}>Multi-Channel Access</h3>
            <p style={{ fontSize: '14px' }}>Access basic functions via offline caching or SMS where internet connectivity is limited.</p>
          </div>
          
          <div className="feature-card" style={{ 
            flex: '1 1 300px',
            maxWidth: '200px',
            maxHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: 'rgba(76, 175, 80, 0.1)', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              📊
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '1rem', height: '50px', display: 'flex', alignItems: 'center' }}>Economic Impact Tracking</h3>
            <p style={{ fontSize: '14px' }}>Helps farmers optimize net income by reducing input costs and improving crop health.</p>
          </div>
        </div>
      </div>

      <div className={`${isVisible ? 'fade-in' : ''}`} style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="#scalability" className="btn btn-primary">See Global Impact</a>
      </div>
    </div>
  );
}

export default Howitworks;