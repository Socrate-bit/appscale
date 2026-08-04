import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-2.5">
          <Logo tone="dark" className="h-8 w-8" />
          <span className="font-serif text-xl">AppScale</span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">
          <a href="#home" className="hover:text-cream">
            Home
          </a>
          <a href="#team" className="hover:text-cream">
            Team
          </a>
          <a href="#contact" className="hover:text-cream">
            Contact
          </a>
        </nav>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/40">
          © {new Date().getFullYear()} AppScale · San Francisco
        </p>
      </div>
    </footer>
  );
}
