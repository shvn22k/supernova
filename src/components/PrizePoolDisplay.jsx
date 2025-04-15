import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PrizePoolDisplay = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create 12 particles in a circular orbit
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      angle: (i * 30) * (Math.PI / 180), // Convert to radians
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="prize-pool-container">
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="orbit-particle"
          style={{
            x: Math.cos(particle.angle) * 120,
            y: Math.sin(particle.angle) * 120,
          }}
          animate={{
            x: [
              Math.cos(particle.angle) * 120,
              Math.cos(particle.angle + Math.PI) * 120,
              Math.cos(particle.angle) * 120,
            ],
            y: [
              Math.sin(particle.angle) * 120,
              Math.sin(particle.angle + Math.PI) * 120,
              Math.sin(particle.angle) * 120,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Center display */}
      <div className="prize-pool-center">
        <div className="prize-amount">₹35,000</div>
        <div className="prize-label">Prize Pool</div>
      </div>
    </div>
  );
};

export default PrizePoolDisplay; 