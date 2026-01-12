"use client";

// TODO: verify usage
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/siteContent";

const LANG_KEY = "portfolio:lang";

type Language = "en" | "ar";

export default function TeachingPage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANG_KEY, language);
  }, [language]);

  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-arabic" : ""}>
      <header
        className="sticky top-0 z-50 border-b border-white/5 bg-night-950/80 backdrop-blur"
        dir="ltr"
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-6">
          <Link className="glass-button" href="/">
            {isArabic
              ? siteContent.teachingPage.backLabel.ar
              : siteContent.teachingPage.backLabel.en}
          </Link>
          <div className="ml-auto">
            <button
              type="button"
              className="glass-button"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-70" />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="section-card p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {isArabic
                ? siteContent.teachingPage.kicker.ar
                : siteContent.teachingPage.kicker.en}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white">
              {isArabic ? siteContent.teaching.arTitle : siteContent.teaching.enTitle}
            </h1>
            <p className="mt-4 text-sm text-white/70">
              {isArabic ? siteContent.teaching.arBody : siteContent.teaching.enBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteContent.teaching.links.map((link) => (
                <a
                  key={link.href}
                  className="primary-button"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
