"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/site";

/** Portrait with a gentle scroll parallax; disabled automatically for reduced motion. */
export default function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl"
      />
      <figure className="mask-in relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border border-line-strong bg-elev">
          <motion.div className="absolute inset-0" style={{ y, scale }}>
            <Image
              src="/assets/profile/abdullah-durrani.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 420px, 40vw"
              className="object-cover object-[50%_20%]"
            />
          </motion.div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,5,5,0.85)),linear-gradient(120deg,rgba(109,15,43,0.35),transparent_45%)] mix-blend-normal"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-5">
            <div>
              <p className="font-display text-xl italic sm:text-2xl">{profile.name}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/70">{profile.location}</p>
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/60">Fig. 01</span>
          </div>
        </div>
        {/* Corner registration marks */}
        <span aria-hidden="true" className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-accent" />
        <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-accent" />
      </figure>
    </div>
  );
}
