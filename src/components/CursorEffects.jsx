import { motion } from 'framer-motion';

const CursorEffects = ({ mousePosition }) => {
  return (
    <>
      {/* Cursor star effect - follows cursor with the star animation */}
      <motion.div
        className="cursor-star"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          mass: 0.2,
        }}
      />

      {/* Subtle cursor glow effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.4,
        }}
      />
    </>
  );
};

export default CursorEffects;
