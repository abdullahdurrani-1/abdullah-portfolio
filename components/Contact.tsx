import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { github, linkedIn, profile } from "@/data/site";

const channels = [
  {
    label: "LinkedIn",
    value: "Abdullah Durrani",
    href: linkedIn.href,
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: `@${github.handle}`,
    href: github.href,
    icon: <GithubIcon className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-1/2 -z-10 h-[80%] w-[110%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-80 blur-3xl"
      />
      <div className="shell">
        <Reveal>
          <p className="kicker flex items-center gap-3">
            <span className="text-subtle">07</span>
            <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-6 max-w-5xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-fg"
          >
            Have a data problem worth <span className="italic text-accent">solving?</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            I&apos;m happy to talk about data science and AI roles, collaborations, or a project you&apos;re thinking
            through. Email is the most reliable way to reach me.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal className="glass group relative flex flex-col justify-between gap-10 overflow-hidden rounded-[14px] p-6 md:p-10">
            <div className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-subtle">
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
              Email
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline w-fit break-all font-display text-[clamp(1.6rem,4.2vw,3.2rem)] leading-tight text-fg hover:text-accent"
            >
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary !min-h-10 !px-5 text-[0.82rem]">
                Write an email
                <ArrowUpRight className="btn-arrow h-4 w-4" aria-hidden="true" />
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4">
            {channels.map((channel) => (
              <RevealItem key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-5 rounded-[14px] p-6 transition-[border-color,transform] duration-500 ease-[var(--ease-cinema)] hover:-translate-y-0.5 hover:border-wine"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-colors group-hover:border-wine group-hover:bg-wine group-hover:text-white">
                    {channel.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">
                      {channel.label}
                    </span>
                    <span className="mt-1 block truncate text-lg text-fg">{channel.value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </RevealItem>
            ))}
            <RevealItem>
              <div className="glass flex items-center gap-5 rounded-[14px] p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong text-fg">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-subtle">Based in</span>
                  <span className="mt-1 block text-lg text-fg">{profile.location}</span>
                </span>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
