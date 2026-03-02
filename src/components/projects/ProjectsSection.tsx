"use client";

import Section from "@/components/Section";
import type { SectionVariant } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { MotionItem, MotionSection, MotionStagger } from "@/lib/motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({
  isArabic,
  variant = "light"
}: {
  isArabic: boolean;
  variant?: SectionVariant;
}) {
  const isDark = variant === "dark";

  return (
    <Section
      id="other-projects"
      variant={variant}
      className={isDark ? "border-y border-white/10" : "border-y border-slate-200/80"}
    >
      <div
        id="projects"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <MotionSection>
          <div className="mb-8 sm:mb-10">
            <p
              className={`text-xs uppercase tracking-[0.3em] ${
                isDark ? "text-nest-400" : "text-nest-600"
              }`}
            >
              {isArabic ? siteContent.labels.deepDives.ar : siteContent.labels.deepDives.en}
            </p>
            <h2
              className={`text-2xl font-semibold sm:text-3xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {isArabic
                ? siteContent.labels.caseStudiesTitle.ar
                : siteContent.labels.caseStudiesTitle.en}
            </h2>
          </div>
        </MotionSection>

        <MotionStagger className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.otherProjects.map((project) => (
            <MotionItem key={project.id}>
              <ProjectCard project={project} isArabic={isArabic} />
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </Section>
  );
}
