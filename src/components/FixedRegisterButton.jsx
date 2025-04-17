import { motion } from 'framer-motion';

const FixedRegisterButton = () => {
  return (
    <motion.a
      // href="https://supernova-hacks.devfolio.co/"
      href = "#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed-register-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 0 10px #4d82d6',
          '0 0 20px #4d82d6',
          '0 0 10px #4d82d6'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      REGISTER NOW
    </motion.a>
  );
};

export default FixedRegisterButton; 