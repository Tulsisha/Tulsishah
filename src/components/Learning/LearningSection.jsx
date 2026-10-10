import {
  FaReact,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiDjango, SiThreedotjs } from "react-icons/si";
import { FiTrendingUp, FiCheck, FiCode, FiCompass } from "react-icons/fi";

const learningTracks = [
  {
    title: "React.js & Modern Frontend",
    status: "Active Learning & Building",
    progressLabel: "Intermediate Stage",
    icon: <FaReact className="text-cyan-400" />,
    color: "#61DAFB",
    description:
      "Transitioning from traditional DOM manipulation and jQuery to modern component-driven architectures, single page applications (SPA), and reactive state handling.",
    currentTopics: [
      "React component lifecycle, JSX, and Virtual DOM",
      "Core hooks: useState, useEffect, useRef, and custom hooks",
      "Client-side routing with React Router",
      "Building practical projects such as Doctor Appointment Booking app",
    ],
  },
  {
    title: "Python & Django Backend",
    status: "Project Applied",
    progressLabel: "Applied in Attendance App",
    icon: <SiDjango className="text-emerald-500" />,
    color: "#092E20",
    secondaryIcon: <FaPython className="text-yellow-400" />,
    description:
      "Expanding full-stack backend capabilities through Python scripting, Django MVT architecture, relational database ORM, and secure session authentication.",
    currentTopics: [
      "Django models, migrations, and SQLite relational database schema",
      "Class-based and function-based views with template rendering",
      "User authentication, sessions, and punch-in/out workflows",
      "Applied in building the Attendance Management System",
    ],
  },
  {
    title: "Three.js & Creative Frontend",
    status: "Hands-on Integration",
    progressLabel: "Exploratory & Interactive",
    icon: <SiThreedotjs className="text-white" />,
    color: "#000000",
    description:
      "Learning WebGL concepts, 3D coordinate mathematics, shaders, particles, and interactive canvas rendering to deliver memorable, high-performance web experiences.",
    currentTopics: [
      "Scene graph hierarchy, cameras, and WebGLRenderer pipelines",
      "BufferGeometry, particle fields, and custom point materials",
      "Mouse parallax, animation loops (requestAnimationFrame), and lerp damping",
      "Applied in the 3D interactive hero background of this portfolio",
    ],
  },
  {
    title: "Modern JavaScript (ES6+)",
    status: "Continuous Growth",
    progressLabel: "Advanced Fundamentals",
    icon: <FaJsSquare className="text-yellow-400" />,
    color: "#F7DF1E",
    description:
      "Mastering asynchronous JavaScript patterns, modern syntax constructs, and clean code principles to write maintainable, bug-free web applications.",
    currentTopics: [
      "Promises, async/await, and error handling with Fetch API",
      "ES6+ destructuring, spread/rest, arrow functions, and modules",
      "Event bubbling, delegation, and performance-friendly DOM listeners",
      "Refactoring legacy scripts to modern modular standards",
    ],
  },
];

export default function LearningSection() {
  return (
    <section className="learning-section" id="learning">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> CONTINUOUS GROWTH
          </div>
          <h2 className="section-title">
            Learning & <span className="highlight-text">Development</span>
          </h2>
          <p className="section-subtitle">
            Transparently sharing the technologies I am currently developing and
            applying through personal projects as I advance toward full-stack engineering.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="learning-grid">
          {learningTracks.map((track) => (
            <div
              key={track.title}
              className="learning-card"
              style={{ "--track-color": track.color }}
            >
              <div className="learning-card-top">
                <div className="learning-icon-box">
                  {track.icon}
                  {track.secondaryIcon && (
                    <span className="secondary-icon-wrap">
                      {track.secondaryIcon}
                    </span>
                  )}
                </div>
                <span className="learning-status-badge">
                  <FiTrendingUp className="icon" />
                  {track.status}
                </span>
              </div>

              <div className="learning-card-body">
                <h3 className="learning-title">{track.title}</h3>
                <span className="learning-stage-pill">{track.progressLabel}</span>
                <p className="learning-desc">{track.description}</p>

                <div className="learning-topics-box">
                  <h4 className="topics-heading">
                    <FiCode className="icon" /> Current Focus Areas
                  </h4>
                  <ul className="topics-list">
                    {track.currentTopics.map((topic, idx) => (
                      <li key={idx}>
                        <FiCheck className="topic-check" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Banner */}
        <div className="learning-philosophy">
          <div className="philosophy-icon">
            <FiCompass />
          </div>
          <div className="philosophy-text">
            <h4>Growth Mindset & Continuous Improvement</h4>
            <p>
              I believe in honest representation of technical skills. While my day-to-day
              commercial strength lies in responsive web design, WordPress development, and
              client solutions, I dedicate continuous time to hands-on programming with React,
              Python, and Three.js to become an impactful full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
