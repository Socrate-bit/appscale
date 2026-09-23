import Reveal from "../Reveal";
import AutoplayVideo from "./AutoplayVideo";

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
  screens: [
    { src: "/work/levio-congrats.jpg", alt: "Levio : écran de félicitations après le réveil" },
    { src: "/work/levio-home.jpg", alt: "Levio : accueil avec streak et prochaine alarme" },
    { src: "/work/levio-missions.jpg", alt: "Levio : choix de la mission de réveil" },
  ],
};

type Shot = {
  alt: string;
  src: string; // image, or poster frame when `video` is set
  video?: string;
};

// Other projects — converted from the original GIF/JPG exports into /public/work.
const shots: Shot[] = [
  {
    alt: "App d'apprentissage : cours, planning et messagerie",
    src: "/work/study.jpg",
    video: "/work/study.mp4",
  },
  { alt: "Onboarding d'une app bien-être", src: "/work/onboarding.jpg", video: "/work/onboarding.mp4" },
  { alt: "App de planification financière", src: "/work/finance.webp" },
  { alt: "App de pet-sitting de quartier", src: "/work/pets.webp" },
  { alt: "App de suivi fitness", src: "/work/fitness.webp" },
  { alt: "App maison connectée", src: "/work/smart-home.webp" },
  { alt: "Dashboard web de contrôle à distance", src: "/work/dashboard.jpg", video: "/work/dashboard.mp4" },
];

function Media({ shot }: { shot: Shot }) {
  const cls =
    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]";
  return shot.video ? (
    <AutoplayVideo className={cls} src={shot.video} poster={shot.src} label={shot.alt} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cls} src={shot.src} alt={shot.alt} loading="lazy" />
  );
}

export default function StudioWork() {
  return (
    <section id="realisations" className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
            // 004 · Réalisations
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Étude de cas <span className="italic">client.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/60">
            Design, développement, onboarding, paywall, publication : livrée en
            7&nbsp;jours, 10&nbsp;k utilisateurs et 4,7&nbsp;★ depuis.
          </p>
        </Reveal>

        {/* Featured: Levio */}
        <Reveal
          delay={120}
          className="relative mt-14 overflow-hidden rounded-3xl border border-accent/40 bg-navy-800"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,107,240,0.4),transparent_70%)]" />

          <div className="relative grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-16">
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

              <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-cream/12 pt-6">
                {liveApp.stats.map((s) => (
                  <li key={s.label}>
                    <p className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/50">
                      {s.label}
                    </p>
                  </li>
                ))}
              </ul>

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

            {/* Real app screens, staggered like a phone trio */}
            <div className="flex items-end justify-center gap-3 sm:gap-4">
              {liveApp.screens.map((sc, i) => (
                <div
                  key={sc.src}
                  className={`overflow-hidden rounded-[1.25rem] border border-white/15 bg-navy shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ${
                    i === 1 ? "w-[34%] -translate-y-6" : "w-[30%]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sc.src} alt={sc.alt} className="h-auto w-full" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Other projects: horizontal, swipeable filmstrip */}
        <Reveal className="mt-20 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">
            /// Autres projets
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/40">
            Designées, développées et publiées
          </p>
        </Reveal>

        {/* Bleeds to the viewport edges while staying aligned with the container. */}
        <div className="-mx-6 mt-8 overflow-x-auto pb-6 [scrollbar-width:thin] lg:-mx-10">
          <ul className="flex snap-x snap-mandatory gap-5 px-6 lg:px-10">
            {shots.map((s, i) => (
              <Reveal
                as="li"
                key={s.src}
                delay={Math.min(i, 4) * 60}
                className="group w-[18rem] flex-none snap-start sm:w-[22rem]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-800">
                  <Media shot={s} />
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-cream/50">
                  {s.alt}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
