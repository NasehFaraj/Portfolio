"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import IconButton from "@/components/IconButton";
import ScrollNavbar from "@/components/ScrollNavbar";
import StackAndCapabilities from "@/components/StackAndCapabilities";
import WorkExperienceTimeline from "@/components/experience/WorkExperienceTimeline";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { siteContent } from "@/content/siteContent";
import { formatTagLabel } from "@/lib/formatTagLabel";
import Reveal from "@/components/motion/Reveal";

const LANG_KEY = "portfolio:lang";

type Language = "en" | "ar";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANG_KEY, language);
  }, [language]);

  useEffect(() => {
    const glowEl = glowRef.current;
    const heroEl = heroRef.current;
    if (!glowEl || !heroEl) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const buffer = 120;
    let width = heroEl.clientWidth;
    let height = heroEl.clientHeight;
    let blobWidth = glowEl.getBoundingClientRect().width || 520;
    let blobHeight = glowEl.getBoundingClientRect().height || 520;
    let currentX = 0;
    let currentY = 0;
    let currentScale = 1;
    let targetX = 0;
    let targetY = 0;
    let targetScale = 1;
    let rafId = 0;
    let timeoutId: number | null = null;

    const lerp = (start: number, end: number, amount: number) =>
      start + (end - start) * amount;
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const updateBounds = () => {
      width = heroEl.clientWidth;
      height = heroEl.clientHeight;
      const rect = glowEl.getBoundingClientRect();
      blobWidth = rect.width || blobWidth;
      blobHeight = rect.height || blobHeight;
    };

    const pickTarget = () => {
      const minX = -buffer;
      const minY = -buffer;
      const maxX = Math.max(minX, width - blobWidth + buffer);
      const maxY = Math.max(minY, height - blobHeight + buffer);
      targetX = rand(minX, maxX);
      targetY = rand(minY, maxY);
      targetScale = rand(0.95, 1.1);
      const nextDelay = rand(2500, 4500);
      timeoutId = window.setTimeout(pickTarget, nextDelay);
    };

    updateBounds();
    currentX = (width - blobWidth) / 2;
    currentY = (height - blobHeight) / 2;
    pickTarget();

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.015);
      currentY = lerp(currentY, targetY, 0.015);
      currentScale = lerp(currentScale, targetScale, 0.01);
      glowEl.style.setProperty("--gx", `${currentX.toFixed(2)}px`);
      glowEl.style.setProperty("--gy", `${currentY.toFixed(2)}px`);
      glowEl.style.setProperty("--gs", `${currentScale.toFixed(3)}`);
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
      window.cancelAnimationFrame(rafId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const isArabic = language === "ar";
  const navLinks = useMemo(
    () => (isArabic ? siteContent.nav.ar : siteContent.nav.en),
    [isArabic]
  );
  const hero = isArabic ? siteContent.hero.ar : siteContent.hero.en;
  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? "font-arabic" : ""} overflow-x-hidden lg:overflow-x-visible`}
    >
      <ScrollNavbar
        isArabic={isArabic}
        navLinks={navLinks}
        socialLinks={siteContent.social}
        onToggleLanguage={() => setLanguage(isArabic ? "en" : "ar")}
        languageLabel={isArabic ? "EN" : "AR"}
      />

      <section
        id="hero"
        className="relative w-full min-h-[100svh] overflow-hidden"
        ref={heroRef}
      >
        <div id="nav-trigger" className="absolute left-0 top-1/2 h-px w-px" />
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div ref={glowRef} className="hero-glow will-change-transform" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay animate-grain bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:3px_3px]" />
        </div>
        <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
          <div className="space-y-6 md:space-y-8">
            <div
              className={`max-w-xl ${isArabic ? "text-right" : "text-left"}`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <Reveal>
                <p className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {isArabic ? siteContent.profile.nameAr : siteContent.profile.name}
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-2 text-sm text-white/75 sm:text-base lg:text-lg">
                  {isArabic ? siteContent.profile.titleAr : siteContent.profile.title}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-2 max-w-[52ch] text-sm text-white/55 sm:text-base">
                  {isArabic
                    ? siteContent.hero.ar.academicLine
                    : siteContent.hero.en.academicLine}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-2 text-sm text-white/65 sm:text-base">
                  {isArabic ? siteContent.hero.ar.subheadline : siteContent.hero.en.subheadline}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-4 flex flex-wrap gap-3">
                  {siteContent.social.map((item) => {
                    const Icon = socialIconMap[item.icon as keyof typeof socialIconMap];
                    return (
                      <IconButton key={item.href} href={item.href} label={item.label}>
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </IconButton>
                    );
                  })}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <p className="max-w-xl text-sm text-white/60 leading-relaxed">
                {hero.supportLine}
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="flex flex-wrap gap-4">
                <a className="primary-button" href="#experience">
                  {hero.ctaPrimary}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="section-card flex max-h-[360px] flex-col gap-4 overflow-hidden p-4 sm:p-5 md:p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {isArabic
                      ? siteContent.labels.focusAreas.ar
                      : siteContent.labels.focusAreas.en}
                  </p>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    {isArabic
                      ? siteContent.labels.focusTitle.ar
                      : siteContent.labels.focusTitle.en}
                  </h2>
                </div>
                <div className="flex h-12 w-12 animate-float items-center justify-center rounded-2xl border border-silver-300/50 bg-white/10 sm:h-14 sm:w-14">
                  <SiNestjs
                    className="h-6 w-6 text-nest-600 sm:h-7 sm:w-7"
                    aria-label="NestJS"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                {siteContent.whatIDo.cards.slice(0, 2).map((card, index) => (
                  <Reveal key={card.enTitle} delay={0.12 + index * 0.06}>
                    <div className="rounded-2xl border border-white/10 bg-night-700/70 p-3 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                      <p className="text-xs font-semibold text-white">
                        {isArabic ? card.arTitle : card.enTitle}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {(isArabic ? card.arItems : card.enItems).map((item) => {
                          const formattedItem = formatTagLabel(item, isArabic);
                          return (
                            <span
                              key={item}
                              className={`badge px-2 py-0.5 text-[11px]${
                                isArabic && formattedItem.isTechnical ? " force-ltr" : ""
                              }`}
                              dir={isArabic && formattedItem.isTechnical ? "ltr" : undefined}
                            >
                              {formattedItem.text}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StackAndCapabilities isArabic={isArabic} />

      <WorkExperienceTimeline isArabic={isArabic} />
      <ProjectsSection isArabic={isArabic} />


      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/40">
        <p>
          {siteContent.profile.name} ·{" "}
          {isArabic ? siteContent.profile.titleAr : siteContent.profile.title}
        </p>
      </footer>
    </main>
  );
}
