import React from 'react';

const DevfolioButton = () => {
  // Direct iframe implementation that loads immediately
  return (
    <div style={{ 
      margin: '2rem auto 0', 
      display: 'flex', 
      justifyContent: 'center', 
      position: 'relative', 
      zIndex: 10 
    }}>
      {/* Official Devfolio button iframe */}
      <iframe 
        src="https://apply.devfolio.co/v2/button?hackathonSlug=supernova-hacks&buttonTheme=light" 
        title="Apply with Devfolio" 
        sandbox="allow-scripts allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation" 
        style={{
          padding: '0px', 
          border: '0px', 
          margin: '0px', 
          height: '44px', 
          width: '320px'
        }}
      ></iframe>
      
      {/* Placeholder button - commented out as requested
      <a 
        href="https://supernova-hacks.devfolio.co/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          display: 'none',
          textDecoration: 'none' 
        }}
      >
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3770FF',
          color: 'white',
          fontWeight: 600,
          height: '44px',
          width: '312px',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          border: 'none'
        }}>
          <span style={{ marginRight: '8px' }}>▶</span>
          Apply with Devfolio
        </button>
      </a>
      */}
    </div>
  );
};

export default DevfolioButton; 