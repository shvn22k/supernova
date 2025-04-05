import { motion } from 'framer-motion';
import { FaLinkedin, FaSmile } from 'react-icons/fa';

const OrganizersSection = () => {
  const organizers = [
    {
      name: 'Attiuttama Mishra',
      role: 'Faculty Coordinator',
      bio: 'The calm in our chaos, the strength behind the scenes. With unmatched wisdom and steady support, she turns challenges into clarity — and keeps us moving forward.',
      social: {
        linkedin: 'https://www.linkedin.com/in/attiuttama-mishra-10a61a1a9/'
      },
      image: '/maam.jpeg'
    },
    {
      name: 'Abhyudaya Core',
      role: 'Organizing Body',
      bio: '(koi achhi si cool si tagline suggest krdo pls)',
      social: {
        linkedin: 'https://www.linkedin.com/company/abhyudayaclub/posts/?feedView=all'
      },
      image: '/abhyudaya.webp'
    },
    {
      name: 'Kashish Verma',
      role: 'President',
      bio: 'CEO of "lets just do it and see what happens." If it works, it was the plan all along.',
      social: {
        linkedin: 'https://www.linkedin.com/in/kashish-verma-b54a85215/'
      },
      image: '/kashish.jpg'
    },
    {
      name: 'Moksha Kohli',
      role: 'Co-Organizer',
      bio: 'With a knack for building strong corporate ties and sealing game-changing deals, I ensure our hackathon is backed by the best.',
      social: {
        linkedin: 'https://www.linkedin.com/in/moksha-kohli-434513229/'
      },
      image: '/moksha.jpg'
    },
    {
      name: 'Pranshu Kamboj',
      role: 'Operational Lead',
      bio: 'Ensures seamless execution, from logistics to coordination, creating an environment where innovation thrives. Passionate about tech, management, and bringing ideas to life!',
      social: {
        linkedin: 'https://www.linkedin.com/in/pranshu-kamboj-0a6896259/'
      },
      image: '/pranshu.jpg'
    },
    {
      name: 'Satyam Jaiswal',
      role: 'Event coordinator',
      bio: 'Timekeeper, vibe manager, and occasional therapist for panicking speakers. If they had a rupee for every "just one small change," the event would be fully funded.',
      social: {
        linkedin: 'https://www.linkedin.com/in/satyam-jaiswal-1ab701259'
      },
      image: '/satyam.jpg'
    },
    {
      name: 'Shiven Kumar Shandil',
      role: 'Technical Lead',
      bio: 'yoo, i vibe coded this site (need internship for aiml roles :D hire me pls)',
      social: {
        linkedin: 'https://www.linkedin.com/in/shiven-k-58b423212/'
      },
      image: '/shiven.png'
    },
    {
      name: 'Aditi Singh',
      role: 'Social Media Lead',
      bio: 'Breathes reels, speaks in hashtags. Can turn a random moment into peak content and make chaos look curated.',
      social: {
        linkedin: 'https://www.linkedin.com/in/aditi-singh-13686b24a/'
      },
      image: '/aditi.jpeg'
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