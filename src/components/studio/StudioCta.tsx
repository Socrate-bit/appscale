import Reveal from "../Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function StudioCta() {
  return (
    <section id="contact" className="dot-grid-light relative overflow-hidden bg-navy text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(124,107,240,0.22),transparent_70%)]" />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
          // 007 · Contact
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
          Vous avez l&apos;idée.{" "}
          <span className="italic text-accent-soft">On a le reste.</span>
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
          Envoyez-nous un message sur WhatsApp : on évalue votre projet et on
          cale un appel de 15 minutes.
        </p>
        <div className="mt-10">
          <WhatsAppButton tone="dark" />
        </div>
      </Reveal>
    </section>
  );
}
