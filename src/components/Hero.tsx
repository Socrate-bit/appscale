import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="dot-grid relative overflow-hidden">
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_20%,rgba(124,107,240,0.10),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
              /// Apps portfolio
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight text-navy sm:text-7xl lg:text-[5.5rem]">
              Building and
              <br />
              scaling <span className="italic text-accent">apps.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              We design, launch, and grow software products end-to-end, from
              first prototype to profitable scale. Advanced statistical methods
              and AI agentic loops drive every point of conversion.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-navy bg-navy px-7 py-4 font-mono text-xs uppercase tracking-[0.15em] text-cream shadow-[5px_5px_0_0_rgba(124,107,240,0.9)] transition-transform hover:-translate-y-0.5"
              >
                Contact us
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#team"
                className="font-mono text-xs uppercase tracking-[0.15em] text-navy/70 underline-offset-8 hover:text-navy hover:underline"
              >
                Meet the team
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/background.png"
            alt=""
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
