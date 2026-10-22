// Decorative network of nodes and edges behind the hero. Positions are fixed
// (no randomness) so server and client render identically.
const nodes: [number, number][] = [
  [80, 120], [210, 60], [320, 170], [150, 260], [420, 80], [520, 210], [380, 320],
  [260, 400], [600, 110], [700, 260], [640, 380], [500, 470], [820, 150], [900, 320],
  [780, 460], [960, 90], [1060, 240], [1010, 420], [1140, 130], [1160, 360],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [2, 3], [1, 4], [2, 5], [4, 5], [3, 6], [5, 6], [6, 7],
  [4, 8], [5, 9], [8, 9], [9, 10], [6, 10], [10, 11], [7, 11], [8, 12], [9, 13],
  [12, 13], [13, 14], [10, 14], [12, 15], [15, 16], [13, 16], [16, 17], [14, 17],
  [15, 18], [16, 18], [17, 19], [18, 19],
];

const flowing = new Set([2, 6, 11, 17, 22, 26]);

export default function NeuralField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="nf-fade" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="nf-mask">
          <rect width="1200" height="520" fill="url(#nf-fade)" />
        </mask>
      </defs>
      <g mask="url(#nf-mask)">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke={flowing.has(i) ? "var(--wine)" : "var(--line-strong)"}
            strokeWidth={flowing.has(i) ? 1.2 : 0.8}
            className={flowing.has(i) ? "dash-flow" : undefined}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={2.2} fill="var(--fg-subtle)" />
            {i % 3 === 0 && (
              <circle
                cx={x}
                cy={y}
                r={6}
                fill="var(--wine)"
                className="pulse-node"
                style={{ animationDelay: `${(i * 0.37) % 4}s` }}
              />
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}
