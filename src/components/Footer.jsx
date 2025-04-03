import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <a href="mailto:acse.club@glbitm.ac.in" className="footer-link">
            <FaEnvelope /> acse.club@glbitm.ac.in
          </a>
          <a href="tel:+1234567890" className="footer-link">
            <FaPhone /> let me know kiska number daalu
          </a>
          <a href="#location" className="footer-link">
            <FaMapMarkerAlt /> G.L. Bajaj Institute of Technology
          </a>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <a href="#about" className="footer-link">About</a>
          <a href="#timeline" className="footer-link">Timeline</a>
          <a href="#prizes" className="footer-link">Prizes</a>
          <a href="#themes" className="footer-link">Themes</a>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <a href="https://www.instagram.com/abhyudaya_glbajaj/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/company/abhyudayaclub/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaDiscord /> Discord
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Supernova Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 