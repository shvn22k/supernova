import { motion } from 'framer-motion';
import { FaRobot, FaCubes, FaMicrochip, FaVrCardboard } from 'react-icons/fa';

const ThemesSection = () => {
  const themes = [
    {
      icon: <FaRobot />,
      title: 'AI/ML',
      description: 'Harness the power of artificial intelligence and machine learning to create innovative solutions.'
    },
    {
      icon: <FaCubes />,
      title: 'Web3/Blockchain',
      description: 'Build decentralized applications and explore the future of web3 technology.'
    },
    {
      icon: <FaVrCardboard />,
      title: 'AR/VR',
      description: 'Create immersive augmented and virtual reality experiences that transform how we interact with digital content.'
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT',
      description: 'Create smart devices and connected solutions for the future.'
    }
  ];

  return (
    <section className="themes-section" id="themes">
      <div className="section-container">
        <h2 className="section-title">Hackathon Themes</h2>
        <div className="themes-grid">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="theme-card glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="theme-icon-wrapper">
                {theme.icon}
              </div>
              <h3 className="theme-title">{theme.title}</h3>
              <p className="theme-description">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection; 