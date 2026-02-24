export default function DateRangeChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-night-700/55 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-white/80 sm:px-3 sm:text-[11px]">
      {label}
    </span>
  );
}
