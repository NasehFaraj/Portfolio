import { otherProjects } from "@/data/otherProjects";

export const siteContent = {
  profile: {
    name: "Naseh Faraj",
    nameAr: "ناصح فرج",
    title: "Software Engineer (Backend-focused) • NestJS",
    titleAr: "مهندس برمجيات (يركز على الخلفية) • NestJS"
  },
  labels: {
    focusAreas: { en: "Focus Areas", ar: "مجالات التركيز" },
    focusTitle: {
      en: "Backend Engineering & Infrastructure",
      ar: "هندسة الخلفية والبنية التحتية"
    },
    selectWork: { en: "Work Experience", ar: "الخبرة العملية" },
    deepDives: { en: "Projects", ar: "المشاريع" },
    caseStudiesTitle: { en: "Projects", ar: "المشاريع" }
  },
  nav: {
    en: [
      { label: "Home", href: "#hero" },
      { label: "Stack & Capabilities", href: "#stack" },
      { label: "Highlights", href: "#highlights" },
      { label: "Work Experience", href: "#experience" },
      { label: "Projects", href: "#other-projects" }
    ],
    ar: [
      { label: "الرئيسية", href: "#hero" },
      { label: "التقنيات", href: "#stack" },
      { label: "الإنجازات", href: "#highlights" },
      { label: "الخبرة العملية", href: "#experience" },
      { label: "المشاريع", href: "#other-projects" }
    ]
  },
  homeHighlights: {
    chipLabel: { en: "HIGHLIGHTS", ar: "الإنجازات" },
    title: { en: "HIGHLIGHTS", ar: "الإنجازات" },
    subtitle: {
      en: "Selected milestones and contributions that reflect impact.",
      ar: "محطات ومساهمات مختارة تعكس الأثر."
    },
    categories: [
      {
        id: "open-source",
        title: { en: "Open Source", ar: "المصدر المفتوح" },
        summary: {
          en: "Selected open-source contributions. Add new PRs here without touching existing entries.",
          ar: "Selected open-source contributions. Add new PRs here without touching existing entries."
        },
        icon: "code",
        items: [
          {
            id: "nestjs-pr-3390",
            kind: "open_source_pr",
            featured: true,
            orgOrRepo: { en: "NestJS Framework", ar: "NestJS Framework" },
            prNumber: 3390,
            status: { en: "merged", ar: "merged" },
            title: {
              en: "Open Source Contributor | NestJS Framework",
              ar: "Open Source Contributor | NestJS Framework"
            },
            bullets: {
              en: [
                {
                  label: "Contribution",
                  text: "Improved the official NestJS documentation by clarifying the cascading and inheritance behavior of application log levels."
                },
                {
                  label: "Impact",
                  text: "Resolved community confusion (Issue #3306) and streamlined the debugging process for thousands of developers worldwide."
                },
                {
                  label: "Result",
                  text: "Pull Request successfully reviewed and merged by the framework's creator, Kamil Myśliwiec."
                }
              ],
              ar: [
                {
                  label: "Contribution",
                  text: "Improved the official NestJS documentation by clarifying the cascading and inheritance behavior of application log levels."
                },
                {
                  label: "Impact",
                  text: "Resolved community confusion (Issue #3306) and streamlined the debugging process for thousands of developers worldwide."
                },
                {
                  label: "Result",
                  text: "Pull Request successfully reviewed and merged by the framework's creator, Kamil Myśliwiec."
                }
              ]
            },
            link: {
              label: { en: "View Merged PR #3390", ar: "View Merged PR #3390" },
              href: "PUT_REAL_URL_HERE"
            }
          }
        ]
      },
      {
        id: "competitions",
        title: { en: "Competitions", ar: "المسابقات" },
        summary: {
          en: "Competitive programming milestones and achievements from ICPC-style contests.",
          ar: "Competitive programming milestones and achievements from ICPC-style contests."
        },
        icon: "trophy",
        items: [
          {
            id: "icpc-finals",
            kind: "competition",
            featured: false,
            title: {
              en: "ICPC Finalist (Regional Finals)",
              ar: "ICPC Finalist (Regional Finals)"
            },
            tag: { en: "Regional Finals", ar: "Regional Finals" },
            status: { en: "finalist", ar: "finalist" },
            bullets: {
              en: [
                {
                  text: "Reached the ICPC Regional Finals as a competitive programmer."
                },
                {
                  text: "Strong problem-solving skills under time pressure and teamwork-focused contests."
                },
                {
                  text: "Demonstrated mastery in algorithms, data structures, and optimization."
                }
              ],
              ar: [
                {
                  text: "Reached the ICPC Regional Finals as a competitive programmer."
                },
                {
                  text: "Strong problem-solving skills under time pressure and teamwork-focused contests."
                },
                {
                  text: "Demonstrated mastery in algorithms, data structures, and optimization."
                }
              ]
            }
          }
        ]
      }
    ]
  },
  hero: {
    en: {
      subheadline: "Secure APIs • Scalable backends • Clean architecture",
      academicLine:
        "B.Sc. in Information Technology (Informatics Engineering) — academic foundation in CS and systems.",
      supportLine:
        "Infrastructure experience from real projects: Docker, VPS deployments, Nginx, HTTPS, and server hardening.",
      ctaPrimary: "View Experience"
    },
    ar: {
      subheadline: "واجهات آمنة • باك-إند قابل للتوسع • معمارية نظيفة",
      academicLine:
        "بكالوريوس هندسة/تقنية المعلومات (IT) — خلفية أكاديمية في علوم الحاسوب والأنظمة.",
      supportLine:
        "خبرة بنية تحتية من مشاريع حقيقية: Docker، نشر على VPS، Nginx، HTTPS، وتقوية الخوادم.",
      ctaPrimary: "عرض الخبرات"
    }
  },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/NasehFaraj",
      icon: "github"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/naseh-faraj-432b7b233/",
      icon: "linkedin"
    },
    {
      label: "Email",
      href: "mailto:nasehfara@gmail.com",
      icon: "email"
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/qr/EEU6BUBU4IONP1",
      icon: "whatsapp"
    },
    {
      label: "Telegram",
      href: "https://t.me/NasehFaraj",
      icon: "telegram"
    }
  ],
  stackAndCapabilities: {
    title: { en: "Stack & Capabilities", ar: "التقنيات وما أقدّمه" },
    subtitle: {
      en: "The technologies I work with and the backend systems I build.",
      ar: "التقنيات التي أستخدمها ونوع الأنظمة التي أبنيها."
    },
    tech: {
      coreTitle: { en: "Core strengths", ar: "نقاط القوة الأساسية" },
      toolsTitle: { en: "Tools", ar: "أدوات" },
      core: [
        { key: "nestjs", label: { en: "NestJS", ar: "NestJS" }, icon: "SiNestjs" },
        { key: "node", label: { en: "Node.js", ar: "Node.js" }, icon: "SiNodedotjs" },
        { key: "ts", label: { en: "TypeScript", ar: "TypeScript" }, icon: "SiTypescript" },
        { key: "express", label: { en: "Express.js", ar: "Express.js" }, icon: "SiExpress" },
        { key: "mongo", label: { en: "MongoDB", ar: "MongoDB" }, icon: "SiMongodb" },
        { key: "pg", label: { en: "PostgreSQL", ar: "PostgreSQL" }, icon: "SiPostgresql" },
        { key: "mysql", label: { en: "MySQL", ar: "MySQL" }, icon: "SiMysql" }
      ],
      tools: [
        { key: "git", label: { en: "Git/GitHub", ar: "Git/GitHub" }, icon: "SiGithub" },
        { key: "docker", label: { en: "Docker", ar: "Docker" }, icon: "SiDocker" },
        { key: "postman", label: { en: "Postman", ar: "Postman" }, icon: "SiPostman" },
        { key: "linux", label: { en: "Linux/VPS", ar: "Linux/VPS" }, icon: "SiLinux" },
        { key: "nginx", label: { en: "Nginx", ar: "Nginx" }, icon: "SiNginx" }
      ]
    },
    capabilities: [
      {
        id: "backend",
        icon: "Server",
        title: { en: "Backend APIs & Architecture", ar: "واجهات خلفية ومعمارية" },
        bullets: {
          en: [
            "REST APIs with clean modular design (NestJS/Node.js).",
            "DTO validation, error handling, and scalable project structure.",
            "Integration-ready APIs for mobile and web clients."
          ],
          ar: [
            "واجهات REST ببنية Modules منظمة (NestJS/Node.js).",
            "تحقق DTO، معالجة أخطاء، وبنية قابلة للتوسع.",
            "واجهات جاهزة للدمج مع تطبيقات الموبايل والويب."
          ]
        },
        tags: ["NestJS", "Node.js", "TypeScript"]
      },
      {
        id: "security",
        icon: "ShieldCheck",
        title: { en: "Auth & Security", ar: "المصادقة والأمان" },
        bullets: {
          en: [
            "JWT-based auth with role-based access control (RBAC).",
            "Input validation and defensive practices.",
            "Audit mindset for sensitive operations."
          ],
          ar: [
            "مصادقة JWT مع صلاحيات RBAC.",
            "تحقق مدخلات وممارسات دفاعية.",
            "تفكير تدقيقي للعمليات الحساسة."
          ]
        },
        tags: ["JWT", "RBAC", "Validation"]
      },
      {
        id: "data",
        icon: "Database",
        title: { en: "Data & Persistence", ar: "البيانات والتخزين" },
        bullets: {
          en: [
            "Schema design for PostgreSQL and MongoDB.",
            "Data integrity and relationship modeling.",
            "Practical query performance considerations."
          ],
          ar: [
            "تصميم مخططات PostgreSQL وMongoDB.",
            "نمذجة العلاقات وضمان تكامل البيانات.",
            "اعتبارات عملية لأداء الاستعلامات."
          ]
        },
        tags: ["PostgreSQL", "MongoDB", "MySQL"]
      },
      {
        id: "infra",
        icon: "Rocket",
        title: {
          en: "Deployment & Infrastructure (experience)",
          ar: "النشر والبنية التحتية (خبرة)"
        },
        bullets: {
          en: [
            "Dockerized deployments on VPS with predictable releases.",
            "Nginx + HTTPS, DNS/ports/firewall basics.",
            "Server hardening experience (not a full-time DevOps role)."
          ],
          ar: [
            "نشر عبر Docker على VPS بإصدارات مستقرة.",
            "Nginx + HTTPS مع أساسيات DNS/Ports/Firewall.",
            "خبرة بتقوية الخوادم (ولست DevOps بدوام كامل)."
          ]
        },
        tags: ["Docker", "Nginx", "VPS"]
      }
    ]
  },
  highlights: {
    title: { en: "Other Highlights", ar: "إنجازات إضافية" },
    subtitle: {
      en: "Academic, coaching, and contest highlights.",
      ar: "ملخص إنجازات تعليمية وتدريبية وتنافسية."
    },
    blocks: [
      {
        id: "university",
        icon: "GraduationCap",
        title: { en: "University Teaching", ar: "التدريس الجامعي" },
        bullets: {
          en: [
            "Taught programming fundamentals (C++) and backend foundations (Node.js, Express, MVC, REST APIs) as a practical instructor at the Faculty of Informatics Engineering, Arab Private University for Science and Technology (AUST) — Hama.",
            "Prepared lab sessions and practical exercises, quizzes, grading rubrics, and provided code reviews to help students improve."
          ],
          ar: [
            "درّست أساسيات البرمجة (C++) وأساسيات تطوير الباك-إند (Node.js، Express، MVC، REST APIs) كمدرّس عملي في كلية الهندسة المعلوماتية في الجامعة العربية الخاصة للعلوم والتكنولوجيا (AUST) — حماة.",
            "أعددت جلسات مخبرية وتمارين تطبيقية، واختبارات قصيرة، ومعايير تصحيح (Rubrics)، وقدّمت مراجعات للكود لمساعدة الطلاب على تحسين مستواهم."
          ]
        }
      },
      {
        id: "coaching",
        icon: "Users",
        title: { en: "Coaching & Training", ar: "التدريب والكوتشنغ" },
        bullets: {
          en: [
            "Coached students in problem solving and algorithmic thinking.",
            "Volunteer training certificates and community mentoring experience."
          ],
          ar: [
            "تدريب طلاب على حل المسائل والتفكير الخوارزمي.",
            "خبرة تدريب تطوعي وشهادات مرتبطة بالتدريب والإرشاد."
          ]
        },
        badge: "ICPC Coach",
        media: {
          images: [
            {
              src: "/proof/coaching-1",
              alt: { en: "Coaching session proof", ar: "توثيق جلسة تدريب" }
            },
            {
              src: "/proof/coaching-2",
              alt: { en: "Training workshop photo", ar: "صورة ورشة تدريب" }
            }
          ]
        }
      },
      {
        id: "cp",
        icon: "Trophy",
        title: { en: "Competitive Programming", ar: "البرمجة التنافسية" },
        badge: "ICPC Regional Finalist",
        bullets: {
          en: [
            "ICPC Regional Finalist (ACPC) — qualified to the regional finals with my team.",
            "Codeforces: Expert."
          ],
          ar: [
            "متأهل إلى نهائي الإقليمي ICPC (ACPC) — وصول للنهائيات مع الفريق.",
            "Codeforces: Expert."
          ]
        },
        media: {
          images: [
            {
              src: "/proof/cp-1",
              alt: { en: "Contest proof", ar: "توثيق مسابقة" }
            },
            {
              src: "/proof/cp-2",
              alt: { en: "ICPC/ACPC evidence", ar: "دليل ICPC/ACPC" }
            }
          ]
        },
        links: [
          { label: "Codeforces", href: "https://codeforces.com/profile/Savitar-" },
          {
            label: "ICPC/ACPC Post",
            href: "https://www.facebook.com/share/1BkEUbPYND/"
          }
        ]
      }
    ]
  },
  whatIDo: {
    enTitle: "What I Do",
    arTitle: "ما الذي أقدمه",
    cards: [
      {
        enTitle: "Backend Platforms",
        arTitle: "منصات الخلفية",
        enItems: ["Node.js", "NestJS", "Express.js"],
        arItems: ["Node.js", "NestJS", "Express.js"]
      },
      {
        enTitle: "Auth & Security",
        arTitle: "التوثيق والأمان",
        enItems: ["JWT", "RBAC", "Validation", "Audit mindset"],
        arItems: ["JWT", "RBAC", "التحقق", "منهجية تدقيق"]
      },
      {
        enTitle: "Databases",
        arTitle: "قواعد البيانات",
        enItems: ["PostgreSQL", "MongoDB", "MySQL"],
        arItems: ["PostgreSQL", "MongoDB", "MySQL"]
      },
      {
        enTitle: "Infrastructure & Deployment",
        arTitle: "البنية التحتية والنشر",
        enItems: [
          "Infrastructure & deployment",
          "Dockerized deployments",
          "VPS setup & server hardening",
          "Nginx + HTTPS",
          "DNS / ports / firewall"
        ],
        arItems: [
          "خبرة في البنية التحتية والنشر",
          "نشر عبر Docker",
          "إعداد VPS وتقوية الخوادم",
          "Nginx + HTTPS",
          "DNS / منافذ / جدار ناري"
        ]
      }
    ]
  },
  experience: {
    enTitle: "Work Experience",
    arTitle: "الخبرة العملية",
    items: [
      {
        id: "trending",
        enTitle: "Trending — E-commerce & Logistics",
        arTitle: "Trending — منصة تجارة إلكترونية ولوجستيات",
        role: { en: "Backend Engineer", ar: "مهندس Back-End" },
        duration: { en: "Feb 2025 - Present (1 year)", ar: "فبراير 2025 - حتى الآن (سنة واحدة)" },
        logo: "placeholder",
        oneLiner:
          "Production backend ownership for a multi-role platform (customer/merchant/driver/admin), focused on backend architecture, RBAC APIs, and order/delivery workflows.",
        highlights: [
          "Designed a modular NestJS + PostgreSQL backend serving 4 role-based apps with strict RBAC",
          "Implemented order lifecycle + status history (audit-friendly) and delivery confirmation readiness (OTP roadmap)",
          "Prepared deployment-ready backend infrastructure (Docker + Nginx on VPS) and integration-friendly APIs for mobile clients"
        ],
        arOneLiner:
          "نظام متعدد التطبيقات لأربعة أدوار (عميل/تاجر/سائق/إدارة)—مساهمتي بناء باك-إند NestJS: بنية Modular، صلاحيات RBAC، وسير الطلبات والتوصيل.",
        arHighlights: [
          "تصميم باك-إند NestJS + PostgreSQL ببنية Modules واضحة يخدم 4 تطبيقات حسب الدور مع RBAC صارم",
          "تنفيذ دورة الطلب وسجل حالات قابل للتدقيق مع جاهزية لتأكيد التسليم (OTP لاحقًا)",
          "تجهيز بنية نشر للباك-إند (Docker + Nginx على VPS) وواجهات مناسبة لتكامل تطبيقات الموبايل"
        ],
        stack: ["NestJS", "PostgreSQL", "Docker", "Nginx", "VPS"],
        liveUrl: "",
        caseStudyHref: "/case-studies/trending",
        caseStudyLabel: "View role details",
        liveLabel: "Live site",
        privateCode: false
      }
    ]
  },
  otherProjects,
  teaching: {
    enTitle: "Teaching & Competitive Programming",
    arTitle: "التعليم والبرمجة التنافسية",
    enBody:
      "University instructor for practical CS courses and ICPC-oriented competitive programming coach.",
    arBody:
      "محاضر جامعي للمقررات العملية ومدرب برمجة تنافسية موجه لمسار ICPC.",
    links: [
      {
        label: "Codeforces",
        href: "https://codeforces.com/profile/Savitar-"
      },
      {
        label: "ICPC proof",
        href: "https://www.facebook.com/share/1BkEUbPYND/"
      }
    ],
    teaser: null
  },
  teachingPage: {
    backLabel: { en: "Back to portfolio", ar: "العودة إلى الصفحة الرئيسية" },
    kicker: { en: "Teaching & Competitive Programming", ar: "التعليم والبرمجة التنافسية" }
  },
};

export type SiteContent = typeof siteContent;
