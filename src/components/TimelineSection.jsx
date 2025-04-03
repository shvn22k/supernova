import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaUsers, FaLaptopCode, FaClipboardList, FaTrophy, FaChalkboardTeacher } from 'react-icons/fa';
import { MdPresentToAll } from 'react-icons/md';

const TimelineSection = () => {
  const events = [
    {
      time: "8 - 9:30 AM",
      title: "REGISTRATION",
      description: "Check-in and get your participant kit",
      icon: <FaUsers />
    },
    {
      time: "9:45 - 11 AM",
      title: "INAUGURATION CEREMONY",
      description: "Official opening of the hackathon event",
      icon: <FaCalendarAlt />
    },
    {
      time: "4th APRIL",
      title: "PROBLEM STATEMENT RELEASE",
      description: "Hackathon problem statements are announced",
      icon: <FaClipboardList />
    },
    {
      time: "11 - 1:30 PM",
      title: "8-HOUR HACKING SESSION",
      description: "First half of the coding marathon begins",
      icon: <FaLaptopCode />
    },
    {
      time: "1:30 - 2 PM",
      title: "LUNCH BREAK",
      description: "Refuel and recharge for the next session",
      icon: <FaClock />
    },
    {
      time: "In between hacking session",
      title: "MENTORING & MIDWAY EVALUATIONS",
      description: "Get guidance from industry experts and receive feedback",
      icon: <FaChalkboardTeacher />
    },
    {
      time: "2:10 - 4:50 PM",
      title: "FINAL PROJECT SUBMISSIONS",
      description: "Submit your completed projects for evaluation",
      icon: <FaClipboardList />
    },
    {
      time: "2:10 - 4:50 PM",
      title: "DEMO & PITCH PRESENTATIONS",
      description: "Present your projects to the judges",
      icon: <MdPresentToAll />
    },
    {
      time: "5 - 6 PM",
      title: "JUDGING & AWARD CEREMONY",
      description: "Winners are announced and prizes are distributed",
      icon: <FaTrophy />
    }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-container">
        <h2 className="section-title">Event Timeline</h2>
        <p className="timeline-description">
          The SuperNova hackathon is a one-day intensive coding event. Here's what to expect:
        </p>
        
        <div className="roadmap-container">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="roadmap-item"
            >
              <div className="roadmap-connector">
                {index < events.length - 1 && <div className="roadmap-line"></div>}
              </div>
              
              <motion.div 
                className="roadmap-bubble"
                whileInView={{ 
                  scale: [0.7, 1.1, 1],
                  opacity: [0, 1]
                }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="roadmap-time">{event.time}</div>
              </motion.div>
              
              <motion.div 
                className="roadmap-content glass-effect"
                whileInView={{ 
                  x: [50, 0],
                  opacity: [0, 1]
                }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                whileHover={{ x: -5, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
              >
                <div className="roadmap-icon">
                  {event.icon}
                </div>
                <div className="roadmap-text">
                  <h3 className="roadmap-title">{event.title}</h3>
                  <p className="roadmap-description">{event.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
