"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  Database,
  FileStack,
  FileText,
  GitMerge,
  Layers,
  MessageSquareQuote,
  Network,
  Scissors,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Stage {
  label: string;
  tool: string;
  icon: LucideIcon;
  detail: string;
}

interface System {
  id: string;
  tab: string;
  name: string;
  summary: string;
  repo: string;
  stages: Stage[];
}

// Stages follow each repository's README — nothing here is aspirational.
const systems: System[] = [
  {
    id: "rag",
    tab: "Scholar Search · RAG",
    name: "Grounded question-answering over your own books",
    summary:
      "A retrieval-augmented generation pipeline that answers only from indexed academic PDFs and cites the source and page behind every claim.",
    repo: "https://github.com/abdullahdurrani-1/ScholarSearch",
    stages: [
      {
        label: "Documents",
        tool: "Academic PDFs",
        icon: FileStack,
        detail:
          "The knowledge base is a corpus of trusted textbooks, papers and lecture notes — the model is never asked to answer from the open internet.",
      },
      {
        label: "Processing",
        tool: "PyMuPDF",
        icon: Scissors,
        detail:
          "Pages are parsed and split into chunks that keep their source document and page number, so every retrieved passage can be cited later.",
      },
      {
        label: "Embeddings",
        tool: "all-MiniLM-L6-v2",
        icon: Binary,
        detail:
          "Each chunk is encoded with Sentence-Transformers into a 384-dimensional vector. A BM25 keyword index is built alongside it for exact-term matching.",
      },
      {
        label: "Vector index",
        tool: "FAISS",
        icon: Database,
        detail:
          "Dense vectors are stored in a FAISS index for fast nearest-neighbour search; the BM25 index covers the lexical side.",
      },
      {
        label: "Retrieval",
        tool: "Hybrid + RRF",
        icon: GitMerge,
        detail:
          "Dense and BM25 results are merged with Reciprocal Rank Fusion, balancing semantic similarity with keyword precision before the top-k chunks are selected.",
      },
      {
        label: "LLM",
        tool: "Google Gemini",
        icon: BrainCircuit,
        detail:
          "Gemini receives the question plus retrieved chunks and is instructed to answer only from that context — not from its own prior knowledge.",
      },
      {
        label: "Answer",
        tool: "Cited response",
        icon: MessageSquareQuote,
        detail:
          "The answer links each claim to a source, page and chunk. The repository adds evaluation gates for recall, MRR and groundedness, and serves it via FastAPI.",
      },
    ],
  },
  {
    id: "ozone",
    tab: "Ozone · Forecasting API",
    name: "From atmospheric records to an explained forecast",
    summary:
      "An end-to-end forecasting service: eight models benchmarked on NASA atmospheric data, exposed through a typed API with optional natural-language explanations.",
    repo: "https://github.com/abdullahdurrani-1/Ozone-Prediction-",
    stages: [
      {
        label: "Data",
        tool: "NASA atmospheric",
        icon: FileText,
        detail: "539,808 records covering 1994–2021 across Western North America, with ozone concentration (ppbv) as the target.",
      },
      {
        label: "Training",
        tool: "train_models.py",
        icon: Layers,
        detail: "A reproducible training script scales the features, fits every model and saves the artefacts (including the scaler) for serving.",
      },
      {
        label: "Models",
        tool: "5 ML + 3 DL",
        icon: Network,
        detail:
          "Baseline, linear regression, decision tree, random forest and XGBoost alongside a neural network, LSTM and GRU. The GRU scored best (R² 0.991, RMSE 0.68 ppbv).",
      },
      {
        label: "Ensemble",
        tool: "Compare & combine",
        icon: GitMerge,
        detail: "Predictions can come from a single model, every model at once, or an ensemble — with a dedicated endpoint for model-to-model comparison.",
      },
      {
        label: "API",
        tool: "FastAPI + Pydantic",
        icon: Server,
        detail:
          "Typed request and response schemas, single, ensemble and batch prediction endpoints, plus health and info routes. Packaged with Docker and docker-compose.",
      },
      {
        label: "Explain",
        tool: "Gemini (optional)",
        icon: Sparkles,
        detail: "Explanation endpoints turn numeric forecasts into plain-language summaries using Google Gemini when an API key is configured.",
      },
    ],
  },
];

