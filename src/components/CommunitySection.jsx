import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaWhatsapp, FaSmile } from 'react-icons/fa';

const CommunitySection = () => {
  const communityMembers = [
    {
      name: 'Member Name 1',
      role: 'Community Leader',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 2',
      role: 'Technical Mentor',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 3',
      role: 'Student Ambassador',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 4',
      role: 'Industry Expert',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 5',
      role: 'Volunteer Coordinator',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 6',
      role: 'Previous Winner',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 7',
      role: 'Design Lead',
      contribution: 'Placeholder text for community contribution description.'
    },
    {
      name: 'Member Name 8',
      role: 'Content Creator',
      contribution: 'Placeholder text for community contribution description.'
    }
  ];

  return (
    <section className="community-section" id="community">
      <div className="section-container">
        <h2 className="section-title">Our Community</h2>
        
        <div className="community-intro glass-effect">
          <div className="community-icon-wrapper">
            <FaUsers className="community-icon" />
          </div>
          <p className="community-description">
            SuperNova Hackathon thrives thanks to our vibrant community of volunteers, mentors, 
            previous participants, and industry experts who generously contribute their time and expertise.
            Get to know the amazing people who make our events special and find out how you can get involved.
          </p>
        </div>
        
        <h3 className="community-grid-title">Community Members</h3>
        <div className="community-grid">
          {communityMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="community-member glass-effect"
            >
              <div className="member-image-container">
                <div className="smiley-placeholder">
                  <FaSmile size={40} color="#4d82d6" />
                </div>
              </div>
              <div className="member-details">
                <h4 className="member-name">{member.name}</h4>
                <div className="member-role">{member.role}</div>
                <p className="member-contribution">{member.contribution}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="join-community-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="join-community glass-effect"
          >
            <div className="join-icon-wrapper">
              <FaHandshake className="join-icon" />
            </div>
            <h3 className="join-title">Join Our Community</h3>
            <p className="join-description">
              Interested in being part of the SuperNova community? Join our WhatsApp group to connect with other participants, 
              receive important announcements, and get support during the hackathon!
            </p>
            
            <div className="community-platforms">
              <a href="https://chat.whatsapp.com/FT7hcIwBBGMGEMuh66qCzO" className="platform-link whatsapp">
                <FaWhatsapp className="platform-icon" />
                <span>Join our WhatsApp Group</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 