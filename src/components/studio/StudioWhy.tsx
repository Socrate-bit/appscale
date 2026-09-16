import Reveal from "../Reveal";

const pillars = [
  {
    title: "Une app qui convertit",
    body: "L'IA vous sort des écrans qui fonctionnent, pas des écrans qui vendent. On construit l'onboarding et le paywall pour transformer vos visiteurs en clients payants.",
  },
  {
    title: "Un design fait par des pros",
    body: "Une app générée ressemble à toutes les autres apps générées. On priorise les features, on soigne l'apparence, on pense l'UI/UX pour l'usage réel. Vos utilisateurs reviennent.",
  },
  {
    title: "Zéro piège sur les stores",
    body: "L'IA ne sait pas pourquoi Apple refuse une app. Nous oui. Reviews, Play Store, notifs, offline : on évite les blocages avant qu'ils n'arrivent.",
  },
  {
    title: "Prête à encaisser vos premiers utilisateurs",
    body: "Un prototype IA tient pour une démo, pas pour mille utilisateurs. Code propre, monitoring et analytics dès le jour 1 : elle tient quand ça décolle.",
  },
  {
    title: "Cybersécurité",
    body: "Les apps générées par IA sont truffées de failles : clés exposées, données non protégées, paiements mal sécurisés. On verrouille tout dès le départ. Pas de fuite, pas de crise.",
  },
];

export default function StudioWhy() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
              // 001 · Pourquoi nous
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Ce que l&apos;IA ne fait <span className="italic">pas.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-cream/65">
              N&apos;importe qui peut générer une app en un prompt. Le problème,
              c&apos;est tout ce qui arrive après.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 border-b border-cream/12">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 70}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-t border-cream/12 py-8 lg:grid-cols-[5rem_0.9fr_1.1fr] lg:gap-x-10"
            >
              <span className="pt-1.5 font-mono text-xs tracking-[0.18em] text-accent-soft">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl leading-snug text-cream transition-colors group-hover:text-accent-soft sm:text-3xl">
                {p.title}
              </h3>
              <p className="col-start-2 leading-relaxed text-cream/60 lg:col-start-3 lg:pt-1.5">
                {p.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
