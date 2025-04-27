import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaUsers, FaLaptopCode, FaClipboardList, FaTrophy, FaChalkboardTeacher, FaBed, FaUtensils, FaCodeBranch } from 'react-icons/fa';
import { MdPresentToAll } from 'react-icons/md';

const TimelineSection = () => {
  const day1Events = [
    {
      time: "8:00 - 10:00 AM",
      title: "REGISTRATION & KICKOFF",
      description: "Check-in, get your participant kit, and work space allocation",
      icon: <FaUsers />
    },
    {
      time: "10:10 - 12:10 PM",
      title: "INAUGURATION CEREMONY",
      description: "Official opening of the hackathon event",
      icon: <FaCalendarAlt />
    },
    {
      time: "12:30 - 1:30 PM",
      title: "PROJECT DEVELOPMENT PHASE 1",
      description: "Slot 1: Begin working on your projects",
      icon: <FaLaptopCode />
    },
    {
      time: "1:30 - 2:00 PM",
      title: "LUNCH BREAK",
      description: "We'll provide food and beverages",
      icon: <FaUtensils />
    },
    {
      time: "2:00 - 3:30 PM",
      title: "RAPID PROTOTYPING & CODING",
      description: "Slot 2: Accelerate your project development",
      icon: <FaCodeBranch />
    },
    {
      time: "3:30 - 4:20 PM",
      title: "SPEAKING SESSION",
      description: "Insightful talks from industry experts",
      icon: <FaChalkboardTeacher />
    },
    {
      time: "4:00 - 6:00 PM",
      title: "CONTINUED DEVELOPMENT",
      description: "Slot 3: Project development with mentorship check-in",
      icon: <FaLaptopCode />
    },
    {
      time: "6:00 PM",
      title: "DEPARTURE TO ACCOMMODATION",
      description: "Teams must vacate campus (no GitHub pushes until Day 2)",
      icon: <FaBed />
    }
  ];

  const day2Events = [
    {
      time: "8:00 - 10:00 AM",
      title: "RETURN TO CAMPUS & BREAKFAST",
      description: "Start Day 2 with breakfast before resuming work",
      icon: <FaUtensils />
    },
    {
      time: "10:00 - 10:30 AM",
      title: "DAY 2 KICKOFF",
      description: "Final stretch planning and updates",
      icon: <FaCalendarAlt />
    },
    {
      time: "10:30 - 12:30 PM",
      title: "FINAL DEVELOPMENT SPRINT",
      description: "Last chance to finish your project implementation",
      icon: <FaLaptopCode />
    },
    {
      time: "12:30 - 1:30 PM",
      title: "LUNCH BREAK",
      description: "Take a break and recharge before final presentations",
      icon: <FaUtensils />
    },
    {
      time: "1:30 - 2:00 PM",
      title: "FINAL PREPARATIONS",
      description: "Get your presentations and demos ready",
      icon: <FaClipboardList />
    },
    {
      time: "2:00 - 4:00 PM",
      title: "JUDGING & PROJECT REVIEWS",
      description: "Present your projects to the judges",
      icon: <MdPresentToAll />
    },
    {
      time: "4:00 - 5:00 PM",
      title: "CLOSING CEREMONY & PRIZES",
      description: "Winners announced and prizes distributed",
      icon: <FaTrophy />
    }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-container">
        <h2 className="section-title">Event Timeline</h2>
        <p className="timeline-description">
          SuperNova is a two-day hackathon on May 1-2, 2025. Here's the detailed schedule:
        </p>
        
        <h3 className="day-title">Day 1: Friday, May 1st - Kickoff and Project Development</h3>
        
        <div className="roadmap-container">
          {day1Events.map((event, index) => (
            <motion.div
              key={`day1-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="roadmap-item"
            >
              <div className="roadmap-connector">
                {index < day1Events.length - 1 && <div className="roadmap-line"></div>}
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

        <div className="day-note glass-effect">
          <h4>Important Day 1 Note:</h4>
          <ul>
            <li>Teams must vacate the campus by 6:00 PM and move to their allocated accommodations.</li>
            <li>Project development can continue at accommodations, but code submissions or GitHub pushes after 6:00 PM on Day 1 will not be considered and will be monitored.</li>
            <li>Teams can resume GitHub updates only after returning to the campus on Day 2.</li>
          </ul>
        </div>
        
        <h3 className="day-title">Day 2: Saturday, May 2nd - Final Development and Presentations</h3>
        
        <div className="roadmap-container">
          {day2Events.map((event, index) => (
            <motion.div
              key={`day2-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="roadmap-item"
            >
              <div className="roadmap-connector">
                {index < day2Events.length - 1 && <div className="roadmap-line"></div>}
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
