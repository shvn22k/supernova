import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const TimelineSection = () => {
  const events = [
    {
      date: "April 15",
      title: "Registration Opens",
      description: "Sign up to be part of the next big thing"
    },
    {
      date: "April 30",
      title: "Hackathon Begins",
      description: "48 hours of intense coding and innovation"
    },
    {
      date: "May 2",
      title: "Project Submission",
      description: "Submit your projects for judging"
    },
    {
      date: "May 3",
      title: "Awards Ceremony",
      description: "Celebrate the winners and their achievements"
    }
  ];

  return (
    <section className="timeline" id="timeline">
      <div className="timeline-container">
        <h2 className="timeline-title">Event Timeline</h2>
        <div className="timeline-events">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                x: 5, 
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.3)" 
              }}
              className="timeline-item"
            >
              <div className="timeline-date">
                <FaCalendarAlt className="feature-icon" />
                <span>{event.date}</span>
              </div>
              <motion.div 
                className="timeline-content glass-effect"
                whileHover={{ background: "rgba(255, 255, 255, 0.15)" }}
              >
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-event-description">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
