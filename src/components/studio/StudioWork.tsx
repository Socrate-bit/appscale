import Reveal from "../Reveal";

// Featured live app — the headline proof of the studio page.
const liveApp = {
  name: "Levio",
  tagline: "Réveil à missions interactives.",
  storeUrl:
    "https://apps.apple.com/fr/app/levio-r%C3%A9veil-%C3%A0-missions/id6762027853",
  stats: [
    { value: "4,7 ★", label: "sur l'App Store" },
    { value: "10 k", label: "utilisateurs" },
    { value: "7 jours", label: "de construction" },
  ],
};

export default function StudioWork() {
  return (
    <section id="realisations" className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
            // 004 · Réalisations
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Une app live, <span className="italic">en production.</span>
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="relative mt-14 overflow-hidden rounded-3xl border border-accent/40 bg-navy-800"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,107,240,0.4),transparent_70%)]" />

          <div className="relative grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-16">
            <div>
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                App live sur l&apos;App Store
              </p>
              <h3 className="mt-5 font-serif text-5xl text-cream sm:text-6xl lg:text-7xl">
                {liveApp.name}
              </h3>
              <p className="mt-4 max-w-md text-xl text-cream/65">{liveApp.tagline}</p>
              <a
                href={liveApp.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn mt-10 inline-flex w-fit items-center gap-2 border border-accent bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.15em] text-navy transition-transform hover:-translate-y-0.5"
              >
                Voir sur l&apos;App Store
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </a>
            </div>

            <ul className="grid grid-cols-3 gap-6 border-t border-cream/12 pt-8 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-cream/12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {liveApp.stats.map((s) => (
                <li key={s.label} className="lg:py-7 lg:first:pt-0 lg:last:pb-0">
                  <p className="font-serif text-4xl tracking-tight text-cream sm:text-5xl lg:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/50">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
