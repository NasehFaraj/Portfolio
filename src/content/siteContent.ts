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
    selectWork: { en: "Select work", ar: "أعمال مختارة" },
    deepDives: { en: "Other work", ar: "أعمال أخرى" },
    caseStudiesTitle: { en: "Other Projects", ar: "مشاريع أخرى" }
  },
  nav: {
    en: [
      { label: "Home", href: "#hero" },
      { label: "Stack & Capabilities", href: "#stack" },
      { label: "Projects", href: "#projects" },
      { label: "Other Projects", href: "#other-projects" },
      { label: "Other Highlights", href: "#highlights" }
    ],
    ar: [
      { label: "الرئيسية", href: "#hero" },
      { label: "التقنيات", href: "#stack" },
      { label: "المشاريع", href: "#projects" },
      { label: "مشاريع أخرى", href: "#other-projects" },
      { label: "إنجازات إضافية", href: "#highlights" }
    ]
  },
  hero: {
    en: {
      subheadline: "Secure APIs • Scalable backends • Clean architecture",
      academicLine:
        "B.Sc. in Information Technology (Informatics Engineering) — academic foundation in CS and systems.",
      supportLine:
        "Infrastructure experience from real projects: Docker, VPS deployments, Nginx, HTTPS, and server hardening.",
      ctaPrimary: "View Projects"
    },
    ar: {
      subheadline: "واجهات آمنة • باك-إند قابل للتوسع • معمارية نظيفة",
      academicLine:
        "بكالوريوس هندسة/تقنية المعلومات (IT) — خلفية أكاديمية في علوم الحاسوب والأنظمة.",
      supportLine:
        "خبرة بنية تحتية من مشاريع حقيقية: Docker، نشر على VPS، Nginx، HTTPS، وتقوية الخوادم.",
      ctaPrimary: "شاهد المشاريع"
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
            "Taught programming fundamentals (C++) and backend foundations (Node.js, Express, MVC, REST APIs) as a practical instructor at the Faculty of Informatics Engineering, Arab Private University for Science and Technology (APUST) — Hama, Syria.",
            "Prepared lab sessions and practical exercises, quizzes, grading rubrics, and provided code reviews to help students improve."
          ],
          ar: [
            "درّست أساسيات البرمجة (C++) وأساسيات تطوير الباك-إند (Node.js، Express، MVC، REST APIs) كمدرّس عملي في كلية الهندسة المعلوماتية في الجامعة العربية الخاصة للعلوم والتكنولوجيا (APUST) — حماة، REMOVED.",
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
  projects: {
    enTitle: "Featured Projects",
    arTitle: "المشاريع المميزة",
    items: [
      {
        id: "REMOVED",
        enTitle: "REMOVED REMOVED REMOVED (REMOVED حرية REMOVED)",
        arTitle: "REMOVED REMOVED REMOVED (REMOVED حرية REMOVED)",
        logo: "/assets/REMOVED-logo.png",
        oneLiner:
          "A full platform for documenting sensitive historical records—my contribution: the backend moderation workflow, data modeling, and production deployment hardening.",
        arOneLiner:
          "منصة كاملة لتوثيق سجلات تاريخية حساسة—مساهمتي كانت بناء الباك-إند: سير المراجعة، نمذجة البيانات، والنشر والتقوية على خادم VPS.",
        highlights: [
          "Owned the backend workflow: public submissions \u2192 review queue \u2192 approve/reject \u2192 automated update to public records",
          "Designed MongoDB schemas for REMOVED, massacres, comments, and change requests with auditable history",
          "Deployed and secured the backend stack on a Linux VPS (Docker + Nginx + HTTPS) with defensive hardening practices"
        ],
        arHighlights: [
          "تنفيذ باك-إند سير العمل: مساهمات الجمهور \u2192 قائمة مراجعة \u2192 قبول/رفض \u2192 تحديث تلقائي للسجلات العامة",
          "تصميم نماذج MongoDB للREMOVED والمجازر والتعليقات وطلبات التعديل مع سجل تغييرات قابل للتدقيق",
          "نشر وتأمين الباك-إند على Linux VPS (Docker + Nginx + HTTPS) مع ممارسات تقوية دفاعية"
        ],
        stack: ["Node.js API", "MongoDB", "Docker", "Nginx", "VPS/HTTPS"],
        liveUrl: "https://REMOVED-of-REMOVED-REMOVED.com/",
        caseStudyHref: "/case-studies/REMOVED-REMOVED-REMOVED",
        caseStudyLabel: "Read case study",
        liveLabel: "Live site",
        privateCode: true
      },
      {
        id: "trendy",
        enTitle: "trendy — E-commerce & Logistics Platform",
        arTitle: "trendy — منصة تجارة إلكترونية ولوجستيات",
        logo: "placeholder",
        oneLiner:
          "A multi-app system spanning 4 roles (customer/merchant/driver/admin)—my contribution: the NestJS backend architecture, RBAC APIs, and order/delivery workflows.",
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
        caseStudyHref: "/case-studies/trendy",
        caseStudyLabel: "Read case study",
        liveLabel: "Live site",
        privateCode: true
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
