import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <motion.img 
          src="/glb.webp" 
          alt="GLB College Logo" 
          className="logo logo-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Navbar between logos */}
        <Navbar />
        
        <motion.img 
          src="/abhyudaya.webp" 
          alt="Abhyudaya Logo" 
          className="logo logo-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </header>
  );
};

export default Header;
