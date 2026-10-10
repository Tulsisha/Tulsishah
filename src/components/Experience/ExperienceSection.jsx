import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";

const experiences = [
  {
    company: "Codephony",
    role: "Web Designer",
    period: "September 2026 – Present",
    badge: "Current Role",
    location: "Faridabad, India",
    type: "Full-Time",
    description:
      "Leading responsive web design and WordPress website development initiatives, implementing client requirements, and contributing to internal web workflows.",
    highlights: [
      "Develop and maintain client WordPress websites and design custom pages using Elementor.",
      "Implement responsive layouts, high-converting landing pages, e-commerce sections, and tailored HTML/CSS/JavaScript components.",
      "Execute on-page SEO best practices, site speed optimization, cross-browser quality assurance, and ongoing maintenance.",
      "Contribute to internal web products, automation-related tasks, and technical project documentation.",
    ],
    techStack: [
      "WordPress",
      "Elementor Pro",
      "HTML5",
      "CSS3",
      "JavaScript",
      "WooCommerce",
      "SEO",
    ],
  },
  {
    company: "Om Soft Solution",
    role: "Web Designer",
    period: "January 2025 – August 2026",
    badge: "1.7 Years",
    location: "Faridabad, India",
    type: "Full-Time",
    description:
      "Handled end-to-end WordPress website development, page builder customization, performance tuning, and direct client communications.",
    highlights: [
      "Designed and developed responsive WordPress websites using Elementor and Divi Builder from concept to deployment.",
      "Created customized layouts, WooCommerce product catalog pages, and implemented custom CSS and JavaScript overrides.",
      "Audited and optimized website speed, Core Web Vitals, and technical on-page SEO structures.",
      "Collaborated directly with business clients to gather project requirements and translate feedback into intuitive web interfaces.",
      "Conducted extensive responsive testing across desktop, tablet, and mobile device viewports.",
    ],
    techStack: [
      "WordPress",
      "Elementor",
      "Divi Builder",
      "WooCommerce",
      "Custom CSS",
      "Speed Optimization",
      "SEO",
    ],
  },
  {
    company: "Web Development Internship",
    role: "Web Designer Intern",
    period: "September 2023 – December 2023",
    badge: "Internship",
    location: "Faridabad, India",
    type: "Internship",
    description:
      "Gained hands-on foundational web development experience under senior engineering mentorship.",
    highlights: [
      "Assisted in crafting responsive web pages using clean HTML5, CSS3, modern JavaScript, and Bootstrap 5.",
      "Supported client website updates, bug triage, asset formatting, and UI styling adjustments.",
      "Developed practical front-end problem-solving, version control habits, and client communication skills.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "Responsive Design",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "JC Bose University of Science and Technology, YMCA",
    period: "Completed March 2026",
    details:
      "Core coursework in software engineering, database management systems, data structures, and web technologies.",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Government Polytechnic for Women, Faridabad",
    period: "Completed August 2020",
    details:
      "Foundation in programming fundamentals, computer hardware, network basics, and web design.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> CAREER JOURNEY
          </div>
          <h2 className="section-title">
            Professional <span className="highlight-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A verified timeline of my hands-on roles delivering responsive web designs,
            WordPress customizations, client-focused solutions, and quality frontend code.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="timeline-card">
              <div className="timeline-marker">
                <div className="marker-dot">
                  <FiBriefcase />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="marker-line" />
                )}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-top-meta">
                      <span className="timeline-badge">{exp.badge}</span>
                      <span className="timeline-type">{exp.type}</span>
                    </div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>

                  <div className="timeline-meta-right">
                    <span className="timeline-period">
                      <FiCalendar className="icon" />
                      {exp.period}
                    </span>
                    <span className="timeline-location">
                      <FiMapPin className="icon" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-summary">{exp.description}</p>

                <ul className="timeline-highlights">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="timeline-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Box */}
        <div className="education-box">
          <div className="education-box-header">
            <div className="edu-icon-wrap">
              <FiBookOpen />
            </div>
            <div>
              <h3 className="edu-title">Academic Background & Qualifications</h3>
              <p className="edu-subtitle">
                Formal education grounding my practical web design and software development expertise.
              </p>
            </div>
          </div>

          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.degree} className="edu-card">
                <div className="edu-badge">
                  <FiAward className="icon" />
                  <span>Verified Qualification</span>
                </div>
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-period">{edu.period}</div>
                <p className="edu-desc">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
