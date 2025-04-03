import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StarBackground = ({ mousePosition, windowSize }) => {
  const starsRef = useRef([]);

  // Generate stars with random properties
  useEffect(() => {
    if (typeof window !== 'undefined') {
      starsRef.current = Array.from({ length: 400 }, () => ({
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        size: Math.random() * 2 + 0.5, // Smaller stars
        alpha: Math.random() * 0.8 + 0.5, // Brighter stars
        speed: Math.random() * 1.5 + 0.5, // Speed for upward movement
        delay: Math.random() * 15, // Random delay for staggered animation
      }));
    }
  }, [windowSize]);

  return (
    <>
      {/* Dynamic star background with constant upward movement */}
      <div className="stars-container">
        <div className="stars-overlay" />
        {starsRef.current.map((star, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{
              x: star.x,
              y: windowSize.height + 10, // Start from below the viewport
              scale: star.size / 2,
              opacity: 0,
            }}
            animate={{
              x: star.x + (mousePosition.x - windowSize.width / 2) * 0.01, // Subtle horizontal movement based on cursor
              y: -20, // Move to above the viewport
              opacity: [0, star.alpha, star.alpha, 0],
            }}
            transition={{
              duration: 20 / star.speed, // Longer duration for slower movement
              repeat: Infinity,
              delay: star.delay,
              ease: "linear",
            }}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `rgba(255, 255, 255, ${star.alpha})`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.alpha})`,
              '--star-opacity': star.alpha, // CSS variable for keyframes
            }}
          />
        ))}
      </div>

      {/* Cosmic dust particles */}
      <div className="cosmic-dust">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="dust-particle"
            initial={{
              x: Math.random() * windowSize.width,
              y: windowSize.height + 5,
              scale: Math.random() * 0.3,
              opacity: 0,
            }}
            animate={{
              x: (prev) => prev + (Math.random() * 10 - 5),
              y: -10,
              opacity: [0, 0.2, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarBackground;
