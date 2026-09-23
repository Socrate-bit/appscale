import Reveal from "../Reveal";
import AutoplayVideo from "./AutoplayVideo";

type Shot = {
  alt: string;
  src: string; // image, or poster frame when `video` is set
  video?: string;
};

// Converted from the original GIF/JPG exports into /public/work.
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

// Horizontal, swipeable filmstrip of design work on a light background —
// deliberately a different treatment from the navy Levio showcase above.
export default function StudioDesigns() {
  return (
    <section id="designs" className="border-t border-navy/10 bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
              // 005 · Exemples de design
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Exemples de <span className="italic text-accent">design.</span>
            </h2>
          </div>
          <p className="max-w-xs text-lg text-muted sm:text-right">
            Designées, développées et publiées.
          </p>
        </Reveal>

        {/* Bleeds to the viewport edges while staying aligned with the container. */}
        <div className="-mx-6 mt-14 overflow-x-auto pb-6 [scrollbar-width:thin] lg:-mx-10">
          <ul className="flex snap-x snap-mandatory gap-5 px-6 lg:px-10">
            {shots.map((s, i) => (
              <Reveal
                as="li"
                key={s.src}
                delay={Math.min(i, 4) * 60}
                className="group w-[18rem] flex-none snap-start sm:w-[22rem]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 bg-cream">
                  <Media shot={s} />
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted">
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
