import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <div className="section-container">
        <h2 className="section-title">Our Sponsors</h2>
        
        {/* All Sponsors */}
        <div className="all-sponsors-container">
          {/* Platform Sponsor */}
          <div className="sponsor-category">
            <h3 className="sponsor-category-title">Platform Sponsor</h3>
            <div className="sponsor-logos">
              <motion.div 
                className="logo-container glass-effect"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/devfolio.png" alt="Devfolio" className="sponsor-logo" />
              </motion.div>
            </div>
          </div>
          
          {/* Silver Sponsors */}
          <div className="sponsor-category">
            <h3 className="sponsor-category-title">Silver Sponsors</h3>
            <div className="sponsor-logos">
              <motion.div 
                className="logo-container glass-effect"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/ethindia-dark.png" alt="ETHIndia" className="sponsor-logo" />
              </motion.div>
            </div>
          </div>
          
          {/* Bronze Sponsors */}
          <div className="sponsor-category">
            <h3 className="sponsor-category-title">Bronze Sponsors</h3>
            <div className="sponsor-logos">
              <motion.div 
                className="logo-container glass-effect"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="placeholder-logo">Coming Soon</div>
              </motion.div>
              <motion.div 
                className="logo-container glass-effect"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="placeholder-logo">Coming Soon</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 