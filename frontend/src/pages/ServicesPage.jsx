import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            When you have to make <span className="text-lime">dangerous</span> decisions.
          </h1>
          <p className="font-editorial text-2xl md:text-3xl text-white/70 mt-6 max-w-4xl">
            Four surgical capabilities. Each exists because someone had a dangerous question
            — and needed a dangerous answer. Right there.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 space-y-28">
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.slug} s={s} index={i} />
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
  const accent =
    s.tone === "ember"
      ? { text: "text-ember", bg: "bg-ember", border: "border-ember/40", strip: "var(--ember)" }
      : s.tone === "red"
      ? { text: "text-red-brand", bg: "bg-red-brand", border: "border-red-brand/40", strip: "var(--red)" }
      : { text: "text-lime", bg: "bg-lime", border: "border-lime/40", strip: "var(--lime)" };
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
        <div className="lg:col-span-4">
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

        <div className="lg:col-span-8">
          <div
            className="card-strip p-8 md:p-10"
            style={{ "--strip": accent.strip }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
              Do this when you have to understand
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
              {s.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-b border-line py-3"
                >
                  <span className={`font-display text-xl ${accent.text}`}>
                    0{i + 1}
                  </span>
                  <span className="text-white/85">{b}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
                  Recent use case
                </div>
                <p className="font-editorial text-lg text-white/80 leading-relaxed">
                  {s.useCase}
                </p>
              </div>
              <div className="md:col-span-2">
                <div className={`p-5 rounded-2xl border ${accent.border} bg-black/40`}>
                  <div className="font-display text-3xl mb-2">{s.takeHome}</div>
                  <div className="text-white/70 text-sm mb-4">{s.takeHomeSub}</div>
                  <Link
                    to="/contact"
                    className="btn-pill btn-pill--ghost"
                    data-testid={`service-cta-${s.slug}`}
                  >
                    Let's Talk →
                  </Link>
                </div>
              </div>
            </div>

            {s.logos.length > 0 && (
              <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-white/40 self-center">
                  Context:
                </span>
                {s.logos.map((l) => (
                  <span
                    key={l}
                    className="text-[11px] uppercase tracking-[0.2em] text-white/60 border border-line px-3 py-1.5 rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
