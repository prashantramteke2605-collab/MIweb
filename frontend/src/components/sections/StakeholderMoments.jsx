import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Defined the new data structure locally to match your exact mockup
const NEW_STAKEHOLDERS = [
  {
    id: "rnd",
    tab: "If you're an R&D Head",
    // Replace this img path with the actual path to your cartoon image
    img: "/images/chatgpt1.png", 
    highlightBox: "Makes the world (and competitor) say WOW!\n\nEnsures, the team is giving an F1 track performance often with a city car engine",
    pains: [
      "Expected to have a magic bullet for everything",
      "Everyone around me is difficult to please"
    ],
    checklist: [
      "My Consumers",
      "My Marketers",
      "My CFO",
      "My lab experiments/claims",
      "My IP and Launch strategy Plan"
    ],
    howWeHelp: "You walk into any War room meetings like a Superhero with clear answers (and Sleep Better)"
  },
  {
    id: "marketing",
    tab: "If you're in Marketing",
    img: "/images/chatgpt2.png",
    highlightBox: "Does the unthinkable and make it look easy/ effortless\n\nSpeedy implements while ensuring the charts look respectable",
    pains: [
      "Expected to know everyone under their Skin (from Competitive launches to demanding consumers)",
      "Your hunches are only recognized after a competitive launch",
      "Find peace between what you need and what’s possible (from R&D and CFO)"
    ],
   
    howWeHelp: "You are now someone who’s always aware “what’s coming/changing in the playing field”. \n\nYour hunches find the resources and a priority status.\n\nWhat else?\nPeople now find it hard to impress you"
  },
  {
    id: "ceo",
    tab: "If you're the CEO",
    img: "/images/chatgpt3.png",
    highlightBox: "Answerable to everyone\n\nAccountable for everything\n\nEnsures, the Elephant should keep Dancing…",
    pains: [
      "We feel this tiny space won’t do justice to what the CEOs/Directors go through on a weekly basis"
  
    ],

    howWeHelp: "You and your top line continues to move faster than what your board and competitors expected"
  }
];

export default function StakeholderMoments() {
  const [active, setActive] = useState(NEW_STAKEHOLDERS[0].id);
  const current = NEW_STAKEHOLDERS.find((s) => s.id === active);

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
            A day in the life of our <span className="text-lime">heroes…</span>
          </h2>
          <p className="font-editorial text-xl md:text-2xl text-white/70 mt-5 max-w-3xl">
            Empathy with a little cheek. Pick your seat at the table.
          </p>
        </div>

        {/* TAB NAVIGATION (Unchanged features/functions) */}
        <div
          role="tablist"
          className="flex flex-wrap border-b border-line mb-16"
          data-testid="stakeholder-tabs"
        >
          {NEW_STAKEHOLDERS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              data-active={active === s.id}
              onClick={() => setActive(s.id)}
              className={`mn-tab cursor-hover transition-colors duration-300 ${active === s.id ? "text-white" : "text-white/40 hover:text-white/70"}`}
              data-testid={`stakeholder-tab-${s.id}`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* NEW LAYOUT: Image on Left, Content on Right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
            data-testid={`stakeholder-panel-${current.id}`}
          >
            
            {/* LEFT COLUMN: CARTOON IMAGE */}
            <div className="bg-white rounded-2xl p-6 lg:p-10 flex items-center justify-center shadow-lg">
              <img
                src={current.img}
                alt={current.tab}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* RIGHT COLUMN: TEXT CONTENT */}
            <div className="flex flex-col">
              
              {/* Highlight Box */}
              <div className="bg-[#FF0000] text-white p-6 rounded-lg mb-10 shadow-lg">
                {current.highlightBox.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-lg md:text-xl leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* The Pain Section */}
              <h4 className="text-[#FF0000] font-bold text-2xl mb-4">The Pain:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-white/90 text-lg mb-8 marker:font-bold">
                {current.pains.map((pain, idx) => (
                  <li key={idx} className="pl-2">
                    {pain}
                    
                    {/* Render the checklist inside the last pain point (as shown in mockup) */}
                    {idx === current.pains.length - 1 && current.checklist && (
                      <ul className="mt-3 space-y-2 list-none pl-2 border-l border-white/20 ml-2">
                        {current.checklist.map((item, j) => (
                          <li key={j} className="flex items-center gap-3">
                            {/* Custom Red/White Checkbox SVG */}
                            <div className="w-5 h-5 shrink-0 bg-white border border-[#FF0000] rounded-[4px] flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>

              {/* How Minnerva Helps Section */}
              <h4 className="text-[#00C853] font-bold text-2xl mb-3">How Minnerva helps:</h4>
              <p className="text-white/80 text-xl md:text-2xl italic font-editorial leading-relaxed">
                {current.howWeHelp}
              </p>
              
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}