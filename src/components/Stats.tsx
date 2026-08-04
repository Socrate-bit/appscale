import Reveal from "./Reveal";

const stats = [
  { value: "$390K", label: "Monthly recurring revenue" },
  { value: "$7M+", label: "Total revenue generated" },
  { value: "100%", label: "Bootstrapped & profitable" },
];

const marks = [
  "San Francisco based",
  "Full in-house team",
  "AI-native products",
];

export default function Stats() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
            // 002 · Traction
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            What we&apos;ve <span className="italic">shipped.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-3 lg:gap-x-8">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="text-center sm:border-l sm:border-cream/15 sm:first:border-l-0"
            >
              <div className="font-serif text-5xl tracking-tight sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-cream/55">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-cream/12 pt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">
            {marks.map((m, i) => (
              <span key={m} className="flex items-center gap-8">
                {i > 0 && (
                  <span className="text-accent-soft/60" aria-hidden>
                    ◆
                  </span>
                )}
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
