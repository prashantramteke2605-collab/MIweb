import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/#stories", label: "Stories" },
  { to: "/#about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/#voices", label: "Voices" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [loc.pathname]);

  const handleAnchor = (to) => {
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (loc.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[rgba(6,6,10,0.85)] backdrop-blur-md border-b border-line" : "py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3">
          <img
            src="/images/Minnerva_Logo.png"
            alt="Minnerva Innov"
            className="h-8 w-8 object-contain"
          />
          <span className="font-display text-2xl tracking-wider">MINNERVA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <a
                key={l.to}
                href={l.to}
                onClick={() => handleAnchor(l.to)}
                className="link-underline text-[13px] uppercase tracking-[0.18em] text-white/70 hover:text-white"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `link-underline text-[13px] uppercase tracking-[0.18em] ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-pill btn-pill--lime" data-testid="nav-talk-cta">
            Let's Talk
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-[2px] bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#06060A] border-t border-line px-5 py-6" data-testid="nav-mobile-menu">
          <div className="flex flex-col gap-4">
            {links.map((l) =>
              l.to.startsWith("/#") ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => handleAnchor(l.to)}
                  className="text-white/80 text-sm uppercase tracking-[0.18em]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-white/80 text-sm uppercase tracking-[0.18em]"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link to="/contact" className="btn-pill btn-pill--lime mt-3">
              Let's Talk →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
