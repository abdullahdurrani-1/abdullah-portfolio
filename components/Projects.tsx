import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import OzonePreview from "@/components/previews/OzonePreview";
import { AbstractPreview, ChurnPreview, ScholarPreview } from "@/components/previews/DiagramPreviews";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { github } from "@/data/site";
import { projects, type Project, type ProjectPreview } from "@/data/projects";

const previews: Record<ProjectPreview, () => React.ReactElement> = {
  ozone: OzonePreview,
  scholar: ScholarPreview,
  abstract: AbstractPreview,
  churn: ChurnPreview,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Preview = previews[project.preview];
  const featured = project.featured;

  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-[border-color,transform,box-shadow] duration-500 ease-[var(--ease-cinema)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow)] ${
        featured ? "md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : "md:grid md:grid-cols-2 xl:flex"
      }`}
    >
      {/* Preview */}
      <div className={`relative overflow-hidden border-line bg-elev ${featured ? "border-b md:border-b-0 md:border-r" : "border-b md:border-b-0 md:border-r xl:border-b xl:border-r-0"}`}>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div
          className={`relative transition-transform duration-700 ease-[var(--ease-cinema)] group-hover:scale-[1.03] ${
            featured
              ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[360px] lg:min-h-[420px]"
              : "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[320px] xl:aspect-[16/10] xl:h-auto xl:min-h-0"
          }`}
        >
          <div className="absolute inset-0 p-3 sm:p-5">
            <Preview />
          </div>
        </div>
        <span className="absolute right-4 top-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle sm:right-6 sm:top-5">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${featured ? "lg:p-10" : ""}`}>
        <p className="kicker">{project.category}</p>
        <h3
          id={`${project.id}-title`}
          className={`mt-3 font-display leading-[1.02] text-fg ${featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
        >
          {project.title}
        </h3>

        <dl className="mt-6 space-y-4 text-[0.95rem] leading-relaxed">
          <div>
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">Problem</dt>
            <dd className="mt-1.5 text-fg">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">Approach</dt>
            <dd className="mt-1.5 text-muted">{project.approach}</dd>
          </div>
        </dl>

        {project.metrics && (
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-subtle">{metric.label}</dt>
                <dd className="mt-1 font-display text-2xl text-fg">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li key={tech} className="chip !text-[0.72rem]">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !px-4 text-[0.82rem]">
            <GithubIcon className="h-4 w-4" />
            View code
            <ArrowUpRight className="btn-arrow h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">for {project.title} on GitHub (opens in a new tab)</span>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-10 !px-4 text-[0.82rem]">
              Live demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-28 md:py-40">
      <div className="shell">
        <SectionHeading
          index="04"
          kicker="Selected work"
          id="projects-title"
          title={
            <>
              Projects, <span className="italic text-accent">measured</span>
            </>
          }
          lede="Each project states the problem, the approach and — where the repository reports them — the actual results."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={project.featured ? 0 : (index - 1) * 0.08} className={project.featured ? "xl:col-span-3" : ""}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href={github.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon className="h-4 w-4" />
            More on GitHub
            <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
