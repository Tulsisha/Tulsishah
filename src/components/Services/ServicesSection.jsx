import {
  FaWordpress,
  FaShoppingCart,
  FaRocket,
  FaSearch,
} from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { MdOutlineDevices, MdOutlineSpeed } from "react-icons/md";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const servicesData = [
  {
    id: "wordpress-dev",
    title: "WordPress Website Development",
    subtitle: "End-to-End Dynamic CMS Websites",
    icon: <FaWordpress />,
    description:
      "Full-cycle development of modern, responsive WordPress websites from initial structure planning to live deployment, focused on clean architecture and easy content management.",
    features: [
      "Custom theme setup & clean template structure",
      "Dynamic custom post types & fields integration",
      "Robust security plugins, spam protection & backups",
      "Client-friendly admin dashboard training",
    ],
    accent: "#21759B",
  },
  {
    id: "elementor-divi",
    title: "Elementor & Divi Customization",
    subtitle: "Pixel-Perfect Visual Builder Customization",
    icon: <SiElementor />,
    description:
      "Transforming generic builder templates into bespoke, high-end digital experiences using custom CSS, advanced responsive breakpoints, and micro-interactions.",
    features: [
      "Custom CSS and JavaScript overrides",
      "Pixel-perfect translation from Figma / Canva mockups",
      "Global typography and color palette systems",
      "Dynamic loop builders and custom popup modals",
    ],
    accent: "#92003B",
  },
  {
    id: "responsive-design",
    title: "Responsive Website Design",
    subtitle: "Mobile-First User Experiences",
    icon: <MdOutlineDevices />,
    description:
      "Crafting flexible, fluid layouts that adapt gracefully across mobile phones, tablets, laptops, and ultra-wide desktop monitors without layout breakage.",
    features: [
      "Mobile-first responsive CSS Grid & Flexbox layouts",
      "Touch-friendly navigation menus & tap targets",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "High DPI Retina display asset optimization",
    ],
    accent: "#0284C7",
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    subtitle: "High-Conversion Lead Generation",
    icon: <FaRocket />,
    description:
      "Designing clean, persuasive landing pages tailored for advertising campaigns, product launches, event signups, and local service lead generation.",
    features: [
      "Visual hierarchy optimized for clear Call-to-Actions",
      "Interactive lead capture forms with validation",
      "WhatsApp click-to-chat & direct phone call links",
      "Sub-2 second load times for high ad conversion",
    ],
    accent: "#6366F1",
  },
  {
    id: "woocommerce",
    title: "WooCommerce Store Development",
    subtitle: "Scalable E-Commerce Solutions",
    icon: <FaShoppingCart />,
    description:
      "Building seamless e-commerce online stores with intuitive product catalogs, category filtering, cart drawers, and secure payment gateway integrations.",
    features: [
      "Product catalog setup with variations & filters",
      "Payment gateway setup (Razorpay, Stripe, PayPal)",
      "Cart, checkout, and order confirmation customization",
      "Inventory tracking and automated customer emails",
    ],
    accent: "#96588A",
  },
  {
    id: "speed-optimization",
    title: "Website Speed Optimization",
    subtitle: "Core Web Vitals & Performance Tuning",
    icon: <MdOutlineSpeed />,
    description:
      "Diagnosing bottlenecks, compressing bloated assets, and implementing intelligent caching strategies to achieve stellar Google PageSpeed and Lighthouse scores.",
    features: [
      "Next-gen WebP image compression & lazy loading",
      "CSS & JavaScript minification and deferral",
      "Server-level caching & CDN integration",
      "LCP, CLS, and FID Core Web Vitals optimization",
    ],
    accent: "#059669",
  },
  {
    id: "onpage-seo",
    title: "Basic On-Page SEO",
    subtitle: "Search Engine Visibility Foundations",
    icon: <FaSearch />,
    description:
      "Structuring website content, meta tags, and technical signals to help search engines crawl, index, and rank client websites for their target keywords.",
    features: [
      "Semantic H1-H6 heading hierarchy structuring",
      "Keyword-targeted meta titles & meta descriptions",
      "Descriptive image ALT tags and OpenGraph tags",
      "XML sitemap creation & Google Search Console indexing",
    ],
    accent: "#D97706",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-sparkle">✦</span> WHAT I OFFER
          </div>
          <h2 className="section-title">
            Specialized <span className="highlight-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Reliable, client-focused web design and development solutions designed
            to elevate your online presence, improve engagement, and convert visitors into clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ "--service-accent": service.accent }}
            >
              <div className="service-card-top">
                <div
                  className="service-icon-box"
                  style={{
                    backgroundColor: `${service.accent}14`,
                    color: service.accent,
                  }}
                >
                  {service.icon}
                </div>
                <span className="service-index-num">
                  0{index + 1}
                </span>
              </div>

              <div className="service-card-body">
                <span className="service-subtitle">{service.subtitle}</span>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">
                  {service.description}
                </p>

                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <FiCheckCircle
                        className="service-check"
                        style={{ color: service.accent }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <a
                  href="#contact"
                  className="service-inquire-link"
                  style={{ color: service.accent }}
                >
                  <span>Inquire for Project</span>
                  <FiArrowUpRight className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="services-cta-banner">
          <div className="cta-banner-content">
            <h3>Need a Custom Solution for Your Business?</h3>
            <p>
              Whether you need a fresh website from scratch, an existing site speed
              makeover, or monthly maintenance, I am available to help.
            </p>
          </div>
          <a href="#contact" className="cta-banner-btn">
            Discuss Your Requirements →
          </a>
        </div>
      </div>
    </section>
  );
}
