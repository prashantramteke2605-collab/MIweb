import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SERVICES } from "../lib/content";

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <article className="relative bg-[#06060A] pb-28" data-testid="services-page">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 -right-40 w-[700px] h-[700px] orb orb--lime opacity-40" />
        <div className="absolute bottom-0 -left-40 w-[700px] h-[700px] orb orb--ember opacity-30" />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-[0.25em] mb-10"
            data-testid="services-back-link"
          >
            ← Home
          </Link>
          <div className="eyebrow mb-4">Services</div>
          <h1 className="display-xxl max-w-5xl leading-[0.95]">
            When you have to make <span className="text-lime">ambitious</span> goals.
          </h1>
          <p className="font-editorial text-2xl md:text-3xl text-white/70 mt-6 max-w-4xl">
            Four surgical capabilities. Each exists because someone had a dangerous question
            — and needed a dangerous answer. Right there.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 space-y-28">
        {SERVICES.map((s, index) => (
          <ServiceBlock key={s.slug} s={s} index={index} />
        ))}
      </div>

      <section className="mt-32 py-28 bg-[#0a0a12] border-t border-line">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          <h3 className="display-xl mb-5">
            Sound like <span className="text-ember">your people?</span>
          </h3>
          <p className="font-editorial text-xl md:text-2xl text-white/70 mb-8">
            If you've made it this far, you're probably already dangerous enough.
            Let's make something unforgettable.
          </p>
          <Link to="/contact" className="btn-pill btn-pill--lime" data-testid="services-bottom-cta">
            Let's Talk <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function ServiceBlock({ s, index }) {
  const accentMap = {
    ember: { text: "text-ember", border: "border-ember", strip: "var(--ember)" },
    red: { text: "text-red-brand", border: "border-red-brand", strip: "var(--red)" },
    lime: { text: "text-lime", border: "border-lime", strip: "var(--lime)" },
  };
  const accent = accentMap[s.tone] || accentMap.lime;

  return (
    <motion.section
      id={s.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-28"
      data-testid={`service-block-${s.slug}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div>
            <div
              className={`eyebrow mb-4 ${accent.text}`}
            >
              0{index + 1} / {s.eyebrow}
            </div>
            <h2 className="display-lg mb-5">{s.title}</h2>
            <p className="font-editorial text-xl text-white/75 leading-relaxed">
              {s.sub}
            </p>
          </div>
          
          <div className="mt-10 flex flex-col xl:flex-row gap-4 border-t border-line/50 pt-6">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[#06060A] font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accent.strip }}
            >
              Let's Talk
            </Link>
            <a 
              href={`mailto:?subject=${encodeURIComponent(s.title)}&body=${encodeURIComponent("Thought you'd appreciate this capability from Minnerva Innov: " + s.title)}`}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide border transition-colors hover:bg-white/[0.05]"
              style={{ borderColor: accent.strip, color: accent.strip }}
            >
              Share with your colleague
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div
            className={`rounded-2xl border ${accent.border} bg-[#0D0D14] p-8 md:p-10`}
            style={{ "--accent-color": accent.strip }}
          >
            <div className={`h-1.5 rounded-t-xl mb-6`} style={{ backgroundColor: accent.strip }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left part: Scenario */}
              <div className="lg:col-span-8 flex flex-col" id={`${s.slug}-scenario`}>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">The Dangerous Scenario</div>
                
                <p className="font-editorial text-2xl md:text-3xl text-white/85 leading-[1.2] mb-6">
                  {index === 0 ? "Ensures, the team is giving an F1 track performance often with a city car engine." : "[Large Scenario text goes here...]"}
                </p>

                <ul className="grid grid-cols-2 gap-3 mb-10">
                  {s.bullets.map((b, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className={`flex gap-3 items-center border ${accent.border} rounded-lg p-3`}
                    >
                      <span className={`text-sm ${accent.text}`} aria-hidden>•</span> 
                      <span className="text-sm text-white/90">{b}</span>
                    </li>
                  ))}
                  {s.bullets.length < 4 && Array.from({ length: 4 - s.bullets.length }).map((_, placeholderIndex) => (
                    <li key={`placeholder-${placeholderIndex}`} className={`flex gap-3 items-center border ${accent.border} rounded-lg p-3`}>
                      <span className={`text-sm ${accent.text}`} aria-hidden>•</span>
                      <span className="text-sm text-white/90">
                        {index === 0 ? [
                          "My Consumers", 
                          "My Marketers", 
                          "My Lab experiments/claims", 
                          "My IP & Launch Plan"
                        ][s.bullets.length + placeholderIndex] : `[Scenario bullet text here...]`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right part: DELIVERED */}
              <div className="lg:col-span-4 flex flex-col" id={`${s.slug}-delivered`}>
                <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">Minnerva Innov. DELIVERED</div>
                
                <div className={`relative p-5 rounded-2xl border ${accent.border} bg-black/40`}>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 flex items-center justify-center aspect-square text-xs font-bold w-12 hover:bg-white/80 transition shadow-lg">
                    <Link to="/contact" data-testid={`service-cta-${s.slug}`} className="hover:text-black">
                       Talk →
                    </Link>
                  </div>
                  
                  <div className="font-display text-2xl mb-2 max-w-[calc(100%-3rem)]">{s.takeHome}</div>
                  <div className="text-white/70 text-sm mb-4">{s.takeHomeSub}</div>
                </div>
              </div>
            </div>

            {/* NEW VISUALLY DISTINCT "RECENT USE CASE" SECTION WITH ACCENT BACKGROUND */}
            {s.useCase && (
              <div className="mt-8 pt-8 border-t border-line">
                <div 
                  className="p-6 rounded-xl border-l-4 backdrop-blur-sm"
                  style={{ 
                    borderColor: accent.strip,
                    /* Mixes the card's accent color with 92% transparency to create a distinct tinted background */
                    backgroundColor: `color-mix(in srgb, ${accent.strip} 8%, transparent)` 
                  }}
                >
                  <div className="text-xs uppercase tracking-[0.25em] mb-3 font-bold" style={{ color: accent.strip }}>
                    Recent Use Case
                  </div>
                  <p className="font-editorial text-lg md:text-xl text-white/90 leading-relaxed">
                    {s.useCase}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.section>
  );
}