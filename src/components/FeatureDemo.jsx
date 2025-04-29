import { useState } from 'react';
import PhotoAnalysisDemo from './features/PhotoAnalysisDemo';
import DiseaseDectionDemo from './features/DiseaseDectionDemo';
import SmsDemo from './features/SmsDemo';

function FeatureDemo() {
  const [activeTab, setActiveTab] = useState('photo');

  const renderActiveDemo = () => {
    switch(activeTab) {
      case 'photo':
        return <PhotoAnalysisDemo />;
      case 'disease':
        return <DiseaseDectionDemo />;
      case 'sms':
        return <SmsDemo />;
      default:
        return <PhotoAnalysisDemo />;
    }
  };

  return (
    <div className="feature-demo-container">
      <div className="text-center mb-lg">
        <h2 className="mb-sm">AgriAssist Interactive Features</h2>
        <p className="mx-auto" style={{ maxWidth: '700px' }}>
          Experience how our AI-powered tools help farmers address crop challenges in real-time
        </p>
      </div>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'photo' ? 'active' : ''}`}
          onClick={() => setActiveTab('photo')}
        >
          Photo Analysis
        </button>
        <button 
          className={`tab ${activeTab === 'disease' ? 'active' : ''}`}
          onClick={() => setActiveTab('disease')}
        >
          Disease Detection
        </button>
        <button 
          className={`tab ${activeTab === 'sms' ? 'active' : ''}`}
          onClick={() => setActiveTab('sms')}
        >
          SMS Notifications
        </button>
      </div>
      
      <div className="active-demo">
        {renderActiveDemo()}
      </div>

      <div className="mt-xl py-lg px-lg" style={{ backgroundColor: '#f8f8f8', borderRadius: 'var(--radius-md)' }}>
        <div className="text-center">
          <h3 className="mb-md">Why These Features Matter</h3>
          <p className="mx-auto" style={{ maxWidth: '800px' }}>
            These capabilities form an integrated system that empowers farmers to act quickly and effectively
            when facing crop challenges. By combining image analysis, disease identification, and offline accessibility,
            AgriAssist brings AI solutions to farmers regardless of connectivity or technical expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureDemo;