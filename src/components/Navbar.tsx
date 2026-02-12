import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Hero", href: "#hero" },
  { label: "Authority", href: "#authority" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "CTA", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-container flex items-center justify-between h-14 px-6 md:px-12 lg:px-20">
        <a href="#hero" className="font-semibold text-sm text-foreground">
          Eugene
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
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
