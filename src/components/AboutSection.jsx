import { motion } from 'framer-motion';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-container glass-effect">
        <div className="about-content">
          <motion.div 
            className="about-icon-container"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaInfoCircle className="about-icon" style={{ color: '#ffffff' }} />
          </motion.div>
          
          <motion.div
            className="about-text-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in vestibulum tortor, vitae venenatis lectus. Praesent gravida dapibus neque sit amet molestie. Morbi blandit eu dolor a luctus. Vestibulum sollicitudin elit ac nunc scelerisque rhoncus. Nulla felis sapien, condimentum ut imperdiet vel, aliquet id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            
            <p className="about-text">
              Mauris ut mauris sit amet sem commodo commodo in nec lorem. Duis non mi nec orci ultricies accumsan. Donec vitae pharetra massa. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras vel metus vel enim lobortis vehicula. Pellentesque et sem a tellus ultrices consequat.
            </p>
          </motion.div>

          <motion.div 
            className="about-highlight glass-effect"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaLightbulb className="highlight-icon" style={{ color: '#ffffff' }} />
            <div className="highlight-text">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in vestibulum tortor, vitae venenatis lectus. Praesent gravida dapibus neque sit amet molestie.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;