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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I'm Eugene</h2>
      <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
        <p>
          I spent several years working on Shopify's Flagship Themes team, contributing to Dawn (top-5 contributor) and helping build Horizon from scratch.
        </p>
        <p>
          Working inside Shopify gave me a deep understanding of modern theme architecture, Online Store 2.0, performance optimization, and how real merchants actually use their storefronts.
        </p>
        <p>
          Today, I work directly with brands who want more than quick fixes. I help merchants improve performance, clean up technical debt, and build storefronts that are scalable, fast, and conversion-focused.
        </p>
        <p>Based in Alberta, I work with Shopify brands globally.</p>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-8">Built the Themes Millions of Stores Use</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {AUTHORITY_ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-3 py-3">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <span className="text-base md:text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
