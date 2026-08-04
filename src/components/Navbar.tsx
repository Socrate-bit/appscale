"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-navy/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5 text-navy">
          <Logo tone="light" className="h-9 w-9" />
          <span className="font-serif text-2xl tracking-tight">AppScale</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-navy/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 border border-navy bg-navy px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cream shadow-[4px_4px_0_0_rgba(124,107,240,0.9)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Apply
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-navy/20 text-navy md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-navy transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-navy transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy/10 bg-cream/95 backdrop-blur-md md:hidden ${
          open ? "max-h-72" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <nav className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy/5 py-4 font-mono text-sm uppercase tracking-[0.2em] text-navy/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-4 inline-flex items-center justify-center gap-2 bg-navy px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cream"
          >
            Apply →
          </a>
        </nav>
      </div>
    </header>
  );
}
