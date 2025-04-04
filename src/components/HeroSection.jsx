import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaCalendar, FaClock, FaGlobe, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hack the Void, Own the Stars";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [orbitRotation, setOrbitRotation] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  
  // Orbit animation
  useEffect(() => {
    const animateOrbit = () => {
      setOrbitRotation(prev => (prev + 0.5) % 360);
    };
    
    const orbitInterval = setInterval(animateOrbit, 50);
    return () => clearInterval(orbitInterval);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const hackathonDate = new Date('2025-04-25T00:00:00');
      const now = new Date();
      const difference = hackathonDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title-container"
          >
            <div className="title-decoration">
              <div 
                className="orbit-circle"
                style={{ transform: `rotate(${orbitRotation}deg)` }}
              >
                <div className="planet"></div>
              </div>
            </div>
            <h1 className="main-title">
              <span className="super-text">SUPER</span>
              <span className="nova-text">NOVA</span>
            </h1>
            <div className="hero-tagline">
              {displayText}
              {!isTypingComplete && <span className="cursor-blink"></span>}
            </div>
            
            <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-register-btn"
              >
                Register Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Event Information Section */}
      <section className="info-section" id="info">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-container"
        >
          <h2 className="section-title">Event Information</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

          <div className="event-info-container">
            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaCalendar className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Date:</div>
                <div className="event-info-value">April 25, 2025</div>
              </div>
            </div>

            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaClock className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Duration:</div>
                <div className="event-info-value">8 hours</div>
              </div>
            </div>

            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaGlobe className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Mode:</div>
                <div className="event-info-value">Offline (Round 1 Online, Round 2 Offline)</div>
              </div>
            </div>

            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaUsers className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Team Size:</div>
                <div className="event-info-value">2-4 members per team</div>
              </div>
            </div>

            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaUsers className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Expected Participation:</div>
                <div className="event-info-value">TBA</div>
              </div>
            </div>

            <div className="event-info-item">
              <div className="event-info-icon-wrapper">
                <FaMapMarkerAlt className="event-info-icon" />
              </div>
              <div className="event-info-content">
                <div className="event-info-label">Venue:</div>
                <div className="event-info-value">G.L. Bajaj Institute of Technology And Management</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
