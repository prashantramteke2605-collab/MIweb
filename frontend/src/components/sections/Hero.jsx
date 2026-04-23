import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HERO } from "../../lib/content";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const orb1X = useTransform(sx, [-1, 1], [-40, 40]);
  const orb1Y = useTransform(sy, [-1, 1], [-30, 30]);
  const orb2X = useTransform(sx, [-1, 1], [30, -30]);
  const orb2Y = useTransform(sy, [-1, 1], [20, -20]);

  useEffect(() => {
    const h = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#06060A] pt-28 pb-20"
      data-testid="hero-section"
    >
      {/* background video */}
      <div className="absolute inset-0 opacity-[0.22]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/11/05/187974-881867892_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060A]/60 via-[#06060A]/75 to-[#06060A]" />
      </div>

      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div
        className="orb orb--lime"
        style={{ x: orb1X, y: orb1Y, width: 600, height: 600, top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="orb orb--ember"
        style={{ x: orb2X, y: orb2Y, width: 500, height: 500, bottom: "-15%", right: "-10%" }}
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          {HERO.eyebrow}
        </motion.div>

        <div className="max-w-[1100px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="display-xxl"
          >
            There are no <span className="text-lime">accidents</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-editorial text-2xl md:text-4xl mt-6 text-white/85 max-w-4xl"
          >
            You discovered us for a reason — and it must be (at least) one of these.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl"
        >
          {HERO.ctas.map((c, i) => (
            <HeroCta key={c.id} cta={c} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap gap-8 items-center text-white/50 text-xs uppercase tracking-[0.2em]"
          data-testid="hero-meta"
        >
          <span>Fortune 500 FMCG</span>
          <span className="w-1 h-1 bg-lime rounded-full" />
          <span>80+ Projects</span>
          <span className="w-1 h-1 bg-lime rounded-full" />
          <span>5 Years In</span>
          <span className="w-1 h-1 bg-lime rounded-full" />
          <span>Oral · Personal · Laundry · Dish</span>
        </motion.div>
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  );
}

function HeroCta({ cta, index }) {
  const toneMap = {
    lime: {
      bg: "hover:bg-lime hover:text-[#06060A]",
      border: "border-lime/40",
      accent: "text-lime",
      glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(200,255,0,0.6)]",
    },
    sky: {
      bg: "hover:bg-[#4EC9FF] hover:text-[#06060A]",
      border: "border-[#4EC9FF]/40",
      accent: "text-[#4EC9FF]",
      glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(78,201,255,0.6)]",
    },
    red: {
      bg: "hover:bg-red-brand hover:text-white",
      border: "border-red-brand/40",
      accent: "text-red-brand",
      glow: "group-hover:shadow-[0_20px_50px_-20px_rgba(244,0,9,0.6)]",
    },
  };
  const t = toneMap[cta.tone];
  return (
    <Link
      to={`/services#${cta.id}`}
      data-testid={`hero-cta-${cta.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${t.border} bg-white/[0.02] backdrop-blur-sm p-7 md:p-8 h-48 transition-all duration-500 ${t.bg} ${t.glow}`}
    >
      <div className={`flex items-center justify-between text-xs uppercase tracking-[0.25em] ${t.accent} group-hover:text-current`}>
        <span>0{index + 1}</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
      <div>
        <div className="font-display text-4xl md:text-5xl mb-2">{cta.label}</div>
        <div className="text-sm text-white/60 group-hover:text-current transition">
          {cta.sub}
        </div>
      </div>
    </Link>
  );
}
