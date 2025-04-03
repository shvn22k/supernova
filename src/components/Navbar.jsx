import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Desktop Menu */}
        <div className="navbar-links desktop-menu">
          {menuItems.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="navbar-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
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
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
