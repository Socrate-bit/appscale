import Reveal from "../Reveal";
import WhatsAppButton from "./WhatsAppButton";
import { whatsappUrl } from "@/lib/whatsapp";

type Offer = {
  step: string;
  name: string;
  price: string;
  unit: string;
  body: string;
  guarantee: string;
  featured?: boolean;
};

const offers: Offer[] = [
  {
    step: "Offre 1",
    name: "Design & prototype en 48h",
    price: "690 €",
    unit: "à partir de",
    body: "Design des features et de l'interface, prototype cliquable testable sur votre téléphone. Déductible de l'app complète.",
    guarantee: "Satisfait ou remboursé, sans discussion.",
  },
  {
    step: "Offre 2",
    name: "App complète en 7 jours",
    price: "4 900 €",
    unit: "à partir de · prix fixe",
    body: "Backend inclus. Périmètre validé par écrit avant de démarrer.",
    guarantee: "Itération jusqu'à satisfaction.",
    featured: true,
  },
  {
    step: "Offre 3",
    name: "Maintenance mensuelle",
    price: "490 €/mois",
    unit: "à partir de · sans engagement",
    body: "Mises à jour, petits changements et nouvelles features chaque mois. Un dev qui connaît votre code, sans embaucher.",
    guarantee: "Sans engagement, résiliable à tout moment.",
  },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-navy">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" aria-hidden>
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function StudioOffers() {
  return (
    <section id="offres" className="border-y border-navy/10 bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            // 003 · Offres
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Trois façons d&apos;<span className="italic text-accent">avancer.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal
              key={o.name}
              delay={i * 110}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
                o.featured
                  ? "border-navy bg-navy text-cream shadow-[6px_6px_0_0_rgba(124,107,240,0.9)]"
                  : "border-navy/10 bg-cream text-navy"
              }`}
            >
              {o.featured && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,107,240,0.35),transparent_70%)]" />
              )}

              <p
                className={`relative font-mono text-[11px] uppercase tracking-[0.18em] ${
                  o.featured ? "text-accent-soft" : "text-accent"
                }`}
              >
                {o.step}
              </p>
              <h3 className="relative mt-3 font-serif text-3xl">{o.name}</h3>

              <div
                className={`relative mt-6 border-t pt-6 ${
                  o.featured ? "border-cream/15" : "border-navy/10"
                }`}
              >
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                    o.featured ? "text-cream/50" : "text-muted"
                  }`}
                >
                  {o.unit}
                </p>
                <p className="mt-2 font-serif text-5xl tracking-tight">{o.price}</p>
              </div>

              <p
                className={`relative mt-6 flex-1 leading-relaxed ${
                  o.featured ? "text-cream/70" : "text-muted"
                }`}
              >
                {o.body}
              </p>

              <p className="relative mt-8 flex items-start gap-3 text-sm font-medium">
                <Check />
                {o.guarantee}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-6 flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-dashed border-navy/25 bg-cream p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,107,240,0.14),transparent_70%)]" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Sur mesure
            </p>
            <h3 className="mt-3 font-serif text-3xl text-navy">
              Un besoin <span className="italic text-accent">différent ?</span>
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Reprise d&apos;une app existante, web app, fonctionnalité
              spécifique ou accompagnement au long cours : on construit une
              offre adaptée à votre projet.
            </p>
          </div>
          <a
            href={whatsappUrl(
              "Bonjour AppScales, j'ai un besoin sur mesure pour mon app."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex flex-none items-center gap-2 border border-navy/20 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-navy transition-colors hover:border-accent"
          >
            Demander un devis
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <Reveal className="mt-14 flex flex-col items-start gap-6 border-t border-navy/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <WhatsAppButton />
        </Reveal>
      </div>
    </section>
  );
}
