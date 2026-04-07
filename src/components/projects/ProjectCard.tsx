import { GoRepo } from "react-icons/go";
import type { OtherProject } from "@/data/otherProjects";
import TagChips from "./TagChips";

type ProjectCardProps = {
  project: OtherProject;
  isArabic: boolean;
};

export default function ProjectCard({ project, isArabic }: ProjectCardProps) {
  const title = isArabic ? project.title.ar : project.title.en;
  const summary = isArabic ? project.summary.ar : project.summary.en;
  const bullets = (isArabic ? project.bullets.ar : project.bullets.en).slice(0, 3);
  const links = project.links as OtherProject["links"] & { caseStudyUrl?: string };
  const aiBulletText = isArabic
    ? "توليد اختبارات اختيار من متعدد تفاعلية عبر Gemini Pro 2.5 API مع تصحيح/علامة تلقائية."
    : "AI-generated interactive multiple-choice quizzes via Gemini Pro 2.5 API (auto scoring).";
  const shouldShowGithubBadge =
    Boolean(links.githubUrl) && Boolean(links.demoUrl || links.caseStudyUrl);
  const badges = [
    links.demoUrl ? { label: isArabic ? "Live" : "Live", href: links.demoUrl } : null,
    shouldShowGithubBadge
      ? { label: isArabic ? "GitHub" : "GitHub", href: links.githubUrl }
      : null,
    links.caseStudyUrl
      ? {
          label: isArabic ? "Case study" : "Case study",
          href: links.caseStudyUrl
        }
      : null
  ].filter(Boolean) as { label: string; href: string }[];
  const hasBadges = badges.length > 0;
  const primaryAction = links.caseStudyUrl
    ? { href: links.caseStudyUrl, label: isArabic ? "عرض التفاصيل" : "View details" }
    : links.demoUrl
      ? { href: links.demoUrl, label: isArabic ? "Open" : "Open" }
      : links.githubUrl
        ? { href: links.githubUrl, label: isArabic ? "مستودع GitHub" : "GitHub Repository" }
        : null;
  const isGithubPrimaryAction =
    Boolean(links.githubUrl) && !links.demoUrl && !links.caseStudyUrl;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-rose-200/80 bg-white/75 p-5 shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-nest-400/55 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:border-nest-400/55 focus-within:shadow-lg sm:p-6">
      <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(224,35,78,0.12),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{title}</h3>
          {hasBadges ? (
            <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <a
                key={`${project.id}-${badge.label}`}
                href={badge.href}
                target="_blank"
                rel="noreferrer"
                className="light-badge border-rose-200 bg-white text-slate-700 transition hover:border-nest-400/60 hover:text-nest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {badge.label}
              </a>
            ))}
            </div>
          ) : null}
        </div>
        {primaryAction ? (
          <a
            href={primaryAction.href}
            target="_blank"
            rel="noreferrer"
            aria-label={primaryAction.label}
            title={primaryAction.label}
            className={
              isGithubPrimaryAction
                ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#24292f] bg-[#24292f] text-white shadow-sm transition hover:-translate-y-0.5 hover:border-black hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#24292f]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                : "inline-flex shrink-0 items-center rounded-full border border-nest-400/45 bg-white px-4 py-2 text-sm font-semibold text-nest-700 transition hover:-translate-y-0.5 hover:border-nest-500/70 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            }
          >
            {isGithubPrimaryAction ? <GoRepo className="h-4 w-4" aria-hidden="true" /> : primaryAction.label}
          </a>
        ) : null}
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-slate-700 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
        {summary}
      </p>

      <ul className="relative mt-4 space-y-2 text-sm text-slate-700 leading-relaxed">
        {bullets.map((bullet) => {
          const isAiBullet =
            project.id === "online-education-system" && bullet === aiBulletText;
          return (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E0234E]" />
              <span className="inline-flex flex-wrap items-center gap-2">
                <span>{bullet}</span>
                {isAiBullet ? (
                  <span className="inline-flex items-center rounded-full border border-nest-400/50 bg-rose-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-nest-600">
                    AI
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="relative mt-auto pt-5">
        <TagChips stack={project.stack} isArabic={isArabic} />
      </div>
    </div>
  );
}
