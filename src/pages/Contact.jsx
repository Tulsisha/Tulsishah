import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import {
  FiSend,
  FiUser,
  FiMail,
  FiPhone,
  FiTag,
  FiEdit3,
  FiShield,
  FiMapPin,
  FiClock,
  FiHeadphones,
} from "react-icons/fi";

import {
  HiOutlineRocketLaunch,
  HiOutlineFaceSmile,
  HiOutlineTrophy,
} from "react-icons/hi2";



const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ============================
  // EMAILJS FORM SUBMIT
  // ============================

 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  setLoading(true);
  setStatus({
    type: "",
    message: "",
  });

  try {
    await emailjs.sendForm(
      "service_a8irajj",
      "template_boyd319",
      form,
      {
        publicKey: "1a7d-ZOxYNI3CJu6z",
      }
    );

    setStatus({
      type: "success",
      message:
        "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    });

    form.reset();

  } catch (error) {
    console.error("EmailJS Error:", error);

    setStatus({
      type: "error",
      message:
        "Sorry! We couldn't send your message. Please try again.",
    });

  } finally {
    setLoading(false);
  }
};

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        {/* Background Decorations */}

        <div className="contact-dots contact-dots-one"></div>
        <div className="contact-dots contact-dots-two"></div>
        <div className="contact-circle-line"></div>

        <div className="contact-container">

          {/* ================= LEFT SIDE ================= */}

          <div className="contact-left">

            <div className="contact-small-title">
              <span>LET'S CONNECT</span>

              <div className="small-title-line">
                <span></span>
                <i></i>
              </div>
            </div>

            <h1 className="contact-main-title">
              Contact <span>Us</span>
            </h1>

            <p className="contact-description">
              We’d love to hear about your project or idea.
              <br />
              Send us a message and we’ll get back to you shortly!
            </p>


            {/* ================= FEATURES ================= */}

            <div className="contact-features">

              <div className="contact-feature">
                <div className="feature-icon">
                  <FiHeadphones />
                </div>

                <div>
                  <h4>Quick Response</h4>
                  <p>
                    We reply within
                    <br />
                    24 hours
                  </p>
                </div>
              </div>


              <div className="contact-feature">
                <div className="feature-icon">
                  <FiShield />
                </div>

                <div>
                  <h4>Trusted Partner</h4>
                  <p>
                    Your success is
                    <br />
                    our priority
                  </p>
                </div>
              </div>


              <div className="contact-feature">
                <div className="feature-icon">
                  <FiUser />
                </div>

                <div>
                  <h4>Client Focused</h4>
                  <p>
                    Tailored solutions for
                    <br />
                    your business
                  </p>
                </div>
              </div>

            </div>


            {/* ================= GET IN TOUCH ================= */}

            <div className="get-touch-card">

              <h2>Get in Touch</h2>

              <div className="touch-heading-line"></div>


              {/* PHONE */}

              <div className="touch-item">

                <div className="touch-icon">
                  <FiPhone />
                </div>

                <div>
                  <h4>Phone</h4>

                  <a href="tel:+919315933247">
                    +91 9315933247
                  </a>
                </div>

              </div>


              {/* EMAIL */}

              <div className="touch-item">

                <div className="touch-icon">
                  <FiMail />
                </div>

                <div>
                  <h4>Email</h4>

                  <a href="mailto:tulsishah668@gmail.com">
                    tulsishah668@gmail.com
                  </a>
                </div>

              </div>


              {/* ADDRESS */}

              <div className="touch-item">

                <div className="touch-icon">
                  <FiMapPin />
                </div>

                <div>
                  <h4>Address</h4>

                  <p>
                   Sector 52, Faridabad
                    <br />
                    Haryana 121005
                  </p>
                </div>

              </div>


              {/* WORKING HOURS */}

              <div className="touch-item touch-last">

                <div className="touch-icon">
                  <FiClock />
                </div>

                <div>
                  <h4>Working Hours</h4>

                  <p>
                    Mon - Sat : 9:30 AM - 7:00 PM
                    <br />
                    Sunday : Closed
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}

          <div className="contact-form-card">

            <div className="form-heading">

              <div className="form-heading-icon">
                <FiSend />
              </div>

              <div>

                <h2>Send Us a Message</h2>

                <p>
                  Fill out the form below and we’ll get back to you as soon
                  as possible.
                </p>

                <div className="form-heading-line"></div>

              </div>

            </div>


            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit}>

              <div className="contact-form-grid">

                {/* NAME */}

                <div className="input-group">

                  <FiUser />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="input-group">

                  <FiMail />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />

                </div>


                {/* PHONE */}

                <div className="input-group">

                  <FiPhone />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />

                </div>


                {/* SUBJECT */}

                <div className="input-group">

                  <FiTag />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="textarea-group">

                <FiEdit3 />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>

              </div>

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              />

              {/* ================= BUTTON ================= */}

              <div className="form-bottom">

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >

                  <span>
                    {loading ? "Sending..." : "Send Message"}
                  </span>

                  <FiSend />

                </button>


                <div className="secure-text">

                  <FiShield />

                  <span>
                    Your information is safe with us.
                  </span>

                </div>

              </div>


              {/* ================= SUCCESS / ERROR ================= */}

              {status.message && (
                <div
                  className={`form-status ${
                    status.type === "success"
                      ? "form-success"
                      : "form-error"
                  }`}
                >
                  {status.message}
                </div>
              )}

            </form>

          </div>

        </div>

        <div className="contact-curve"></div>

      </section>


      {/* ================= MAP & STATS ================= */}

      <section className="contact-bottom-section">

        <div className="contact-bottom-container">


          {/* GOOGLE MAP */}

          <div className="contact-map">

          <iframe
  title="Krishnay Solution Location"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14044.90825542319!2d77.280412!3d28.351984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd944cfadb165%3A0xab7c64813ed2446e!2sKrishnay%20Solution!5e0!3m2!1sen!2sin!4v1786027695076!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>

          </div>


          {/* ================= STATS ================= */}

          <div className="contact-stats">


            {/* PROJECTS */}

            <div className="stat-item">

              <div className="stat-icon">
                <HiOutlineRocketLaunch />
              </div>

              <div>

                <h3>50+</h3>

                <h4>Projects Completed</h4>

                <p>
                  Successfully delivered
                  <br />
                  digital solutions.
                </p>

              </div>

            </div>


            {/* CLIENTS */}

            <div className="stat-item">

              <div className="stat-icon">
                <HiOutlineFaceSmile />
              </div>

              <div>

                <h3>30+</h3>

                <h4>Happy Clients</h4>

                <p>
                  Satisfied clients who
                  <br />
                  trust our work.
                </p>

              </div>

            </div>


            {/* EXPERIENCE */}

            <div className="stat-item">

              <div className="stat-icon">
                <HiOutlineTrophy />
              </div>

              <div>

                <h3>5+</h3>

                <h4>Years Experience</h4>

                <p>
                  Delivering innovative
                  <br />
                  web solutions.
                </p>

              </div>

            </div>


            {/* SUPPORT */}

            <div className="stat-item">

              <div className="stat-icon">
                <FiHeadphones />
              </div>

              <div>

                <h3>24/7</h3>

                <h4>Support</h4>

                <p>
                  We’re here to help you
                  <br />
                  whenever you need.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Contact;