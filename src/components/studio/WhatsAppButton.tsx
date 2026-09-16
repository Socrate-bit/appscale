import { whatsappUrl } from "@/lib/whatsapp";

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12a8.5 8.5 0 0 1-12.4 7.5L3 21l1.5-5.4A8.5 8.5 0 1 1 21 12z" />
    </svg>
  );
}

// Primary CTA on the studio page: opens a WhatsApp conversation.
// tone="light" = navy button for light sections, "dark" = accent button for navy sections.
export default function WhatsAppButton({
  label = "Écrire sur WhatsApp",
  text,
  tone = "light",
}: {
  label?: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  const styles =
    tone === "light"
      ? "border-navy bg-navy text-cream shadow-[5px_5px_0_0_rgba(124,107,240,0.9)]"
      : "border-accent bg-accent text-navy";

  return (
    <a
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 border px-7 py-4 font-mono text-xs uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5 ${styles}`}
    >
      <ChatIcon />
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
