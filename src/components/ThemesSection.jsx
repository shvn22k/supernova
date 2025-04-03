import { motion } from 'framer-motion';
import { FaRobot, FaCubes, FaHeartbeat, FaMicrochip, FaLeaf, FaLightbulb, FaVrCardboard, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';

const ThemesSection = () => {
  const themes = [
    {
      icon: <FaRobot />,
      title: 'AI/ML',
      description: 'Harness the power of artificial intelligence and machine learning to create innovative solutions.'
    },
    {
      icon: <FaCubes />,
      title: 'Blockchain',
      description: 'Build decentralized applications and explore the future of web3 technology.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Healthcare',
      description: 'Develop solutions to improve healthcare delivery and patient outcomes.'
    },
    {
      icon: <FaMicrochip />,
      title: 'IoT/Hardware Solutions',
      description: 'Create smart devices and connected solutions for the future.'
    },
    {
      icon: <FaLeaf />,
      title: 'Sustainability',
      description: 'Design eco-friendly solutions to address environmental challenges.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Open Innovation',
      description: 'Think outside the box and bring your unique ideas to life.'
    },
    {
      icon: <FaVrCardboard />,
      title: 'AR/VR',
      description: 'Create immersive augmented and virtual reality experiences that transform how we interact with digital content.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Develop solutions to protect data, systems, and networks from digital attacks and security threats.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'EdTech',
      description: 'Revolutionize learning through technology with innovative educational tools and platforms.'
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