export default function BrandMark({ initials = "N F" }: { initials?: string }) {
  const [firstInitial, secondInitial] = initials.split(" ");

  return (
    <div
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0B0D12] shadow-sm transition hover:border-nest-600/60 hover:shadow-glow"
      role="img"
      aria-label="Naseh Faraj"
    >
      <span
        className="text-center text-sm font-semibold leading-none tracking-[0.05em] text-white"
        style={{ fontFamily: "inherit" }}
      >
        {firstInitial}
        {secondInitial ? (
          <>
            {" "}
            <span className="text-rose-200">{secondInitial}</span>
          </>
        ) : null}
      </span>
      <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#E0234E]" />
    </div>
  );
}
