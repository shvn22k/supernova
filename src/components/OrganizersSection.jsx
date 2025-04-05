import { motion } from 'framer-motion';
import { FaLinkedin, FaSmile } from 'react-icons/fa';

const OrganizersSection = () => {
  // Lead organizers (left side)
  const leadOrganizers = [
    {
      name: 'Attiuttama Mishra',
      role: 'Faculty Coordinator',
      social: {
        linkedin: 'https://www.linkedin.com/in/attiuttama-mishra-10a61a1a9/'
      },
      image: '/maam.jpeg'
    },
    {
      name: 'Kashish Verma',
      role: 'President',
      social: {
        linkedin: 'https://www.linkedin.com/in/kashish-verma-b54a85215/'
      },
      image: '/kashish.jpg'
    },
    {
      name: 'Moksha Kohli',
      role: 'Co-Organizer',
      social: {
        linkedin: 'https://www.linkedin.com/in/moksha-kohli-434513229/'
      },
      image: '/moksha.jpg'
    },
    {
      name: 'Pranshu Kamboj',
      role: 'Operational Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/pranshu-kamboj-0a6896259/'
      },
      image: '/pranshu.jpg'
    },
    {
      name: 'Satyam Jaiswal',
      role: 'Event coordinator',
      social: {
        linkedin: 'https://www.linkedin.com/in/satyam-jaiswal-1ab701259'
      },
      image: '/satyam.jpg'
    },
    {
      name: 'Aditi Singh',
      role: 'Social Media Lead',
      social: {
        linkedin: 'https://www.linkedin.com/in/aditi-singh-13686b24a/'
      },
      image: '/aditi.jpeg'
    }
  ];

  // Team members (right side)
  const techTeam = [
    {
      name: 'Shiven',
      social: {
        linkedin: 'https://www.linkedin.com/in/shiven-k-58b423212/'
      },
      image: '/shiven.png'
    },
    {
      name: 'Kunal',
      social: {
        linkedin: 'https://www.linkedin.com/in/kunal-rohilla-793a7931b'
      },
      image: '/kunal.jpg'
    },
    {
      name: 'Palak',
      social: {
        linkedin: 'https://www.linkedin.com/in/palakbansal-05-/'
      },
      image: '/palak.png'
    }
  ];

  const prTeam = [
    {
      name: 'Hardik',
      social: {
        linkedin: 'https://www.linkedin.com/in/hardik-varshney-83052127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      },
      image: '/hardik.jpg'
    },
    {
      name: 'Aditya',
      social: {
        linkedin: 'https://www.linkedin.com/in/aditya-mani-tripathi-985540320/'
      },
      image: '/aditya.jpg'
    },
    {
      name: 'Swasti',
      social: {
        linkedin: '#'
      },
      image: '/nopfp.jpg'
    }
  ];

  const socialMediaTeam = [
    {
      name: 'Saraswati',
      social: {
        linkedin: 'https://www.linkedin.com/in/saraswati-a19a99146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      image: '/saras.jpg'
    },
    {
      name: 'Riya',
      social: {
        linkedin: 'https://www.linkedin.com/in/riya-batra-059025297/'
      },
      image: '/riya.jpg'
    },
    {
      name: 'Ritika',
      social: {
        linkedin: 'https://www.linkedin.com/in/ritika-gaur-b91ab12a6/'
      },
      image: '/ritika.jpg'
    }
  ];

  const damTeam = [
    {
      name: 'Sparsh',
      social: {
        linkedin: '#'
      },
      image: '/sparsh.jpg'
    },
    {
      name: 'Mayank',
      social: {
        linkedin: '#'
      },
      image: '/nopfp.jpg'
    },
    {
      name: 'Lavanya',
      social: {
        linkedin: '#'
      },
      image: '/nopfp.jpg'
    }
  ];

  return (
    <section className="organizers-section" id="organizers">
      <div className="section-container">
        <div className="organizers-header">
          <img src="/abhyudaya.webp" alt="Abhyudaya" className="abhyudaya-logo" />
          <h2 className="section-title">Abhyudaya Core: Organizing</h2>
        </div>
        
        <div className="organizers-layout">
          {/* Left Column - Leads */}
          <div className="leads-column">
            <h3 className="team-title">Leads</h3>
            <div className="leads-grid">
              {leadOrganizers.map((organizer, index) => (
                <motion.div
                  key={organizer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="organizer-card glass-effect"
                >
                  <div className="organizer-image-container">
                    {organizer.image ? (
                      <img 
                        src={organizer.image} 
                        alt={organizer.name} 
                        className="organizer-image" 
                      />
                    ) : (
                      <div className="smiley-placeholder">
                        <FaSmile size={50} color="#FFD700" />
                      </div>
                    )}
                  </div>
                  
                  <div className="organizer-info">
                    <h3 className="organizer-name">{organizer.name}</h3>
                    {organizer.role && <div className="organizer-role">{organizer.role}</div>}
                    
                    <div className="organizer-social">
                      <a href={organizer.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Members by teams */}
          <div className="members-column">
            <h3 className="team-title">Members</h3>
            
            {/* Tech Team */}
            <div className="team-section">
              <h4 className="team-subtitle">Technical Team</h4>
              <div className="team-members-grid">
                {techTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="team-member glass-effect"
                  >
                    <div className="member-image-container">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="member-image" 
                        />
                      ) : (
                        <div className="smiley-placeholder">
                          <FaSmile size={40} color="#4d82d6" />
                        </div>
                      )}
                    </div>
                    <div className="team-member-name">{member.name}</div>
                    <a href={member.social.linkedin} className="team-member-social" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* PR Team */}
            <div className="team-section">
              <h4 className="team-subtitle">PR Team</h4>
              <div className="team-members-grid">
                {prTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="team-member glass-effect"
                  >
                    <div className="member-image-container">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="member-image" 
                        />
                      ) : (
                        <div className="smiley-placeholder">
                          <FaSmile size={40} color="#4d82d6" />
                        </div>
                      )}
                    </div>
                    <div className="team-member-name">{member.name}</div>
                    <a href={member.social.linkedin} className="team-member-social" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Social Media Team */}
            <div className="team-section">
              <h4 className="team-subtitle">Social Media Team</h4>
              <div className="team-members-grid">
                {socialMediaTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="team-member glass-effect"
                  >
                    <div className="member-image-container">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="member-image" 
                        />
                      ) : (
                        <div className="smiley-placeholder">
                          <FaSmile size={40} color="#4d82d6" />
                        </div>
                      )}
                    </div>
                    <div className="team-member-name">{member.name}</div>
                    <a href={member.social.linkedin} className="team-member-social" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* DAM Team */}
            <div className="team-section">
              <h4 className="team-subtitle">DAM Team</h4>
              <div className="team-members-grid">
                {damTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="team-member glass-effect"
                  >
                    <div className="member-image-container">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="member-image" 
                        />
                      ) : (
                        <div className="smiley-placeholder">
                          <FaSmile size={40} color="#4d82d6" />
                        </div>
                      )}
                    </div>
                    <div className="team-member-name">{member.name}</div>
                    <a href={member.social.linkedin} className="team-member-social" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection; 