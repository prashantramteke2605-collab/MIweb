import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CASE_STUDIES } from "../lib/content";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!cs) return <Navigate to="/" replace />;

  const stripColor = cs.strip;

  return (
    <article
      className="relative bg-[#06060A] pb-28"
      data-testid={`case-study-${cs.slug}`}
    >
      {/* HERO */}
      <section className="relative min-h-[90vh] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cs.bannerImg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06060A]/40 via-[#06060A]/70 to-[#06060A]" />
        </div>
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] orb opacity-40"
          style={{ background: `radial-gradient(circle, ${stripColor.replace('var(--','').replace(')','')}66 0%, transparent 70%)` }} />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
          <Link
            to="/#stories"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-[0.25em] mb-10"
            data-testid="case-back-link"
          >
            ← All stories
          </Link>
          <div
            className="eyebrow mb-4"
            style={{ color: stripColor }}
          >
            {cs.subtitle}
          </div>
          <h1 className="display-xxl max-w-5xl leading-[0.95]" style={{ color: "#fff" }}>
            {cs.cardTitle}
          </h1>
        </div>
      </section>

      {/* Content sections */}
      {cs.context && (
        <Section eyebrow="Context" title="The Pulse Check">
          <p className="font-editorial text-2xl md:text-3xl text-white/85 leading-[1.2] max-w-4xl">
            {cs.context}
          </p>
        </Section>
      )}

      {cs.youtubeShort && (
        <Section eyebrow="Watch" title="In 30 seconds">
          <div className="aspect-video max-w-3xl rounded-2xl overflow-hidden border border-line">
            <iframe
              className="w-full h-full"
              src={cs.youtubeShort}
              title="Case video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Section>
      )}

      {cs.goals && (
        <Section eyebrow="Director's goals" title="What she wanted">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {cs.goals.map((g, i) => (
              <li
                key={i}
                className="flex gap-4 p-6 rounded-2xl border border-line bg-white/[0.02]"
              >
                <span className="font-display text-3xl text-lime">0{i + 1}</span>
                <span className="text-lg text-white/85">{g}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {cs.pulseCheck && (
        <Section eyebrow="Pulse check" title="Concerns in the room">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {cs.pulseImg && (
              <img
                src={cs.pulseImg}
                alt=""
                className="rounded-2xl border border-line"
              />
            )}
            <ul className="space-y-4">
              {cs.pulseCheck.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-4 border-l-2 pl-5 py-2"
                  style={{ borderColor: stripColor }}
                >
                  <span className="text-lg text-white/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          {cs.pulseTitle && (
            <div className="mt-12 space-y-10 max-w-5xl">
              <p className="font-editorial text-3xl md:text-4xl leading-tight">
                {cs.pulseTitle}
              </p>
              {cs.pulseSections?.map((ps, i) => (
                <div key={i} className="border-l-4 pl-6" style={{ borderColor: stripColor }}>
                  <p className="font-editorial text-xl md:text-2xl text-white/85 mb-3">
                    "{ps.quote}"
                  </p>
                  {ps.points.length > 0 && (
                    <ul className="space-y-1 text-white/70">
                      {ps.points.map((pt, j) => (
                        <li key={j}>• {pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {cs.pulseSubTitle && (
                <p className="font-editorial text-3xl text-ember">{cs.pulseSubTitle}</p>
              )}
            </div>
          )}
        </Section>
      )}

      {cs.portfolio && (
        <Section eyebrow="Portfolio" title="25+ products across 6 categories">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {cs.portfolio.map((p, i) => (
              <div
                key={i}
                className="border border-line rounded-xl p-5 hover:border-white/30 transition"
              >
                <span className="font-display text-3xl text-lime">0{i + 1}</span>
                <div className="text-white mt-2">{p}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {cs.stakes && (
        <Section eyebrow="The Stakes" title="What was at risk?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {cs.stakes.map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-line bg-white/[0.02]"
                >
                  <div className="font-display text-2xl text-ember mb-2">
                    {s.title}
                  </div>
                  <div className="text-white/75">{s.body}</div>
                </div>
              ))}
            </div>
            {cs.stakesImg && (
              <img
                src={cs.stakesImg}
                alt=""
                className="w-full rounded-2xl border border-line object-cover"
              />
            )}
          </div>
        </Section>
      )}

      {cs.objectives && (
        <Section eyebrow="Key Objectives" title="The marching orders">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {cs.objectives.map((o, i) => (
              <li
                key={i}
                className="flex gap-4 p-6 rounded-2xl border border-line bg-white/[0.02] hover:border-white/20 transition"
              >
                <span className="font-display text-3xl" style={{ color: stripColor }}>
                  0{i + 1}
                </span>
                <span className="text-lg text-white/85">{o}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {cs.promises && (
        <Section eyebrow="Delivered" title="Promises well kept — with our Heroes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-3">
              {cs.promises.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-4 border-b border-line"
                >
                  <span className="font-display text-2xl text-lime">•</span>
                  <span className="text-white/85 text-lg">{p}</span>
                </div>
              ))}
            </div>
            {cs.promisesImg && (
              <img
                src={cs.promisesImg}
                alt=""
                className="rounded-2xl border border-line object-cover"
              />
            )}
          </div>
          {cs.alsoLiked && (
            <p className="mt-10 font-editorial text-2xl text-white/70 max-w-3xl border-l-4 border-ember pl-6">
              Also liked: {cs.alsoLiked}
            </p>
          )}
        </Section>
      )}

      {cs.outcomes && (
        <Section eyebrow="Outcomes" title="What the team walked out with">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {cs.outcomesImg && (
              <div className="relative rounded-2xl overflow-hidden border border-line">
                <img src={cs.outcomesImg} alt="" className="w-full" />
              </div>
            )}
            <div className="space-y-5">
              <p className="font-editorial text-xl text-white/70 italic">
                We can't talk much but… beyond what was promised, the team was able to:
              </p>
              {cs.outcomes.map((o, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-l-4 pl-5 py-2"
                  style={{ borderColor: stripColor }}
                >
                  <span className="font-display text-xl" style={{ color: stripColor }}>
                    0{i + 1}
                  </span>
                  <span className="text-lg text-white/90">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {cs.whatElse && (
        <Section eyebrow="What Else?" title="The ripple effect">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {cs.whatElseImg && (
              <img
                src={cs.whatElseImg}
                alt=""
                className="rounded-2xl border border-line object-cover"
              />
            )}
            <ul className="space-y-5">
              {cs.whatElse.map((w, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-white/[0.02]"
                >
                  <span className="font-display text-2xl text-ember">→</span>
                  <span className="text-lg text-white/85">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {cs.quote && (
        <section className="relative bg-white text-[#06060A] py-24 overflow-hidden" data-testid="case-quote">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="font-display text-[120px] leading-none text-ember mb-4">"</div>
            <blockquote className="font-editorial text-3xl md:text-5xl leading-[1.1] max-w-5xl">
              {cs.quote}
            </blockquote>
            <div className="mt-10 uppercase tracking-[0.25em] text-sm">
              — {cs.quoteBy}
            </div>
          </div>
        </section>
      )}

      {cs.trivia && (
        <Section eyebrow="Trivia" title={cs.trivia.heading} darker>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="font-display text-5xl md:text-7xl text-lime leading-none mb-5">
                {cs.trivia.main}
              </div>
              <p className="text-white/60 max-w-md">
                Context for the room — so the numbers land before the next slide.
              </p>
            </div>
            {cs.trivia.img && (
              <img
                src={cs.trivia.img}
                alt=""
                className="rounded-2xl border border-line"
              />
            )}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-transparent p-10 md:p-16 text-center"
          >
            <div className="eyebrow mb-4">What's next</div>
            <h3 className="display-lg mb-6">Got a dangerous question?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-pill btn-pill--lime" data-testid="case-cta-talk">
                Let's Talk →
              </Link>
              <a
                href={`mailto:?subject=${encodeURIComponent(cs.cardTitle)}&body=${encodeURIComponent("Thought you'd appreciate this story from Minnerva Innov.")}`}
                className="btn-pill btn-pill--ghost"
                data-testid="case-cta-share"
              >
                Share with your colleague →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}

function Section({ eyebrow, title, children, darker = false }) {
  return (
    <section className={`relative py-20 md:py-24 ${darker ? "bg-[#0a0a12]" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mb-3">{eyebrow}</div>
          <h2 className="display-lg mb-10">{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
