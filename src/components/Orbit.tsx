export default function Orbit({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 520"
      className={className}
      role="img"
      aria-label="Orbiting network of apps"
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c6bf0" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#7c6bf0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7c6bf0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="260" r="150" fill="url(#core)" />

      {/* concentric rings */}
      {[60, 105, 150, 195, 240].map((r, i) => (
        <circle
          key={r}
          cx="260"
          cy="260"
          r={r}
          fill="none"
          stroke="#0c1a2b"
          strokeOpacity={0.12 - i * 0.012}
          strokeWidth="1"
        />
      ))}

      {/* dashed outer orbit */}
      <circle
        cx="260"
        cy="260"
        r="215"
        fill="none"
        stroke="#7c6bf0"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeDasharray="2 7"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 260 260"
          to="360 260 260"
          dur="90s"
          repeatCount="indefinite"
        />
      </circle>

      {/* core */}
      <circle cx="260" cy="260" r="9" fill="#0c1a2b" />
      <circle cx="260" cy="260" r="4" fill="#ffffff" />

      {/* orbiting nodes */}
      <g>
        <circle cx="410" cy="205" r="9" fill="#7c6bf0" />
        <circle cx="150" cy="360" r="8" fill="#2fa9ff" />
        <circle cx="300" cy="140" r="6" fill="#0c1a2b" />
        <circle cx="360" cy="330" r="4" fill="#0c1a2b" opacity="0.6" />
        <circle cx="200" cy="215" r="4" fill="#8ecb3f" />
        <circle cx="345" cy="410" r="4" fill="#9bd23f" />
      </g>

      {/* faint dots */}
      <g fill="#0c1a2b" opacity="0.35">
        <circle cx="180" cy="180" r="2" />
        <circle cx="410" cy="360" r="2" />
        <circle cx="250" cy="420" r="2" />
        <circle cx="420" cy="260" r="2" />
        <circle cx="150" cy="250" r="2" />
      </g>
    </svg>
  );
}
