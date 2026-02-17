import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
  {
    label: "Book a Call",
    href: "https://calendly.com/eugenekasimov/new-meeting",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand">
          <span className="navbar-brand-name">Eugene Kasimov</span>
          <span className="navbar-brand-tagline">
            Former Shopify Flagship Themes Developer
          </span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navbar-menu-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu style={{ width: "1.25rem", height: "1.25rem" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />
      <div
        className={`mobile-menu-panel ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="navbar-menu-btn"
          onClick={closeMobile}
          aria-label="Close menu"
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
        >
          <X style={{ width: "1.25rem", height: "1.25rem" }} />
        </button>
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="mobile-menu-link" onClick={closeMobile}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
