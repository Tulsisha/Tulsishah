import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaWordpress,
  FaBootstrap,
  FaGithub,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiDjango,
  SiSqlite,
  SiWoocommerce,
  SiElementor,
  SiJquery,
  SiGooglecloud,
} from "react-icons/si";
import {
  FiSearch,
  FiZap,
  FiLayout,
  FiTerminal,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";
import { MdOutlineSpeed, MdOutlineDevices } from "react-icons/md";

const skillsData = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <FaHtml5 className="text-orange-500" />,
    level: "Core Expertise",
    highlight: "Semantic markup, accessibility, modern standards",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <FaCss3Alt className="text-blue-500" />,
    level: "Core Expertise",
    highlight: "Flexbox, CSS Grid, animations, variables, media queries",
    color: "#1572B6",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <FaJsSquare className="text-yellow-400" />,
    level: "Proficient",
    highlight: "DOM manipulation, fetch API, event handling, async/await",
    color: "#F7DF1E",
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <FaBootstrap className="text-purple-500" />,
    level: "Core Expertise",
    highlight: "Rapid grid layouts, component customization, utility classes",
    color: "#7952B3",
  },
  {
    name: "jQuery",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <SiJquery className="text-blue-400" />,
    level: "Proficient",
    highlight: "Interactive UI widgets, AJAX calls, legacy theme support",
    color: "#0769AD",
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <MdOutlineDevices className="text-cyan-400" />,
    level: "Core Expertise",
    highlight: "Mobile-first layouts, cross-device & cross-browser compatibility",
    color: "#00BCD4",
  },
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: <FaReact className="text-cyan-400" />,
    level: "Currently Learning",
    badge: "Learning & Applying",
    highlight: "Component lifecycle, state management, hooks, SPA routing",
    color: "#61DAFB",
  },

  // WordPress
  {
    name: "WordPress",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <FaWordpress className="text-blue-600" />,
    level: "Core Expertise",
    highlight: "Complete site builds, theme customization, plugin integrations",
    color: "#21759B",
  },
  {
    name: "Elementor & Elementor Pro",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <SiElementor className="text-red-500" />,
    level: "Core Expertise",
    highlight: "Dynamic templates, visual page design, custom responsive styling",
    color: "#92003B",
  },
  {
    name: "Divi Builder",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <FiLayers className="text-purple-400" />,
    level: "Proficient",
    highlight: "Visual theme builder, responsive modules, layout presets",
    color: "#7E57C2",
  },
  {
    name: "WooCommerce",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <SiWoocommerce className="text-purple-600" />,
    level: "Proficient",
    highlight: "Product catalogs, checkout flows, payment gateway setup",
    color: "#96588A",
  },
  {
    name: "Custom CSS & JavaScript",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <FiLayout className="text-indigo-400" />,
    level: "Core Expertise",
    highlight: "Overriding CMS limitations with tailored custom styling & code",
    color: "#4F46E5",
  },
  {
    name: "Website Maintenance",
    category: "wordpress",
    categoryLabel: "WordPress",
    icon: <FiZap className="text-amber-500" />,
    level: "Core Expertise",
    highlight: "Plugin updates, bug fixes, backups, security hygiene",
    color: "#F59E0B",
  },

  // Backend
  {
    name: "Python",
    category: "backend",
    categoryLabel: "Backend",
    icon: <FaPython className="text-yellow-500" />,
    level: "Applied in Projects",
    highlight: "Object-oriented scripting, application logic, data handling",
    color: "#3776AB",
  },
  {
    name: "Django",
    category: "backend",
    categoryLabel: "Backend",
    icon: <SiDjango className="text-emerald-600" />,
    level: "Applied in Projects",
    highlight: "Django MVT architecture, ORM queries, auth systems, admin views",
    color: "#092E20",
  },
  {
    name: "SQLite",
    category: "backend",
    categoryLabel: "Backend",
    icon: <SiSqlite className="text-blue-400" />,
    level: "Applied in Projects",
    highlight: "Relational database schema modeling, queries, data persistence",
    color: "#003B57",
  },

  // SEO & Optimization
  {
    name: "On-Page SEO",
    category: "seo",
    categoryLabel: "SEO & Optimization",
    icon: <FiSearch className="text-green-500" />,
    level: "Core Expertise",
    highlight: "Heading hierarchies, meta descriptions, image ALT attributes",
    color: "#10B981",
  },
  {
    name: "Technical SEO Fundamentals",
    category: "seo",
    categoryLabel: "SEO & Optimization",
    icon: <FiTerminal className="text-emerald-500" />,
    level: "Proficient",
    highlight: "Robots.txt, XML sitemaps, canonical tags, structured data",
    color: "#059669",
  },
  {
    name: "Google Search Console",
    category: "seo",
    categoryLabel: "SEO & Optimization",
    icon: <SiGooglecloud className="text-yellow-500" />,
    level: "Proficient",
    highlight: "Indexing status, sitemap submission, search analytics monitoring",
    color: "#EAB308",
  },
  {
    name: "Website Speed Optimization",
    category: "seo",
    categoryLabel: "SEO & Optimization",
    icon: <MdOutlineSpeed className="text-cyan-500" />,
    level: "Core Expertise",
    highlight: "Image compression, asset minification, cache setup, fast LCP",
    color: "#06B6D4",
  },
  {
    name: "Responsive & W3C Validation",
    category: "seo",
    categoryLabel: "SEO & Optimization",
    icon: <FiCheckCircle className="text-blue-500" />,
    level: "Proficient",
    highlight: "Valid HTML5, clean CSS, mobile friendly test passing",
    color: "#3B82F6",
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    categoryLabel: "Tools",
    icon: <FaGithub className="text-slate-800" />,
    level: "Proficient",
    highlight: "Version control, branching, repository management, CI/CD deploy",
    color: "#333333",
  },
  {
    name: "Canva",
    category: "tools",
    categoryLabel: "Tools",
    icon: <FaPaintBrush className="text-sky-500" />,
    level: "Core Expertise",
    highlight: "Web graphics, social banners, wireframe mockups, branding assets",
    color: "#00C4CC",
  },
  {
    name: "Browser DevTools",
    category: "tools",
    categoryLabel: "Tools",
    icon: <FiTerminal className="text-indigo-500" />,
    level: "Core Expertise",
    highlight: "DOM inspection, network waterfall analysis, responsive device testing",
    color: "#6366F1",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "wordpress", label: "WordPress & CMS" },
  { id: "backend", label: "Backend & DB" },
  { id: "seo", label: "SEO & Optimization" },
  { id: "tools", label: "Developer Tools" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> TECHNICAL CAPABILITIES
          </div>
          <h2 className="section-title">
            Skills & <span className="highlight-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A balanced toolkit combining modern frontend development, enterprise
            WordPress customization, full-stack foundational logic, and search engine
            optimization.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`skills-tab-btn ${
                activeTab === cat.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
              <span className="tab-count">
                {cat.id === "all"
                  ? skillsData.length
                  : skillsData.filter((s) => s.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ "--accent-color": skill.color }}
            >
              <div className="skill-card-top">
                <div
                  className="skill-icon-wrapper"
                  style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span
                  className={`skill-level-badge ${
                    skill.level === "Core Expertise"
                      ? "level-core"
                      : skill.level === "Proficient"
                      ? "level-proficient"
                      : "level-learning"
                  }`}
                >
                  {skill.badge || skill.level}
                </span>
              </div>

              <div className="skill-card-body">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category-tag">{skill.categoryLabel}</span>
                <p className="skill-highlight">{skill.highlight}</p>
              </div>

              <div className="skill-card-footer">
                <div className="skill-indicator-bar">
                  <div
                    className="skill-indicator-fill"
                    style={{
                      width:
                        skill.level === "Core Expertise"
                          ? "90%"
                          : skill.level === "Proficient"
                          ? "75%"
                          : "55%",
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Transparency Note */}
        <div className="skills-transparency-note">
          <div className="note-icon">ℹ</div>
          <div className="note-content">
            <strong>Recruiter Transparency:</strong> Proficiency reflects actual production
            deliverables and verified project implementations. Technologies tagged with
            <em> "Learning & Applying"</em> represent actively expanding competencies in modern
            full-stack development.
          </div>
        </div>
      </div>
    </section>
  );
}
