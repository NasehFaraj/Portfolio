"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { TimelineMediaItem } from "@/data/experienceTimeline";
import { withBasePath } from "@/lib/withBasePath";

type ImageLightboxProps = {
  media: TimelineMediaItem[];
  initialIndex: number;
  isArabic: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  media,
  initialIndex,
  isArabic,
  onClose
}: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const canNavigate = media.length > 1;
  const active = media[index] ?? media[0];

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (!canNavigate) {
        return;
      }
      if (event.key === "ArrowRight") {
        setIndex((prev) => (prev + 1) % media.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((prev) => (prev - 1 + media.length) % media.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [canNavigate, media.length, onClose]);

  if (!active) {
    return null;
  }

  if (typeof window === "undefined" || !mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={isArabic ? "عرض الصورة" : "Image preview"}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-night-900/95 p-3 shadow-2xl sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={isArabic ? "إغلاق" : "Close"}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 transition hover:border-nest-500/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
        >
          X
        </button>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <Image
            src={withBasePath(active.src)}
            alt={isArabic ? active.alt.ar : active.alt.en}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-sm text-white/80">
            {isArabic ? active.caption?.ar ?? active.alt.ar : active.caption?.en ?? active.alt.en}
          </p>
          {canNavigate ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev - 1 + media.length) % media.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-nest-500/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
                aria-label={isArabic ? "السابق" : "Previous"}
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={() => setIndex((prev) => (prev + 1) % media.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-nest-500/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
                aria-label={isArabic ? "التالي" : "Next"}
              >
                {">"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
}
