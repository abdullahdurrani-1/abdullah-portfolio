import { ArrowDown, ArrowRight } from "lucide-react";
import HeroPortrait from "@/components/HeroPortrait";
import NeuralField from "@/components/ui/NeuralField";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { github, linkedIn, profile } from "@/data/site";

const focusAreas = [
  "Statistics",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Retrieval-Augmented Generation",
  "Forecasting",
  "Explainable ML",
  "Model Serving",
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 md:pt-36">
      {/* Atmospheric lighting */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-70 blur-3xl" />
        <NeuralField className="absolute inset-x-0 top-0 h-[85%] w-full opacity-60" />
      </div>

      <div className="shell grid items-center gap-14 pb-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-16 lg:pb-28">
        <div>
          <p className="kicker rise flex items-baseline gap-3" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="inline-block h-1.5 w-1.5 shrink-0 -translate-y-px rounded-full bg-wine" aria-hidden="true" />
            <span>{profile.roles.slice(0, 3).join(" · ")}</span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(3.8rem,17vw,8.5rem)] leading-[0.88] tracking-[-0.035em] text-fg"
          >
            <span className="rise block" style={{ "--i": 1 } as React.CSSProperties}>
              Abdullah
            </span>
            <span className="rise block italic text-accent" style={{ "--i": 2 } as React.CSSProperties}>
              Durrani
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-xl leading-snug text-fg sm:text-2xl"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            Data Scientist and AI Engineer building machine-learning, NLP and retrieval systems on a foundation of
            statistics.
          </p>
          <p className="rise mt-5 max-w-xl text-base leading-relaxed text-muted" style={{ "--i": 4 } as React.CSSProperties}>
            {profile.intro}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ "--i": 5 } as React.CSSProperties}>
            <a href="#projects" className="btn btn-primary">
              Explore projects
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <span className="mx-1 hidden h-6 w-px bg-line-strong sm:block" aria-hidden="true" />
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
            </a>
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          </div>

          <dl
            className="rise mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6 text-sm"
            style={{ "--i": 6 } as React.CSSProperties}
          >
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">Currently</dt>
              <dd className="mt-2 text-fg">Data Scientist — Codebricks Global &amp; FlavorWiki</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">Based in</dt>
              <dd className="mt-2 text-fg">{profile.location}</dd>
            </div>
          </dl>
        </div>

        <HeroPortrait />
      </div>

      {/* Focus-area ticker */}
      <div className="relative border-y border-line py-5" aria-label="Focus areas">
        <div className="flex w-max marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-8 pr-8 font-display text-2xl italic text-muted md:text-3xl">
                  {area}
                  <span className="h-1.5 w-1.5 rotate-45 bg-wine" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="sr-only">{focusAreas.join(", ")}</p>
        <a
          href="#about"
          className="absolute bottom-full right-5 mb-6 hidden items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-accent md:flex"
        >
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
