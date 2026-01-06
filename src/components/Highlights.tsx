"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { GraduationCap, Image as ImageIcon, Trophy, Users } from "lucide-react";
import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import Reveal from "@/components/motion/Reveal";

type HighlightsProps = {
  isArabic: boolean;
};

type MediaImage = {
  src: string;
  alt: { en: string; ar: string };
};

type SelectedMedia = {
  src: string;
  alt: string;
};

const iconMap = {
  GraduationCap,
  Users,
  Trophy
} as const;

export default function Highlights({ isArabic }: HighlightsProps) {
  const content = siteContent.highlights;
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);

  const proofLabel = useMemo(
    () => (isArabic ? "صور" : "Media"),
    [isArabic]
  );
  const badgeClasses =
    "inline-flex h-6 items-center rounded-full border border-[#E0234E]/25 bg-[#E0234E]/15 px-3 text-xs font-medium leading-none text-[#E0234E]";
  const [resolvedMedia, setResolvedMedia] = useState<Record<string, string | null>>({});
  const isRtl = isArabic;
  const contentAlign = isRtl ? "items-end text-right" : "items-start text-left";
  const selfEdge = isRtl ? "self-end" : "self-start";

  const AchievementCardHeader = ({
    title,
    badge,
    Icon
  }: {
    title: string;
    badge?: string | null;
    Icon?: React.ComponentType<{ className?: string }>;
  }) => (
    <div className="flex items-start justify-between gap-4" dir="ltr">
      <div className={`min-w-0 flex flex-col gap-3 ${contentAlign}`} dir={isRtl ? "rtl" : "ltr"}>
        <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">{title}</h3>
        {badge ? (
          <span
            className={`${badgeClasses} max-w-full whitespace-nowrap truncate ${
              isRtl ? "self-end" : "self-start"
            }`}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        {Icon ? <Icon className="h-5 w-5 text-nest-400" /> : null}
      </div>
    </div>
  );

  const renderBullet = (bullet: string) => {
    if (isRtl && bullet === "Codeforces: Expert.") {
      return (
        <span className="inline-flex flex-row-reverse items-center gap-1">
          <span dir="ltr" className="unicode-bidi-isolate">
            Codeforces
          </span>
          <span>:</span>
          <span dir="ltr" className="unicode-bidi-isolate">
            Expert
          </span>
          <span>.</span>
        </span>
      );
    }
    return bullet;
  };

  const AchievementCardBody = ({ bullets }: { bullets: string[] }) => (
    <ul
      className={`space-y-2 text-sm text-white/70 leading-relaxed ${
        isRtl ? "text-right" : "text-left"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {bullets.map((bullet) => (
        <li key={bullet}>{renderBullet(bullet)}</li>
      ))}
    </ul>
  );

  const AchievementCardMedia = ({
    images
  }: {
    images: MediaImage[];
  }) => (
    <div className={`${selfEdge} w-full max-w-[280px] sm:max-w-[320px]`} dir="ltr">
      <p
        className={`text-xs uppercase tracking-widest text-white/50 ${
          isRtl ? "text-right" : "text-left"
        }`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {proofLabel}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3">
        {images.map((image) => {
          const resolvedSrc = resolvedMedia[image.src];
          if (resolvedSrc === undefined) {
            return (
              <div
                key={image.src}
                className="aspect-square animate-pulse rounded-xl border border-white/10 bg-white/5"
              />
            );
          }
          if (!resolvedSrc) {
            return (
              <div
                key={image.src}
                className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/50"
              >
                <ImageIcon className="h-5 w-5" />
              </div>
            );
          }
          return (
            <button
              key={image.src}
              type="button"
              onClick={() => handleOpen(image, resolvedSrc)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-black/20 transition-transform hover:scale-[1.02]"
            >
              <Image
                src={resolvedSrc}
                alt={isArabic ? image.alt.ar : image.alt.en}
                fill
                className="object-cover"
              />
              <span className="absolute inset-0 ring-0 ring-nest-600/30 transition group-hover:ring-2" />
            </button>
          );
        })}
      </div>
    </div>
  );

  const resolvePublicImage = async (basePath: string) => {
    const extensions = ["png", "jpg", "jpeg", "webp"];
    for (const ext of extensions) {
      const url = `${basePath}.${ext}`;
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) {
          return url;
        }
      } catch {
        // Ignore and try next extension.
      }
    }
    return null;
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const allImages = content.blocks.flatMap((block) => block.media?.images ?? []);
    const uniqueBasePaths = Array.from(new Set(allImages.map((image) => image.src)));
    if (!uniqueBasePaths.length) {
      return;
    }
    let isMounted = true;
    const resolveAll = async () => {
      const entries = await Promise.all(
        uniqueBasePaths.map(async (basePath) => [
          basePath,
          await resolvePublicImage(basePath)
        ])
      );
      if (isMounted) {
        setResolvedMedia(Object.fromEntries(entries));
      }
    };
    resolveAll();
    return () => {
      isMounted = false;
    };
  }, [content.blocks]);

  const handleOpen = (image: MediaImage, resolvedSrc: string) => {
    setSelectedMedia({
      src: resolvedSrc,
      alt: isArabic ? image.alt.ar : image.alt.en
    });
  };

  return (
    <Section
      id="highlights"
      variant="dark"
      className="relative border-t border-white/10 bg-[#0B0D12] text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(224,35,78,0.2),transparent_45%)] before:opacity-30 before:content-['']"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              {isArabic ? content.title.ar : content.title.en}
            </h2>
            <p className="mt-3 text-sm text-white/70">
              {isArabic ? content.subtitle.ar : content.subtitle.en}
            </p>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.blocks.map((block, index) => {
            const Icon = iconMap[block.icon as keyof typeof iconMap];
            const bullets = isArabic ? block.bullets.ar : block.bullets.en;
            const images = block.media?.images ?? [];
            const hasMedia = images.length > 0;
            return (
              <Reveal key={block.id} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                  <div className="flex flex-1 flex-col gap-4 sm:gap-5">
                    <AchievementCardHeader
                      title={isArabic ? block.title.ar : block.title.en}
                      badge={block.badge}
                      Icon={Icon}
                    />
                    <AchievementCardBody bullets={bullets} />
                  </div>
                  <div className="mt-auto">
                    {hasMedia ? <AchievementCardMedia images={images} /> : null}
                    {block.links?.length ? (
                      <div
                        className={`mt-4 flex flex-wrap gap-2 ${
                          isArabic ? "justify-end" : "justify-start"
                        }`}
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        {block.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition-transform duration-200 ease-out hover:-translate-y-0.5"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      {selectedMedia ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative w-[92%] max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/80 transition hover:text-white"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
