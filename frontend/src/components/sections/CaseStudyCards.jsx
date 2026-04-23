import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../lib/content";

export default function CaseStudyCards() {
  return (
    <section
      id="stories"
      className="relative bg-[#06060A] py-28 md:py-36 overflow-hidden"
      data-testid="case-studies-section"
    >
      <div className="absolute top-0 right-0 w-[700px] h-[700px] orb orb--red opacity-30" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex items-end justify-between gap-10 mb-16 flex-wrap">
          <div>
            <div className="eyebrow mb-4">Case Studies</div>
            <h2 className="display-xl">Stories that matter…</h2>
            <p className="font-editorial text-xl md:text-2xl text-white/70 mt-4 max-w-2xl">
              Dangerous questions. Decision-ready answers. Real rooms, real stakes.
            </p>
          </div>
          <div className="text-white/40 text-sm uppercase tracking-[0.25em]">
            03 / featured
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <Link
                to={`/case/${cs.slug}`}
                className="card-strip block h-full group"
                style={{ "--strip": cs.strip }}
                data-testid={`case-card-${cs.slug}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cs.bannerImg}
                    alt={cs.cardTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060A] via-[#06060A]/30 to-transparent" />
                  <div className="absolute top-4 left-7 text-[11px] uppercase tracking-[0.3em] text-white/70">
                    Case 0{i + 1}
                  </div>
                </div>
                <div className="p-7 pl-10">
                  <div className="eyebrow mb-3 !text-white/50">{cs.subtitle}</div>
                  <h3 className="font-display text-2xl md:text-3xl leading-[1.05] mb-6">
                    {cs.cardTitle}
                  </h3>
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition">
                    <span>Read the story</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
