"use client";

import { type ComponentType, useMemo, useState } from "react";
import { ChevronDown, Code2, Trophy } from "lucide-react";
import Section from "@/components/Section";
import type { SectionVariant } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { MotionItem, MotionSection, MotionStagger } from "@/lib/motion";

const categoryIconMap = {
  code: Code2,
  trophy: Trophy
} as const;

const kindIconMap = {
  open_source_pr: Code2,
  competition: Trophy
} as const;

type LocalizedText = { en: string; ar: string };
type HighlightBullet = { label?: string; text: string };
type HighlightItem = {
  id: string;
  kind: string;
  featured?: boolean;
  orgOrRepo?: LocalizedText;
  prNumber?: number;
  status?: LocalizedText;
  title: LocalizedText;
  tag?: LocalizedText;
  bullets: { en: HighlightBullet[]; ar: HighlightBullet[] };
  link?: { label: LocalizedText; href: string };
};
type HighlightCategory = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  icon: string;
  items: HighlightItem[];
};

function IconAura({ compact = false }: { compact?: boolean }) {
  return (
    <span className="pointer-events-none absolute inset-0 -z-10">
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full icon-aura-red ${
          compact ? "h-14 w-14" : "h-20 w-20"
        }`}
      />
      <span
        className={`absolute left-[58%] top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full icon-aura-dark ${
          compact ? "h-10 w-10" : "h-14 w-14"
        }`}
      />
    </span>
  );
}

function HighlightCategoryCard({
  title,
  summary,
  count,
  Icon,
  isOpen,
  isDark,
  panelId,
  onClick,
  children
}: {
  title: string;
  summary: string;
  count: number;
  Icon: ComponentType<{ className?: string }>;
  isOpen: boolean;
  isDark: boolean;
  panelId: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`group relative w-full rounded-3xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-500 focus-visible:ring-offset-2 ${
        isDark ? "focus-visible:ring-offset-[#0B0D12]" : "focus-visible:ring-offset-white"
      } ${
        isOpen
          ? isDark
            ? "border-nest-500/60 bg-white/10 shadow-[0_0_0_1px_rgba(224,35,78,0.25),0_18px_32px_rgba(224,35,78,0.15)]"
            : "border-nest-400/65 bg-rose-50/70 shadow-[0_0_0_1px_rgba(224,35,78,0.2),0_16px_30px_rgba(224,35,78,0.12)]"
          : isDark
            ? "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]"
            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left focus-visible:outline-none"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="grid min-h-[136px] grid-cols-[104px_minmax(0,1fr)] items-center gap-4 sm:min-h-[148px] sm:grid-cols-[116px_minmax(0,1fr)]">
          <div className="relative isolate flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-28 sm:w-28">
            <IconAura />
            <Icon className="relative z-10 h-12 w-12 text-nest-500" />
          </div>
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-semibold ${
                    isOpen
                      ? "bg-nest-600 text-white"
                      : isDark
                        ? "bg-white/10 text-white/80"
                        : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {count}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-nest-500"
                      : isDark
                        ? "text-white/65"
                        : "text-slate-500"
                  }`}
                  aria-hidden
                />
              </div>
            </div>
            <p className={`mt-2 text-sm leading-relaxed ${isOpen ? (isDark ? "text-white/80" : "text-slate-700") : (isDark ? "text-white/60" : "text-slate-500")}`}>
              {summary}
            </p>
          </div>
        </div>
      </button>

      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`border-t pt-5 ${isDark ? "border-white/10" : "border-slate-200"}`}>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HighlightsSection({
  isArabic,
  variant = "light"
}: {
  isArabic: boolean;
  variant?: SectionVariant;
}) {
  const content = siteContent.homeHighlights;
  const categories = content.categories as HighlightCategory[];
  const [openCategoryId, setOpenCategoryId] = useState(categories[0]?.id ?? "");
  const isDark = variant === "dark";

  const getAccentRail = (item: HighlightItem) => {
    if (item.kind === "competition") {
      return "from-amber-400 via-yellow-300 to-orange-500";
    }
    return "from-nest-600 via-rose-500 to-pink-400";
  };

  const renderBullets = (item: HighlightItem, compact = false) => {
    const bullets = isArabic ? item.bullets.ar : item.bullets.en;
    return (
      <div className={`${compact ? "space-y-2" : "space-y-2.5"} text-sm leading-relaxed`}>
        {bullets.map((bullet, index) => (
          <p key={`${item.id}-bullet-${index}`} className={isDark ? "text-white/75" : "text-slate-700"}>
            {bullet.label ? (
              <>
                <span className={isDark ? "font-semibold text-white" : "font-semibold text-slate-900"}>
                  {bullet.label}:
                </span>{" "}
                <span>{bullet.text}</span>
              </>
            ) : (
              <span>{bullet.text}</span>
            )}
          </p>
        ))}
      </div>
    );
  };

  const renderMetaChips = (item: HighlightItem) => {
    const status = item.status ? (isArabic ? item.status.ar : item.status.en).toUpperCase() : null;
    const tag = item.tag ? (isArabic ? item.tag.ar : item.tag.en) : null;
    const prNumber = item.prNumber ? `#${item.prNumber}` : null;

    return (
      <div className="flex flex-wrap items-center gap-2">
        {prNumber ? (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              isDark
                ? "border border-white/15 bg-white/10 text-white/90"
                : "border border-slate-200 bg-white text-slate-700"
            }`}
          >
            {prNumber}
          </span>
        ) : null}
        {status ? (
          <span className="inline-flex items-center rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {status}
          </span>
        ) : null}
        {tag ? (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              isDark
                ? "border border-white/15 bg-white/10 text-white/80"
                : "border border-slate-200 bg-white text-slate-700"
            }`}
          >
            {tag}
          </span>
        ) : null}
      </div>
    );
  };

  const renderCard = (item: HighlightItem, compact = false) => {
    const title = isArabic ? item.title.ar : item.title.en;
    const orgOrRepo = item.orgOrRepo ? (isArabic ? item.orgOrRepo.ar : item.orgOrRepo.en) : null;
    const Icon = kindIconMap[item.kind as keyof typeof kindIconMap] ?? Code2;

    return (
      <article
        className={`group relative overflow-hidden rounded-3xl p-5 sm:p-6 ${
          isDark
            ? "border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-white/20 hover:shadow-[0_16px_35px_rgba(224,35,78,0.18)]"
            : "border border-slate-200 bg-white shadow-[0_10px_30px_rgba(11,13,18,0.08)] hover:border-rose-300 hover:shadow-[0_16px_35px_rgba(224,35,78,0.12)]"
        } transition-all duration-300 hover:-translate-y-0.5`}
      >
        <span className={`absolute inset-y-4 left-3 w-[3px] rounded-full bg-gradient-to-b ${getAccentRail(item)}`} />
        <div className="pl-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <span className={`relative isolate mt-0.5 inline-flex shrink-0 items-center justify-center rounded-2xl ${
                isDark ? "border border-white/15 bg-white/10" : "border border-slate-200 bg-white"
              } ${compact ? "h-16 w-16" : "h-20 w-20"}`}>
                <IconAura compact={compact} />
                <Icon className={`${compact ? "h-9 w-9" : "h-10 w-10"} relative z-10 text-nest-500`} />
              </span>
              <div>
                {orgOrRepo ? (
                  <p className={`text-xs uppercase tracking-[0.22em] ${isDark ? "text-white/45" : "text-slate-500"}`}>
                    {orgOrRepo}
                  </p>
                ) : null}
                <h3 className={`mt-1 text-base font-semibold sm:text-lg ${isDark ? "text-white" : "text-slate-900"}`}>
                  {title}
                </h3>
              </div>
            </div>
            {renderMetaChips(item)}
          </div>

          {renderBullets(item, compact)}

          {item.link ? (
            <div className="mt-5">
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button px-4 py-2 text-xs sm:text-sm"
                aria-label={`${isArabic ? item.link.label.ar : item.link.label.en} (opens in a new tab)`}
              >
                {isArabic ? item.link.label.ar : item.link.label.en}
              </a>
            </div>
          ) : null}
        </div>
      </article>
    );
  };

  return (
    <Section
      id="highlights"
      variant={variant}
      className={`relative overflow-hidden ${isDark ? "border-y border-white/10" : "border-y border-slate-200/80"}`}
    >
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className={`relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 opacity-[0.06] ${
            isDark
              ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:7px_7px]"
              : "bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.38)_1px,transparent_0)] [background-size:7px_7px]"
          }`}
        />
        <div className="relative z-10">
          <MotionSection>
            <div className="mb-8 sm:mb-10">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                  isDark
                    ? "border border-white/15 bg-white/5 text-nest-400"
                    : "border border-rose-200/80 bg-gradient-to-r from-white to-rose-50 text-nest-600"
                }`}
              >
                {isArabic ? content.chipLabel.ar : content.chipLabel.en}
              </span>
              <h2 className={`mt-2 text-2xl font-semibold sm:text-3xl ${isDark ? "text-white" : "text-slate-900"}`}>
                {isArabic ? content.title.ar : content.title.en}
              </h2>
              <div className="mt-3 h-px w-full max-w-xl bg-gradient-to-r from-nest-500/80 via-nest-400/45 to-transparent" />
              <p className={`mt-3 max-w-2xl text-sm sm:text-base ${isDark ? "text-white/70" : "text-slate-600"}`}>
                {isArabic ? content.subtitle.ar : content.subtitle.en}
              </p>
            </div>
          </MotionSection>

          <div className="mb-6 space-y-4 sm:mb-8" role="tablist" aria-label="Highlights categories">
              {categories.map((category) => {
                const Icon = categoryIconMap[category.icon as keyof typeof categoryIconMap] ?? Code2;
                const isOpen = category.id === openCategoryId;
              const label = isArabic ? category.title.ar : category.title.en;
                const summary = isArabic ? category.summary.ar : category.summary.en;
                const items = category.items;
                const featuredItem = items.find((item) => item.featured) ?? items[0];
                const remainingItems = items.filter((item) => item.id !== featuredItem?.id);
                const panelId = `highlights-panel-${category.id}`;
              return (
                <HighlightCategoryCard
                  key={category.id}
                  title={label}
                  summary={summary}
                  count={category.items.length}
                  Icon={Icon}
                  isOpen={isOpen}
                  isDark={isDark}
                  panelId={panelId}
                  onClick={() => {
                    if (!isOpen) {
                      setOpenCategoryId(category.id);
                    }
                  }}
                >
                  {!featuredItem ? (
                    <div
                      className={`rounded-2xl border px-4 py-6 text-sm ${
                        isDark
                          ? "border-white/10 bg-white/5 text-white/70"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {isArabic ? "لا توجد عناصر حالياً." : "No highlights in this category yet."}
                    </div>
                  ) : (
                    <div className="mx-auto w-full max-w-5xl space-y-6">
                      {renderCard(featuredItem)}
                      {remainingItems.length ? (
                        <MotionStagger className="space-y-6">
                          {remainingItems.map((item) => (
                            <MotionItem key={item.id}>{renderCard(item, true)}</MotionItem>
                          ))}
                        </MotionStagger>
                      ) : null}
                    </div>
                  )}
                </HighlightCategoryCard>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
