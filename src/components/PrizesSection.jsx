import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const PrizesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const prizes = [
    {
      place: '1st Place',
      icon: <FaTrophy />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#FFD700',
      particleCount: 8
    },
    {
      place: '2nd Place',
      icon: <FaMedal />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#C0C0C0',
      particleCount: 6
    },
    {
      place: '3rd Place',
      icon: <FaAward />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)',
      color: '#CD7F32',
      particleCount: 4
    }
  ];

  return (
    <section className="prizes-section" id="prizes" ref={sectionRef}>
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 1, 0, -1, 0],
                transition: { duration: 0.3 }
              }}
              className="prize-card glass-effect cosmic-prize"
            >
              {/* Orbiting particles */}
              {[...Array(prize.particleCount)].map((_, i) => (
                <motion.div
                  key={i}
                  className="prize-particle"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0.7,
                    backgroundColor: prize.color
                  }}
                  animate={{
                    x: [0, 30, 0, -30, 0],
                    y: [0, -30, 0, 30, 0],
                    opacity: [0.4, 0.8, 0.6, 0.9, 0.4],
                    scale: [1, 1.2, 1, 0.8, 1]
                  }}
                  transition={{
                    duration: 5 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    width: `${6 + i * 2}px`,
                    height: `${6 + i * 2}px`,
                    borderRadius: '50%',
                    filter: `blur(2px) brightness(1.2)`
                  }}
                />
              ))}
              
              <motion.div 
                className="prize-glow"
                animate={{
                  boxShadow: [
                    `0 0 20px 0px ${prize.color}40`,
                    `0 0 30px 5px ${prize.color}80`,
                    `0 0 25px 2px ${prize.color}60`,
                    `0 0 30px 5px ${prize.color}80`,
                    `0 0 20px 0px ${prize.color}40`
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="prize-icon"
                style={{ color: prize.color }}
                animate={{
                  filter: [
                    `drop-shadow(0 0 8px ${prize.color}60)`,
                    `drop-shadow(0 0 15px ${prize.color}90)`,
                    `drop-shadow(0 0 12px ${prize.color}70)`,
                    `drop-shadow(0 0 15px ${prize.color}90)`,
                    `drop-shadow(0 0 8px ${prize.color}60)`
                  ],
                  scale: [1, 1.05, 1, 0.98, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {prize.icon}
              </motion.div>
              
              <h3 className="prize-place">{prize.place}</h3>
              
              <motion.div 
                className="prize-amount"
                animate={{
                  textShadow: [
                    `0 0 8px ${prize.color}60`,
                    `0 0 15px ${prize.color}90`,
                    `0 0 12px ${prize.color}70`,
                    `0 0 15px ${prize.color}90`,
                    `0 0 8px ${prize.color}60`
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {prize.prize}
              </motion.div>
              
              <p className="prize-description">{prize.description}</p>
              
              <motion.div 
                className="prize-stars-container"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="prize-star"
                    initial={{ opacity: 0.7 }}
                    animate={{
                      opacity: [0.4, 0.9, 0.4],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    style={{
                      position: 'absolute',
                      color: prize.color,
                      transform: `rotate(${i * 120}deg) translateX(60px)`
                    }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection; 