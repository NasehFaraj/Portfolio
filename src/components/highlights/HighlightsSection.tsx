"use client";

import { type ComponentType, useEffect, useState } from "react";
import { ChevronDown, Code2, Trophy } from "lucide-react";
import { SiNestjs } from "react-icons/si";
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
  isArabic,
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
  isArabic: boolean;
  isDark: boolean;
  panelId: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`group relative w-full overflow-hidden rounded-[1.75rem] border p-4 ${
        isArabic ? "text-right" : "text-left"
      } transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-500 focus-visible:ring-offset-2 ${
        isDark ? "focus-visible:ring-offset-[#0B0D12]" : "focus-visible:ring-offset-white"
      } ${
        isOpen
          ? isDark
            ? "border-nest-500/60 bg-[linear-gradient(140deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] shadow-[0_0_0_1px_rgba(224,35,78,0.24),0_30px_70px_rgba(224,35,78,0.18)]"
            : "border-nest-400/65 bg-[linear-gradient(140deg,rgba(255,255,255,0.92),rgba(255,241,246,0.86))] shadow-[0_0_0_1px_rgba(224,35,78,0.18),0_22px_50px_rgba(224,35,78,0.14)]"
          : isDark
            ? "border-white/10 bg-white/[0.045] hover:border-white/25 hover:bg-white/[0.08]"
            : "border-slate-200 bg-white/95 hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-10 top-0 h-20 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-300 ${
          isOpen
            ? isDark
              ? "bg-nest-500/30 opacity-90"
              : "bg-nest-300/40 opacity-80"
            : "opacity-0"
        }`}
      />
      <button
        type="button"
        onClick={onClick}
        className={`w-full focus-visible:outline-none ${isArabic ? "text-right" : "text-left"}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="grid min-h-[124px] grid-cols-[88px_minmax(0,1fr)] items-center gap-4 sm:min-h-[140px] sm:grid-cols-[106px_minmax(0,1fr)] sm:gap-5">
          <div className="relative isolate flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-24 sm:w-24">
            <IconAura />
            <Icon className="relative z-10 h-10 w-10 text-nest-500 sm:h-11 sm:w-11" />
          </div>
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`text-lg font-semibold sm:text-xl ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h3>
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
          <div
            className={`rounded-2xl border pt-5 ${
              isDark ? "border-white/10 bg-black/10" : "border-rose-100/90 bg-white/75"
            }`}
          >
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
  const [openCategoryIds, setOpenCategoryIds] = useState<string[]>([]);
  const isDark = variant === "dark";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash === "open-source") {
      setOpenCategoryIds((prev) => (prev.includes("open-source") ? prev : [...prev, "open-source"]));
    }
  }, []);

  const getAccentRail = () => "from-nest-600 via-rose-500 to-pink-400";

  const renderBullets = (item: HighlightItem, compact = false) => {
    const bullets = isArabic ? item.bullets.ar : item.bullets.en;
    return (
      <div className={`${compact ? "space-y-2" : "space-y-2.5"} text-sm leading-relaxed`}>
        {bullets.map((bullet, index) => (
          <p
            key={`${item.id}-bullet-${index}`}
            className={`${isDark ? "text-white/75" : "text-slate-700"} ${isArabic ? "unicode-bidi-isolate leading-7" : ""}`}
          >
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
    const status = item.status ? (isArabic ? item.status.ar : item.status.en) : null;
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
          <span
            className={`inline-flex items-center rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 ${
              isArabic ? "" : "uppercase tracking-[0.16em]"
            }`}
          >
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
    const isNestContribution =
      item.kind === "open_source_pr" && Boolean(item.orgOrRepo?.en?.toLowerCase().includes("nestjs"));

    return (
      <article
        className={`group relative overflow-hidden rounded-3xl p-5 sm:p-6 ${
          isDark
            ? "border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] shadow-[0_18px_38px_rgba(0,0,0,0.34)] hover:border-white/20 hover:shadow-[0_24px_48px_rgba(224,35,78,0.2)]"
            : "border border-slate-200 bg-[linear-gradient(140deg,rgba(255,255,255,1),rgba(255,244,248,0.7))] shadow-[0_14px_32px_rgba(11,13,18,0.1)] hover:border-rose-300 hover:shadow-[0_20px_42px_rgba(224,35,78,0.14)]"
        } transition-all duration-300 hover:-translate-y-0.5`}
      >
        <span className="pointer-events-none absolute inset-x-8 top-0 h-16 -translate-y-1/2 rounded-full bg-nest-500/20 blur-2xl" />
        <span
          className={`absolute inset-y-4 ${isArabic ? "right-3" : "left-3"} w-[3px] rounded-full bg-gradient-to-b ${getAccentRail()}`}
        />
        <div className={isArabic ? "pr-4" : "pl-4"}>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <span className={`relative isolate mt-0.5 inline-flex shrink-0 items-center justify-center rounded-2xl ${
                isDark ? "border border-white/15 bg-white/10" : "border border-slate-200 bg-white"
              } ${compact ? "h-16 w-16" : "h-20 w-20"}`}>
                <IconAura compact={compact} />
                {isNestContribution ? (
                  <SiNestjs className={`${compact ? "h-8 w-8" : "h-9 w-9"} relative z-10 text-nest-500`} />
                ) : (
                  <Icon className={`${compact ? "h-9 w-9" : "h-10 w-10"} relative z-10 text-nest-500`} />
                )}
              </span>
              <div>
                {orgOrRepo ? (
                  <p
                    className={`text-xs ${isArabic ? "" : "uppercase tracking-[0.22em]"} ${
                      isDark ? "text-white/45" : "text-slate-500"
                    }`}
                  >
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
          isArabic ? "font-arabic text-right" : "text-left"
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
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
                  isArabic ? "" : "uppercase tracking-[0.24em]"
                } ${
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

          <div
            className={`mb-6 rounded-[2rem] border p-3 sm:mb-8 sm:p-4 ${
              isDark
                ? "border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]"
                : "border-slate-200 bg-[linear-gradient(155deg,rgba(255,255,255,0.95),rgba(255,244,248,0.75))]"
            }`}
          >
            <div className="space-y-4" role="tablist" aria-label="Highlights categories">
              {categories.map((category) => {
                const Icon = categoryIconMap[category.icon as keyof typeof categoryIconMap] ?? Code2;
                const isOpen = openCategoryIds.includes(category.id);
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
                  isArabic={isArabic}
                  isDark={isDark}
                  panelId={panelId}
                  onClick={() => {
                    setOpenCategoryIds((prev) =>
                      prev.includes(category.id)
                        ? prev.filter((id) => id !== category.id)
                        : [...prev, category.id]
                    );
                  }}
                >
                  <span id={category.id} className="block h-0 w-0" aria-hidden />
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
      </div>
    </Section>
  );
}
