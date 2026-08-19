import "../styles/Home.css";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact
} from "react-icons/fa";

import {
  SiDjango,
  SiWordpress,
  SiBootstrap,
  SiGit,
  SiGithub
} from "react-icons/si";

import { FaPaintBrush } from "react-icons/fa";

import {
  FiTarget,
  FiEye,
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiLayout,
  FiMonitor,
  FiDatabase,
  FiGitBranch,
  FiPenTool,
  FiServer,
  FiExternalLink,
  FiShare,
  FiSearch,
  FiFileText,
  FiCheckSquare
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaLaptopCode,
  FaSearch,
  FaShoppingCart,
  FaTachometerAlt,
  FaPalette,
  FaCode,
  FaRocket
} from "react-icons/fa";

import { FaUserCheck } from "react-icons/fa6";

import { MdOutlineDesignServices } from "react-icons/md";

import { HiOutlineSupport } from "react-icons/hi";
const portfolioData = [
  {
    id: 1,
    title: "Mary's Chalet",
    category: "Hotel Website",
    image: "/images/mary.jpg",
    link: "https://maryschalet.com/",
  },
  {
    id: 2,
    title: "Hues & Style",
    category: "Fashion Website",
    image: "/images/hues.webp",
    link: "https://huesandstyles.net/",
  },
  {
    id: 3,
    title: "Marble Sky Corp",
    category: "Corporate Website",
    image: "/images/marble.jpg",
    link: "https://marbleskycorp.com/",
  },
  {
    id: 4,
    title: "EGS India",
    category: "Business Website",
    image: "/images/envi.webp",
    link: "https://egsindia.co.in/",
  },
  {
    id: 5,
    title: "Arshya Engg",
    category: "Business Website",
    image: "/images/arshya.png",
    link: "https://aefpl.com/",
  },
  {
  id: 6,
  title: "Bloom Car Rental",
  category: "Business Website",
  image: "/images/bloomcar.jpg",
  link: "https://www.bloomcarrental.co.in/",
},
{
  id: 7,
  title: "Dream Spire Education",
  category: "Education Website",
  image: "/images/CS.jpeg",
  link: "https://dreamspireeducation.com/",
},
];

// process data====================

const processData = [
  {
    id: "01",
    title: "Discover",
    description: "Understanding your business & goals.",
    icon: <FiSearch />,
    color: "blue",
  },
  {
    id: "02",
    title: "Plan",
    description: "Planning structure, features & strategy.",
    icon: <FiFileText />,
    color: "purple",
  },
  {
    id: "03",
    title: "Design",
    description: "Creating modern & unique UI/UX.",
    icon: <MdOutlineDesignServices />,
    color: "blue",
  },
  {
    id: "04",
    title: "Develop",
    description: "Building fast, responsive websites.",
    icon: <FiCode />,
    color: "green",
  },
  {
    id: "05",
    title: "Test",
    description: "Testing speed, bugs & responsiveness.",
    icon: <FiCheckSquare />,
    color: "cyan",
  },
  {
    id: "06",
    title: "Launch",
    description: "Launching & providing ongoing support.",
    icon: <FaRocket />,
    color: "orange",
  },
];
// world cloud data====================

