type IconButtonProps = {
  href?: string;
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function IconButton({
  href,
  label,
  onClick,
  children,
  className
}: IconButtonProps) {
  const baseClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:scale-[1.03] hover:bg-white/10 hover:ring-1 hover:ring-nest-600/30 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-600 will-change-transform";

  if (href) {
    const isMail = href.startsWith("mailto:");
    return (
      <a
        href={href}
        aria-label={label}
        target={isMail ? undefined : "_blank"}
        rel={isMail ? undefined : "noreferrer"}
        className={`${baseClasses} ${className || ""}`.trim()}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${baseClasses} ${className || ""}`.trim()}
    >
      {children}
    </button>
  );
}
