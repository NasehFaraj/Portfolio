export type SectionVariant = "dark" | "light" | "pink";

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-[#0B0D12] text-white",
  light: "bg-white text-slate-900",
  pink: "bg-gradient-to-b from-rose-50 via-white to-slate-50 text-slate-900"
};

export default function Section({
  id,
  variant,
  alternatingIndex,
  className,
  children
}: {
  id?: string;
  variant?: SectionVariant;
  alternatingIndex?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const resolvedVariant =
    variant ?? (typeof alternatingIndex === "number" && alternatingIndex % 2 === 1 ? "dark" : "light");

  return (
    <section id={id} className={`${variantClasses[resolvedVariant]} ${className || ""}`}>
      {children}
    </section>
  );
}
