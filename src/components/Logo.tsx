// Geometric "A" mark — squares arranged into an A on a filled disc.
// tone="light" = dark disc + cream squares (for light backgrounds)
// tone="dark"  = cream disc + navy squares (for dark backgrounds)
export default function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const disc = tone === "light" ? "#0c1a2b" : "#f0ede4";
  const tile = tone === "light" ? "#f0ede4" : "#0c1a2b";

  // (col, row) grid positions forming the "A"
  const cells: Array<[number, number]> = [
    [2, 0], // apex
    [1, 1],
    [3, 1], // arms
    [1, 2],
    [2, 2],
    [3, 2], // crossbar
    [0, 3],
    [0, 4], // left leg
    [4, 3],
    [4, 4], // right leg
  ];

  // The A spans a 5x5 grid (cols 0-4, rows 0-4) centred on the disc.
  // Keeping the bounding box ~50% of the diameter leaves even padding.
  const s = 10; // tile size
  const pitch = 12; // spacing between grid cells
  const cx = (c: number) => 60 + (c - 2) * pitch - s / 2;
  const cy = (r: number) => 60 + (r - 2) * pitch - s / 2;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="AppScale logo">
      <circle cx="60" cy="60" r="58" fill={disc} />
      {cells.map(([c, r], i) => (
        <rect
          key={i}
          x={cx(c)}
          y={cy(r)}
          width={s}
          height={s}
          rx="2.5"
          fill={tile}
        />
      ))}
    </svg>
  );
}
