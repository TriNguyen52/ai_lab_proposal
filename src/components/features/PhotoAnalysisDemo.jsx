import { useState } from 'react';

function PhotoAnalysisDemo() {
  const [analysisState, setAnalysisState] = useState('initial'); // initial, uploading, analyzing, complete
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
    // Simulate upload
    setAnalysisState('uploading');
    
    setTimeout(() => {
      setAnalysisState('analyzing');
      
      // Simulate analysis completion
      setTimeout(() => {
        setAnalysisState('complete');
        // In a real app, this would be set from the server response
        setUploadedImage('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
      }, 2000);
    }, 1500);
  };

  const renderContent = () => {
    switch(analysisState) {
      case 'uploading':
        return <div className="analysis-status">Uploading image...</div>;
      case 'analyzing':
        return <div className="analysis-status">Analyzing crop health...</div>;
      case 'complete':
        return (
          <div className="analysis-result">
            <div className="result-image">
              <img src={uploadedImage} alt="Uploaded crop" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div className="result-details" style={{ marginTop: '1rem', textAlign: 'left' }}>
              <h4>Analysis Results:</h4>
              <ul>
                <li>Detected disease: Bacterial Leaf Blight</li>
                <li>Confidence: High (93%)</li>
                <li>Affected area: 25% of crop</li>
                <li>Recommended treatment: Apply copper-based bactericide</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
                View Detailed Action Plan
              </button>
            </div>
          </div>
        );
      case 'initial':
      default:
        return (
          <div className="upload-container">
            <div className="upload-area" style={{ 
              border: '2px dashed #4a9d3c',
              borderRadius: '10px',
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: 'rgba(74, 157, 60, 0.05)'
            }}>
              <p>Take or upload a photo of your crops</p>
              <button 
                className="btn btn-primary"
                onClick={handleImageUpload}
              >
                Upload Image
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="photo-analysis-demo">
      <h3>Photo-Based Disease Detection</h3>
      <p style={{ marginBottom: '1.5rem' }}>
        Farmers can take pictures of unhealthy crops to get instant analysis and treatment recommendations.
      </p>
      <div className="demo-container" style={{ 
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '1.5rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
      }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default PhotoAnalysisDemo;