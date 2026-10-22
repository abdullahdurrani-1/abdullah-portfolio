"use client";

import { motion } from "motion/react";
import { ozoneModelScores } from "@/data/projects";

const mono = { fontFamily: "var(--font-mono)" };

/** Horizontal bar chart of test-set R² per model, as reported in the project README. */
export default function OzonePreview() {
  const top = 34;
  const rowH = 30;
  const x0 = 96;
  const width = 360;

  return (
    <svg viewBox="0 0 520 300" className="h-full w-full" role="img" aria-labelledby="ozone-chart-title">
      <title id="ozone-chart-title">
        Test-set R² by model for the ozone forecasting project. GRU scores highest at 0.991; the dummy baseline scores
        about zero.
      </title>
      <text x="24" y="22" fontSize="10" letterSpacing="2" fill="var(--fg-subtle)" style={mono}>
        R² · TEST SET
      </text>
      {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
        <g key={tick}>
          <line
            x1={x0 + tick * width}
            x2={x0 + tick * width}
            y1={top - 6}
            y2={top + rowH * ozoneModelScores.length - 6}
            stroke="var(--line)"
          />
          <text
            x={x0 + tick * width}
            y={top + rowH * ozoneModelScores.length + 8}
            fontSize="9"
            textAnchor="middle"
            fill="var(--fg-subtle)"
            style={mono}
          >
            {tick}
          </text>
        </g>
      ))}
      {ozoneModelScores.map((row, i) => {
        const best = row.model === "GRU";
        const y = top + i * rowH;
        return (
          <g key={row.model}>
            <text x={x0 - 12} y={y + 12} fontSize="11" textAnchor="end" fill={best ? "var(--fg)" : "var(--fg-muted)"} style={mono}>
              {row.model}
            </text>
            <motion.rect
              x={x0}
              y={y + 2}
              height={14}
              rx={2}
              fill={best ? "var(--wine)" : "var(--line-strong)"}
              initial={{ width: 0 }}
              whileInView={{ width: Math.max(row.r2 * width, 2) }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.text
              x={x0 + Math.max(row.r2 * width, 2) + 8}
              y={y + 13}
              fontSize="10"
              fill={best ? "var(--accent-ink)" : "var(--fg-subtle)"}
              style={mono}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.07 }}
            >
              {row.r2 === 0 ? "≈0" : row.r2.toFixed(3)}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}
