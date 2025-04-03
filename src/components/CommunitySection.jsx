import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaWhatsapp } from 'react-icons/fa';

const CommunitySection = () => {
  const communityMembers = [
    {
      name: 'Rachel Thomas',
      role: 'Community Leader',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      contribution: 'Organizing local tech meetups and workshops'
    },
    {
      name: 'James Wilson',
      role: 'Technical Mentor',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      contribution: 'Providing guidance to participants on technical challenges'
    },
    {
      name: 'Emma Zhang',
      role: 'Student Ambassador',
      image: 'https://randomuser.me/api/portraits/women/26.jpg',
      contribution: 'Connecting student communities with hackathon opportunities'
    },
    {
      name: 'Raj Patel',
      role: 'Industry Expert',
      image: 'https://randomuser.me/api/portraits/men/58.jpg',
      contribution: 'Offering insights on industry trends and market needs'
    },
    {
      name: 'Sophie Clark',
      role: 'Volunteer Coordinator',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      contribution: 'Organizing volunteer efforts before and during the event'
    },
    {
      name: 'Omar Hassan',
      role: 'Previous Winner',
      image: 'https://randomuser.me/api/portraits/men/72.jpg',
      contribution: 'Sharing experiences and advice with new participants'
    },
    {
      name: 'Nina Rodriguez',
      role: 'Design Lead',
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
      contribution: 'Helping teams with UX/UI design during the hackathon'
    },
    {
      name: 'Liu Wei',
      role: 'Content Creator',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      contribution: 'Documenting hackathon experiences and sharing stories'
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
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                />
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
              <a href="https://chat.whatsapp.com/supernova-hackathon" target="_blank" rel="noopener noreferrer" className="platform-link whatsapp">
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