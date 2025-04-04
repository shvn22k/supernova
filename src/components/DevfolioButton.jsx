import { useEffect, useState } from 'react';

const DevfolioButton = ({ hackathonSlug = "supernova-hacks", theme = "light" }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Devfolio script loaded');
      setScriptLoaded(true);
      
      // Check if button becomes visible after script loads
      setTimeout(() => {
        const buttonElement = document.querySelector('.apply-button');
        if (buttonElement && buttonElement.children.length > 0) {
          setButtonVisible(true);
        } else {
          console.log('Devfolio button not visible after script load');
          setButtonVisible(false);
        }
      }, 1000);
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Style for the fallback button
  const fallbackButtonStyle = {
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
    margin: '2rem auto 0',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    border: 'none',
    transition: 'all 0.2s ease'
  };

  // Render official button placeholder with a fallback visible button
  return (
    <>
      <div 
        className="apply-button" 
        data-hackathon-slug={hackathonSlug}
        data-button-theme={theme}
        style={{ 
          height: 44, 
          width: 312, 
          margin: '2rem auto 0',
          display: buttonVisible ? 'block' : 'none' 
        }}
      ></div>
      
      {(!scriptLoaded || !buttonVisible) && (
        <a 
          href={`https://${hackathonSlug}.devfolio.co/`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={fallbackButtonStyle}>
            <span style={{ marginRight: '8px' }}>▶</span>
            Apply with Devfolio
          </button>
        </a>
      )}
    </>
  );
};

export default DevfolioButton; 