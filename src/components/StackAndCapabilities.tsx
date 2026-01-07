import {
  Database,
  Rocket,
  Server,
  ShieldCheck
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiTypescript
} from "react-icons/si";
import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { formatTagLabel } from "@/lib/formatTagLabel";
import Reveal from "@/components/motion/Reveal";

type StackAndCapabilitiesProps = {
  isArabic: boolean;
};

const techIconMap = {
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiNginx
} as const;

const capabilityIconMap = {
  Server,
  ShieldCheck,
  Database,
  Rocket
} as const;

export default function StackAndCapabilities({ isArabic }: StackAndCapabilitiesProps) {
  const content = siteContent.stackAndCapabilities;
  const tech = content.tech;

  return (
    <Section id="stack" variant="light">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {isArabic ? content.title.ar : content.title.en}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {isArabic ? content.subtitle.ar : content.subtitle.en}
            </p>
          </div>
        </Reveal>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,260px),1fr] sm:gap-8">
          <aside className="self-start w-full lg:sticky lg:top-24 lg:max-w-[260px]">
            <div className="flex flex-col gap-4">
              <Reveal>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {isArabic ? tech.coreTitle.ar : tech.coreTitle.en}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.core.map((item) => {
                      const Icon = techIconMap[item.icon as keyof typeof techIconMap];
                      const labelText = isArabic ? item.label.ar : item.label.en;
                      const formattedLabel = formatTagLabel(labelText, isArabic);
                      return (
                        <div
                          key={item.key}
                          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                        >
                          {Icon ? <Icon className="h-4 w-4 text-nest-600" /> : null}
                          <span
                            className={isArabic && formattedLabel.isTechnical ? "force-ltr" : undefined}
                            dir={isArabic && formattedLabel.isTechnical ? "ltr" : undefined}
                          >
                            {formattedLabel.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {isArabic ? tech.toolsTitle.ar : tech.toolsTitle.en}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.tools.map((item) => {
                      const Icon = techIconMap[item.icon as keyof typeof techIconMap];
                      const labelText = isArabic ? item.label.ar : item.label.en;
                      const formattedLabel = formatTagLabel(labelText, isArabic);
                      return (
                        <div
                          key={item.key}
                          className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                        >
                          {Icon ? <Icon className="h-4 w-4 text-nest-600" /> : null}
                          <span
                            className={isArabic && formattedLabel.isTechnical ? "force-ltr" : undefined}
                            dir={isArabic && formattedLabel.isTechnical ? "ltr" : undefined}
                          >
                            {formattedLabel.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="min-w-0 space-y-6">
            {content.capabilities.map((capability, index) => {
              const Icon =
                capabilityIconMap[
                  capability.icon as keyof typeof capabilityIconMap
                ];
              return (
                <Reveal key={capability.id} delay={index * 0.06}>
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-rose-200 bg-white/80 p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-nest-600" aria-hidden />
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                            {isArabic ? capability.title.ar : capability.title.en}
                          </h3>
                          <ul
                            className={`mt-3 space-y-2 text-slate-700 leading-relaxed list-disc ${
                              isArabic ? "pr-5 text-right" : "pl-5"
                            }`}
                            dir={isArabic ? "rtl" : "ltr"}
                          >
                            {(isArabic
                              ? capability.bullets.ar
                              : capability.bullets.en
                            ).map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                          {capability.tags?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {capability.tags.slice(0, 3).map((tag) => {
                                const formattedTag = formatTagLabel(tag, isArabic);
                                return (
                                  <span
                                    key={tag}
                                    className={`inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700${
                                      isArabic && formattedTag.isTechnical ? " force-ltr" : ""
                                    }`}
                                    dir={isArabic && formattedTag.isTechnical ? "ltr" : undefined}
                                  >
                                    {formattedTag.text}
                                  </span>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {index < content.capabilities.length - 1 ? (
                      <div className="h-px bg-slate-200/70" />
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
