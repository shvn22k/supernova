import { motion } from 'framer-motion';
import { FaLinkedin, FaSmile } from 'react-icons/fa';

const OrganizersSection = () => {
  const organizers = [
    {
      name: 'Organizer Name 1',
      role: 'Event Coordinator',
      bio: 'Placeholder bio text. This person is responsible for coordinating all aspects of the hackathon event.',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Organizer Name 2',
      role: 'Technical Lead',
      bio: 'Placeholder bio text. This person handles the technical infrastructure and provides support to participants.',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Organizer Name 3',
      role: 'Sponsorship Manager',
      bio: 'Placeholder bio text. This person manages relationships with sponsors and secures funding for the event.',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Organizer Name 4',
      role: 'Marketing Director',
      bio: 'Placeholder bio text. This person handles all promotional activities and social media presence.',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Organizer Name 5',
      role: 'Operations Manager',
      bio: 'Placeholder bio text. This person ensures that all logistical aspects of the event run smoothly.',
      social: {
        linkedin: '#'
      }
    },
    {
      name: 'Organizer Name 6',
      role: 'Participant Experience',
      bio: 'Placeholder bio text. This person focuses on creating an excellent experience for all participants.',
      social: {
        linkedin: '#'
      }
    }
  ];

  return (
    <section className="organizers-section" id="organizers">
      <div className="section-container">
        <h2 className="section-title">Meet the Organizers</h2>
        
        <p className="organizers-description">
          SuperNova Hackathon is organized by a dedicated team of professionals passionate about technology,
          education, and creating opportunities for innovation. Get to know the people behind the event!
        </p>
        
        <div className="organizers-grid">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="organizer-card glass-effect"
            >
              <div className="organizer-image-container">
                <div className="smiley-placeholder">
                  <FaSmile size={50} color="#FFD700" />
                </div>
              </div>
              
              <div className="organizer-info">
                <h3 className="organizer-name">{organizer.name}</h3>
                <div className="organizer-role">{organizer.role}</div>
                <p className="organizer-bio">{organizer.bio}</p>
                
                <div className="organizer-social">
                  <a href={organizer.social.linkedin} className="social-link">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection; 