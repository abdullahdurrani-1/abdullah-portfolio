import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-28 md:py-40">
      <div className="shell">
        <SectionHeading
          index="02"
          kicker="Experience"
          id="experience-title"
          title={
            <>
              Where the work <span className="italic text-accent">happens</span>
            </>
          }
          lede="Data science roles in consumer analytics and applied AI, plus an engineering internship focused on generative AI and retrieval systems."
        />

        <ol className="relative border-t border-line">
          {experiences.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.05}
              className="group relative isolate grid gap-6 border-b border-line py-10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[13rem_minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-14"
            >
                {/* hover wash */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-5 -right-5 -z-10 origin-left scale-x-95 rounded-[14px] bg-accent-soft opacity-0 transition-all duration-700 ease-[var(--ease-cinema)] group-hover:scale-x-100 group-hover:opacity-100"
                />

                <div className="flex items-start gap-3 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
                  {item.current && (
                    <span className="relative mt-[0.3rem] flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-wine" />
                    </span>
                  )}
                  <span>
                    {item.period}
                    {item.engagement && <span className="mt-2 block text-accent">{item.engagement}</span>}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src={item.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-[10px] border border-line bg-white object-contain p-1"
                  />
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-fg md:text-4xl">{item.company}</h3>
                    <p className="mt-1 text-base text-muted">{item.role}</p>
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-4 inline-flex items-center gap-1 text-sm text-accent"
                    >
                      {new URL(item.website).hostname.replace("www.", "")}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>

                <div className="md:col-start-2 lg:col-start-auto">
                  <p className="leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${item.company} focus areas`}>
                    {item.areas.map((area) => (
                      <li key={area} className="chip">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
