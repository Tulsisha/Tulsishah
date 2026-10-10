import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "", // 'success' | 'error' | ''
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Message).",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.user_email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Using verified EmailJS service & template credentials
      await emailjs.sendForm(
        "service_a8irajj",
        "template_boyd319",
        formRef.current,
        {
          publicKey: "1a7d-ZOxYNI3CJu6z",
        }
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you within 24 hours.",
      });

      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "error",
        message:
          "Unable to send message directly via the form. Please email me directly at Tulsishah668@gmail.com or WhatsApp me.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> GET IN TOUCH
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="highlight-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need a responsive website, or looking to discuss
            full-time and freelance opportunities? Reach out anytime!
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-panel">
            <div className="contact-panel-intro">
              <h3 className="panel-title">Contact Information</h3>
              <p className="panel-desc">
                I am based in Faridabad (Delhi NCR) and open to remote, hybrid, or on-site
                opportunities worldwide.
              </p>
            </div>

            <div className="contact-cards-list">
              <a
                href="mailto:Tulsishah668@gmail.com"
                className="contact-info-card"
                title="Send an email"
              >
                <div className="contact-card-icon mail">
                  <FiMail />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Email Address</span>
                  <span className="contact-value">Tulsishah668@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+919315933247"
                className="contact-info-card"
                title="Call phone number"
              >
                <div className="contact-card-icon phone">
                  <FiPhone />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Phone & Mobile</span>
                  <span className="contact-value">+91 9315933247</span>
                </div>
              </a>

              <a
                href="https://wa.me/919315933247?text=Hello%20Tulsi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card whatsapp"
                title="Chat on WhatsApp"
              >
                <div className="contact-card-icon wa">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Instant Chat</span>
                  <span className="contact-value">+91 9315933247 (WhatsApp)</span>
                </div>
              </a>

              <div className="contact-info-card static">
                <div className="contact-card-icon location">
                  <FiMapPin />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">
                    Ballabgarh, Faridabad, Haryana, India
                  </span>
                </div>
              </div>

              <div className="contact-info-card static">
                <div className="contact-card-icon hours">
                  <FiClock />
                </div>
                <div className="contact-card-content">
                  <span className="contact-label">Working Hours</span>
                  <span className="contact-value">Mon – Sat: 9:30 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-bar">
              <span className="social-label">Connect Online:</span>
              <div className="social-links-row">
                <a
                  href="https://github.com/Tulsisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tulsi-shah668/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send a Message</h3>
            <p className="panel-desc">
              Fill out the form below and I will review your message immediately.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="interactive-contact-form"
              noValidate
            >
              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="user_name">
                    Your Name <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      placeholder="e.g. John Doe"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="user_email">
                    Your Email <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      placeholder="e.g. john@example.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-with-icon">
                  <FiMessageSquare className="input-icon" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Web Design Project or Job Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, timeline, or requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`form-status-alert ${
                    status.type === "success" ? "success" : "error"
                  }`}
                  role="alert"
                >
                  {status.type === "success" ? (
                    <FiCheckCircle className="status-icon" />
                  ) : (
                    <FiAlertCircle className="status-icon" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="form-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
