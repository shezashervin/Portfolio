import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:shezashervin7@gmail.com" className="btn btn-primary contact-btn">
            Say Hello
          </a>
        </div>

        <div className="contact-footer">
          <div className="social-links">
            <a href="https://github.com/shezashervin" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sheza-shervin-b017b1386/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shezashervin7@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
          <p className="copyright">
            Designed & Built by Sheza Shervin Jamal &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
