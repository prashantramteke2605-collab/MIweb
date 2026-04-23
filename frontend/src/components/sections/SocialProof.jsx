import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../../lib/content";

export default function SocialProof() {
  const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));
  return (
    <section
      id="voices"
      className="relative bg-[#0a0a12] py-28 md:py-36 overflow-hidden"
      data-testid="social-proof-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow mb-4">Social Proof</div>
          <h2 className="display-xl">
            What the <span className="text-ember">room</span> said after we left?
          </h2>
          <p className="font-editorial text-xl md:text-2xl text-white/70 mt-5 max-w-2xl">
            Here's what the unfiltered conversations look like.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
        <Marquee gradient={false} speed={35} direction="right" pauseOnHover>
          {row2.map((t, i) => (
            <TestimonialCard key={i} t={t} tone="ember" />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ t, tone = "lime" }) {
  const border =
    tone === "ember" ? "border-ember/30" : "border-lime/30";
  const accent = tone === "ember" ? "text-ember" : "text-lime";
  return (
    <div
      className={`mx-3 min-w-[360px] max-w-[420px] border ${border} bg-white/[0.02] backdrop-blur-sm rounded-2xl p-7 hover:bg-white/[0.05] transition`}
      data-testid="testimonial-card"
    >
      <div className={`${accent} font-display text-5xl leading-none mb-3`}>"</div>
      <p className="text-white text-[15px] leading-relaxed mb-5 line-clamp-5">
        {t.quote}
      </p>
      <div className="border-t border-line pt-4">
        <div className="text-sm text-white font-medium">{t.who}</div>
        {t.note && (
          <div className="text-xs text-white/50 mt-1 italic">{t.note}</div>
        )}
      </div>
    </div>
  );
}
