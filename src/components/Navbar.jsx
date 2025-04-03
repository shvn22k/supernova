import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links desktop-menu">
          {menuItems.map((item) => (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="navbar-link"
              onClick={item.action || (() => scrollToSection(item.id))}
            >
              {item.icon && <span className="navbar-icon">{item.icon}</span>}
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
