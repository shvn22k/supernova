import React, { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug, theme = "light" }) => {
  // NOTE: The SDK script is already loaded in index.html
  // This useEffect is a fallback in case it wasn't loaded
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  // Return the button element exactly as specified in the documentation
  return (
    <div 
      className="apply-button" 
      data-hackathon-slug={hackathonSlug} 
      data-button-theme={theme}
      style={{ height: '44px', width: '312px' }}
    />
  );
};

export default DevfolioButton; 