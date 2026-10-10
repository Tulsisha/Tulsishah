import { lazy, Suspense } from "react";
const CinematicHeroCanvas = lazy(() =>
  import("../components/ThreeCanvas/CinematicHeroCanvas")
);
import AboutSection from "../components/About/AboutSection";
import SkillsSection from "../components/Skills/SkillsSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import ServicesSection from "../components/Services/ServicesSection";
import LearningSection from "../components/Learning/LearningSection";
import ContactSection from "../components/Contact/ContactSection";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <main className="portfolio-home-root">
      {/* ========================================================
          1. HERO — CINEMATIC OPENING SECTION
      ======================================================== */}
      <section className="hero-section" id="hero">
        {/* Cinematic 3D Abstract Sculpture Canvas */}
        <Suspense fallback={<div className="hero-fallback-gradient" />}>
          <CinematicHeroCanvas />
        </Suspense>

        {/* Ambient Dark Navy Gradient Vignette */}
        <div className="hero-gradient-overlay" />

        <div className="hero-content-container">
          <div className="hero-cinematic-grid">
            {/* Left Content Column */}
            <div className="hero-text-col">
              <div className="hero-availability-badge">
                <span className="pulsing-green-dot" />
                <span>Available for Full-Time & Client Roles</span>
              </div>

              <h1 className="hero-headline">
                Hi, I'm <span className="hero-name-highlight">Tulsi Shah</span>
                <span className="hero-title-sub">
                  Web Designer | WordPress Developer | Frontend Developer
                </span>
              </h1>

              <p className="hero-description">
                I design and develop responsive, user-friendly websites with a focus
                on clean UI, performance, and seamless user experience. Combining 1.5+ years
                of commercial WordPress mastery with modern frontend engineering in React and Python.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions-row">
                <a href="#projects" className="hero-btn-primary">
                  <span>View My Projects</span>
                  <FiArrowRight className="icon" />
                </a>

                <a
                  href="/images/Tulsi-Resume.pdf"
                  download="Tulsi_Shah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-secondary"
                  title="Download verified resume PDF"
                >
                  <FiDownload className="icon" />
                  <span>Download Resume</span>
                </a>

                <a href="#contact" className="hero-btn-tertiary">
                  <FiMail className="icon" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Quick Hero Highlights */}
              <div className="hero-stats-bar">
                <div className="hero-stat-item">
                  <span className="stat-val">1.5+</span>
                  <span className="stat-lbl">Years Experience</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat-item">
                  <span className="stat-val">20+</span>
                  <span className="stat-lbl">Websites & Builds</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat-item">
                  <span className="stat-val">100%</span>
                  <span className="stat-lbl">Client Focused</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat-item">
                  <span className="stat-val">SEO</span>
                  <span className="stat-lbl">& Fast Performance</span>
                </div>
              </div>
            </div>

            {/* Right Side: Spatial Column For The 3D Sculpture */}
            <div className="hero-sculpture-col" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="hero-scroll-indicator"
          aria-label="Scroll to About section"
        >
          <span className="mouse-wheel-icon">
            <span className="wheel-dot" />
          </span>
          <span className="scroll-text">Scroll Down</span>
        </a>
      </section>

      {/* ========================================================
          2. ABOUT ME SECTION
      ======================================================== */}
      <AboutSection />

      {/* ========================================================
          3. TECHNICAL SKILLS SECTION
      ======================================================== */}
      <SkillsSection />

      {/* ========================================================
          4. PROFESSIONAL EXPERIENCE & EDUCATION SECTION
      ======================================================== */}
      <ExperienceSection />

      {/* ========================================================
          5. FEATURED PROJECTS SECTION
      ======================================================== */}
      <ProjectsSection />

      {/* ========================================================
          6. SERVICES OFFERED SECTION
      ======================================================== */}
      <ServicesSection />

      {/* ========================================================
          7. LEARNING & DEVELOPMENT SECTION
      ======================================================== */}
      <LearningSection />

      {/* ========================================================
          8. CONTACT SECTION
      ======================================================== */}
      <ContactSection />
    </main>
  );
}