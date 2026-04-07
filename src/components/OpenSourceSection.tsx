import React from "react";

const contributions = [
  {
    id: "puppeteer-pr-14756",
    title: "Google Puppeteer - Core Contributor",
    project: "Google Puppeteer",
    role: "Core Contributor",
    description:
      "Engineered the PUPPETEER_DANGEROUS_NO_SANDBOX feature, automatically injecting the --no-sandbox flag into browser launch arguments. Simplified Docker and CI/CD deployments for thousands of global users by eliminating hardcoded configuration changes.",
    link: "https://github.com/puppeteer/puppeteer/pull/14756",
    cta: "View Merged PR #14756",
    keywords: ["Node.js", "Docker", "CI/CD", "TypeScript"]
  },
  {
    id: "nestjs-pr-3390",
    title: "NestJS Framework - Community & Docs Contributor",
    project: "NestJS Framework",
    role: "Documentation & Community Contributor",
    description:
      "Clarified framework logging mechanisms by explicitly documenting log level cascading and inheritance behavior. Resolved community confusion (Issue #3306), enabling streamlined debugging for the entire global developer base.",
    link: "https://github.com/nestjs/docs.nestjs.com/pull/3390",
    cta: "View Merged PR #3390",
    keywords: ["NestJS", "Documentation", "Debugging", "Community"]
  }
] as const;

export default function OpenSourceSection() {
  return (
    <section
      id="open-source-contributions"
      className="relative overflow-hidden bg-[#0B0D12] px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,35,78,0.18),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(224,35,78,0.10),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-[#E0234E]/35 bg-[#E0234E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF5E7E]">
            Open Source Contributions
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Community Impact Through Production-Grade Contributions
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            Contributions focused on real-world backend delivery: container safety, CI/CD reliability,
            and framework-level developer experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contributions.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_16px_38px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E0234E]/45 hover:shadow-[0_22px_50px_rgba(224,35,78,0.24)]"
            >
              <span className="absolute inset-y-6 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#E0234E] via-[#FF5E7E] to-transparent" />

              <div className="pl-4">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">{item.project}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.role}</p>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                    STATUS: MERGED
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-white/80 sm:text-base">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.keywords.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-xl border border-[#E0234E]/50 bg-[#E0234E]/15 px-4 py-2 text-sm font-semibold text-[#FF6A88] transition-colors duration-200 hover:bg-[#E0234E]/25 hover:text-white"
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
