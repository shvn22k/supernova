import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const PrizesSection = () => {
  const [revealedPrizes, setRevealedPrizes] = useState({});
  
  const handleReveal = (index) => {
    setRevealedPrizes(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const prizes = [
    {
      place: '1st Place',
      icon: <FaTrophy />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#FFD700'
    },
    {
      place: '2nd Place',
      icon: <FaMedal />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#C0C0C0'
    },
    {
      place: '3rd Place',
      icon: <FaAward />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#CD7F32'
    }
  ];

  return (
    <section className="prizes-section" id="prizes">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Prizes
        </motion.h2>
        
        <div className="prizes-container">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0.9, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`prize-card glass-effect prize-card-reveal ${revealedPrizes[index] ? 'prize-revealed' : ''}`}
            >
              {/* Blurred content before reveal */}
              {!revealedPrizes[index] && (
                <motion.div 
                  className="prize-blur-overlay"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="prize-place">{prize.place}</h3>
                  <motion.button
                    className="prize-reveal-btn"
                    onClick={() => handleReveal(index)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 0 20px ${prize.color}`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reveal Prize
                  </motion.button>
                </motion.div>
              )}
              
              {/* Star burst animation on reveal */}
              <AnimatePresence>
                {revealedPrizes[index] && (
                  <motion.div 
                    className="starburst-container"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1], 
                      opacity: [1, 0.8, 0] 
                    }}
                    transition={{ 
                      duration: 0.7,
                      times: [0, 0.6, 1]
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="starburst-ray"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0.3, 1.2, 0.8] 
                        }}
                        transition={{ 
                          duration: 0.5,
                          delay: i * 0.02
                        }}
                        style={{ 
                          transform: `rotate(${i * 30}deg)`,
                          background: `linear-gradient(to right, transparent, ${prize.color}, transparent)`
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Prize content (revealed or blurred) */}
              <AnimatePresence>
                {revealedPrizes[index] && (
                  <motion.div 
                    className="prize-content"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      className="prize-icon"
                      style={{ color: prize.color }}
                      animate={{
                        scale: [0.9, 1.1, 1],
                        filter: `drop-shadow(0 0 10px ${prize.color})`
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      {prize.icon}
                    </motion.div>
                    
                    <h3 className="prize-place">{prize.place}</h3>
                    
                    <motion.div 
                      className="prize-amount"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      style={{ color: prize.color }}
                    >
                      {prize.prize}
                    </motion.div>
                    
                    <motion.p 
                      className="prize-description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {prize.description}
                    </motion.p>
                    
                    <motion.div 
                      className="prize-sparkles"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="prize-sparkle"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                            x: [0, i % 2 === 0 ? 5 : -5, 0],
                            y: [0, i % 3 === 0 ? -5 : 5, 0]
                          }}
                          transition={{
                            duration: 2 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                          style={{
                            position: 'absolute',
                            color: prize.color,
                            right: `${10 + i * 15}px`,
                            top: `${10 + i * 20}px`,
                            fontSize: `${0.5 + i * 0.2}rem`
                          }}
                        >
                          <FaStar />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection; 