import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ABOUT_TILES, SERVICES } from "../../lib/content";

export default function AboutServices() {
  return (
    <>
      <section
        id="about"
        className="relative bg-[#0a0a12] py-28 md:py-36 overflow-hidden"
        data-testid="about-section"
      >
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] orb orb--lime opacity-50" />
        <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] orb orb--ember opacity-40" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="eyebrow mb-4">About</div>
                <h2 className="display-xl mb-6">
                  Hi there —<br />
                  <span className="text-lime">we're Minnerva.</span>
                </h2>
                <p className="font-editorial text-2xl md:text-3xl text-white/85 leading-[1.15] mb-6">
                  Your team with unfair energies and curiosity. The people in
                  the room who walk in with dangerous thoughts.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                  Five years in. 80+ projects with Fortune 500 FMCG R&D and
                  Marketing leaders. Across Oral Care, Personal Care, Laundry
                  and Dishwash. We don't sell reports — we bring you back
                  conviction.
                </p>
                <Link to="/contact" className="btn-pill btn-pill--lime" data-testid="about-cta">
                  Let's Talk <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {ABOUT_TILES.map((t, i) => (
                  <AboutTile key={i} t={t} i={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32 max-w-4xl">
            <div className="eyebrow mb-4">Our Clients</div>
            <h3 className="display-lg mb-6">
              Ambitious. Demanding.<br />Dealing with a consumer who is{" "}
              <span className="text-ember">time-poor, attention-poor</span>, and hyper-connected.
            </h3>
            <p className="font-editorial text-xl text-white/70 leading-relaxed">
              Brands working with us are known to (a) shake the cages (b) stay
              curious and (c) redefine Sustainability.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Discovery</div>
              <h3 className="display-lg">So, how do Brands end up finding us?</h3>
            </div>
            <div className="lg:col-span-7">
              <p className="font-editorial text-2xl md:text-3xl leading-[1.2] mb-8">
                No billboards. No cold DMs. Just one R&D head whispering to
                another: <span className="text-lime">"You really need to talk to these people."</span>
              </p>
              <div className="space-y-5">
                {[
                  "Deliver something incredible.",
                  "Re-think like a start-up — and move fast.",
                  "Cut the noise and be relevant.",
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-5 border-b border-line pb-5"
                  >
                    <span className="font-display text-3xl text-lime">0{i + 1}</span>
                    <span className="text-xl text-white/85">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-32 text-center max-w-4xl mx-auto"
          >
            <h3 className="display-xl">
              Sound like <span className="text-ember">your people?</span>
            </h3>
            <p className="font-editorial text-xl md:text-2xl text-white/70 mt-5 mb-8">
              If you've made it this far, you're probably already dangerous enough.
              Let's make something unforgettable.
            </p>
            <Link to="/contact" className="btn-pill btn-pill--ember" data-testid="about-bottom-cta">
              Let's Talk <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <ServicesTeaser />
    </>
  );
}

function AboutTile({ t, i }) {
  const toneBg =
    t.tone === "ember"
      ? "hover:border-ember/40"
      : t.tone === "red"
      ? "hover:border-red-brand/40"
      : "hover:border-lime/40";
  const dot =
    t.tone === "ember" ? "bg-ember" : t.tone === "red" ? "bg-red-brand" : "bg-lime";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className={`relative p-7 rounded-2xl border border-line bg-white/[0.02] transition-all duration-300 ${toneBg} hover:-translate-y-1`}
      data-testid={`about-tile-${i}`}
    >
      <div className={`w-10 h-10 rounded-full ${dot} mb-5 flex items-center justify-center text-[#06060A] font-display text-lg`}>
        0{i + 1}
      </div>
      <div className="font-display text-2xl leading-tight">{t.title}</div>
    </motion.div>
  );
}

function ServicesTeaser() {
  return (
    <section
      id="services"
      className="relative bg-[#06060A] py-28 md:py-36 overflow-hidden"
      data-testid="services-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="eyebrow mb-4">Services</div>
            <h2 className="display-xl">
              Things we do for <span className="text-lime">incredible brands</span>
            </h2>
          </div>
          <Link to="/services" className="btn-pill btn-pill--ghost" data-testid="services-explore-cta">
            Explore all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  const stripColor =
    s.tone === "ember"
      ? "var(--ember)"
      : s.tone === "red"
      ? "var(--red)"
      : "var(--lime)";
  const accent =
    s.tone === "ember"
      ? "text-ember"
      : s.tone === "red"
      ? "text-red-brand"
      : "text-lime";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="h-full"
    >
      <Link
        to={`/services#${s.slug}`}
        className="card-strip block p-7 pl-10 h-full flex flex-col"
        style={{ "--strip": stripColor }}
        data-testid={`service-card-${s.slug}`}
      >
        <div className={`eyebrow mb-3 ${accent}`}>{s.eyebrow}</div>
        <h3 className="font-display text-3xl mb-4 leading-tight">{s.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{s.sub}</p>
        <div className="mt-auto pt-6 border-t border-line">
          <div className="font-editorial text-base text-white/70 italic mb-3">
            "{s.teaser}"
          </div>
          {s.logos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {s.logos.map((l) => (
                <span
                  key={l}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/50 border border-line px-2 py-1 rounded-full"
                >
                  {l}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className={`mt-5 text-xs uppercase tracking-[0.25em] ${accent} flex items-center gap-2`}>
          {s.takeHome} <span>→</span>
        </div>
      </Link>
    </motion.div>
  );
}
