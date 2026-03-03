"use client";

import Link from "next/link";
import { useState } from "react";
import { BriefcaseBusiness, GraduationCap, Trophy, Users } from "lucide-react";
import type { TimelineEntry } from "@/data/experienceTimeline";
import DateRangeChip from "./DateRangeChip";
import ImageLightbox from "./ImageLightbox";
import MediaGrid from "./MediaGrid";

type TimelineItemCardProps = {
  entry: TimelineEntry;
  isArabic: boolean;
};

const iconMap = {
  work: BriefcaseBusiness,
  teaching: GraduationCap,
  coaching: Users,
  achievement: Trophy
} as const;

export default function TimelineItemCard({ entry, isArabic }: TimelineItemCardProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const Icon = iconMap[entry.type];
  const title = isArabic ? entry.title.ar : entry.title.en;
  const org = isArabic ? entry.organization.ar : entry.organization.en;
  const location = isArabic ? entry.location.ar : entry.location.en;
  const dates = isArabic ? entry.dateRange.display.ar : entry.dateRange.display.en;
  const bullets = isArabic ? entry.bullets.ar : entry.bullets.en;
  const tags = isArabic ? entry.tags.ar : entry.tags.en;
  const detailsLabel = entry.detailsLabel
    ? isArabic
      ? entry.detailsLabel.ar
      : entry.detailsLabel.en
    : null;
  const isTrendingRole = entry.id === "trending-work";
  return (
    <article
      dir={isArabic ? "rtl" : "ltr"}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-night-800/72 p-4 shadow-card backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-nest-400/45 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:border-nest-400/45 focus-within:shadow-lg sm:p-6 ${
        isArabic ? "font-arabic text-right" : "text-left"
      }`}
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(224,35,78,0.14)_0%,rgba(224,35,78,0)_70%)] opacity-0 transition-opacity duration-200 sm:-top-28 sm:h-56 sm:w-56 sm:bg-[radial-gradient(circle,rgba(224,35,78,0.22)_0%,rgba(224,35,78,0)_70%)] sm:group-hover:opacity-100 sm:group-focus-within:opacity-100" />
      <div className="relative space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className={`flex min-w-0 items-start gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-10 sm:w-10">
              <Icon className="h-5 w-5 text-nest-400" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="break-words text-base font-semibold leading-tight text-white sm:text-xl">
                {title}
              </h3>
              <p className="mt-1 break-words text-sm text-white/70">{org}</p>
              <p
                className={`mt-1 text-xs text-white/45 break-words ${
                  isArabic ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {location}
              </p>
            </div>
          </div>
          <div className={isArabic ? "self-end sm:self-auto" : "self-start sm:self-auto"}>
            <DateRangeChip label={dates} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag, index) => (
            <span
              key={`${entry.id}-${tag}`}
              className={`inline-flex items-center rounded-full border border-white/10 bg-night-700/50 px-2.5 py-1 text-[10px] font-medium text-white/72 sm:text-[11px] ${
                index >= 4 ? "hidden sm:inline-flex" : ""
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`grid gap-4 ${
            entry.media?.length
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(240px,360px)]"
              : "grid-cols-1"
          }`}
        >
          <div className="min-w-0">
            <ul className="space-y-2.5 sm:space-y-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`flex items-start gap-2 ${isArabic ? "text-right" : ""}`}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E0234E]" />
                  <span
                    className={`text-[13px] text-white/75 sm:text-sm sm:leading-relaxed ${
                      isArabic ? "unicode-bidi-isolate leading-7" : "leading-6"
                    }`}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {entry.media?.length ? (
            <div className="min-w-0">
              <MediaGrid
                media={entry.media}
                mediaLabel={entry.mediaLabel}
                isArabic={isArabic}
                compact
                onOpenImage={(index) => setLightboxIndex(index)}
              />
            </div>
          ) : null}
        </div>

        {entry.links?.length ? (
          <div className="flex flex-wrap gap-2">
            {entry.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition hover:border-nest-400/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
              >
                {isArabic ? link.label.ar : link.label.en}
              </a>
            ))}
          </div>
        ) : null}

        {entry.detailsHref && detailsLabel ? (
          <div className={`mt-1 flex ${isArabic ? "justify-end sm:justify-end" : "justify-start sm:justify-end"}`}>
            <Link
              href={entry.detailsHref}
              className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900 sm:w-auto ${
                isTrendingRole
                  ? "border border-rose-400/45 bg-gradient-to-r from-nest-600 to-rose-500 text-white shadow-[0_10px_24px_rgba(224,35,78,0.35)] hover:from-nest-500 hover:to-rose-400 hover:shadow-[0_12px_28px_rgba(224,35,78,0.45)] focus-visible:ring-rose-400/70"
                  : "border border-white/20 bg-white/5 text-white/85 hover:border-nest-400/55 hover:bg-white/10 focus-visible:ring-nest-400/55"
              }`}
            >
              {detailsLabel}
            </Link>
          </div>
        ) : null}
      </div>
      {entry.media?.length && lightboxIndex !== null ? (
        <ImageLightbox
          media={entry.media}
          initialIndex={lightboxIndex}
          isArabic={isArabic}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </article>
  );
}
