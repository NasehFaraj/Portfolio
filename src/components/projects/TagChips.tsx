import { formatTagLabel } from "@/lib/formatTagLabel";

type TagChipsProps = {
  stack: string[] | string;
  isArabic: boolean;
  maxVisible?: number;
};

const splitStackToken = (value: string) =>
  value
    .split(/[|,•]/g)
    .map((item) => item.trim())
    .filter(Boolean);

const parseStack = (stack: string[] | string) => {
  const raw = Array.isArray(stack) ? stack : splitStackToken(stack);
  const exploded = raw.flatMap(splitStackToken);
  const seen = new Set<string>();
  return exploded.filter((item) => {
    const normalized = item.toLowerCase();
    if (seen.has(normalized)) {
      return false;
    }
    seen.add(normalized);
    return true;
  });
};

export default function TagChips({ stack, isArabic, maxVisible = 6 }: TagChipsProps) {
  const tags = parseStack(stack);
  const visibleTags = tags.slice(0, maxVisible);
  const hiddenCount = Math.max(tags.length - visibleTags.length, 0);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((tag) => {
        const formatted = formatTagLabel(tag, isArabic);
        return (
          <span
            key={tag}
            className={`inline-flex items-center rounded-full border border-rose-200/90 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700${
              isArabic && formatted.isTechnical ? " force-ltr" : ""
            }`}
            dir={isArabic && formatted.isTechnical ? "ltr" : undefined}
          >
            {formatted.text}
          </span>
        );
      })}
      {hiddenCount > 0 ? (
        <span className="inline-flex items-center rounded-full border border-nest-400/35 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-nest-600">
          +{hiddenCount}
        </span>
      ) : null}
    </div>
  );
}
