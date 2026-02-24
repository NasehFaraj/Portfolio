import { formatTagLabel } from "@/lib/formatTagLabel";

type TagChipsProps = {
  stack: string[] | string;
  isArabic: boolean;
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

export default function TagChips({ stack, isArabic }: TagChipsProps) {
  const tags = parseStack(stack);
  const visibleTags = tags.slice(0, 6);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((tag, index) => {
        const formatted = formatTagLabel(tag, isArabic);
        return (
          <span
            key={tag}
            className={`inline-flex h-7 items-center rounded-full border border-rose-200/90 bg-white/80 px-2.5 text-[11px] font-medium text-slate-700 ${
              index >= 4 ? "hidden sm:inline-flex" : ""
            }${
              isArabic && formatted.isTechnical ? " force-ltr" : ""
            }`}
            dir={isArabic && formatted.isTechnical ? "ltr" : undefined}
          >
            {formatted.text}
          </span>
        );
      })}
    </div>
  );
}
