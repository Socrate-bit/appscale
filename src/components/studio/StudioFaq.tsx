import Reveal from "../Reveal";

const faqs = [
  {
    q: "Qu'est-ce qui est inclus ?",
    a: "Tout ce qu'il faut pour une app de complexité modérée : design, développement, backend et tests, sur un périmètre défini ensemble et validé par écrit avant de démarrer. Projet plus complexe ? On vous fait une offre sur mesure.",
  },
  {
    q: "Vous utilisez quelles technos ?",
    a: "Flutter par défaut, natif ou web si c'est le bon choix.",
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Prototype en 48h, puis app complète en 7 jours sur un périmètre validé par écrit. Si votre projet demande plus de temps, on vous le dit dès l'appel.",
  },
  {
    q: "Et la publication sur les stores ?",
    a: "On peut la prendre en charge. Comptes développeur, fiches store, review Apple et Google : on connaît le process et ses pièges, et on vous le fait passer plus vite.",
  },
  {
    q: "Et si je ne suis pas satisfait ?",
    a: "Le prototype est remboursé. Pour l'app complète, le périmètre est figé par écrit et on enchaîne les tours de corrections jusqu'à satisfaction.",
  },
  {
    q: "Après la livraison ?",
    a: "Deux semaines de corrections offertes, en plusieurs tours jusqu'à satisfaction, puis maintenance à partir de 490 €/mois (mises à jour, petits changements, nouvelles features), ou passation à votre équipe.",
  },
];

export default function StudioFaq() {
  return (
    <section id="faq" className="border-t border-navy/10 bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            // 006 · FAQ
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Questions <span className="italic text-accent">fréquentes.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="border-t border-navy/10">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-navy/10 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-navy/15 font-mono text-accent transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
