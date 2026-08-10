import {
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Personal / Brand */}
          <div className="footer-col">

            <div className="footer-logo">
              <a href="/">Tulsi Shah</a>
            </div>

            <p>
              Helping businesses grow online with modern websites that are
              powerful, responsive & result-driven.
            </p>

            {/* Social Media */}
            <div className="footer-social">

              <a
                href="https://share.google/IWBgNKXHRaDXX96O0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>

              <a
                href="https://www.instagram.com/krishnay_solution/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919315933247?text=Hello!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#portfolio">Portfolio</a>
              </li>

              <li>
                <a href="#process">Process</a>
              </li>

              <li>
                <a href="#blog">Blog</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>

            </ul>

          </div>


          {/* Services */}
          <div className="footer-col">

            <h3>Services</h3>

            <ul>

              <li>Website Design</li>
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Speed Optimization</li>
              <li>Website Maintenance</li>
              <li>E-Commerce Development</li>

            </ul>

          </div>


          {/* Contact */}
          <div className="footer-col">

            <h3>Get In Touch</h3>

            <ul className="footer-contact">

              <li>
                <FaPhoneAlt />
                <a href="tel:+919315933247">
                  +91 9315933247
                </a>
              </li>

              <li>
                <FaEnvelope />
                <a href="mailto:tulsishah668@gmail.com">
                  tulsishah668@gmail.com
                </a>
              </li>

              <li>
                <FaMapMarkerAlt />
                <span>
                  Sector 52, Faridabad, Haryana 121005
                </span>
              </li>

            </ul>

          </div>


          {/* Map */}
          <div className="footer-map">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.227073776488!2d77.2804122!3d28.3519837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd944cfadb165%3A0xab7c64813ed2446e!2sKrishnay%20Solution!5e0!3m2!1sen!2sin!4v1783674713400!5m2!1sen!2sin"
              width="400"
              height="230"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            />

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">
          © 2026 Tulsi Shah. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;