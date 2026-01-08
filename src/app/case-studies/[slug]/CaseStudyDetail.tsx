"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import type { CaseStudy } from "@/data/caseStudies";
import { useMotionEnabled } from "@/lib/motion";

const LANG_KEY = "portfolio:lang";

type Language = "en" | "ar";

const renderBullets = (
  items: string[],
  className = "mt-4 space-y-2 text-sm text-slate-700 leading-relaxed"
) => (
  <ul className={className}>
    {items.map((bullet) => (
      <li key={bullet} className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-nest-400" />
        <span>{bullet}</span>
      </li>
    ))}
  </ul>
);

const renderContent = (items: string[]) =>
  items.map((paragraph) => (
    <p key={paragraph} className="mt-4 text-sm text-slate-700 leading-relaxed">
      {paragraph}
    </p>
  ));

const renderChallenges = (
  challenges: CaseStudy["i18n"]["en"]["challenges"],
  labels: CaseStudy["i18n"]["en"]["challengeLabels"]
) => (
  <div className="mt-4 space-y-4 text-sm text-slate-700">
    {challenges.map((item, index) => (
      <div
        key={`${item.challenge}-${index}`}
        className="rounded-xl border border-rose-200/70 bg-white/60 p-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {labels.challenge} {index + 1}
        </p>
        <p className="mt-2">
          <span className="text-slate-500">{labels.challenge}:</span> {item.challenge}
        </p>
        <p className="mt-1">
          <span className="text-slate-500">{labels.fix}:</span> {item.fix}
        </p>
        <p className="mt-1">
          <span className="text-slate-500">{labels.outcome}:</span> {item.outcome}
        </p>
      </div>
    ))}
  </div>
);

const getDomainLabel = (url?: string) => {
  if (!url) {
    return "";
  }
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
};

const hasItems = (items?: string[]) => Boolean(items && items.length);

const hasApiHighlights = (
  highlights?: CaseStudy["i18n"]["en"]["apiHighlights"]
) =>
  Boolean(
    highlights &&
      (hasItems(highlights.auth) ||
        hasItems(highlights.catalog) ||
        hasItems(highlights.shopping))
  );

const renderApiHighlights = (
  highlights?: CaseStudy["i18n"]["en"]["apiHighlights"],
  labels?: CaseStudy["i18n"]["en"]["apiHighlightLabels"]
) => {
  if (!highlights || !labels) {
    return null;
  }

  const groups = [
    { key: "auth", label: labels.auth, items: highlights.auth },
    { key: "catalog", label: labels.catalog, items: highlights.catalog },
    { key: "shopping", label: labels.shopping, items: highlights.shopping }
  ].filter((group) => hasItems(group.items));

  if (!groups.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-4 text-sm text-slate-700">
      {groups.map((group) => (
        <div key={group.key}>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {group.label}
          </p>
          {renderBullets(group.items, "mt-3 space-y-2 text-sm text-slate-700 leading-relaxed")}
        </div>
      ))}
    </div>
  );
};

