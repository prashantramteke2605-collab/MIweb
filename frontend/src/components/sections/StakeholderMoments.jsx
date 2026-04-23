import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STAKEHOLDERS } from "../../lib/content";

export default function StakeholderMoments() {
  const [active, setActive] = useState(STAKEHOLDERS[0].id);
  const current = STAKEHOLDERS.find((s) => s.id === active);
  const accentMap = {
    lime: { text: "text-lime", bg: "bg-lime", border: "border-lime/40" },
    ember: { text: "text-ember", bg: "bg-ember", border: "border-ember/40" },
    red: { text: "text-red-brand", bg: "bg-red-brand", border: "border-red-brand/40" },
  };
  const a = accentMap[current.accent];
  return (
    <section
      id="heroes"
      className="relative bg-[#06060A] py-28 md:py-36 overflow-hidden"
      data-testid="stakeholder-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-12">
          <div className="eyebrow mb-4">For your role</div>
          <h2 className="display-xl">
            How we help the <span className="text-lime">Heroes</span>
          </h2>
          <p className="font-editorial text-xl md:text-2xl text-white/70 mt-5 max-w-3xl">
            Empathy with a little cheek. Pick your seat at the table.
          </p>
        </div>

        <div
          role="tablist"
          className="flex flex-wrap border-b border-line mb-12"
          data-testid="stakeholder-tabs"
        >
          {STAKEHOLDERS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              data-active={active === s.id}
              onClick={() => setActive(s.id)}
              className="mn-tab cursor-hover"
              data-testid={`stakeholder-tab-${s.id}`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            data-testid={`stakeholder-panel-${current.id}`}
          >
            <div>
              <div className={`eyebrow mb-4 ${a.text}`}>Scenario</div>
              <h3 className="font-display text-4xl md:text-5xl leading-[1.02] mb-6">
                {current.headline}
              </h3>
              <p className="text-white/75 text-lg leading-relaxed">
                {current.body}
              </p>
              <div className={`mt-10 inline-flex items-center gap-4 pl-5 border-l-2 ${a.border}`}>
                <span className={`font-display text-3xl ${a.text}`}>→</span>
                <span className="text-white/70 text-sm uppercase tracking-[0.2em]">
                  We speak your language — without the ppt fluff
                </span>
              </div>
            </div>
            <div className={`relative rounded-3xl overflow-hidden border ${a.border}`}>
              <img
                src={current.img}
                alt={current.tab}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/80 via-transparent to-transparent" />
              <div className={`absolute top-5 left-5 ${a.bg} text-[#06060A] text-[11px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full`}>
                {current.tab}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
