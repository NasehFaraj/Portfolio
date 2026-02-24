"use client";

import Section from "@/components/Section";
import { MotionItem, MotionSection, MotionStagger } from "@/lib/motion";
import { experienceTimeline } from "@/data/experienceTimeline";
import TimelineItemCard from "./TimelineItemCard";

export default function WorkExperienceTimeline({ isArabic }: { isArabic: boolean }) {
  return (
    <Section id="experience" variant="dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <MotionSection>
          <div className="mb-10 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {isArabic ? "الخبرة العملية" : "Work Experience"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              {isArabic ? "الخبرة العملية والزمن المهني" : "Experience Timeline"}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
              {isArabic
                ? "Backend Engineer (Node.js / NestJS) | DevOps-minded (VPS Deployments, Docker)"
                : "Backend Engineer (Node.js / NestJS) | DevOps-minded (VPS Deployments, Docker)"}
            </p>
          </div>
        </MotionSection>

        <div className="relative rounded-3xl border border-white/5 bg-night-900/45 p-5 sm:p-6 lg:p-7">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_22px] opacity-20" />
          <div className="pointer-events-none absolute bottom-7 left-[1.62rem] top-7 w-px bg-gradient-to-b from-nest-500/85 via-nest-400/45 to-transparent sm:left-[1.87rem]" />

          <MotionStagger className="relative space-y-5 sm:space-y-6">
            {experienceTimeline.map((entry) => (
              <MotionItem key={entry.id} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.9rem_minmax(0,1fr)] sm:gap-4">
                <div className="flex justify-center pt-5 sm:pt-6">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-[#E0234E]/55 bg-night-900 shadow-[0_0_0_3px_rgba(224,35,78,0.2)]" />
                </div>
                <TimelineItemCard entry={entry} isArabic={isArabic} />
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </Section>
  );
}
