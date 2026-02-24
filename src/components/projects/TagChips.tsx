import { formatTagLabel } from "@/lib/formatTagLabel";

type TagChipsProps = {
  stack: string[] | string;
  isArabic: boolean;
};
const MAX_TAGS_DESKTOP = 6;
const MAX_TAGS_MOBILE = 4;

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
  const visibleTags = tags.slice(0, MAX_TAGS_DESKTOP);

  return (
    <div className="flex max-w-full flex-wrap gap-1.5 sm:gap-2">
      {visibleTags.map((tag, index) => {
        const formatted = formatTagLabel(tag, isArabic);
        return (
          <span
            key={tag}
            className={`inline-flex h-6 max-w-full items-center rounded-full border border-rose-200/90 bg-white/80 px-2.5 text-[10px] font-medium text-slate-700 whitespace-nowrap ${
              index >= MAX_TAGS_MOBILE ? "hidden sm:inline-flex" : ""
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
