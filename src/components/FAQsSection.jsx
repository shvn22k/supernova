import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SuperNova Hackathon?",
      answer: "SuperNova is an 24-hour in-person hackathon where creativity and technical skills come together in a space-themed innovation challenge. Selected participants will gather for a day of focused development, teamwork, and problem-solving."
    },
    {
      question: "Who can participate?",
      answer: "SuperNova is open to students, professionals, and tech enthusiasts. Whether you're an experienced developer or just starting your coding journey, everyone is welcome to apply. The only requirement is a passion for innovation and problem-solving."
    },
    {
      question: "How do I register?",
      answer: "Applications will are on Devfolio and Unstop. You'll need to create a team of 2-4 members and submit a preliminary proposal. Selected teams will be invited to participate in the in-person event."
    },
    {
      question: "Do I need to know coding to participate?",
      answer: "While having some technical skills is beneficial, teams work best with a mix of skills. You could contribute with design, business strategy, presentation skills, or domain knowledge even if you're not a coder."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you might need for your project, and a valid ID. We'll provide food, beverages, and a workspace for the duration of the event."
    },
    {
      question: "Are there any theme restrictions?",
      answer: "Projects should align with one of our six themes: AI/ML, Blockchain, Healthcare, IoT/Hardware Solutions, Sustainability, or Open Innovation. Within these themes, your creativity has no bounds."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on originality, technical complexity, design, practical implementation, alignment with the chosen theme, and presentation. A panel of industry experts will serve as judges."
    },
    {
      question: "Can we start working on our project before the hackathon?",
      answer: "No, all coding and development must be done during the hackathon. You can come with ideas and plans, but the actual implementation should happen during the event."
    }
  ];

  return (
    <section className="faqs-section" id="faqs">
      <div className="section-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="faqs-container"
        >
          <div className="faqs-icon-container">
            <FaQuestionCircle className="faqs-main-icon" />
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item glass-effect ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-icon"
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="contact-question glass-effect"
        >
          <h3>Still have questions?</h3>
          <p>Reach out to us at <a href="mailto:help.supernovahacks@gmail.com">help.supernovahacks@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection; 