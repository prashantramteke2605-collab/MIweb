import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-line bg-[#06060A] pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] orb orb--lime opacity-30" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/Minnerva_Logo.png"
                alt="Minnerva"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-3xl tracking-wider">
                MINNERVA INNOV
              </span>
            </div>
            <p className="font-editorial text-3xl md:text-4xl leading-[1.1] max-w-lg mb-8">
              With Minnerva, its all about Creating New Possibilities
            </p>
            <Link to="/contact" className="btn-pill btn-pill--ember" data-testid="footer-cta">
              Start something unforgettable <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Navigate</div>
            <ul className="space-y-3">
              {[
                { to: "/", l: "Home" },
                { to: "/#stories", l: "Stories that Matter" },
                { to: "/#about", l: "About Us" },
                { to: "/services", l: "What We Do" },
                { to: "/#voices", l: "Social Proof" },
                { to: "/contact", l: "Contact Us" },
              ].map((x) => (
                <li key={x.l}>
                  {x.to.startsWith("/#") ? (
                    <a
                      href={x.to}
                      className="text-white/70 hover:text-white transition text-sm link-underline"
                    >
                      {x.l}
                    </a>
                  ) : (
                    <Link
                      to={x.to}
                      className="text-white/70 hover:text-white transition text-sm link-underline"
                    >
                      {x.l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Get in touch</div>
            <a
              href="mailto:storm@minervainnov.com"
              className="block text-white text-lg mb-3 link-underline"
              data-testid="footer-email"
            >
              storm@minervainnov.com
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
                  D2-1501, The Meadows, Adani Shantigram
                 <br></br> Near Adani Corporate House
                  <br></br>Ahmedabad, 382 421
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row gap-4 items-center justify-between text-white/40 text-xs uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} Minnerva Innov. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
