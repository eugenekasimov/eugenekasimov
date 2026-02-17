import {
  ArrowRight,
  Mail,
  Linkedin,
  Calendar,
  Zap,
  Layers,
  Wrench,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

const CALENDLY_URL = "https://calendly.com/eugenekasimov/new-meeting";
const EMAIL = "eugenekasimov@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/eugene-kasimov-aa031136/";

const Index = () => {
  return (
    <div className="page">
      <Navbar />
      {/* Hero */}
      <section id="hero" className="section-padding hero">
        <div className="max-container">
          <div className="hero-badge">Ex-Shopify Flagship Themes Engineer</div>
          <h1 className="hero-title text-balance">
            Helping Brands Optimize & Extend Shopify Themes
          </h1>
          <p className="hero-subtitle">
            Top-5 contributor to Dawn and core contributor to Horizon. I help
            Shopify merchants build faster, cleaner, and higher-converting
            storefronts.
          </p>
          <a href={CALENDLY_URL} className="btn-primary">
            Book a Free Store Review
            <ArrowRight style={{ width: "1rem", height: "1rem" }} />
          </a>
        </div>
      </section>

      <div className="divider">
        <hr />
      </div>

      <AboutSection />

      <div className="divider">
        <hr />
      </div>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="max-container">
          <h2 className="section-title">What I Help With</h2>
          <p className="section-intro">
            Focused, high-impact Shopify theme work.
          </p>
          <div className="services-grid">
            {[
              {
                icon: Zap,
                title: "Theme Optimization & Performance",
                items: [
                  "Speed improvements",
                  "Removing app bloat",
                  "Mobile UX refinement",
                  "Lighthouse improvements",
                ],
              },
              {
                icon: Layers,
                title: "Custom Section Development",
                items: [
                  "Landing page components",
                  "Product page enhancements",
                  "Custom blocks",
                  "UX upgrades",
                ],
              },
              {
                icon: Wrench,
                title: "Theme Cleanup & Refactoring",
                items: [
                  "Fix messy Liquid",
                  "Improve maintainability",
                  "Remove unused code",
                  "Reduce technical debt",
                ],
              },
              {
                icon: Shield,
                title: "Ongoing Theme Support",
                items: [
                  "Monthly retainer",
                  "Priority updates",
                  "Emergency fixes",
                ],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="service-card">
                <Icon className="service-card-icon" />
                <h3 className="service-card-title">{title}</h3>
                <ul className="service-card-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider">
        <hr />
      </div>

      {/* Experience */}
      <section className="section-padding">
        <div className="max-container">
          <h2 className="section-title">Deep Experience in Shopify Themes</h2>
          <div className="experience-text">
            <p>
              As a core member of the Shopify Flagship Themes team, I've
              contributed directly to the code that powers millions of online
              stores worldwide.
            </p>
            <p>
              From architecting performant Liquid templates to ensuring WCAG
              accessibility compliance, my work on Dawn and Horizon has been
              focused on production-grade quality at scale.
            </p>
            <p>
              I bring that same standard of engineering to every merchant
              project — clean code, fast load times, and zero technical debt.
            </p>
          </div>
        </div>
      </section>

      <div className="divider">
        <hr />
      </div>

      {/* Process */}
      <section id="process" className="section-padding">
        <div className="max-container">
          <h2 className="section-title">Simple, Clear Process</h2>
          <div className="process-list">
            {[
              {
                step: "01",
                title: "Store Review",
                desc: "I audit your theme for performance, UX, and code quality.",
              },
              {
                step: "02",
                title: "Scope & Proposal",
                desc: "You get a clear breakdown of work, timeline, and cost.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Clean, tested code — delivered in focused sprints.",
              },
              {
                step: "04",
                title: "QA & Launch",
                desc: "Thorough testing across devices before going live.",
              },
              {
                step: "05",
                title: "Ongoing Support",
                desc: "Optional retainer for continuous improvements.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="process-step">
                <span className="process-step-num">{step}</span>
                <div>
                  <h3 className="process-step-title">{title}</h3>
                  <p className="process-step-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider">
        <hr />
      </div>

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-container">
          <h2 className="section-title">Transparent Pricing</h2>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cell-label">Theme Enhancements</td>
                  <td className="cell-muted">
                    Projects typically start at $800
                  </td>
                </tr>
                <tr>
                  <td className="cell-label">Custom Section Development</td>
                  <td className="cell-muted">
                    $1,500 – $5,000 depending on scope
                  </td>
                </tr>
                <tr>
                  <td className="cell-label">Ongoing Theme Support</td>
                  <td className="cell-muted">
                    Monthly retainers available for long-term partners
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pricing-note">
            Every project starts with a free store review. No surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding cta-section">
        <div className="max-container">
          <h2 className="section-title">Let's Improve Your Store</h2>
          <p className="section-intro">
            Book a free 15-minute call and I'll share 3 actionable improvements
            for your theme.
          </p>
          <a href={CALENDLY_URL} className="btn-primary btn-primary-inverse">
            Book a Call
            <ArrowRight style={{ width: "1rem", height: "1rem" }} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="section-padding-sm footer">
        <div className="max-container footer-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} · Shopify Theme Expert
          </p>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`} className="footer-link">
              <Mail /> Email
            </a>
            <a href={CALENDLY_URL} className="footer-link">
              <Calendar /> Calendly
            </a>
            <a href={LINKEDIN_URL} className="footer-link">
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
