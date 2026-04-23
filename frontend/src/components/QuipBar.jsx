import { motion } from "framer-motion";

export default function QuipBar({ tone = "ember", children, testId }) {
  const bg =
    tone === "red"
      ? "bg-red-brand"
      : tone === "lime"
      ? "bg-lime"
      : "bg-ember";
  const txt = tone === "lime" ? "text-[#06060A]" : "text-white";
  return (
    <section className={`${bg} ${txt} relative overflow-hidden`} data-testid={testId}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-5xl"
        >
          {children}
        </motion.p>
      </div>
    </section>
  );
}
