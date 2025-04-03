import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <h2 className="section-title">About SuperNova</h2>
        
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mission-container glass-effect"
        >
          <div className="mission-icon-wrapper">
            <FaRocket className="mission-icon" />
          </div>
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-text">
            Our goal is to foster an environment where new ideas can take flight, pushing the boundaries 
            of what's possible in just 8 hours of focused innovation.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text-container glass-effect"
          >
            <p className="about-text">
              Join us for SuperNova, an engaging 8-hour in-person hackathon where creativity and 
              technical skills come together.
            </p>
            <p className="about-text">
              Put your skills to the test and create something meaningful in just 8 hours. Our judges will 
              evaluate projects based on originality, technical execution, and practical applications.            
              Whether you're an experienced developer or just starting your coding journey, SuperNova 
              offers a great opportunity to bring your ideas to life.
            </p>
            <p className="about-text highlight">
              Applications are open on Devfolio. Looking forward to seeing what you create!
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="about-highlights">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-highlight"
            >
              <FaLightbulb className="highlight-icon" />
              <div className="highlight-text">
                <h3>Innovation Focus</h3>
                <p>Challenges that push creative boundaries</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-highlight"
            >
              <FaUsers className="highlight-icon" />
              <div className="highlight-text">
                <h3>Collaborative Environment</h3>
                <p>Connect with fellow innovators and form lasting connections</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="about-highlight"
            >
              <FaCode className="highlight-icon" />
              <div className="highlight-text">
                <h3>Hands-on Development</h3>
                <p>8 hours of focused coding and problem-solving</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;