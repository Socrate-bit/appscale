"use client";

import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Write the submission to the "contacts" Firestore collection.
      await addDoc(collection(db, "contacts"), {
        name: String(data.name ?? "").trim(),
        email: String(data.email ?? "").trim(),
        company: String(data.company ?? "").trim(),
        message: String(data.message ?? "").trim(),
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("[Contact] submission failed", err);
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <section id="contact" className="bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-soft">
            // 004 · Contact
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Contact
            <br />
            <span className="italic">us.</span>
          </h2>

          <div className="mt-10 space-y-3 font-mono text-sm text-cream/70">
            <p>
              <span className="text-cream/40">BASED · </span>
              San Francisco, CA
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {status === "success" ? (
            <div className="flex h-full min-h-[320px] flex-col items-start justify-center rounded-2xl border border-accent/40 bg-navy-800 p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-navy">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-3xl">Message sent.</h3>
              <p className="mt-3 text-cream/60">
                Thanks for reaching out. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
              <Field
                label="Company"
                name="company"
                placeholder="Company (optional)"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building?"
                  className="w-full resize-none border-b border-cream/20 bg-transparent px-0 py-3 text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-2 border border-accent bg-accent px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-navy transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                {status === "error" && (
                  <p className="mt-4 font-mono text-xs text-red-300">{error}</p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-cream/20 bg-transparent px-0 py-3 text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
