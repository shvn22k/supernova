import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const PrizesSection = () => {
  const prizes = [
    {
      place: '1st Place',
      icon: <FaTrophy />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)'
    },
    {
      place: '2nd Place',
      icon: <FaMedal />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)'
    },
    {
      place: '3rd Place',
      icon: <FaAward />,
      prize: '₹!!!!!',
      description: 'We will keep you guessing that for now :)'
    }
  ];

  return (
    <section className="prizes-section" id="prizes">
      <div className="section-container">
        <h2 className="section-title">Prizes</h2>
        
        {/* Main Prizes */}
        <div className="prizes-container">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="prize-card glass-effect"
            >
              <div className="prize-icon">
                {prize.icon}
              </div>
              <h3 className="prize-place">{prize.place}</h3>
              <div className="prize-amount">{prize.prize}</div>
              <p className="prize-description">{prize.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection; 