import { motion } from 'framer-motion';
import { FaLinkedin, FaSmile } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const OrganizersSection = () => {
  const organizers = [
    {
      name: 'Attiuttama Mishra',
      role: 'Faculty Coordinator',
      bio: 'The calm in our chaos, the strength behind the scenes. With unmatched wisdom and steady support, she turns challenges into clarity.',
      social: {
        linkedin: 'https://www.linkedin.com/in/attiuttama-mishra-10a61a1a9/'
      },
      image: '/maam.jpeg'
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
      name: ' Harshil Srivastav',
      role: 'Co-Organizer',
      bio: 'With my skill in establishing robust corporate relationships and closing impactful deals, I guarantee our hackathon has the backing of the best.',
      social: {
        linkedin: 'https://www.linkedin.com/in/harshil-srivastav/'
      },
      image: '/harshil.jpg'
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
      name: 'Tarun Kaushik',
      role: 'Creative Production Lead',
      bio: 'turning random ideas into cool stuff always behind the camera and always chasing that “yo, this looks sick” moment.',
      social: {
        linkedin: 'https://www.linkedin.com/in/tarunkaushik1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      },
      image: 'tarun.jpg' 
    },
    {
      name: 'Saraswati',
      role: 'DAM Lead',
      bio: 'crafting compelling narratives through innovative visuals and engaging content',
      social: {
        linkedin: 'https://www.linkedin.com/in/saraswati-a19a99146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      },
      image: 'saras.jpg' 
    },
    {
      name: 'Shiven Kumar Shandil',
      role: 'Technical Lead',
      bio: 'heyy, i vibe coded this site (need internship for aiml roles :D hire me pls)',
      social: {
        linkedin: 'https://www.linkedin.com/in/shiven-k-58b423212/'
      },
      image: '/shiven.png'
    },
    {
      name: 'Kunal Rohilla',
      role: 'General Manager',
      bio: 'The behind-the-scenes wizard who makes the impossible happen. Crisis solver, timeline bender, and professional pizza orderer',
      social: {
        linkedin: 'https://www.linkedin.com/in/kunal-rohilla-793a7931b/'
      },
      image: '/kunal.jpg' // Add image path when available
    },
    {
      name: 'Hardik Varshney',
      role: 'PR Lead',
      bio: 'The hype architect. Turns caffeine into headlines and makes technical jargon actually sound cool.',
      social: {
        linkedin: 'https://www.linkedin.com/in/hardik-varshney-83052127b/'
      },
      image: '/hardik.jpg' // Add image path when available
    },
    {
      name: 'Riya Batra',
      role: 'Social Media Lead',
      bio: 'Breathes reels, speaks in hashtags. Can turn a random moment into peak content and make chaos look curated.',
      social: {
        linkedin: 'https://www.linkedin.com/in/riya-batra-059025297/'
      },
      image: '/riya.jpg'
    },
  ];

  return (
    <section className="organizers-section" id="organizers">
      <div className="section-container">
        <h2 className="section-title">Meet the Organizers</h2>
        
        <div className="organizers-header-container">
          <a 
            href="https://www.linkedin.com/company/abhyudayaclub/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer"
            className="organizers-logo-link"
          >
            <img 
              src="/abhyudaya.webp"
              alt="Abhyudaya Core" 
              className="abhyudaya-logo" 
            />
          </a>
          
          <p className="organizers-description">
            SuperNova Hackathon is organized by a dedicated team of professionals passionate about technology,
            education, and creating opportunities for innovation. Get to know the people behind the event!
          </p>
        </div>
        
        <div className="organizers-grid-compact">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
              className="organizer-card-compact glass-effect"
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
                    <FaSmile size={40} color="#FFD700" />
                  </div>
                )}
              </div>
              
              <div className="organizer-info">
                <h3 className="organizer-name">{organizer.name}</h3>
                <div className="organizer-role">{organizer.role}</div>
                <p className="organizer-bio">{organizer.bio}</p>
                
                <div className="organizer-social">
                  {organizer.social.linkedin ? (
                    <a href={organizer.social.linkedin} className="social-link">
                      <FaLinkedin />
                    </a>
                  ) : organizer.social.x ? (
                    <a href={organizer.social.x} className="social-link">
                      <FaXTwitter />
                    </a>
                  ) : null}
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