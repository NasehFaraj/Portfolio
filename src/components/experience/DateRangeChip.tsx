export default function DateRangeChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-night-700/55 px-3 py-1 text-[11px] font-semibold tracking-[0.04em] text-white/80">
      {label}
    </span>
  );
}
