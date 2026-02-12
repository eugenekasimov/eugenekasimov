import { ArrowRight, Mail, Linkedin, Calendar, Zap, Layers, Wrench, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

const CALENDLY_URL = "#";
const EMAIL = "hello@example.com";
const LINKEDIN_URL = "#";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* Hero */}
      <section id="hero" className="section-padding min-h-[90vh] flex items-center pt-28">
        <div className="max-container">
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-border text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Ex-Shopify Flagship Themes Engineer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-balance mb-6">
            Former Shopify Flagship Themes Developer Helping Brands Optimize & Extend Dawn
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Top-5 contributor to Dawn and core contributor to Horizon.
            I help Shopify merchants build faster, cleaner, and higher-converting storefronts.
          </p>
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Book a Free Store Review
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-container px-6 md:px-12 lg:px-20">
        <hr className="border-border" />
      </div>

      {/* About (includes Authority) */}
      <AboutSection />

      <div className="max-container px-6 md:px-12 lg:px-20">
        <hr className="border-border" />
      </div>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="max-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Help With</h2>
          <p className="text-muted-foreground mb-12 text-lg">Focused, high-impact Shopify theme work.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Theme Optimization & Performance",
                items: ["Speed improvements", "Removing app bloat", "Mobile UX refinement", "Lighthouse improvements"],
              },
              {
                icon: Layers,
                title: "Custom Section Development",
                items: ["Landing page components", "Product page enhancements", "Custom blocks", "UX upgrades"],
              },
              {
                icon: Wrench,
                title: "Theme Cleanup & Refactoring",
                items: ["Fix messy Liquid", "Improve maintainability", "Remove unused code", "Reduce technical debt"],
              },
              {
                icon: Shield,
                title: "Ongoing Theme Support",
                items: ["Monthly retainer", "Priority updates", "Emergency fixes"],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="p-6 rounded-xl border border-border bg-card">
                <Icon className="w-6 h-6 mb-4 text-foreground" />
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-container px-6 md:px-12 lg:px-20">
        <hr className="border-border" />
      </div>

      {/* Experience */}
      <section className="section-padding">
        <div className="max-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deep Experience in Dawn & OS&nbsp;2.0
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              As a core member of the Shopify Flagship Themes team, I've contributed directly to the code that powers millions of online stores worldwide.
            </p>
            <p>
              From architecting performant Liquid templates to ensuring WCAG accessibility compliance, my work on Dawn and Horizon has been focused on production-grade quality at scale.
            </p>
            <p>
              I bring that same standard of engineering to every merchant project — clean code, fast load times, and zero technical debt.
            </p>
          </div>
        </div>
      </section>

      <div className="max-container px-6 md:px-12 lg:px-20">
        <hr className="border-border" />
      </div>

      {/* Process */}
      <section id="process" className="section-padding">
        <div className="max-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Simple, Clear Process</h2>
          <div className="grid gap-0">
            {[
              { step: "01", title: "Store Review", desc: "I audit your theme for performance, UX, and code quality." },
              { step: "02", title: "Scope & Proposal", desc: "You get a clear breakdown of work, timeline, and cost." },
              { step: "03", title: "Development", desc: "Clean, tested code — delivered in focused sprints." },
              { step: "04", title: "QA & Launch", desc: "Thorough testing across devices before going live." },
              { step: "05", title: "Ongoing Support", desc: "Optional retainer for continuous improvements." },
            ].map(({ step, title, desc }, i) => (
              <div
                key={step}
                className="flex items-start gap-6 py-6 border-b border-border last:border-b-0"
              >
                <span className="font-mono text-sm text-muted-foreground mt-1 shrink-0 w-8">{step}</span>
                <div>
                  <h3 className="font-semibold text-base mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-container px-6 md:px-12 lg:px-20">
        <hr className="border-border" />
      </div>

      {/* Pricing Hint */}
      <section className="section-padding">
        <div className="max-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing</h2>
          <div className="space-y-4 text-lg max-w-xl">
            <div className="flex items-baseline gap-3">
              <span className="font-semibold">Small fixes</span>
              <span className="text-muted-foreground">start at $800</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-semibold">Custom sections</span>
              <span className="text-muted-foreground">typically $1,500 – $5,000</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-semibold">Ongoing support</span>
              <span className="text-muted-foreground">monthly retainer available</span>
            </div>
          </div>
          <p className="text-muted-foreground mt-8 text-sm">
            Every project starts with a free review. No surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding bg-primary text-primary-foreground">
        <div className="max-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Improve Your Store</h2>
          <p className="text-lg opacity-80 mb-10 max-w-lg mx-auto">
            Book a free 15-minute call and I'll share 3 actionable improvements for your theme.
          </p>
          <a
            href={CALENDLY_URL}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="section-padding-sm border-t border-border">
        <div className="max-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Shopify Dawn Expert
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href={CALENDLY_URL} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" /> Calendly
            </a>
            <a href={LINKEDIN_URL} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
