import { CheckCircle2 } from "lucide-react";

const AUTHORITY_ITEMS = [
  "Part of the Shopify Flagship Themes team",
  "Top-5 contributor to the Dawn theme",
  "Helped build Horizon from scratch",
  "Deep experience in Online Store 2.0 architecture",
  "Focus on performance, accessibility, and maintainability",
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-container">
      <div className="about-layout">
        <img
          src="/ek.jpeg"
          alt="Eugene"
          className="about-image"
        />
        <div className="about-content">
          <h2 className="section-title">Hi, I'm Eugene</h2>
          <div className="about-text">
            <p>
              I spent several years working on Shopify's Flagship Themes team,
              contributing to Dawn (top-5 contributor) and helping build Horizon
              from scratch.
            </p>
            <p>
              Working inside Shopify gave me a deep understanding of modern
              theme architecture, Online Store 2.0, performance optimization,
              and how real merchants actually use their storefronts.
            </p>
            <p>
              Today, I work directly with brands who want more than quick fixes.
              I help merchants improve performance, clean up technical debt, and
              build storefronts that are scalable, fast, and conversion-focused.
            </p>
            <p>Based in Alberta, I work with Shopify brands globally.</p>
          </div>
        </div>
      </div>

      <h3 className="section-title-sm">Built the Themes Millions of Stores Use</h3>
      <div className="authority-grid">
        {AUTHORITY_ITEMS.map((item) => (
          <div key={item} className="authority-item">
            <CheckCircle2 className="authority-icon" />
            <span className="authority-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
