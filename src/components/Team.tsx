import Reveal from "./Reveal";

type Founder = {
  name: string;
  initials: string;
  role: string;
  location: string;
  bullets: string[];
  linkedin: string;
  photo?: string; // drop a file in /public and set e.g. "/adam.jpg"
};

type Member = {
  name: string;
  initials: string;
  role: string;
  school: string;
  photo?: string;
};

const founders: Founder[] = [
  {
    name: "Lucas",
    initials: "LU",
    role: "CTO",
    location: "San Francisco",
    bullets: [
      "AI Researcher",
      "Advanced research in machine learning",
      "Breakthrough AI and automation applied to mobile apps",
    ],
    linkedin: "https://www.linkedin.com/in/lucas-soullier-060351379/",
    photo: "/lucas.jpeg",
  },
  {
    name: "Adam",
    initials: "AD",
    role: "CEO",
    location: "San Francisco",
    bullets: [
      "Growth and scaling expert",
      "Built multiple successful businesses",
      "$300K MRR · $7M+ generated",
    ],
    linkedin: "https://www.linkedin.com/in/adam-boubdi-53453023b/",
    photo: "/adam.jpeg",
  },
];

// Fictional team roster — swap names, roles, and schools for your real team.
const team: Member[] = [
  { name: "Sofia", initials: "SO", role: "Head of Growth", school: "HEC Paris" },
  { name: "Léa", initials: "LE", role: "Head of Marketing", school: "ESSEC Business School" },
  { name: "Viktor", initials: "VI", role: "Head of Engineering", school: "MIT" },
  { name: "Maya", initials: "MA", role: "Head of Product", school: "ESCP Business School" },
  { name: "Théo", initials: "TH", role: "Product Designer", school: "Gobelins Paris" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function FounderCard({ m, delay }: { m: Founder; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800 p-8 transition-transform hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,107,240,0.35),transparent_70%)]" />

      <div className="relative flex items-center gap-5">
        {m.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={m.photo}
            alt={m.name}
            className="h-20 w-20 rounded-full object-cover ring-2 ring-accent/40"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/30 font-serif text-2xl text-cream ring-2 ring-white/10">
            {m.initials}
          </div>
        )}
        <div>
          <h3 className="font-serif text-2xl text-cream">{m.name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
            {m.role} · {m.location}
          </p>
        </div>
      </div>

      <ul className="relative mt-8 space-y-3">
        {m.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-cream/75">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={m.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-8 inline-flex items-center gap-2 border border-cream/20 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/80 transition-colors hover:border-accent hover:text-cream"
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </a>
    </Reveal>
  );
}

function MemberCard({ m, delay }: { m: Member; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group flex flex-col items-center rounded-2xl border border-navy/10 bg-cream-100 p-6 text-center transition-transform hover:-translate-y-1"
    >
      {m.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={m.photo}
          alt={m.name}
          className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/30"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/25 font-serif text-xl text-cream ring-2 ring-navy/5">
          {m.initials}
        </div>
      )}
      <h3 className="mt-4 font-serif text-xl text-navy">{m.name}</h3>
      <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
        {m.role}
      </p>
      <p className="mt-3 border-t border-navy/10 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
        {m.school}
      </p>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section id="team" className="dot-grid relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            // 003 · The team
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Our <span className="italic text-accent">team.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A team spanning product, engineering, growth, and design, pairing
            deep AI research with businesses scaled to millions in revenue.
          </p>
        </Reveal>

        {/* Founders */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {founders.map((m, i) => (
            <FounderCard key={m.name} m={m} delay={i * 120} />
          ))}
        </div>

        {/* Team roster */}
        <Reveal className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            /// The wider team
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
