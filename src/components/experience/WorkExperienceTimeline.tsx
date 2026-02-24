"use client";

import Section from "@/components/Section";
import { MotionItem, MotionSection, MotionStagger } from "@/lib/motion";
import { experienceTimeline } from "@/data/experienceTimeline";
import TimelineItemCard from "./TimelineItemCard";

export default function WorkExperienceTimeline({ isArabic }: { isArabic: boolean }) {
  return (
    <Section id="experience" variant="dark">
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={`mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:py-24 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <MotionSection>
          <div className="mb-10 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {isArabic ? "الخبرة العملية" : "Work Experience"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              {isArabic ? "الخبرة" : "Experience"}
            </h2>
          </div>
        </MotionSection>

        <div className="relative rounded-3xl border border-white/5 bg-night-900/45 p-4 sm:p-6 lg:p-7">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_22px] opacity-20" />
          <div
            className={`pointer-events-none absolute bottom-6 top-6 w-px bg-gradient-to-b from-nest-500/70 via-nest-400/35 to-transparent ${
              isArabic ? "right-[0.95rem] sm:right-[1.87rem]" : "left-[0.95rem] sm:left-[1.87rem]"
            }`}
          />

          <MotionStagger className="relative space-y-5 sm:space-y-6">
            {experienceTimeline.map((entry) => (
              <MotionItem
                key={entry.id}
                className={`grid gap-3 sm:gap-4 ${
                  isArabic
                    ? "grid-cols-[minmax(0,1fr)_1.8rem] sm:grid-cols-[minmax(0,1fr)_2.9rem]"
                    : "grid-cols-[1.8rem_minmax(0,1fr)] sm:grid-cols-[2.9rem_minmax(0,1fr)]"
                }`}
              >
                <div
                  className={`flex justify-center pt-5 sm:pt-6 ${isArabic ? "order-2" : "order-1"}`}
                >
                  <span className="h-2.5 w-2.5 rounded-full border border-[#E0234E]/60 bg-night-900 shadow-[0_0_0_2px_rgba(224,35,78,0.14)] sm:h-3.5 sm:w-3.5 sm:border-2 sm:shadow-[0_0_0_3px_rgba(224,35,78,0.2)]" />
                </div>
                <div className={isArabic ? "order-1" : "order-2"}>
                  <TimelineItemCard entry={entry} isArabic={isArabic} />
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </Section>
  );
}
