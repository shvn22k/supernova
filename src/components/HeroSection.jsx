import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaBrain, FaCalendar, FaClock, FaGlobe, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = ({ timeLeft }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "where ideas bloom through code";
  const controls = useAnimation();

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Main title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title-container"
        >
          <h1 className="main-title">
            <span className="super-text">SUPER</span>
            <span className="nova-text">NOVA</span>
          </h1>
          <div className="title-decoration">
            <motion.div 
              className="orbit-circle"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="planet"
                animate={{ 
                  boxShadow: ["0 0 10px rgba(255, 255, 255, 0.5)", "0 0 20px rgba(255, 255, 255, 0.8)", "0 0 10px rgba(255, 255, 255, 0.5)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <div className="typewriter-container">
            <p className="hero-tagline">{typedText}<span className="cursor-blink">|</span></p>
          </div>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="countdown-container glass-effect"
        >
          <div className="countdown-title">Hackathon Starts In</div>
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="tech-stack"
        >
          <div className="tech-title">Powered by cutting-edge technologies</div>
          <div className="tech-icons">
            <motion.div 
              className="tech-icon-container glass-effect"
              whileHover={{ scale: 1.1 }}
            >
              <FaCode className="tech-icon" style={{ color: '#ffffff' }} />
            </motion.div>
            <motion.div 
              className="tech-icon-container glass-effect"
              whileHover={{ scale: 1.1 }}
            >
              <FaLaptopCode className="tech-icon" style={{ color: '#ffffff' }} />
            </motion.div>
            <motion.div 
              className="tech-icon-container glass-effect"
              whileHover={{ scale: 1.1 }}
            >
              <FaBrain className="tech-icon" style={{ color: '#ffffff' }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ marginTop: "2rem" }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="register-btn"
            id="register"
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* Event Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="event-info-container"
          style={{
            marginTop: "2rem",
            padding: "2rem 3rem",
            width: "100%", 
            maxWidth: "1000px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridRowGap: "3.5rem",
            gridColumnGap: "1rem"
          }}
        >
          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaCalendar style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Date:</div>
              <div className="event-info-value">April 25, 2025</div>
            </div>
          </div>

          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaClock style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Duration:</div>
              <div className="event-info-value">8 hours (may extend to 24 hours)</div>
            </div>
          </div>

          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaGlobe style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Mode:</div>
              <div className="event-info-value">Offline (Round 1 Online, Round 2 Offline)</div>
            </div>
          </div>

          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaUsers style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Team Size:</div>
              <div className="event-info-value">2-4 members per team</div>
            </div>
          </div>

          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaUsers style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Expected Participation:</div>
              <div className="event-info-value">TBA</div>
            </div>
          </div>

          <div className="event-info-item">
            <div className="event-info-icon-wrapper">
              <FaMapMarkerAlt style={{ color: '#ffffff' }} className="event-info-icon" />
            </div>
            <div className="event-info-content">
              <div className="event-info-label">Venue:</div>
              <div className="event-info-value">G.L. Bajaj Institute of Technology</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
