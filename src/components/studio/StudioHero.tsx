import Reveal from "../Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function StudioHero() {
  return (
    <section id="home" className="dot-grid relative overflow-hidden">
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_20%,rgba(124,107,240,0.10),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
              // AppScales · App studio
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-5xl leading-[1.03] tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Votre équipe tech, sans{" "}
              <span className="italic text-accent">embaucher.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
              Lancez votre app sans embaucher un seul développeur. Sans le CTO à
              80&nbsp;k€, sans les 6 mois de recrutement. On conçoit, on lance et
              on fait grandir votre app de A à Z. On reste à bord après le
              lancement, itération après itération. Et on fait tout ce que
              l&apos;IA ne sait pas encore faire.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <WhatsAppButton />
              <a
                href="#offres"
                className="font-mono text-xs uppercase tracking-[0.15em] text-navy/70 underline-offset-8 hover:text-navy hover:underline"
              >
                Voir les offres
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/background.png" alt="" className="h-auto w-full" />
        </Reveal>
      </div>
    </section>
  );
}