const words = [
  { text: "SOFTWARE ENGINEERING", x: 36.8, y: 85.2, size: 76, color: "hero" },
  { text: "PROGRAM", x: 78.9, y: 38.5, size: 55, color: "dark" },
  { text: "CRM", x: 45.6, y: 56.5, size: 54, color: "dark2" },
  { text: "WEBSITE DESIGN", x: 35.2, y: 67.6, size: 52, color: "dark" },
  { text: "DEVELOPMENT", x: 50.8, y: 17.9, size: 49, color: "dark" },
  { text: "CODE", x: 59.7, y: 26.6, size: 49, color: "dark2" },

  { text: "DEVELOPER", x: 21.9, y: 43.2, size: 44, rotate: 90, color: "white" },
  { text: "E-COMMERCE", x: 70.3, y: 51.1, size: 41, color: "white" },
  { text: "PROGRAMMER", x: 35.6, y: 25.4, size: 41, rotate: 90, color: "white" },

  { text: "BUSINESS", x: 52, y: 36.4, size: 40, color: "white" },
  { text: "GMB", x: 67.2, y: 64.4, size: 40, color: "dark2" },
  { text: "SOFTWARE", x: 75.4, y: 73.3, size: 40, rotate: 90, color: "white" },
  { text: "PROGRAMMING", x: 46.7, y: 75.4, size: 40, color: "light" },

  { text: "TECHNOLOGY", x: 10.2, y: 47.9, size: 38, color: "light" },
  { text: "APPLICATION", x: 9.5, y: 59.2, size: 38, color: "medium" },

  { text: "LANGUAGE", x: 80.9, y: 71.7, size: 36, rotate: 90, color: "dark2" },

  { text: "WEBSITE DEVELOPMENT", x: 85, y: 25.2, size: 33, color: "dark2" },
  { text: "APP DEVELOPMENT", x: 50, y: 9.4, size: 33, color: "light" },
  { text: "INFORMATION", x: 91.5, y: 54.4, size: 33, color: "white" },

  { text: "ENGINEER", x: 52, y: 48.6, size: 32, color: "dark2" },
  { text: "ENGINEERING", x: 10.8, y: 34.5, size: 32, color: "light" },

  { text: "INNOVATION", x: 32.7, y: 59.9, size: 30, color: "dark2" },
  { text: "WEB", x: 85.6, y: 46, size: 30, color: "medium" },
  { text: "DIGITAL", x: 13.2, y: 70.2, size: 30, color: "medium" },
  { text: "MAN", x: 40, y: 49.4, size: 29, color: "dark2" },

  { text: "SHOPIFY WEBSITE", x: 46.7, y: 42.7, size: 27, color: "light" },
  { text: "SCIENCE", x: 43.2, y: 27, size: 27, color: "light" },
  { text: "API", x: 26.9, y: 32.9, size: 27, color: "dark2" },

  { text: "SCREEN", x: 70.3, y: 15.9, size: 25, color: "medium" },
  { text: "ALGORITHM", x: 27.1, y: 17.5, size: 25, color: "dark2" },
  { text: "TESTING", x: 61.3, y: 57.6, size: 25, color: "dark2" },
  { text: "CODING", x: 84.9, y: 30.8, size: 25, color: "medium" },

  { text: "MOBILE APPLICATION", x: 18.2, y: 75.5, size: 24, color: "medium" },
  { text: "AUTOMATION", x: 64.3, y: 71.8, size: 24, color: "medium" },
  { text: "ARCHITECTURE", x: 90.1, y: 65, size: 24, color: "dark2" },
  { text: "UX/UI", x: 13.5, y: 26.8, size: 24, color: "light" },

  { text: "SECURITY", x: 30.8, y: 53.4, size: 22, color: "dark2" },
  { text: "DATUM", x: 64.4, y: 40.2, size: 22, color: "dark2" },
  { text: "CYBER", x: 64.6, y: 33.1, size: 22, color: "medium" },
  { text: "DATABASE", x: 64.6, y: 45.4, size: 22, color: "white" },
  { text: "NETWORK", x: 28.9, y: 42.7, size: 22, color: "dark2" },

  { text: "FRONTEND", x: 57.6, y: 64.6, size: 21, color: "medium" },
  { text: "BACKEND", x: 76.3, y: 31.1, size: 21, color: "medium" },
  { text: "COMPUTER", x: 9.7, y: 40.5, size: 21, color: "dark2" },
  { text: "TECHNICAL", x: 28.8, y: 26, size: 21, color: "light" },
  { text: "RESPONSIVE", x: 29.7, y: 48.9, size: 17, color: "light" },

  { text: "REACT", x: 93.7, y: 44.1, size: 21, color: "light" },
  { text: "JAVASCRIPT", x: 74.3, y: 45.2, size: 19, color: "medium" },

  { text: "INDUSTRIAL", x: 9.4, y: 53.3, size: 16, color: "light" },
  { text: "OPTIMIZATION", x: 28.4, y: 12.9, size: 16, color: "dark2" },
  { text: "PRODUCT", x: 28.2, y: 37.8, size: 16, color: "light" },
  { text: "SEO", x: 50.1, y: 25, size: 16, color: "light" },

  { text: "INTERNET", x: 41.8, y: 36.4, size: 14, color: "light" },
  { text: "INDUSTRY", x: 74.2, y: 20, size: 14, color: "light" },
  { text: "BUG", x: 68.5, y: 28.4, size: 14, color: "light" },
  { text: "CLOUD", x: 68.6, y: 23.4, size: 14, color: "light" },
  { text: "SYSTEM", x: 85, y: 69.3, size: 14, color: "light" },
  { text: "DESKTOP", x: 51.7, y: 29.2, size: 14, color: "light" },
  { text: "AGENCY", x: 16.6, y: 40.8, size: 14, color: "light" },

  { text: "FAILURE", x: 25.5, y: 21.9, size: 13, color: "light" },
  { text: "COLLEAGUE", x: 41.4, y: 32.1, size: 13, color: "light" },
  { text: "MONITOR", x: 94, y: 49.2, size: 13, color: "light" },
  { text: "DOCUMENTATION", x: 89.8, y: 40.7, size: 13, rotate: 90, color: "light" },
  { text: "ACCEPTANCE", x: 65.1, y: 11.3, size: 13, color: "light" },
  { text: "DESIGNER", x: 31.1, y: 22.1, size: 13, color: "light" },
  { text: "CYBERSPACE", x: 19.5, y: 22, size: 13, color: "light" },
];

