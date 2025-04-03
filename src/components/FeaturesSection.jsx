import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaTrophy } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRocket className="feature-icon" style={{ color: '#ffffff' }} />,
      title: "Launch Your Ideas",
      description: "Transform your innovative concepts into reality"
    },
    {
      icon: <FaUsers className="feature-icon" style={{ color: '#ffffff' }} />,
      title: "Connect & Collaborate",
      description: "Join forces with brilliant minds from around the world"
    },
    {
      icon: <FaTrophy className="feature-icon" style={{ color: '#ffffff' }} />,
      title: "Win Amazing Prizes",
      description: "Compete for exciting rewards and recognition"
    }
  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 0 15px rgba(255, 255, 255, 0.5)",
              background: "rgba(0, 0, 0, 0.8)"
            }}
            className="feature-card glass-effect"
          >
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
