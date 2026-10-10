import { useState, useEffect, useRef } from "react";
import {
  FiDownload,
  FiArrowUpRight,
  FiCode,
  FiLayout,
  FiZap,
  FiShoppingBag,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featureCards = [
    {
      icon: <FiLayout className="about-feature-icon text-cyan" />,
      title: "Responsive UI Implementation",
      description:
        "Mobile-first frontend execution ensuring flawless user experiences across smartphones, tablets, laptops, and ultra-wide displays.",
      tag: "UI Engineering",
    },
    {
      icon: <FiShoppingBag className="about-feature-icon text-purple" />,
      title: "WooCommerce Websites",
      description:
        "End-to-end e-commerce store setups, product catalog architectures, secure checkout workflows, and conversion-focused UX.",
      tag: "E-Commerce",
    },
    {
      icon: <FiZap className="about-feature-icon text-amber" />,
      title: "Website Performance & SEO Fundamentals",
      description:
        "Asset compression, Core Web Vitals optimization, clean semantic HTML5 markup, and structured metadata for search visibility.",
      tag: "Speed & Ranking",
    },
    {
      icon: <FiCode className="about-feature-icon text-emerald" />,
      title: "Growing Expertise: React, Python & Django",
      description:
        "Expanding modern frontend state management in React.js and database-driven backend engineering using Python and Django ORM.",
      tag: "Next Horizon",
    },
  ];

  const highlights = [
    "1.5+ Years Commercial Experience with agencies & freelance clients",
    "20+ Delivered Websites with responsive precision and clean styling",
    "Specialized in WordPress, Elementor Pro & Divi theme customization",
    "Expanding into modern React, JavaScript (ES6+), and Python/Django",
  ];

  return (
    <section
      className={`about-section ${isVisible ? "about-in-view" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> CREATIVE DEVELOPER PROFILE
          </div>
          <h2 className="section-title">
            About <span className="highlight-text">Tulsi Shah</span>
          </h2>
          <p className="section-subtitle">
            Blending clean UI aesthetics, commercial WordPress mastery, and modern frontend
            engineering to build fast, accessible digital experiences.
          </p>
        </div>

        {/* Main About Section Content: Profile Visual & Introduction */}
        <div className="about-creative-grid">
          {/* Left Column: Creative Developer Profile Visual */}
          <div className="about-profile-visual-col">
            <div className="about-visual-canvas">
              {/* Layered Background Glow Orbs */}
              <div className="visual-glow-orb orb-primary" aria-hidden="true" />
              <div className="visual-glow-orb orb-secondary" aria-hidden="true" />

              {/* Main Profile Glass Workstation Card */}
              <div className="profile-glass-card">
                {/* Window Header */}
                <div className="profile-card-window-bar">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="window-title">TulsiShah.profile.jsx</div>
                  <div className="window-status-pill">
                    <span className="pulsing-status-dot" />
                    <span>Open to Roles</span>
                  </div>
                </div>

                {/* Identity Header */}
                <div className="profile-identity-header">
                  <div className="profile-avatar-emblem">
                    <span className="emblem-initials">TS</span>
                    <span className="emblem-ring" />
                  </div>
                  <div className="profile-identity-info">
                    <h3 className="profile-name">Tulsi Shah</h3>
                    <p className="profile-role">Web Designer & WordPress Developer</p>
                    <span className="profile-location-chip">
                      📍 Delhi NCR, India (Available for Remote)
                    </span>
                  </div>
                </div>

                {/* Code / Configuration Snippet */}
                <div className="profile-code-block" aria-label="Developer summary code">
                  <div className="code-line">
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-var">developer</span> = &#123;
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">role</span>:{" "}
                    <span className="code-string">"Web Designer & WordPress Dev"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">experience</span>:{" "}
                    <span className="code-string">"1.5+ Years Commercial"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">coreSkills</span>: [
                    <span className="code-string">"WordPress"</span>,{" "}
                    <span className="code-string">"Elementor"</span>,{" "}
                    <span className="code-string">"Divi"</span>,{" "}
                    <span className="code-string">"React"</span>,{" "}
                    <span className="code-string">"Python"</span>],
                  </div>
                  <div className="code-line indent">
                    <span className="code-prop">approach</span>:{" "}
                    <span className="code-string">"Pixel-Perfect & Fast Performance"</span>
                  </div>
                  <div className="code-line">&#125;;</div>
                </div>

                {/* Quick Profile Metric Tiles */}
                <div className="profile-quick-metrics">
                  <div className="quick-metric-tile">
                    <span className="metric-number">1.5+</span>
                    <span className="metric-label">Years Exp</span>
                  </div>
                  <div className="quick-metric-divider" />
                  <div className="quick-metric-tile">
                    <span className="metric-number">20+</span>
                    <span className="metric-label">Websites Built</span>
                  </div>
                  <div className="quick-metric-divider" />
                  <div className="quick-metric-tile">
                    <span className="metric-number">B.Tech</span>
                    <span className="metric-label">Comp Science</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badges */}
              <div className="floating-badge badge-top-right">
                <FiLayout className="badge-icon" />
                <span>Responsive Web Design</span>
              </div>

              <div className="floating-badge badge-bottom-left">
                <FaWordpress className="badge-icon" />
                <span>Elementor & Divi Specialist</span>
              </div>

              <div className="floating-badge badge-bottom-right">
                <FiZap className="badge-icon" />
                <span>Speed & SEO Optimized</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Introduction */}
          <div className="about-introduction-col">
            <div className="about-intro-header-block">
              <h3 className="about-main-heading">
                Designing Experiences. <span className="highlight-text">Building the Web.</span>
              </h3>
              <p className="about-lead-text">
                I'm <strong>Tulsi Shah</strong>, a Web Designer and WordPress Developer with 1.5+ years
                of professional experience creating responsive, user-friendly websites. I combine visual design,
                WordPress customization, frontend engineering, and website optimization to build
                effective digital solutions.
              </p>
              <p className="about-narrative-text">
                Having delivered 20+ live client projects across corporate, medical, and e-commerce domains,
                I focus on translating design concepts into high-performing websites. Whether engineering custom
                Elementor layouts, structuring WooCommerce catalogs, or diving into modern React and Python workflows,
                I prioritize clean code, responsive design, and measurable results.
              </p>
            </div>

            {/* Key Professional Highlights */}
            <div className="about-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-item">
                  <FiCheckCircle className="highlight-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Four Feature Cards directly below the main About section content */}
        <div className="about-feature-cards-flex">
          {featureCards.map((item, idx) => (
            <div
              key={item.title}
              className="about-feature-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="about-feature-card-header">
                <div className="about-feature-icon-bubble">{item.icon}</div>
                <span className="about-feature-tag">{item.tag}</span>
              </div>
              <h4 className="about-feature-card-title">{item.title}</h4>
              <p className="about-feature-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Action CTAs repositioned directly beneath the four cards */}
        <div className="about-cta-row">
          <a
            href="/images/Tulsi-Resume.pdf"
            download="Tulsi_Shah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn-primary"
            title="Download verified resume PDF"
          >
            <span>Download Resume</span>
            <FiDownload className="icon" />
          </a>

          <a href="#projects" className="about-btn-secondary">
            <span>View Projects</span>
            <FiArrowUpRight className="icon" />
          </a>

          <a href="#contact" className="about-btn-tertiary">
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
