import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
}

export default function SectionHeading({ index, kicker, title, lede, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-end">
      <div>
        <p className="kicker flex items-center gap-3">
          <span className="text-subtle">{index}</span>
          <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
          {kicker}
        </p>
        <h2
          id={id}
          className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.98] tracking-[-0.02em] text-fg text-balance"
        >
          {title}
        </h2>
      </div>
      {lede && <p className="max-w-xl text-base leading-relaxed text-muted md:justify-self-end md:text-lg">{lede}</p>}
    </Reveal>
  );
}
