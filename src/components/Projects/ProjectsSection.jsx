import { useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";

const projectsData = [
  // Full-Stack / Web Apps
  {
    id: "attendance-system",
    title: "Attendance Management System",
    category: "app",
    categoryLabel: "Full-Stack Web App",
    image: "/images/banner1.png",
    description:
      "A complete database-backed employee attendance tracking system built with Django and SQLite. Features secure employee authentication, punch-in / punch-out workflows with timestamps, attendance status reporting, and a comprehensive administrative dashboard.",
    technologies: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Secure employee authentication & session management",
      "Real-time punch-in and punch-out timestamp tracking",
      "Dynamic attendance status & shift calculation",
      "Admin dashboard with reporting & record inspection",
      "Django ORM database integration with relational models",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Tulsisha/Attendence.git",
    featured: true,
    statusBadge: "Completed Project",
  },
  {
    id: "doctor-appointment",
    title: "Book Doctor Appointment",
    category: "app",
    categoryLabel: "Frontend React App",
    image: "/images/ab-bnr.webp",
    description:
      "An intuitive, responsive doctor appointment booking web application developed in React.js. Provides specialist filtering, date/time slot selection, patient onboarding forms, and a clean appointment confirmation interface.",
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "Responsive UI"],
    features: [
      "Responsive patient-facing appointment booking flow",
      "Doctor specialization & department categorization",
      "Interactive appointment date & time slot selection",
      "Form validation for patient registration & scheduling",
      "Modular, reusable React component architecture",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Tulsisha",
    featured: true,
    statusBadge: "Frontend Showcase",
  },

  // Client Websites
  {
    id: "marys-chalet",
    title: "Mary's Chalet",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/mary.jpg",
    description:
      "Premium hospitality & resort website built to showcase hotel accommodations, guest amenities, scenic views, and direct reservation inquiries with a mobile-optimized layout.",
    technologies: ["WordPress", "Elementor", "Custom CSS", "Responsive Design", "SEO"],
    features: [
      "Custom responsive layout for luxury resort presentation",
      "Optimized imagery and high-speed mobile loading",
      "Direct room inquiry integration & contact forms",
      "On-page SEO optimization for local search visibility",
    ],
    liveUrl: "https://maryschalet.com/",
    githubUrl: null,
    featured: true,
    statusBadge: "Live Production Site",
  },
  {
    id: "dr-renuka-gupta",
    title: "Dr. Renuka Gupta",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/dr-renuka.webp",
    description:
      "A professional healthcare website designed to present medical services, treatment information, patient resources, and appointment-related information in a clear, accessible interface.",
    technologies: ["WordPress", "Elementor", "Custom CSS", "Responsive Design", "Healthcare UI", "SEO"],
    features: [
      "Clinical specialties, treatment profiles & doctor credentials showcase",
      "Patient education resources and consultation booking workflows",
      "Mobile-first responsive layout tested across multiple viewports",
      "On-page SEO optimization for local clinical practice visibility",
    ],
    liveUrl: "https://drrenukagupta.in/",
    githubUrl: null,
    featured: true,
    statusBadge: "Live Production Site",
  },
  {
    id: "parwez-urology",
    title: "Parwez Urology",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/parwez.png",
    description:
      "A professional urology and healthcare website presenting urological services, patient information, and appointment-related resources through a clean, responsive medical interface.",
    technologies: ["WordPress", "Elementor", "Custom CSS", "Responsive Design", "Medical UI", "Speed Optimization"],
    features: [
      "Specialized urological treatments directory & surgical care guides",
      "Direct patient inquiry and appointment consultation forms",
      "High-performance asset loading with clean medical color palette",
      "Cross-browser and mobile device tested responsive layout",
    ],
    liveUrl: "https://parwezurology.com/",
    githubUrl: null,
    featured: true,
    statusBadge: "Live Production Site",
  },
  {
    id: "arshya-engg",
    title: "Arshya Engineers & Fabrications",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/arshya.png",
    description:
      "Industrial engineering website showcasing heavy fabrication capabilities, specialized machinery, product catalogs, and corporate client credentials.",
    technologies: ["WordPress", "Elementor", "Responsive UI", "Technical SEO"],
    features: [
      "Industrial product catalog & engineering specifications",
      "Certification & manufacturing infrastructure showcase",
      "Fast inquiry turnaround forms and Google Maps integration",
      "Structured SEO headings and metadata",
    ],
    liveUrl: "https://aefpl.com/",
    githubUrl: null,
    featured: false,
    statusBadge: "Live Production Site",
  },
  {
    id: "egs-india",
    title: "EGS India",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/envi.webp",
    description:
      "Environmental engineering and corporate compliance portal built to communicate sustainability solutions, environmental services, and statutory certifications.",
    technologies: ["WordPress", "Elementor", "Custom Layouts", "Speed Optimization"],
    features: [
      "Environmental consultancy services showcase",
      "Clear informative service breakdowns and case studies",
      "Cross-browser testing across modern desktop and mobile engines",
      "Fast loading speeds with optimized media assets",
    ],
    liveUrl: "https://egsindia.co.in/",
    githubUrl: null,
    featured: false,
    statusBadge: "Live Production Site",
  },
  {
    id: "bloom-car-rental",
    title: "Bloom Car Rental",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/bloomcar.jpg",
    description:
      "Modern car rental booking platform with fleet categories, transparent pricing packages, and direct WhatsApp reservation integration.",
    technologies: ["WordPress", "Elementor", "Booking UI", "WhatsApp API", "Mobile First"],
    features: [
      "Vehicle fleet showcase with pricing cards & amenities",
      "One-click WhatsApp booking & phone call conversions",
      "Location-specific rental packages and terms",
      "Speed optimized for mobile searchers",
    ],
    liveUrl: "https://www.bloomcarrental.co.in/",
    githubUrl: null,
    featured: false,
    statusBadge: "Live Production Site",
  },
  {
    id: "dream-spire",
    title: "Dream Spire Education",
    category: "client",
    categoryLabel: "Client Website",
    image: "/images/CS.jpeg",
    description:
      "Educational institution website presenting curriculum details, course catalogs, student admissions, and online counseling inquiries.",
    technologies: ["WordPress", "Elementor", "Lead Gen Forms", "Responsive Design"],
    features: [
      "Course catalog with enrollment requirements",
      "Inquiry collection & lead capture forms",
      "Student testimonial and faculty credential sections",
      "W3C validated markup and accessible color contrast",
    ],
    liveUrl: "https://dreamspireeducation.com/",
    githubUrl: null,
    featured: false,
    statusBadge: "Live Production Site",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : filter === "featured"
      ? projectsData.filter((p) => p.featured)
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> VERIFIED WORK
          </div>
          <h2 className="section-title">
            Featured <span className="highlight-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of real-world client websites, responsive WordPress builds,
            and full-stack software applications developed with verified code and live links.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Work ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === "client" ? "active" : ""}`}
            onClick={() => setFilter("client")}
          >
            Client Websites (7)
          </button>
          <button
            className={`filter-btn ${filter === "app" ? "active" : ""}`}
            onClick={() => setFilter("app")}
          >
            Full-Stack & Web Apps (2)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card Image Thumbnail */}
              <div className="project-thumbnail-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="thumbnail-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View details for ${project.title}`}
                  >
                    <FiEye className="icon" /> Quick Details
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-icon-btn"
                      aria-label={`Open live website for ${project.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
                <span className="project-status-pill">{project.statusBadge}</span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-category-row">
                  <span className="project-category-badge">
                    {project.categoryLabel}
                  </span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>

                <p className="project-card-description">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag-pill more-tag">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="project-card-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn primary"
                    >
                      <span>Live Website</span>
                      <FiExternalLink className="icon" />
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn github"
                    >
                      <FiGithub className="icon" />
                      <span>GitHub</span>
                    </a>
                  ) : null}

                  <button
                    className="project-action-btn details"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-depth Project Details */}
        {selectedProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="project-category-badge">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-image-wrap">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>

                <div className="modal-info">
                  <h4>Project Overview</h4>
                  <p>{selectedProject.description}</p>

                  <h4>Key Features & Implementation</h4>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <h4>Technologies Used</h4>
                  <div className="project-tech-tags">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="modal-actions-row">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn primary"
                      >
                        <span>Visit Live Website</span>
                        <FiExternalLink className="icon" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn github"
                      >
                        <FiGithub className="icon" />
                        <span>View Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
