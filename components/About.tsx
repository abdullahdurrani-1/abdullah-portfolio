import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const path = [
  { label: "Statistics", text: "Reasoning about uncertainty, sampling and inference." },
  { label: "Data", text: "Cleaning, exploring and shaping real-world datasets." },
  { label: "Models", text: "Classical ML, deep learning and transformers." },
  { label: "Systems", text: "APIs, retrieval pipelines and interfaces people use." },
];

const facts = [
  { term: "Discipline", value: "BS Statistics, University of the Punjab" },
  { term: "Focus", value: "Machine learning, NLP and retrieval-augmented generation" },
  { term: "Approach", value: "Measure first, explain the model, then ship it" },
  { term: "Location", value: "Lahore, Pakistan" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="shell">
        <SectionHeading
          index="01"
          kicker="About"
          id="about-title"
          title={
            <>
              Statistics first. <span className="italic text-accent">Then</span> the models.
            </>
          }
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted md:text-xl">
            <p className="text-fg">
              My path into AI started with statistics — learning how to ask whether a pattern is real before trusting
              it. That habit still shapes how I build: start from the data, check the assumptions, and choose the
              simplest model that genuinely answers the question.
            </p>
            <p>
              From there I moved into machine learning and deep learning, and more recently into language models and
              retrieval-augmented generation. I like work that crosses the line between analysis and engineering:
              benchmarking models honestly, explaining what drives a prediction, and wrapping the result in an API or
              interface so it is actually useful.
            </p>
            <p>
              Today I work as a Data Scientist on consumer analytics, statistical testing and machine learning, and
              keep building projects that push into NLP, forecasting and grounded LLM applications.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.term} className="grid grid-cols-[7.5rem_1fr] gap-4 py-5">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">{fact.term}</dt>
                  <dd className="text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* From statistics to systems */}
        <RevealGroup as="li" className="relative mt-24 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {path.map((step, index) => (
            <RevealItem as="li" key={step.label} className="group relative bg-bg p-7 transition-colors duration-500 hover:bg-elev">
              <span className="font-mono text-xs text-subtle">0{index + 1}</span>
              <p className="mt-10 font-display text-4xl text-fg transition-colors duration-500 group-hover:text-accent">
                {step.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              <span
                aria-hidden="true"
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-wine transition-transform duration-700 ease-[var(--ease-cinema)] group-hover:scale-x-100"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
