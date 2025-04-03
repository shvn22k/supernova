import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const OrganizersSection = () => {
  const organizers = [
    {
      name: 'Alex Johnson',
      role: 'Event Coordinator',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Alex has been organizing tech events for over 5 years with a focus on creating inclusive spaces for innovation.',
      social: {
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      name: 'Samantha Lee',
      role: 'Technical Lead',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Full-stack developer with expertise in emerging technologies and a passion for mentoring new developers.',
      social: {
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Sponsorship Manager',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Michael builds partnerships between tech companies and educational initiatives to create opportunities for students.',
      social: {
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Creative strategist with experience in digital marketing and community building for tech events.',
      social: {
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      name: 'David Wilson',
      role: 'Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/39.jpg',
      bio: 'Logistics expert who ensures everything runs smoothly before, during, and after the event.',
      social: {
        linkedin: 'https://linkedin.com/'
      }
    },
    {
      name: 'Aisha Patel',
      role: 'Participant Experience',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Focuses on creating meaningful connections and memorable experiences for all hackathon participants.',
      social: {
        linkedin: 'https://linkedin.com/'
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
                <img 
                  src={organizer.image} 
                  alt={organizer.name} 
                  className="organizer-image" 
                />
              </div>
              
              <div className="organizer-info">
                <h3 className="organizer-name">{organizer.name}</h3>
                <div className="organizer-role">{organizer.role}</div>
                <p className="organizer-bio">{organizer.bio}</p>
                
                <div className="organizer-social">
                  <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
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