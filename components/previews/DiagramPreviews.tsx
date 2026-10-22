// Small schematic illustrations for project cards. Each one depicts the
// architecture documented in the project's repository — no invented figures.

const mono = { fontFamily: "var(--font-mono)" };

function Node({
  x,
  y,
  w,
  label,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={30}
        rx={4}
        fill={accent ? "var(--wine)" : "var(--bg)"}
        stroke={accent ? "var(--wine)" : "var(--line-strong)"}
      />
      <text
        x={x + w / 2}
        y={y + 19}
        fontSize="10"
        textAnchor="middle"
        fill={accent ? "#fff" : "var(--fg-muted)"}
        style={mono}
      >
        {label}
      </text>
    </g>
  );
}

function Flow({ d, live = false }: { d: string; live?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={live ? "var(--wine)" : "var(--line-strong)"}
      strokeWidth={live ? 1.4 : 1}
      className={live ? "dash-flow" : undefined}
    />
  );
}

export function ScholarPreview() {
  return (
    <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-labelledby="scholar-title">
      <title id="scholar-title">
        Hybrid retrieval: a query is matched by dense embeddings and BM25 in parallel, fused with reciprocal rank
        fusion, then answered by Gemini with citations.
      </title>
      <text x="24" y="22" fontSize="10" letterSpacing="2" fill="var(--fg-subtle)" style={mono}>
        HYBRID RETRIEVAL
      </text>
      <Flow d="M98 150 C 130 150, 130 95, 160 95" live />
      <Flow d="M98 150 C 130 150, 130 205, 160 205" live />
      <Flow d="M270 95 C 300 95, 300 150, 320 150" live />
      <Flow d="M270 205 C 300 205, 300 150, 320 150" live />
      <Flow d="M380 150 L 400 150" live />
      <Flow d="M460 150 C 480 150, 480 240, 440 240 L 400 240" live />
      <Node x={24} y={135} w={74} label="query" />
      <Node x={160} y={80} w={110} label="MiniLM · FAISS" />
      <Node x={160} y={190} w={110} label="BM25" />
      <Node x={320} y={135} w={60} label="RRF" />
      <Node x={400} y={135} w={60} label="Gemini" accent />
      <g>
        <rect x={232} y={225} width={168} height={30} rx={4} fill="var(--accent-soft)" stroke="var(--wine)" />
        <text x={316} y={244} fontSize="10" textAnchor="middle" fill="var(--accent-ink)" style={mono}>
          answer + [source, page]
        </text>
      </g>
    </svg>
  );
}

const abstractMetrics = [
  { label: "Accuracy", value: 88 },
  { label: "Macro F1", value: 83 },
  { label: "Recall (ML/AI)", value: 79 },
  { label: "Precision (ML/AI)", value: 68 },
];

export function AbstractPreview() {
  const tokens = ["[CLS]", "graph", "neural", "networks", "for", "…", "[SEP]"];
  return (
    <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-labelledby="abstract-title">
      <title id="abstract-title">
        BERT abstract classifier. Reported notebook results: 88% accuracy, 83% macro F1, 79% recall and 68% precision
        on the ML/AI class.
      </title>
      <text x="24" y="22" fontSize="10" letterSpacing="2" fill="var(--fg-subtle)" style={mono}>
        BERT · FINE-TUNED
      </text>
      {tokens.map((token, i) => (
        <g key={token + i}>
          <rect
            x={24 + i * 68}
            y={40}
            width={60}
            height={26}
            rx={4}
            fill={i === 0 ? "var(--wine)" : "var(--bg)"}
            stroke={i === 0 ? "var(--wine)" : "var(--line-strong)"}
          />
          <text x={54 + i * 68} y={57} fontSize="9.5" textAnchor="middle" fill={i === 0 ? "#fff" : "var(--fg-muted)"} style={mono}>
            {token}
          </text>
        </g>
      ))}
      <Flow d="M54 66 L 54 100" live />
      {abstractMetrics.map((metric, i) => {
        const y = 112 + i * 40;
        return (
          <g key={metric.label}>
            <text x={24} y={y} fontSize="10" fill="var(--fg-muted)" style={mono}>
              {metric.label}
            </text>
            <text x={496} y={y} fontSize="10" textAnchor="end" fill={i === 0 ? "var(--accent-ink)" : "var(--fg-subtle)"} style={mono}>
              {metric.value}%
            </text>
            <rect x={24} y={y + 8} width={472} height={6} rx={3} fill="var(--line)" />
            <rect x={24} y={y + 8} width={(472 * metric.value) / 100} height={6} rx={3} fill={i === 0 ? "var(--wine)" : "var(--fg-subtle)"} />
          </g>
        );
      })}
    </svg>
  );
}

export function ChurnPreview() {
  const models = ["XGBoost", "LightGBM", "Random Forest"];
  return (
    <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-labelledby="churn-title">
      <title id="churn-title">
        Churn pipeline: engineered features are balanced with SMOTE, fed to XGBoost, LightGBM and Random Forest,
        combined by a stacking classifier, and explained with SHAP.
      </title>
      <text x="24" y="22" fontSize="10" letterSpacing="2" fill="var(--fg-subtle)" style={mono}>
        STACKED ENSEMBLE + SHAP
      </text>
      <Flow d="M104 150 L 124 150" live />
      {models.map((_, i) => (
        <Flow key={i} d={`M184 150 C 204 150, 204 ${90 + i * 60}, 224 ${90 + i * 60}`} live={i === 0} />
      ))}
      {models.map((_, i) => (
        <Flow key={i} d={`M334 ${90 + i * 60} C 354 ${90 + i * 60}, 354 150, 374 150`} live={i === 0} />
      ))}
      <Flow d="M424 150 L 424 200" live />
      <Node x={24} y={135} w={80} label="features" />
      <Node x={124} y={135} w={60} label="SMOTE" />
      {models.map((model, i) => (
        <Node key={model} x={224} y={75 + i * 60} w={110} label={model} />
      ))}
      <Node x={374} y={135} w={100} label="stacking" accent />
      {/* SHAP-style contribution bars (illustrative shape, not values) */}
      <g>
        {[54, 38, 26, 18].map((w, i) => (
          <g key={i}>
            <rect x={424 - (i % 2 ? w : 0)} y={208 + i * 14} width={w} height={8} rx={2} fill={i % 2 ? "var(--fg-subtle)" : "var(--wine)"} opacity={0.85} />
          </g>
        ))}
        <line x1={424} x2={424} y1={202} y2={266} stroke="var(--line-strong)" />
        <text x={424} y={282} fontSize="9" textAnchor="middle" fill="var(--fg-subtle)" style={mono}>
          SHAP
        </text>
      </g>
    </svg>
  );
}
