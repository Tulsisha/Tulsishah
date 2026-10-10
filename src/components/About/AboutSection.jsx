import {
  FiDownload,
  FiArrowUpRight,
  FiCode,
  FiLayout,
  FiSearch,
} from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";

export default function AboutSection() {
  const pillars = [
    {
      icon: <FiLayout className="pillar-icon" />,
      title: "UI/UX & Visual Web Design",
      desc: "Creating visually engaging, intuitive interfaces focused on clean hierarchy, brand alignment, and delightful user experiences.",
    },
    {
      icon: <FaWordpress className="pillar-icon" />,
      title: "WordPress & CMS Expertise",
      desc: "Specializing in Elementor, Divi, WooCommerce, and custom themes to deliver easily manageable dynamic client websites.",
    },
    {
      icon: <FiCode className="pillar-icon" />,
      title: "Clean Frontend Development",
      desc: "Writing semantic HTML5, modern CSS3, and JavaScript with Bootstrap 5 and expanding into React.js for scalable interactive UIs.",
    },
    {
      icon: <FiSearch className="pillar-icon" />,
      title: "SEO & Performance Speed",
      desc: "Ensuring every website is light, fast-loading, structured for search engines, and verified with W3C and Google standards.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> PROFESSIONAL PROFILE
          </div>
          <h2 className="section-title">
            About <span className="highlight-text">Tulsi Kumari</span>
          </h2>
          <p className="section-subtitle">
            A practical Web Designer and Frontend Developer blending visual creativity
            with structured technical execution.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Image & Stats Card */}
          <div className="about-visual-col">
            <div className="about-image-card">
              <div className="about-image-frame">
                <img
                  src="/images/about.png"
                  alt="Tulsi Kumari - Web Designer & WordPress Developer"
                  className="about-portrait"
                  loading="lazy"
                />
                <div className="about-portrait-overlay" />
              </div>

              {/* Floating Stat Badge */}
              <div className="floating-stat-badge">
                <span className="stat-number">1.5+</span>
                <span className="stat-label">Years of Industry Experience</span>
              </div>

              <div className="floating-location-badge">
                <span className="dot-pulse" />
                <span>Delhi NCR / Remote</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="about-metrics-row">
              <div className="metric-box">
                <span className="metric-value">20+</span>
                <span className="metric-text">Websites Delivered</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">100%</span>
                <span className="metric-text">Responsive Design</span>
              </div>
              <div className="metric-box">
                <span className="metric-value">B.Tech</span>
                <span className="metric-text">Computer Science</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="about-content-col">
            <div className="about-story-box">
              <h3 className="story-heading">
                Bridging Creative Design & Robust Frontend Code
              </h3>
              <p className="story-p">
                I am a <strong>Web Designer</strong> with over 1.5 years of professional experience
                designing and launching responsive, user-friendly websites for diverse businesses,
                from luxury hospitality and fashion boutiques to heavy engineering and education providers.
              </p>
              <p className="story-p">
                My core strength is building scalable websites using <strong>WordPress, Elementor, Divi Builder,
                WooCommerce, HTML5, CSS3, Bootstrap 5, and JavaScript</strong>. I bridge the gap between
                raw design mockups and high-performance production code—ensuring clean typography,
                mobile responsiveness, fast Core Web Vitals, and on-page technical SEO.
              </p>
              <p className="story-p">
                To expand my engineering horizons, I am actively developing full-stack competencies
                in <strong>React.js, Python, and Django</strong>, having built operational database-backed
                systems like my Attendance Management System.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-header">
                    {pillar.icon}
                    <h4>{pillar.title}</h4>
                  </div>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="about-actions-row">
              <a
                href="/images/Tulsi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download-resume"
              >
                <span>Download Verified Resume</span>
                <FiDownload className="icon" />
              </a>
              <a href="#projects" className="btn-view-work">
                <span>Explore Featured Work</span>
                <FiArrowUpRight className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
