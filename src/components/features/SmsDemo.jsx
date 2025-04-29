import { useState } from 'react';

function SmsDemo() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const smsExamples = [
    {
      id: 'help',
      message: 'HELP RICE',
      response: [
        'Welcome to AgriAssist SMS! Available commands:',
        'RICE [issue] - Get rice crop advice',
        'WEATHER - Get 3-day forecast',
        'MARKET - Get current rice prices',
        'ALERT [location] - Report a disease outbreak'
      ]
    },
    {
      id: 'issue',
      message: 'RICE yellow spots leaves',
      response: [
        'Your rice may have Bacterial Leaf Blight.',
        '1. Apply copper-based bactericide',
        '2. Improve field drainage',
        '3. Remove infected plants',
        'Reply EXPERT for local specialist contact'
      ]
    },
    {
      id: 'weather',
      message: 'WEATHER',
      response: [
        'Mekong Delta 3-day forecast:',
        'Today: Sunny, 32°C, 75% humidity',
        'Tomorrow: Scattered rain, 30°C',
        'Day after: Heavy rain, 29°C',
        'Warning: Heavy rainfall may affect irrigation'
      ]
    }
  ];

  const handleExampleSelect = (id) => {
    setSelectedExample(id);
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="flex-col gap-lg">
      <div className="text-center mb-md">
        <h3>SMS Accessibility</h3>
        <p>AgriAssist works even without smartphones or internet connection</p>
      </div>

      <div className="flex-row gap-lg" style={{ flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 350px' }}>
          <div style={{ 
            backgroundColor: '#f8f8f8', 
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-lg)',
            height: '100%'
          }}>
            <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: 'var(--spacing-md)' }}>
              SMS Commands
            </h4>
            <p className="mb-md">
              Select an example SMS command to see how farmers can access AgriAssist features via basic text messages:
            </p>
            
            <div className="flex-col gap-sm">
              {smsExamples.map(example => (
                <div 
                  key={example.id}
                  className="flex-row gap-sm"
                  style={{ 
                    padding: 'var(--spacing-sm)',
                    backgroundColor: selectedExample === example.id ? 'var(--yellow-primary)' : 'white',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    border: '1px solid #eee',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => handleExampleSelect(example.id)}
                >
                  <div style={{ width: '24px', height: '24px' }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#4CAF50" fillOpacity="0.2" stroke="#4CAF50" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{example.message}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{example.id === 'help' ? 'Help command' : example.id === 'issue' ? 'Disease inquiry' : 'Weather forecast'}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {!isConnected && (
              <div className="text-center mt-lg">
                <button 
                  className="btn btn-primary" 
                  onClick={handleConnect}
                >
                  Connect to SMS Gateway
                </button>
              </div>
            )}
            
            {isConnected && (
              <div className="mt-lg py-md px-md" style={{ 
                backgroundColor: '#e8f5e9', 
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--green-primary)',
                textAlign: 'center',
                fontSize: '14px'
              }}>
                Connected to SMS Gateway
                <div style={{ fontSize: '12px', marginTop: '4px' }}>
                  43 farmers connected in Mekong Delta region
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div style={{ flex: '1 1 350px' }}>
          <div style={{ height: '100%' }}>
            {selectedExample ? (
              <div style={{ 
                borderRadius: 'var(--radius-md)',
                border: '1px solid #ddd',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  backgroundColor: '#075E54', 
                  color: 'white',
                  padding: 'var(--spacing-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    👩‍🌾
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>AgriAssist SMS</div>
                    <div style={{ fontSize: '12px' }}>+84 123-456-7890</div>
                  </div>
                </div>
                
                <div style={{ 
                  flex: 1,
                  backgroundColor: '#ECE5DD',
                  padding: 'var(--spacing-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-md)'
                }}>
                  <div style={{ 
                    alignSelf: 'flex-end',
                    backgroundColor: '#DCF8C6',
                    padding: 'var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    maxWidth: '80%',
                    position: 'relative'
                  }}>
                    {smsExamples.find(e => e.id === selectedExample).message}
                    <div style={{ fontSize: '10px', textAlign: 'right', color: '#666', marginTop: '4px' }}>
                      12:42 PM ✓✓
                    </div>
                  </div>
                  
                  <div style={{ 
                    alignSelf: 'flex-start',
                    backgroundColor: 'white',
                    padding: 'var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    maxWidth: '80%'
                  }}>
                    {smsExamples.find(e => e.id === selectedExample).response.map((line, i) => (
                      <div key={i} style={{ marginBottom: i < smsExamples.find(e => e.id === selectedExample).response.length - 1 ? '8px' : 0 }}>
                        {line}
                      </div>
                    ))}
                    <div style={{ fontSize: '10px', textAlign: 'right', color: '#666', marginTop: '4px' }}>
                      12:43 PM
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  padding: 'var(--spacing-sm)',
                  borderTop: '1px solid #ddd',
                  backgroundColor: 'white',
                  display: 'flex',
                  gap: 'var(--spacing-sm)'
                }}>
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    style={{ 
                      flex: 1, 
                      padding: 'var(--spacing-sm)',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid #ddd'
                    }}
                    disabled
                  />
                  <button disabled style={{ 
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--green-primary)',
                    border: 'none',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    ➤
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f8f8f8',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)'
              }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#eee',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  📱
                </div>
                <p className="text-center">Select an SMS example to view the response</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-xl py-md px-md" style={{ 
        backgroundColor: 'var(--white)', 
        borderRadius: 'var(--radius-md)',
        border: '1px solid #eee'
      }}>
        <div className="flex-row gap-lg" style={{ flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ color: 'var(--green-primary)', marginBottom: 'var(--spacing-sm)' }}>Why SMS Matters</h4>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>Reaches 92% of farmers without smartphones</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>Works in areas with limited internet access</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>No app download or account setup required</li>
              <li>Minimal technical knowledge needed to use</li>
            </ul>
          </div>
          
          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ color: 'var(--green-primary)', marginBottom: 'var(--spacing-sm)' }}>Technical Implementation</h4>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>Natural language processing identifies farmer needs</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>Response system prioritizes critical information</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}>Integrated with telecom provider APIs in Vietnam</li>
              <li>Regional language support for diverse farmer communities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsDemo;