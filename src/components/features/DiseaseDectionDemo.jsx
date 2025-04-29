import { useState } from 'react';

function DiseaseDectionDemo() {
  const [activeDisease, setActiveDisease] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  
  const diseases = [
    {
      id: 'blast',
      name: 'Rice Blast',
      description: 'A fungal disease that affects leaves, stems, and panicles, causing characteristic spindle-shaped lesions.',
      severity: 'High',
      spreadRate: 'Rapid - can affect entire fields within days if untreated',
      image: 'https://images.unsplash.com/photo-1595870883948-90a871a84c9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 'blight',
      name: 'Bacterial Leaf Blight',
      description: 'Bacterial disease causing yellow to white lesions along leaf edges that eventually cover the entire leaf.',
      severity: 'Moderate to High',
      spreadRate: 'Moderate - spreads through irrigation water and infected seeds',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 'tungro',
      name: 'Rice Tungro',
      description: 'Viral disease causing stunted growth, yellow or orange discoloration, and reduced yield.',
      severity: 'High',
      spreadRate: 'Gradual - spreads through leafhoppers as vectors',
      image: 'https://images.unsplash.com/photo-1602928309809-7c1bef2df744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
  ];
  
  const handleDiseaseSelect = (id) => {
    setActiveDisease(id);
    setShowAlert(false);
  };
  
  const handleAlertSystem = () => {
    setShowAlert(true);
  };
  
  return (
    <div className="flex-col gap-lg">
      <div className="text-center mb-md">
        <h3>Disease Detection & Monitoring</h3>
        <p>Select a disease to view detection details and regional alerts</p>
      </div>
      
      <div className="card-grid">
        {diseases.map(disease => (
          <div 
            key={disease.id}
            className="feature-card"
            style={{
              cursor: 'pointer',
              border: activeDisease === disease.id ? '2px solid var(--green-primary)' : '1px solid #eee',
              transform: activeDisease === disease.id ? 'scale(1.02)' : 'scale(1)'
            }}
            onClick={() => handleDiseaseSelect(disease.id)}
          >
            <div style={{ 
              height: '140px', 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${disease.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--spacing-md)'
            }}>
              <h4 style={{ 
                color: 'white', 
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                margin: 0,
                padding: '0 var(--spacing-md)'
              }}>
                {disease.name}
              </h4>
            </div>
            <p className="mb-sm" style={{ fontSize: '15px' }}>
              {disease.description}
            </p>
            <div className="flex-row gap-md" style={{ fontSize: '14px', color: '#666' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>Severity:</span> {disease.severity}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Spread:</span> {disease.spreadRate.split(' ')[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {activeDisease && (
        <div className="mt-xl py-lg px-lg" style={{ 
          backgroundColor: 'var(--white)', 
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 5px 15px var(--shadow-light)'
        }}>
          <div className="text-left mb-lg">
            <h4 style={{ color: 'var(--green-primary)', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
              Regional Detection System
            </h4>
            <p>
              Our AI continuously monitors disease prevalence across the Mekong Delta by analyzing 
              farmers' submitted photos and environmental sensors.
            </p>
          </div>
          
          <div className="flex-row gap-lg" style={{ alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ 
                border: '1px solid #eee', 
                borderRadius: 'var(--radius-sm)', 
                padding: 'var(--spacing-md)',
                height: '300px',
                position: 'relative',
                backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=9.779349,105.6189045&zoom=8&size=400x300&maptype=terrain&markers=color:red|9.779349,105.6189045|9.679349,105.5189045|9.879349,105.7189045&key=YOUR_API_KEY')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  bottom: 'var(--spacing-md)', 
                  left: 'var(--spacing-md)',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  padding: 'var(--spacing-sm)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Disease Prevalence Map</div>
                  <div style={{ fontSize: '12px' }}>(Demo visualization only)</div>
                </div>
              </div>
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ fontSize: '18px', marginBottom: 'var(--spacing-sm)' }}>Detection Statistics</h4>
              <div className="mb-md" style={{ 
                backgroundColor: '#f8f8f8', 
                padding: 'var(--spacing-md)', 
                borderRadius: 'var(--radius-sm)' 
              }}>
                <div className="flex-row gap-sm mb-sm" style={{ justifyContent: 'space-between' }}>
                  <span>Current Cases:</span>
                  <span style={{ fontWeight: 'bold' }}>27 reports</span>
                </div>
                <div className="flex-row gap-sm mb-sm" style={{ justifyContent: 'space-between' }}>
                  <span>Affected Area:</span>
                  <span style={{ fontWeight: 'bold' }}>114 hectares</span>
                </div>
                <div className="flex-row gap-sm" style={{ justifyContent: 'space-between' }}>
                  <span>Risk Level:</span>
                  <span style={{ 
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#ec4646',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '12px'
                  }}>HIGH</span>
                </div>
              </div>
              
              {!showAlert && (
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={handleAlertSystem}
                >
                  Activate Regional Alert System
                </button>
              )}
              
              {showAlert && (
                <div style={{ 
                  backgroundColor: '#fef9e6', 
                  border: '1px solid var(--yellow-primary)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-xs)' }}>
                    Alert Successfully Initiated
                  </div>
                  <p style={{ fontSize: '14px' }}>
                    SMS notifications sent to 43 registered farmers in the affected region.
                    Agricultural extension office has been notified.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiseaseDectionDemo;