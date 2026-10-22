import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-28 md:py-40">
      <div className="shell">
        <SectionHeading
          index="03"
          kicker="Toolkit"
          id="skills-title"
          title={
            <>
              Tools I <span className="italic text-accent">reach for</span>
            </>
          }
          lede="Grouped by the job they do. Every entry here is something I have used in my roles or in the projects below."
        />

        <RevealGroup
          as="li"
          className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, index) => (
            <RevealItem
              as="li"
              key={category.id}
              className="group relative flex flex-col bg-bg p-6 transition-colors duration-500 hover:bg-elev md:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-wine transition-transform duration-700 ease-[var(--ease-cinema)] group-hover:scale-y-100"
              />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl leading-tight text-fg">{category.title}</h3>
                <span className="font-mono text-[0.65rem] text-subtle">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-2 text-sm text-subtle">{category.note}</p>

              <ul className="mt-6 space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-[0.92rem] text-muted">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-[8px] border border-line bg-surface text-fg transition-colors duration-300 group-hover:text-accent">
                      {skill.icon ? (
                        <TechIcon name={skill.icon} className="h-3.5 w-3.5" />
                      ) : (
                        <span className="h-1 w-1 rotate-45 bg-current" aria-hidden="true" />
                      )}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
