import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative py-28 md:py-40">
      <div className="shell">
        <SectionHeading
          index="06"
          kicker="Education & credentials"
          id="education-title"
          title={
            <>
              Formal grounding, <span className="italic text-accent">continuous</span> learning
            </>
          }
        />

        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
              Education
            </h3>
            <RevealGroup as="li" className="mt-6 space-y-4">
              {education.map((item) => (
                <RevealItem as="li" key={item.id} className="panel group relative overflow-hidden p-6 md:p-7">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-wine transition-transform duration-700 ease-[var(--ease-cinema)] group-hover:scale-y-100"
                  />
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">{item.degree}</p>
                  <p className="mt-3 font-display text-3xl leading-tight text-fg md:text-4xl">{item.field}</p>
                  <p className="mt-2 text-muted">
                    {item.institution}, {item.location}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" />
              Certifications
            </h3>
            <Reveal className="mt-6">
              <ul className="border-t border-line">
                {certifications.map((cert) => (
                  <li
                    key={cert.id}
                    className="group grid gap-x-6 gap-y-1 border-b border-line py-5 transition-colors duration-500 hover:bg-accent-soft sm:grid-cols-[minmax(0,1fr)_auto] sm:px-3"
                  >
                    <div>
                      <p className="text-[1.05rem] leading-snug text-fg">
                        {cert.url ? (
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1">
                            {cert.title}
                            <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                            <span className="sr-only">(verify credential, opens in a new tab)</span>
                          </a>
                        ) : (
                          cert.title
                        )}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {cert.issuer}
                        {cert.platform && <span className="text-subtle"> · via {cert.platform}</span>}
                      </p>
                    </div>
                    <div className="flex items-baseline gap-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-subtle sm:flex-col sm:items-end sm:gap-1">
                      <span className="text-accent">{cert.issued}</span>
                      <span className="normal-case tracking-normal">ID {cert.credentialId}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