export default function ArchitectureSpotlight() {
  const [systemIndex, setSystemIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const system = systems[systemIndex];
  const stage = system.stages[stageIndex];

  const selectSystem = (index: number) => {
    setSystemIndex(index);
    setStageIndex(0);
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (systemIndex + (event.key === "ArrowRight" ? 1 : -1) + systems.length) % systems.length;
    selectSystem(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="architecture" aria-labelledby="architecture-title" className="relative py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[60%] max-w-5xl rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-40 blur-3xl"
      />
      <div className="shell">
        <SectionHeading
          index="05"
          kicker="Architecture spotlight"
          id="architecture-title"
          title={
            <>
              How the systems <span className="italic text-accent">actually work</span>
            </>
          }
          lede="Select a stage to see what happens there. Both pipelines mirror the architecture documented in their repositories."
        />

        <Reveal>
          <div role="tablist" aria-label="Choose a system" className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
            {systems.map((item, index) => {
              const selected = index === systemIndex;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectSystem(index)}
                  onKeyDown={onTabKeyDown}
                  className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors ${
                    selected ? "text-white" : "text-muted hover:text-fg"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="arch-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-wine to-burgundy"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  {item.tab}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${system.id}`}
            className="glass overflow-hidden rounded-[14px] shadow-[var(--shadow)]"
          >
            <div className="flex flex-col gap-4 border-b border-line p-6 md:flex-row md:items-end md:justify-between md:p-8">
              <div className="max-w-2xl">
                <h3 className="font-display text-3xl leading-tight text-fg md:text-4xl">{system.name}</h3>
                <p className="mt-3 text-muted">{system.summary}</p>
              </div>
              <a
                href={system.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex shrink-0 items-center gap-1.5 text-sm text-accent"
              >
                Read the repository
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            {/* Pipeline */}
            <ol
              aria-label="Pipeline stages"
              className="relative grid gap-3 p-6 sm:[grid-template-columns:repeat(var(--half),minmax(0,1fr))] md:p-8 lg:[grid-template-columns:repeat(var(--n),minmax(0,1fr))]"
              style={{ "--n": system.stages.length, "--half": Math.ceil(system.stages.length / 2) } as React.CSSProperties}
            >
              {system.stages.map((item, index) => {
                const active = index === stageIndex;
                const done = index < stageIndex;
                const Icon = item.icon;
                return (
                  <li key={`${system.id}-${item.label}`} className="relative">
                    {index < system.stages.length - 1 && (
                      <>
                        <span
                          aria-hidden="true"
                          className={`absolute -right-3 top-1/2 hidden h-px w-3 transition-colors duration-500 lg:block ${
                            done ? "bg-wine" : "bg-line-strong"
                          }`}
                        />
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-3 left-[2.15rem] h-3 w-px transition-colors duration-500 sm:hidden ${
                            done ? "bg-wine" : "bg-line-strong"
                          }`}
                        />
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => setStageIndex(index)}
                      aria-pressed={active}
                      className={`group relative flex h-full w-full items-center gap-4 rounded-[10px] sm:flex-col sm:items-start border p-4 text-left transition-all duration-500 ease-[var(--ease-cinema)] ${
                        active
                          ? "border-wine bg-accent-soft"
                          : "border-line bg-bg/40 hover:-translate-y-0.5 hover:border-line-strong"
                      }`}
                    >
                      <span className="flex shrink-0 items-center justify-between sm:w-full">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-full border transition-colors duration-500 ${
                            active || done ? "border-wine bg-wine text-white" : "border-line-strong text-muted"
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="hidden font-mono text-[0.62rem] text-subtle sm:inline">{String(index + 1).padStart(2, "0")}</span>
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-fg">{item.label}</span>
                        <span className="mt-1 block font-mono text-[0.68rem] leading-snug text-muted">{item.tool}</span>
                      </span>
                      {active && (
                        <span className="absolute inset-x-4 bottom-0 h-px overflow-hidden" aria-hidden="true">
                          <span className="travel-x absolute top-0 h-px w-10 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Stage detail */}
            <div className="border-t border-line p-6 md:p-8" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${system.id}-${stageIndex}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-4 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10"
                >
                  <div>
                    <p className="kicker">
                      Stage {String(stageIndex + 1).padStart(2, "0")} / {String(system.stages.length).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-3xl text-fg">{stage.label}</p>
                  </div>
                  <p className="max-w-3xl text-lg leading-relaxed text-muted">{stage.detail}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="h-px flex-1 overflow-hidden bg-line">
                  <motion.div
                    className="h-full origin-left bg-wine"
                    animate={{ scaleX: (stageIndex + 1) / system.stages.length }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStageIndex((i) => Math.max(0, i - 1))}
                    disabled={stageIndex === 0}
                    className="btn btn-ghost !min-h-9 !px-4 text-xs disabled:pointer-events-none disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setStageIndex((i) => Math.min(system.stages.length - 1, i + 1))}
                    disabled={stageIndex === system.stages.length - 1}
                    className="btn btn-primary !min-h-9 !px-4 text-xs disabled:pointer-events-none disabled:opacity-40"
                  >
                    Next stage
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-subtle">
            These are portfolio projects that run locally or in Docker; neither is presented here as a hosted production
            service.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
