import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../../lib/content";

// 1. Defined your new 3-card layout data based on the provided mockup
const NEW_ABOUT_CARDS = [
  {
    title: "Trusted by incredible and responsible brands who want to move fast",
    sub: "80+ projects with fortune 500",
    tone: "lime",
  },
  {
    title: "Built for the busy and ambitious Heroes",
    sub: "Yes! This is where Your Gut feelings and “What if We…..” becomes a priority",
    tone: "ember",
  },
  {
    title: "Just one R&D head whispering to another… “You really need to talk to these people”",
    sub: "(From receiving a brief to Project Kick-off in 48 hrs)",
    tone: "lime",
  },
];

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
          
          {/* NEW HERO LAYOUT: Left Text, Center Absolute Image, Right Stacked Cards */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-16 lg:gap-8 relative min-h-[600px]">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:w-[40%] flex flex-col justify-center relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="eyebrow mb-4">About</div>
                <h2 className="display-xl mb-6 uppercase">
                  Hi there! <br />
                  <span className="text-lime">We're Minnerva.</span>
                </h2>
                <p className="font-editorial text-2xl md:text-3xl text-white/85 leading-[1.15] mb-6">
                  The team you dial-in when briefs are ambitious, assumptions need challenging, and the stakes are too high for safe thinking. 
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
                 Wired with unfair amounts of energy and curiosity — Like you, we're at our best when boundaries are meant to be pushed.
                </p>
                <Link to="/contact" className="btn-pill btn-pill--lime w-max" data-testid="about-cta">
                  Let's Talk <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>

            {/* Center Column: Absolute Mascot Image */}
            <div className="lg:absolute lg:left-[53%] lg:-bottom-12 lg:-translate-x-1/2 lg:w-[300px] flex justify-center z-30 pointer-events-none">
              <motion.img 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/images/Panda_ABout us.png" 
                alt="Minnerva Mascot" 
                className="w-80 lg:w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-105 origin-bottom"
              />
            </div>

            {/* Right Column: 3 Stacked Cards */}
            <div className="lg:w-[35%] flex flex-col justify-center gap-5 relative z-20">
              {NEW_ABOUT_CARDS.map((card, i) => (
                <AboutTile key={i} t={card} i={i} />
              ))}
            </div>
            
          </div>

          {/* UPDATED: Our Clients Section (2-Column Layout) */}
          <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="display-xl uppercase leading-[0.95] mb-6">
                A bit about our<br />
                <span className="text-lime">incredible clients.</span><br />
                
              </h3>
              <p className="font-editorial text-xl md:text-2xl text-white/70 leading-relaxed">
                They're ambitious, They're hyper-connected and they thrive in demanding environments!
                <br></br><br></br>
                What Else? <br></br> They know what it takes to serve a modern consumer who is Time, Attention and Patience-poor… and
                  demands convenience on their terms
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/images/BG_Case_2OC.png" 
                alt="Incredible Clients" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* UPDATED: Discovery Section (Image + Text Layout based on Mockup) */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Hacker Panda Image */}
            <div className="flex justify-center lg:justify-start relative translate-y-10 lg:translate-y-16">
              <div className="absolute inset-0 bg-lime/5 blur-3xl rounded-full" />
              <img 
                src="/images/TheStakes_Risk_Case2.jpg" 
                alt="How brands discover us" 
                className="w-full max-w-[400px] h-auto object-contain relative z-10 rounded-xl"
              />
            </div>
            
            {/* Right Column: Text Content */}
            <div>
              <h3 className="display-lg mb-8">So, how do Brands discover us??</h3>
              
              <div className="font-editorial text-xl md:text-2xl text-white/85 leading-relaxed">
                <p className="mb-6">
                  We have seen a couple of ways<br />
                  Often, they come through a trusted reference, that said ... <span className="text-lime font-medium">“You really need to talk to these people”</span>
                </p>
                <p className="mb-4">
                  And the other times— just like you did — when they had to
                </p>
                <div className="space-y-2">
                  {[
                    "Deliver something incredible….",
                    "Re-think like a Start-up and move fast….",
                    "Cut the noise and be relevant…",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lime font-display">{i + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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

      {/* NEWLY ADDED TEXT SECTION BELOW SERVICES CARDS */}
      <section className="bg-[#06060A] pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
           Each of these services are extensively put to test by companies serving in over 180 markets
          </motion.p>
        </div>
      </section>
    </>
  );
}

// 2. Updated AboutTile to format the text based on your new mockup
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
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className={`relative p-6 rounded-2xl border border-line bg-[#0D0D14]/80 backdrop-blur-md transition-all duration-300 ${toneBg} hover:-translate-y-1 shadow-lg`}
      data-testid={`about-tile-${i}`}
    >
      <div className="flex gap-4 items-start">
        <div className={`w-8 h-8 shrink-0 rounded-full ${dot} flex items-center justify-center text-[#06060A] font-display text-sm mt-1`}>
          0{i + 1}
        </div>
        <div>
          <div className="font-display text-xl leading-tight text-white/90 mb-2">{t.title}</div>
          <div className="text-sm text-lime leading-relaxed font-medium">{t.sub}</div>
        </div>
      </div>
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