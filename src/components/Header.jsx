import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
      setIsMobileMenuOpen(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  
  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, action: scrollToTop },
    { id: 'about', label: 'About' },
    { id: 'info', label: 'Info' },
    { id: 'themes', label: 'Themes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'organizers', label: 'Organizers' },
    { id: 'community', label: 'Community' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {isMobile ? (
        // Mobile Layout: Logos on left, hamburger on right
        <>
          <div className="header-content">
            <div className="logo-container">
              <motion.img
                src="/glb.webp" 
                alt="GLB College Logo" 
                className="logo college-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/abhyudaya.webp" 
                alt="Abhyudaya Logo" 
                className="logo hackathon-logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
            
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu-fullscreen"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    className="mobile-menu-link"
                    onClick={item.action || (() => scrollToSection(item.id))}
                  >
                    {item.icon && <span className="navbar-icon">{item.icon}</span>}
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        // Desktop Layout: Logo - Navbar - Logo
        <div className="desktop-header-content">
          <motion.img
            src="/glb.webp" 
            alt="GLB College Logo" 
            className="logo college-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
          
          <div className="navbar-wrapper">
            <Navbar />
          </div>
          
          <motion.img
            src="/abhyudaya.webp" 
            alt="Abhyudaya Logo" 
            className="logo hackathon-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
