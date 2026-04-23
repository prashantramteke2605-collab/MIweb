import Marquee from "react-fast-marquee";

export default function MarqueeBar({ items, prefix, accent = "lime", speed = 50, testId }) {
  const accentClass =
    accent === "ember"
      ? "text-ember"
      : accent === "red"
      ? "text-red-brand"
      : "text-lime";
  return (
    <section
      className="relative border-y border-line bg-[#06060A] py-6"
      data-testid={testId}
    >
      <Marquee gradient={false} speed={speed} pauseOnHover>
        {prefix && (
          <span className={`marquee-item ${accentClass} font-display`}>
            {prefix}
          </span>
        )}
        {items.map((t, i) => (
          <span key={i} className="marquee-item text-white/85">
            <span className={`marquee-dot ${accent === "ember" ? "!bg-ember" : accent === "red" ? "!bg-red-brand" : ""}`} />
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
