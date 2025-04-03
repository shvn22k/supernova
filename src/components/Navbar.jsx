import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll event to track active section
  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = ['home', 'features', 'about', 'timeline'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle smooth scrolling when clicking nav links
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      className="navbar navbar-scrolled" 
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="navbar-container">
        <ul className="navbar-links" style={{ justifyContent: 'center' }}>
          {['Home', 'Features', 'About', 'Timeline', 'Register'].map((item, index) => (
            <motion.li 
              key={index}
              className="navbar-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`navbar-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={(e) => scrollToSection(item.toLowerCase(), e)}
              >
                {item}
              </a>
              <motion.div 
                className="navbar-link-underline"
                initial={{ width: activeSection === item.toLowerCase() ? '100%' : 0 }}
                animate={{ width: activeSection === item.toLowerCase() ? '100%' : 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
