import Reveal from "../Reveal";

const pillars = [
  {
    title: "Savoir quoi construire",
    body: "L'IA construit ce qu'on lui demande, pas ce qu'il faudrait construire. Le vrai enjeu, ce n'est pas de sortir une app, c'est de sortir une app qui résout un vrai problème. On affine votre idée et votre vision, on étudie le marché et on valide le product-market fit avant d'écrire une ligne de code.",
  },
  {
    title: "Une app qui convertit",
    body: "L'IA génère des écrans qui fonctionnent, pas des écrans qui convertissent. On construit l'onboarding et le paywall qui transforment vos visiteurs en utilisateurs actifs, puis en clients payants.",
  },
  {
    title: "Cybersécurité",
    body: "Les apps générées par IA sont truffées de failles : clés exposées, données non protégées, paiements mal sécurisés. On verrouille tout dès le départ. Pas de fuite, pas de crise.",
  },
  {
    title: "Un design unique",
    body: "Une app générée ressemble à toutes les autres apps générées. On vous crée un design et une identité qui n'appartiennent qu'à vous.",
  },
  {
    title: "De l'itération, pas juste une V1",
    body: "Shipper une V1, tout le monde peut le faire. Le vrai travail commence après : écouter les retours, itérer et faire évoluer le produit. On reste à bord.",
  },
  {
    title: "Solide à l'échelle",
    body: "Une app générée par IA est pleine de défauts d'architecture : elle tient en démo, pas quand les utilisateurs arrivent. On pose des fondations qui encaissent la charge.",
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
