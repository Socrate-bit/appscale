import Reveal from "../Reveal";

const steps = [
  {
    title: "Appel de 15 min",
    body: "Évaluation du projet : on cadre l'idée, le périmètre et les priorités.",
  },
  {
    title: "Stratégie & prototype en 48h",
    body: "Étude de marché, stratégie et prototype cliquable. Checkpoint : vous validez avant d'aller plus loin.",
  },
  {
    title: "App livrée en 7 jours",
    body: "Développement, tests et publication sur les stores. Vous gardez tout le code.",
  },
  {
    title: "Maintenance",
    body: "Petits changements, nouvelles features, mises à jour : l'app continue d'avancer.",
  },
];

export default function StudioProcess() {
  return (
    <section id="methode" className="dot-grid relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            // 002 · Méthode
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Comment ça <span className="italic text-accent">marche.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 90}
              className="flex flex-col rounded-2xl border border-navy/10 bg-cream-100 p-6 transition-transform hover:-translate-y-1"
            >
              <span className="font-serif text-5xl tracking-tight text-accent">
                {i + 1}
              </span>
              <h3 className="mt-5 border-t border-navy/10 pt-5 font-serif text-xl text-navy">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
