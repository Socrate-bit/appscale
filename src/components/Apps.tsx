import Reveal from "./Reveal";

type App = { name: string; glyph: "spark" | "wave" | "bolt" | "orbit" | "grid" | "leaf" | "prism" };

// Placeholder app names + glyph marks — swap for your real app logos.
const apps: App[] = [
  { name: "Lumen", glyph: "spark" },
  { name: "Ripple", glyph: "wave" },
  { name: "Volt", glyph: "bolt" },
  { name: "Orbita", glyph: "orbit" },
  { name: "Mosaic", glyph: "grid" },
  { name: "Fern", glyph: "leaf" },
  { name: "Prism", glyph: "prism" },
];

function Glyph({ type }: { type: App["glyph"] }) {
  const common = {
    className: "h-6 w-6 text-accent",
    stroke: "currentColor",
    strokeWidth: 1.8,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M2 14c3-6 5-6 8 0s5 6 8 0M2 9c3-5 5-5 8 0" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "orbit":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 20C4 10 12 4 20 4c0 8-6 16-16 16zM8 16c3-3 6-5 9-6" />
        </svg>
      );
    case "prism":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3l9 16H3l9-16zM12 3v16" />
        </svg>
      );
  }
}

function Chip({ app }: { app: App }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap px-8">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 bg-cream-100">
        <Glyph type={app.glyph} />
      </span>
      <span className="font-serif text-2xl tracking-tight text-navy/80">
        {app.name}
      </span>
    </div>
  );
}

export default function Apps() {
  const row = [...apps, ...apps];
  return (
    <section className="border-y border-navy/10 bg-cream-100 py-14">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
          /// Apps we&apos;ve built
        </p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-100 to-transparent" />

        <div className="marquee-track flex w-max items-center">
          {row.map((app, i) => (
            <Chip key={`${app.name}-${i}`} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