// servicesss data====================

const designProcessSteps = [
  {
    id: "discovery",
    label: "Discovery",
    badge: "STEP 01 — DISCOVERY & RESEARCH",
    title: "Website Discovery & Strategy",
    description:
      "Every successful website starts with the right strategy. We understand your business goals, target audience, competitors and project requirements to create a clear roadmap for a high-performing, SEO-friendly website.",
    features: [
      "Business goals and website requirement analysis",
      "Target audience and competitor research",
      "Website structure and user journey planning",
      "SEO, technology and project roadmap planning",
    ],
    button: "Start Your Project",
  },

  {
    id: "design",
    label: "UI/UX Design",
    badge: "STEP 02 — UI/UX DESIGN",
    title: "Responsive UI/UX Website Design",
    description:
      "We create modern, professional and user-friendly website designs focused on delivering an excellent user experience. Every layout is designed to be responsive, visually engaging and aligned with your brand identity.",
    features: [
      "Custom website UI/UX design",
      "Mobile, tablet and desktop responsive layouts",
      "Brand-focused colors, typography and visual elements",
      "Conversion-focused and user-friendly page designs",
    ],
    button: "View Our Portfolio",
  },

  {
    id: "development",
    label: "Development",
    badge: "STEP 03 — WEBSITE DEVELOPMENT",
    title: "Fast & SEO-Friendly Website Development",
    description:
      "We transform approved designs into fast, secure and responsive websites using modern development technologies. Our websites are built with clean code, strong performance and search engine optimization in mind.",
    features: [
      "Responsive website development",
      "React.js and modern frontend development",
      "WordPress and custom website development",
      "Clean code, API and third-party integrations",
    ],
    button: "Explore Our Services",
  },

  {
    id: "testing",
    label: "Testing",
    badge: "STEP 04 — TESTING & OPTIMIZATION",
    title: "Website Testing & Performance Optimization",
    description:
      "Before your website goes live, we carefully test its functionality, responsiveness, speed and usability. Our testing process helps deliver a smooth website experience across different browsers, devices and screen sizes.",
    features: [
      "Mobile and responsive website testing",
      "Cross-browser compatibility testing",
      "Website speed and performance optimization",
      "Functionality testing, bug fixing and quality checks",
    ],
    button: "Explore Our Process",
  },

  {
    id: "launch",
    label: "Launch",
    badge: "STEP 05 — WEBSITE LAUNCH",
    title: "SEO-Ready Website Launch & Deployment",
    description:
      "After final testing and approval, we deploy your website with essential technical SEO and performance settings. We ensure your website is secure, accessible and ready for search engines and your target audience.",
    features: [
      "Website hosting and production deployment",
      "Domain, SSL and DNS configuration",
      "SEO-friendly meta tags and sitemap setup",
      "Google Analytics and Search Console integration",
    ],
    button: "Launch Your Website",
  },

  {
    id: "support",
    label: "Support",
    badge: "STEP 06 — SUPPORT & MAINTENANCE",
    title: "Website Maintenance & Ongoing Support",
    description:
      "A successful website needs continuous care after launch. We provide reliable website maintenance and support services to keep your website secure, updated, fast and ready to support your business growth.",
    features: [
      "Regular website maintenance and updates",
      "Website speed and performance monitoring",
      "Content, design and feature updates",
      "Technical support, troubleshooting and security checks",
    ],
    button: "Get Website Support",
  },
];

