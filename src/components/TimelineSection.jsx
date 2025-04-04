import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaUsers, FaLaptopCode, FaClipboardList, FaTrophy, FaChalkboardTeacher } from 'react-icons/fa';
import { MdPresentToAll } from 'react-icons/md';

const TimelineSection = () => {
  const events = [
    {
      time: "8:00 - 8:45 AM",
      title: "REGISTRATION",
      description: "Check-in and get your participant kit",
      icon: <FaUsers />
    },
    {
      time: "9:00 - 10:00 AM",
      title: "INAUGURATION CEREMONY",
      description: "Official opening of the hackathon event",
      icon: <FaCalendarAlt />
    },
    // {
    //   time: "4th APRIL",
    //   title: "PROBLEM STATEMENT RELEASE",
    //   description: "Hackathon problem statements are announced",
    //   icon: <FaClipboardList />
    // },
    {
      time: "10:15 - 12:00",
      title: "Hacking session 1",
      description: "First half of the coding marathon begins",
      icon: <FaLaptopCode />
    },
    {
      time: "12:00 - 12:30",
      title: "Mentorship round",
      description: "Get guidance from industry experts and receive feedback",
      icon: <FaClock />
    },
    {
      time: "12:45 - 1:30 PM",
      title: "Lunch Break",
      description: "We'll provide good food and beverages.",
      icon: <FaChalkboardTeacher />
    },
    {
      time: "1:45 PM - 4:20 PM",
      title: "Hacking session 2",
      description: "Final project submissions and judging rounds.",
      icon: <FaClipboardList />
    },
    {
      time: "4:20 - 5:00 PM",
      title: "JUDGING & PITCH PRESENTATIONS",
      description: "Present your projects to the judges",
      icon: <MdPresentToAll />
    },
    {
      time: "5 - 6 PM",
      title: "AWARD CEREMONY",
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
