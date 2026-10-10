import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy for active section
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "services",
        "learning",
        "contact",
      ];

      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Learning", href: "#learning", id: "learning" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={closeMenu}>
          <span className="logo-badge">TK</span>
          <div className="logo-text">
            <span className="logo-name">Tulsi Kumari</span>
            <span className="logo-role">Web & WordPress Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="active-dot" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          <a
            href="/images/Tulsi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            title="Download verified resume PDF"
          >
            <span>Resume</span>
            <FiDownload className="icon" />
          </a>

          <a href="#contact" className="talk-btn" onClick={closeMenu}>
            <span>Let's Talk</span>
            <FiArrowUpRight className="icon" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-drawer ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="mobile-drawer-header">
            <div className="logo-text">
              <span className="logo-name">Tulsi Kumari</span>
              <span className="logo-role">Web & WordPress Developer</span>
            </div>
          </div>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-actions">
            <a
              href="/images/Tulsi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn full-width"
              onClick={closeMenu}
            >
              <span>Download Resume</span>
              <FiDownload className="icon" />
            </a>
            <a
              href="#contact"
              className="talk-btn full-width"
              onClick={closeMenu}
            >
              <span>Get In Touch</span>
              <FiArrowUpRight className="icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}