function Home() {

   const [activeProcess, setActiveProcess] = useState(0);

  const activeStep = designProcessSteps[activeProcess];

  return (
    <>
    
 <section className="hero">

  <div className="container hero-container">

    {/* Left Side */}
    <div className="hero-left">

      <div className="hero-tag">
        ✦ WEB DESIGNER & DEVELOPER
      </div>

      <h1>
        Hi, I'm <span className="signature">Tulsi Shah.</span>
        <br />
        I Create Websites
        <br />
        That <span className="signature">Stand Out.</span>
      </h1>

      <p>
        I'm a passionate Web Designer with 1.8+ years of experience,
        creating modern, responsive, and user-friendly websites that
        help businesses build a strong digital presence.
      </p>

      <div className="hero-buttons">

      <button
        className="primary-btn"
        onClick={() => {
          window.location.href = "/#contact";
        }}
      >
        Let's Work Together →
      </button>

      <button
        className="secondary-btn"
        onClick={() => {
          window.open("/images/Tulsi-Resume.pdf", "_blank");
        }}
      >
        See My Resume ↗
      </button>

      </div>

      <div className="hero-stats">

        <div className="stat-item">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-item">
          <h3>0.8+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          <h3>100%</h3>
          <p>Client Focused</p>
        </div>

        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>

      </div>

    </div>

    {/* Right Side */}
    <div className="hero-right">

      <div className="hero-profile-card">

        <div className="profile-image">
          <img src="/images/tulsi.png" alt="Tulsi Shah - Web Designer" />
        </div>

        {/* <div className="profile-info">
          <span>Available for Projects</span>
          <h3>Tulsi Shah</h3>
          <p>Web Designer & Developer</p>
        </div> */}

      </div>

    </div>

  </div>

</section>
    

    {/* Services Section */}

<section className="services" id="services">

  <div className="container">

    <div className="service-heading">

      <div>

        <span className="service-tag">
          WHAT WE DO
        </span>

        <h2>
          Powerful Solutions To
          <br />
          <span className="signature">Grow.</span> Your Business
        </h2>

      </div>

      <p>
        We create innovative websites that are fast,
        secure, responsive and designed to convert.
      </p>

    </div>

    <div className="service-grid">

      {/* Card 1 */}

      <div className="service-card">

    <div className="service-icon green">
        <MdOutlineDesignServices />
    </div>

    <h3>Custom Website Design</h3>

    <p>
        Beautiful, unique & user-friendly websites tailored to your brand.
    </p>

</div>

      {/* Card 2 */}

      <div className="service-card">

    <div className="service-icon purple">
        <FaLaptopCode />
    </div>

    <h3>Website Development</h3>

    <p>
        Fast, secure & scalable websites built with clean code.
    </p>

</div>
      {/* Card 3 */}

      <div className="service-card">

    <div className="service-icon blue">
        <FaSearch />
    </div>

    <h3>SEO Optimization</h3>

    <p>
        SEO-friendly websites to rank higher and get more traffic.
    </p>

</div>

      {/* Card 4 */}

     <div className="service-card">

    <div className="service-icon orange">
        <FaTachometerAlt />
    </div>

    <h3>Speed Optimization</h3>

    <p>
        Lightning-fast websites for better performance.
    </p>

</div>

      {/* Card 5 */}

     <div className="service-card">

    <div className="service-icon cyan">
        <HiOutlineSupport />
    </div>

    <h3>Website Maintenance</h3>

    <p>
        Ongoing support to keep your website updated & secure.
    </p>

</div>

      {/* Card 6 */}

<div className="service-card">

    <div className="service-icon green">
        <FaShoppingCart />
    </div>

    <h3>E-Commerce Solutions</h3>

    <p>
        Powerful online stores that drive sales & growth.
    </p>

</div>

    </div>

  </div>

</section>

{ /*About us section*/ }
<section className="about" id="about">

  <div className="container about-wrapper">

    {/* LEFT */}

    <div className="about-content">

      <span className="section-badge">
        ✦ ABOUT ME
      </span>

      <h2>
        Turning Ideas Into
        <br />
        <span className="signature">Digital Experiences</span>
      </h2>

      <p>
        I'm Tulsi Shah, a passionate Web Designer & Developer with 1.8+
        years of experience in creating modern, responsive and
        user-friendly websites. I focus on combining creative design,
        clean development and smooth user experiences to help businesses
        build a strong digital presence.
      </p>

      <h3 className="signature">
        Tulsi Shah
      </h3>

      <button className="about-btn">
        More About Me
        <FiArrowRight />
      </button>

    </div>

    {/* CENTER */}

    <div className="about-image">

      <div className="circle-bg"></div>

      <span className="ball ball1"></span>
      <span className="ball ball2"></span>
      <span className="ball ball3"></span>

      <span className="dots top"></span>
      <span className="dots bottom"></span>

      <span className="plus">+</span>

      <img
        src="/images/about.png"
        alt="Tulsi Shah - Web Designer & Developer"
      />

    </div>

    {/* RIGHT */}

    <div className="about-right">

      <div className="about-feature">

        <FaPalette />

        <div>
          <h4>Creative Design</h4>

          <p>
            Modern and engaging designs focused on your brand,
            audience and user experience.
          </p>
        </div>

      </div>

      <div className="about-feature">

        <FaUserCheck />

        <div>
          <h4>Client Focused</h4>

          <p>
            I understand your requirements and turn your ideas
            into practical digital solutions.
          </p>
        </div>

      </div>

      <div className="about-feature">

        <FaCode />

        <div>
          <h4>Clean Development</h4>

          <p>
            Responsive, optimized and maintainable websites
            built with modern web technologies.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Portfolio Section */}

<section className="portfolio" id="portfolio" >

    <div className="container">

        <div className="portfolio-header">

            <div>

                <span className="portfolio-tag">
                    OUR PORTFOLIO
                </span>

                <h2>
                    Some Of My Recent <span className="signature">Work</span>
                </h2>

            </div>

            <button className="portfolio-btn">
                View All Projects
                {/* <FiArrowRight/> */}
            </button>

        </div>

        <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={25}
  slidesPerView={4}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
  {portfolioData.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="portfolio-card">

        <div className="portfolio-image">
          <img src={item.image} alt={item.title} />

          <div className="overlay">
            <FiExternalLink />
          </div>
        </div>

        <div className="portfolio-content">
          <div>
            <h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  {item.title}
                </a>
              </h3>
            <p>{item.category}</p>
          </div>

          
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>

</section>


{/* ======================================================
    INTERACTIVE DESIGN PROCESS
====================================================== */}

<section className="ks-dp-section" id="process">

  <div className="ks-dp-heading">
    <span className="ks-dp-badge">HOW I WORK</span>

    <h2>
      From Concept to Launch — My{" "}
      <span>Design Process</span>
    </h2>

    <p>
      A step-by-step approach to building modern, scalable,
      responsive and result-driven websites.
    </p>
  </div>


  <div className="ks-dp-container">

    {/* ================= LEFT WHEEL ================= */}

    <div className="ks-dp-left">

      <div className="ks-dp-wheel">

        <svg
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* ROTATING WHEEL */}

          <g
            className="ks-dp-rotate"
            style={{
              transform: `rotate(${60 - activeProcess * 60}deg)`,
            }}
          >

            {/* DISCOVERY */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 0 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(0)}
            >
              <path
                d="M150,150 L150,30 A120,120 0 0,1 253.92,90 Z"
              />

              <text
                transform="rotate(30,196,65)"
                x="196"
                y="74"
              >
                Discovery
              </text>
            </g>


            {/* DESIGN */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 1 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(1)}
            >
              <path
                d="M150,150 L253.92,90 A120,120 0 0,1 253.92,210 Z"
              />

              <text
                transform="rotate(90,240,150)"
                x="240"
                y="150"
              >
                UI/UX Design
              </text>
            </g>


            {/* DEVELOPMENT */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 2 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(2)}
            >
              <path
                d="M150,150 L253.92,210 A120,120 0 0,1 150,270 Z"
              />

              <text
                transform="rotate(150,214,234)"
                x="214"
                y="242"
              >
                Development
              </text>
            </g>


            {/* TESTING */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 3 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(3)}
            >
              <path
                d="M150,150 L150,270 A120,120 0 0,1 46.08,210 Z"
              />

              <text
                transform="rotate(210,86,234)"
                x="86"
                y="242"
              >
                Testing
              </text>
            </g>


            {/* LAUNCH */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 4 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(4)}
            >
              <path
                d="M150,150 L46.08,210 A120,120 0 0,1 46.08,90 Z"
              />

              <text
                transform="rotate(270,62,150)"
                x="62"
                y="150"
              >
                Launch
              </text>
            </g>


            {/* SUPPORT */}

            <g
              className={`ks-dp-segment ${
                activeProcess === 5 ? "ks-dp-active" : ""
              }`}
              onClick={() => setActiveProcess(5)}
            >
              <path
                d="M150,150 L46.08,90 A120,120 0 0,1 150,30 Z"
              />

              <text
                transform="rotate(330,95,64)"
                x="95"
                y="70"
              >
                Support
              </text>
            </g>

          </g>


          {/* ================= CENTER ================= */}

          <circle
            cx="150"
            cy="150"
            r="65"
            className="ks-dp-center-circle"
          />


          {/* MONITOR */}

          <rect
            x="118"
            y="126"
            width="45"
            height="30"
            rx="4"
            className="ks-dp-monitor"
          />

          <rect
            x="122"
            y="130"
            width="37"
            height="21"
            rx="2"
            className="ks-dp-screen"
          />

          <polyline
            points="126,147 131,140 136,145 142,137 148,142 155,134"
            className="ks-dp-chart"
          />

          <rect
            x="137"
            y="156"
            width="7"
            height="7"
            className="ks-dp-monitor"
          />

          <rect
            x="132"
            y="162"
            width="17"
            height="3"
            rx="1"
            className="ks-dp-monitor"
          />


          {/* MOBILE */}

          <rect
            x="166"
            y="133"
            width="16"
            height="25"
            rx="3"
            className="ks-dp-monitor"
          />

          <rect
            x="169"
            y="136"
            width="10"
            height="17"
            rx="1"
            className="ks-dp-screen"
          />


          {/* CENTER BRAND */}

          <text
            x="150"
            y="187"
            className="ks-dp-brand"
          >
            Tulsi Shah
          </text>


          {/* POINTER */}

          <polygon
            points="279,150 268,143 268,157"
            className="ks-dp-pointer"
          />

        </svg>

      </div>

    </div>


    {/* ================= RIGHT CONTENT ================= */}

    <div
      className="ks-dp-content"
      key={activeStep.id}
    >

      <div className="ks-dp-step-badge">
        {activeStep.badge}
      </div>

      <h3>{activeStep.title}</h3>

      <div className="ks-dp-divider"></div>

      <p>{activeStep.description}</p>

      <ul>
        {activeStep.features.map((feature, index) => (
          <li
            key={feature}
            style={{
              animationDelay: `${0.18 + index * 0.08}s`,
            }}
          >
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="ks-dp-button"
      >
        {activeStep.button}

        <span>→</span>
      </a>

    </div>

  </div>

</section>




{/* Process Section */}
<section className="process">

  <div className="container">

    <span className="section-badge">
      MY PROCESS
    </span>

    <h2 className="process-title">
      My Simple 6 Step <span className="signature">Process</span>
    </h2>

    <div className="process-wrapper">

      {processData.map((item, index) => (

        <div className="process-item" key={item.id}>

          <div className={`process-icon ${item.color}`}>
            {item.icon}
          </div>

          <span className="process-number">
            {item.id}
          </span>

          <h4>{item.title}</h4>

          <p>{item.description}</p>

          {index !== processData.length - 1 && (
            <div className="process-line"></div>
          )}

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= WORD CLOUD SECTION ================= */}

{/* ================= WORD CLOUD SECTION ================= */}

<section className="ks-wc-section">

  <div className="ks-wc-dot-grid"></div>

  <div className="ks-wc-scene">

    {words.map((word, index) => (

      <span
        key={`${word.text}-${index}`}
        className={`ks-wc-word ks-wc-${word.color}`}
        style={{
          "--ks-x": `${word.x}%`,
          "--ks-y": `${word.y}%`,
          "--ks-size": `${word.size}px`,
          "--ks-rotate": `${word.rotate || 0}deg`,
          "--ks-delay": `${(index % 10) * 0.17}s`,
          "--ks-duration": `${3.2 + (index % 7) * 0.22}s`,
        }}
      >
        {word.text}
      </span>

    ))}

  </div>

</section>

{/* ================= END WORD CLOUD ================= */}


{/* ================ */}


{/* =====================================================
              TECHNOLOGIES SECTION
===================================================== */}

<section className="tech-section">

  <div className="about-container">

    {/* Heading */}

    <div className="tech-heading">

      <span className="tech-tag">
        ✦ TECHNOLOGIES WE USE
      </span>

      <h2>
        Tools & Technologies
        <span> I Work With</span>
      </h2>

      <p>
        I use modern tools and technologies to create
        responsive, scalable and high-performing digital
        experiences.
      </p>

    </div>


    {/* Technology Cards */}

    <div className="tech-grid">

      {/* HTML */}

      <div className="tech-card tech-html">

        <div className="tech-icon-box">
          <FaHtml5 />
        </div>

        <h3>HTML5</h3>

      </div>


      {/* CSS */}

      <div className="tech-card tech-css">

        <div className="tech-icon-box">
          <FaCss3Alt />
        </div>

        <h3>CSS3</h3>

      </div>


      {/* JavaScript */}

      <div className="tech-card tech-js">

        <div className="tech-icon-box">
          <FaJsSquare />
        </div>

        <h3>JavaScript</h3>

      </div>


      {/* React */}

      <div className="tech-card tech-react">

        <div className="tech-icon-box">
          <FaReact />
        </div>

        <h3>React</h3>

      </div>


      {/* Django */}

      <div className="tech-card tech-django">

        <div className="tech-icon-box">
          <SiDjango />
        </div>

        <h3>Django</h3>

      </div>


      {/* WordPress */}

      <div className="tech-card tech-wordpress">

        <div className="tech-icon-box">
          <SiWordpress />
        </div>

        <h3>WordPress</h3>

      </div>


      {/* Bootstrap */}

      <div className="tech-card tech-bootstrap">

        <div className="tech-icon-box">
          <SiBootstrap />
        </div>

        <h3>Bootstrap</h3>

      </div>


      {/* Git */}

      <div className="tech-card tech-git">

        <div className="tech-icon-box">
          <SiGit />
        </div>

        <h3>Git</h3>

      </div>


      {/* GitHub */}

      <div className="tech-card tech-github">

        <div className="tech-icon-box">
          <SiGithub />
        </div>

        <h3>GitHub</h3>

      </div>


      {/* Canva */}

      <div className="tech-card tech-canva">

        <div className="tech-icon-box">
  <FaPaintBrush />
</div>

        <h3>Canva</h3>

      </div>

    </div>

  </div>

</section>


{/*CTA Section*/}
<section className="cta">

    <div className="container">

        <div className="cta-wrapper">

            {/* Left */}

            <div className="cta-content">

                <h2>
                    Have a Project in Mind?
                    <br />
                    Let's Build Something
                    <span> Amazing </span>
                    Together!
                </h2>

            </div>

            {/* Right */}

            <div className="cta-buttons">

                <a
                    href="https://wa.me/919315933247"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-btn"
                >
                    <FaWhatsapp />
                    WhatsApp Me
                </a>

                <button className="talk-btn-cta">

                    Let's Talk

                    <FiArrowRight />

                </button>

                <div className="share-btn">

                    <FiShare />

                </div>

            </div>

        </div>

    </div>

</section>




</>


  );
}

export default Home;