"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa6";
import { FaBars, FaEllipsisH, FaTelegramPlane } from "react-icons/fa";
import BrandMark from "@/components/BrandMark";
import IconButton from "@/components/IconButton";

type NavLink = { label: string; href: string };
type SocialLink = { label: string; href: string; icon: string };

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane
} as const;

export default function ScrollNavbar({
  isArabic,
  navLinks,
  socialLinks,
  onToggleLanguage,
  languageLabel
}: {
  isArabic: boolean;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  onToggleLanguage: () => void;
  languageLabel: string;
}) {
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");
    if (!trigger) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md transition-all duration-300 ease-out ${
          visible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
        dir="ltr"
      >
        <div
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-3 sm:px-4 lg:px-6"
          style={
            (isArabic
              ? { ["--nav-gap" as string]: "14px", ["--icon-gap" as string]: "12px" }
              : { ["--nav-gap" as string]: "18px", ["--icon-gap" as string]: "12px" }) as React.CSSProperties
          }
        >
          <div className="nav-left flex min-w-0 w-[180px] flex-none items-center gap-3 sm:w-[220px] md:w-[260px] xl:w-[300px]">
            <BrandMark initials={isArabic ? "ن ف" : "N F"} />
            <div className="min-w-0" dir={isArabic ? "rtl" : "ltr"}>
              <p className="max-w-[120px] truncate whitespace-nowrap text-sm font-semibold text-white sm:max-w-[180px]">
                {isArabic ? "ناصح فرج" : "Naseh Faraj"}
              </p>
              <p className="hidden text-xs text-white/60 truncate max-w-full sm:block">
                {isArabic
                  ? "مهندس باك-إند · NestJS"
                  : "Backend Engineer · NestJS"}
              </p>
            </div>
          </div>
          <nav
            className="nav-center hidden flex-1 min-w-0 items-center justify-center text-sm text-white/80 lg:flex"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <ul className="flex list-none items-center gap-[var(--nav-gap)] p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href} className="m-0 p-0">
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="whitespace-nowrap transition hover:text-nest-400"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="whitespace-nowrap transition hover:text-nest-400"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-right flex w-[140px] min-w-0 flex-none items-center gap-2 sm:w-[180px] sm:gap-[var(--icon-gap)] md:w-[200px] xl:w-[240px]">
            <div className="hidden items-center gap-[var(--icon-gap)] lg:flex" dir="ltr">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
                return (
                  <IconButton key={item.href} href={item.href} label={item.label}>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </IconButton>
                );
              })}
            </div>
            <div className="hidden items-center gap-[var(--icon-gap)] md:flex lg:hidden" dir="ltr">
              {socialLinks.slice(0, 3).map((item) => {
                const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
                return (
                  <IconButton key={item.href} href={item.href} label={item.label}>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </IconButton>
                );
              })}
              <IconButton label="More" onClick={() => setIsMoreOpen((prev) => !prev)}>
                <FaEllipsisH className="h-4 w-4" />
              </IconButton>
            </div>
            <div className="flex items-center gap-2 md:hidden" dir="ltr">
              <IconButton label="More" onClick={() => setIsMoreOpen((prev) => !prev)}>
                <FaEllipsisH className="h-4 w-4" />
              </IconButton>
              <IconButton label="Menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
                <FaBars className="h-4 w-4" />
              </IconButton>
            </div>
            <div className="ps-2 border-s border-white/10">
              <button
                type="button"
                className="glass-button h-9 min-w-[44px] px-2 text-xs shrink-0 sm:h-10 sm:min-w-[52px] sm:px-3 sm:text-sm"
                onClick={onToggleLanguage}
              >
                {languageLabel}
              </button>
            </div>
          </div>
        </div>
        {isMoreOpen ? (
          <div className="border-t border-white/10 bg-black/70 px-6 py-3 lg:hidden">
            <div className="flex flex-wrap gap-4 md:hidden">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
                return (
                  <IconButton key={item.href} href={item.href} label={item.label}>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </IconButton>
                );
              })}
            </div>
            <div className="hidden flex-wrap gap-4 md:flex">
              {socialLinks.slice(3).map((item) => {
                const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
                return (
                  <IconButton key={item.href} href={item.href} label={item.label}>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </IconButton>
                );
              })}
            </div>
          </div>
        ) : null}
        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-black/70 px-6 py-3 lg:hidden">
            <div className="flex flex-col gap-2 text-sm text-white/80">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2 transition hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