export default function CaseStudyDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const [language, setLanguage] = useState<Language>("en");
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANG_KEY, language);
  }, [language]);

  const isArabic = language === "ar";
  const copy = caseStudy.i18n[isArabic ? "ar" : "en"];
  const sections = [
    {
      id: "overview",
      title: copy.toc.overview,
      show: hasItems(copy.overview),
      content: renderContent(copy.overview)
    },
    {
      id: "my-role",
      title: copy.toc.myRole,
      show: hasItems(copy.myRole),
      content: renderBullets(copy.myRole)
    },
    {
      id: "stack",
      title: copy.toc.stack,
      show: hasItems(copy.stack),
      content: renderBullets(copy.stack)
    },
    {
      id: "api-highlights",
      title: copy.toc.apiHighlights,
      show: Boolean(copy.toc.apiHighlights) && hasApiHighlights(copy.apiHighlights),
      content: renderApiHighlights(copy.apiHighlights, copy.apiHighlightLabels)
    },
    {
      id: "orders-logistics",
      title: copy.toc.ordersLogistics,
      show: Boolean(copy.toc.ordersLogistics) && hasItems(copy.ordersLogistics),
      content: renderBullets(copy.ordersLogistics ?? [])
    },
    {
      id: "implementation",
      title: copy.toc.implementation,
      show: hasItems(copy.implementation),
      content: renderBullets(copy.implementation)
    },
    {
      id: "driver-tasks",
      title: copy.toc.driverTasks,
      show: Boolean(copy.toc.driverTasks) && hasItems(copy.driverTasks),
      content: renderBullets(copy.driverTasks ?? [])
    },
    {
      id: "notifications",
      title: copy.toc.notifications,
      show: Boolean(copy.toc.notifications) && hasItems(copy.notifications),
      content: renderBullets(copy.notifications ?? [])
    },
    {
      id: "admin-analytics",
      title: copy.toc.adminAnalytics,
      show: Boolean(copy.toc.adminAnalytics) && hasItems(copy.adminAnalytics),
      content: renderBullets(copy.adminAnalytics ?? [])
    },
    {
      id: "deployment-ops",
      title: copy.toc.supportingServices,
      show: Boolean(copy.toc.supportingServices) && hasItems(copy.supportingServices),
      content: renderBullets(copy.supportingServices ?? [])
    },
    {
      id: "deployment",
      title: copy.toc.deployment,
      show: hasItems(copy.deployment),
      content: renderBullets(copy.deployment)
    },
    {
      id: "challenges",
      title: copy.toc.challenges,
      show: Boolean(copy.challenges && copy.challenges.length),
      content: renderChallenges(copy.challenges, copy.challengeLabels)
    }
  ].filter((section) => section.show && section.title);

  const liveUrl = caseStudy.card.liveUrl;
  const liveDomain = getDomainLabel(liveUrl);
  const sectionMotion = !motionEnabled
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: {},
          show: {
            transition: { staggerChildren: 0.06 }
          }
        }
      };

  const sectionItemMotion = !motionEnabled
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 6 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.28, ease: "easeOut" }
          }
        }
      };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
      className={isArabic ? "font-arabic text-right" : "text-left"}
    >
      <header
        className="sticky top-0 z-50 border-b border-rose-200/70 bg-white/80 backdrop-blur"
      >
        <div
          dir="ltr"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
        >
          <Link
            className="primary-button min-w-0 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            href="/#other-projects"
            aria-label={copy.backLabel}
          >
            <span className="truncate">{copy.backLabel}</span>
          </Link>
          <div className="flex-shrink-0">
            <button
              type="button"
              className="light-badge cursor-pointer transition hover:bg-rose-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              aria-label={isArabic ? "Switch language to English" : "التبديل إلى العربية"}
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      <Section
        variant="pink"
        className="bg-gradient-to-b from-rose-50 via-rose-50/60 to-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="rounded-2xl border border-rose-200 bg-white/70 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-nest-600">
              {copy.heroKicker}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {copy.title}
            </h1>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              {copy.heroSummary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
              <span className="light-badge">
                {copy.chips.roleLabel}: {copy.chips.roleValue}
              </span>
              <span className="light-badge">
                {copy.chips.statusLabel}: {copy.chips.statusValue}
              </span>
              <span className="light-badge">
                {copy.chips.repoLabel}: {copy.chips.repoValue}
              </span>
              {liveUrl ? (
                <a
                  className="inline-flex items-center rounded-full border border-nest-400/60 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-nest-600 transition hover:bg-rose-100/80 hover:underline underline-offset-4"
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.chips.liveLabel}: {liveDomain}
                </a>
              ) : null}
            </div>
            {renderBullets(copy.heroBullets)}
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              {copy.heroStackLine}
            </p>
          </div>

          <nav className="mt-6 rounded-2xl border border-rose-200 bg-white/70 p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {copy.tocTitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sections.map((item) => (
                <motion.a
                  key={item.id}
                  className="light-badge transition hover:bg-rose-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  href={`#${item.id}`}
                  aria-label={`${copy.jumpToLabel} ${item.title}`}
                  whileTap={motionEnabled ? { scale: 0.98 } : undefined}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </nav>

          <motion.div className="mt-8 space-y-6" {...sectionMotion}>
            {sections.map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="rounded-2xl border border-rose-200 bg-white/70 p-5 shadow-sm sm:p-6"
                {...sectionItemMotion}
              >
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                  {section.title}
                </h2>
                {section.content}
              </motion.section>
            ))}
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
