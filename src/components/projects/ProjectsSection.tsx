"use client";

import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { MotionItem, MotionSection, MotionStagger } from "@/lib/motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ isArabic }: { isArabic: boolean }) {
  return (
    <Section
      id="other-projects"
      variant="pink"
      className="bg-gradient-to-b from-rose-50 via-rose-50/60 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <MotionSection>
          <div className="mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-nest-600">
              {isArabic ? siteContent.labels.deepDives.ar : siteContent.labels.deepDives.en}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
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
