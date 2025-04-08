import React, { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug, theme }) => {
  // Load the SDK script dynamically as per Devfolio documentation
  useEffect(() => {
    // The script is already loaded in index.html, so we don't need to load it again
    // Just need to ensure the button is rendered correctly
  }, []);

  // Return the button element exactly as specified in the documentation
  return (
    <div 
      className="apply-button" 
      data-hackathon-slug={hackathonSlug} 
      data-button-theme={theme}
    />
  );
};

export default DevfolioButton; 