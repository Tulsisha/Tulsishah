import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUp,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-logo-badge">TS</span>
              <div className="footer-brand-text">
                <h3>Tulsi Shah</h3>
                <p>Web Designer & WordPress Developer</p>
              </div>
            </div>

            <p className="footer-about-text">
              Crafting responsive, high-performing websites and digital solutions
              with clean code, modern UI/UX design, and practical CMS engineering.
            </p>

            <div className="footer-social-links">
              <a
                href="https://github.com/Tulsisha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer-social-btn"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/tulsi-shah668/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-social-btn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919315933247?text=Hello%20Tulsi,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Message"
                className="footer-social-btn wa"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="footer-resume-cta">
              <a
                href="/images/Tulsi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-resume-link"
              >
                <FiDownload className="icon" />
                <span>Download Verified Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills & Tech</a>
              </li>
              <li>
                <a href="#experience">Experience & Education</a>
              </li>
              <li>
                <a href="#projects">Featured Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#learning">Learning & Growth</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">WordPress Website Development</a>
              </li>
              <li>
                <a href="#services">Elementor & Divi Customization</a>
              </li>
              <li>
                <a href="#services">Responsive Web Design</a>
              </li>
              <li>
                <a href="#services">Landing Page Development</a>
              </li>
              <li>
                <a href="#services">WooCommerce Online Stores</a>
              </li>
              <li>
                <a href="#services">Website Speed Optimization</a>
              </li>
              <li>
                <a href="#services">Basic On-Page SEO</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:Tulsishah668@gmail.com">
                  Tulsishah668@gmail.com
                </a>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:+919315933247">+91 9315933247</a>
              </li>
              <li>
                <FiMapPin className="contact-icon" />
                <span>Ballabgarh, Faridabad, Haryana 121005</span>
              </li>
              <li className="live-portfolio-item">
                <FiExternalLink className="contact-icon" />
                <a
                  href="https://tulsishah.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tulsishah.netlify.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Tulsi Shah. All rights reserved.
            Built with React & Three.js.
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <FiArrowUp className="icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}