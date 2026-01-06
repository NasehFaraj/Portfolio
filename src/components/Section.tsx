type SectionVariant = "dark" | "light" | "pink";

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-[#0B0D12] text-white",
  light: "bg-slate-100 text-slate-900",
  pink: "bg-gradient-to-b from-rose-50 via-white to-slate-50 text-slate-900"
};

export default function Section({
  id,
  variant,
  className,
  children
}: {
  id?: string;
  variant: SectionVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${variantClasses[variant]} ${className || ""}`}>
      {children}
    </section>
  );
}
