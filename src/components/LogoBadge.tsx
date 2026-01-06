export default function LogoBadge({ label }: { label: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-nest-400/40 bg-night-800 text-sm font-semibold uppercase tracking-widest text-nest-300 shadow-glow">
      {label}
    </div>
  );
}
