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
  const links = project.links as OtherProject["links"] & {
    githubUrl?: string;
    caseStudyUrl?: string;
  };
  const aiBulletText = isArabic
    ? "توليد اختبارات اختيار من متعدد تفاعلية عبر Gemini Pro 2.5 API مع تصحيح/علامة تلقائية."
    : "AI-generated interactive multiple-choice quizzes via Gemini Pro 2.5 API (auto scoring).";
  const badges = [
    links.demoUrl ? { label: isArabic ? "Live" : "Live", href: links.demoUrl } : null,
    links.githubUrl
      ? { label: isArabic ? "GitHub" : "GitHub", href: links.githubUrl }
      : null,
    links.caseStudyUrl
      ? {
          label: isArabic ? "Case study" : "Case study",
          href: links.caseStudyUrl
        }
      : null
  ].filter(Boolean) as { label: string; href: string }[];
  const primaryAction = links.caseStudyUrl
    ? { href: links.caseStudyUrl, label: isArabic ? "عرض التفاصيل" : "View details" }
    : links.demoUrl
      ? { href: links.demoUrl, label: isArabic ? "Open" : "Open" }
      : links.githubUrl
        ? { href: links.githubUrl, label: isArabic ? "Open" : "Open" }
        : null;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-rose-200/80 bg-white/75 p-5 shadow-sm backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-nest-400/55 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:border-nest-400/55 focus-within:shadow-lg sm:p-6">
      <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(224,35,78,0.12),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{title}</h3>
        <div className="flex flex-wrap justify-end gap-2">
          {project.repoPrivate ? (
            <span className="light-badge border-rose-200 bg-rose-50 text-slate-700">
              {isArabic ? "مستودع خاص" : "Private repo"}
            </span>
          ) : null}
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

      <div className="relative mt-5 flex flex-wrap items-end justify-between gap-4">
        <TagChips stack={project.stack} isArabic={isArabic} />
        {primaryAction ? (
          <a
            href={primaryAction.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-nest-400/45 bg-white px-4 py-2 text-sm font-semibold text-nest-700 transition hover:-translate-y-0.5 hover:border-nest-500/70 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {primaryAction.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
