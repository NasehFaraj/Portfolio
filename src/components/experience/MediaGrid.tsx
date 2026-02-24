import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import type { TimelineMediaItem } from "@/data/experienceTimeline";

type MediaGridProps = {
  media: TimelineMediaItem[];
  isArabic: boolean;
  compact?: boolean;
  onOpenImage?: (index: number) => void;
};

export default function MediaGrid({
  media,
  isArabic,
  compact = false,
  onOpenImage
}: MediaGridProps) {
  if (!media.length) {
    return null;
  }

  return (
    <div className="mt-4">
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
        {isArabic ? "الوسائط" : "Media"}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-3">
        {media.slice(0, 2).map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => onOpenImage?.(index)}
            aria-label={isArabic ? image.alt.ar : image.alt.en}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-black/20 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
          >
            <div className={`relative ${compact ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
              <Image
                src={withBasePath(image.src)}
                alt={isArabic ? image.alt.ar : image.alt.en}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="absolute inset-0 ring-0 ring-nest-500/30 transition group-hover:ring-1" />
            </div>
            {image.caption ? (
              <p className="border-t border-white/10 px-2 py-1 text-[10px] font-medium text-white/65">
                {isArabic ? image.caption.ar : image.caption.en}
              </p>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
