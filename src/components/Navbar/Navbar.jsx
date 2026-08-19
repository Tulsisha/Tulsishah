import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">

        {/* Logo / Name */}
        <div className="logo">
          <a href="/" onClick={closeMenu}>
            Tulsi Shah
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul className="nav-menu">

            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#process" onClick={closeMenu}>
                Process
              </a>
            </li>

         <li>
            <a
              href="/images/Tulsi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              My Resume
            </a>
          </li>

            <li>
              <a href="/contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Let's Talk */}
        <a
          href="/contact"
          className="talk-btn"
          onClick={closeMenu}
        >
          Let's Talk
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;