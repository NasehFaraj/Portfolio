export type TimelineItemType = "work" | "teaching" | "coaching" | "achievement";

export type TimelineMediaItem = {
  src: string;
  alt: {
    en: string;
    ar: string;
  };
  caption?: {
    en: string;
    ar: string;
  };
};

export type TimelineEntry = {
  id: string;
  type: TimelineItemType;
  title: {
    en: string;
    ar: string;
  };
  organization: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  dateRange: {
    start: string;
    end: string;
    display: {
      en: string;
      ar: string;
    };
  };
  bullets: {
    en: string[];
    ar: string[];
  };
  tags: {
    en: string[];
    ar: string[];
  };
  detailsHref?: string;
  detailsLabel?: {
    en: string;
    ar: string;
  };
  mediaLabel?: {
    en: string;
    ar: string;
  };
  media?: TimelineMediaItem[];
  links?: {
    label: {
      en: string;
      ar: string;
    };
    href: string;
  }[];
};

export const experienceTimeline: TimelineEntry[] = [
  {
    id: "trending-work",
    type: "work",
    title: {
      en: "Backend Engineer (Full-time)",
      ar: "مهندس Back-End (دوام كامل)"
    },
    organization: {
      en: "Trending (E-commerce & Logistics)",
      ar: "Trending (التجارة الإلكترونية واللوجستيات)"
    },
    location: {
      en: "Remote",
      ar: "عن بُعد"
    },
    dateRange: {
      start: "2025-02",
      end: "present",
      display: {
        en: "Feb 2025 – Present",
        ar: "فبراير 2025 – حتى الآن"
      }
    },
    bullets: {
      en: [
        "Developed backend services for a multi-role system (Admin, Seller, Customer, Driver) using NestJS and TypeScript.",
        "Designed and implemented relational data models and workflows using PostgreSQL and TypeORM (advanced entity relations).",
        "Applied OOP and clean architecture patterns to keep modules testable and maintainable, and added Jest tests for critical flows.",
        "Prepared production-ready deployments on Linux VPS using Docker and Docker Compose, with environment separation and secure exposure for public APIs and private databases."
      ],
      ar: [
        "طوّرت خدمات باك-إند لنظام متعدد الأدوار (مدير، بائع، عميل، سائق) باستخدام NestJS وTypeScript.",
        "صمّمت ونفّذت نماذج بيانات علائقية ومسارات عمل باستخدام PostgreSQL وTypeORM (علاقات كيانات متقدمة).",
        "طبّقت مبادئ OOP ومعمارية نظيفة للحفاظ على قابلية الاختبار والصيانة، وأضفت اختبارات Jest للتدفقات الحرجة.",
        "جهّزت عمليات نشر إنتاجية على Linux VPS باستخدام Docker وDocker Compose مع فصل البيئات وتأمين تعريض الـ APIs العامة وقواعد البيانات الخاصة."
      ]
    },
    tags: {
      en: ["Backend Engineer", "NestJS", "PostgreSQL", "TypeORM", "Docker"],
      ar: ["مهندس Back-End", "NestJS", "PostgreSQL", "TypeORM", "Docker"]
    },
    detailsHref: "/case-studies/trending",
    detailsLabel: {
      en: "View role details",
      ar: "عرض تفاصيل الدور"
    }
  },
  {
    id: "lecturer-aust",
    type: "teaching",
    title: {
      en: "Lecturer (Part-time)",
      ar: "محاضر (دوام جزئي)"
    },
    organization: {
      en: "Arab Private University for Science and Technology (AUST)",
      ar: "الجامعة العربية الخاصة للعلوم والتكنولوجيا (AUST)"
    },
    location: {
      en: "Syria",
      ar: "سوريا"
    },
    dateRange: {
      start: "2025-10",
      end: "present",
      display: {
        en: "Oct 2025 – Present",
        ar: "أكتوبر 2025 – حتى الآن"
      }
    },
    bullets: {
      en: [
        "Taught Programming Fundamentals in C++ for first-year students (lectures + practice).",
        "Delivered hands-on backend development labs for fifth-year students (Node.js/Express, MVC, database integration)."
      ],
      ar: [
        "قمت بتدريس أساسيات البرمجة بلغة ++C لطلاب السنة الأولى (محاضرات وتطبيق عملي).",
        "قدّمت مخابر عملية لتطوير الباك-إند لطلاب السنة الخامسة (Node.js/Express وMVC وتكامل قواعد البيانات)."
      ]
    },
    tags: {
      en: ["Part-time", "AUST", "C++", "Node.js/Express"],
      ar: ["دوام جزئي", "AUST", "C++", "Node.js/Express"]
    }
  },
  {
    id: "coach-icpc",
    type: "coaching",
    title: {
      en: "Competitive Programming Coach (Volunteer)",
      ar: "مدرب برمجة تنافسية (تطوعي)"
    },
    organization: {
      en: "AUST ICPC Team",
      ar: "فريق AUST ICPC"
    },
    location: {
      en: "Syria",
      ar: "سوريا"
    },
    dateRange: {
      start: "2023-03",
      end: "2025-10",
      display: {
        en: "Mar 2023 – Oct 2025",
        ar: "مارس 2023 – أكتوبر 2025"
      }
    },
    bullets: {
      en: [
        "Coached ICPC team students in algorithms, data structures, and contest problem-solving, and prepared training sessions and practice sets."
      ],
      ar: [
        "درّبت طلاب فريق ICPC على الخوارزميات وبنى المعطيات وحل مسائل المسابقات، وأعددت جلسات تدريب ومجموعات تمارين."
      ]
    },
    tags: {
      en: ["Volunteer", "ICPC Coach", "Algorithms", "Data Structures"],
      ar: ["تطوعي", "مدرب ICPC", "خوارزميات", "بنى معطيات"]
    },
    mediaLabel: { en: "Media", ar: "الوسائط" },
    media: [
      {
        src: "/proof/coaching-1.jpg",
        alt: {
          en: "Coaching session proof",
          ar: "توثيق جلسة تدريب"
        },
        caption: { en: "SPUsCPC 2025", ar: "SPUsCPC 2025" }
      },
      {
        src: "/proof/coaching-2.jpg",
        alt: {
          en: "Training workshop photo",
          ar: "صورة ورشة تدريب"
        },
        caption: { en: "SCPC 2025", ar: "SCPC 2025" }
      }
    ]
  },
  {
    id: "icpc-achievement",
    type: "achievement",
    title: {
      en: "Competitive Programming",
      ar: "البرمجة التنافسية"
    },
    organization: {
      en: "ICPC / Contest Achievement",
      ar: "إنجاز تنافسي / ICPC"
    },
    location: {
      en: "Syria",
      ar: "سوريا"
    },
    dateRange: {
      start: "2021-01",
      end: "2025-09",
      display: {
        en: "Jan 2021 – Sep 2025",
        ar: "يناير 2021 – سبتمبر 2025"
      }
    },
    bullets: {
      en: [
        "ICPC Regional Finals qualification with sustained contest performance.",
        "Solved 2,000+ competitive programming problems in C++."
      ],
      ar: [
        "تأهلت إلى نهائيات ICPC الإقليمية مع أداء تنافسي مستمر.",
        "حللت أكثر من 2000 مسألة برمجة تنافسية بلغة ++C."
      ]
    },
    tags: {
      en: ["ICPC Regional Finalist", "2,000+ Problems", "C++"],
      ar: ["متأهل لنهائيات ICPC الإقليمية", "2000+ مسألة", "C++"]
    },
    mediaLabel: { en: "Media", ar: "الوسائط" },
    media: [
      {
        src: "/proof/cp-1.png",
        alt: {
          en: "Contest proof",
          ar: "توثيق مسابقة"
        },
        caption: { en: "ICPC Regional 2023", ar: "ICPC الإقليمي 2023" }
      },
      {
        src: "/proof/cp-2.jpg",
        alt: {
          en: "ICPC/ACPC evidence",
          ar: "دليل ICPC/ACPC"
        },
        caption: { en: "SPUsCPC 2023", ar: "SPUsCPC 2023" }
      }
    ],
    links: [
      {
        label: { en: "Codeforces", ar: "Codeforces" },
        href: "https://codeforces.com/profile/Savitar-"
      },
      {
        label: { en: "ICPC/ACPC Post", ar: "منشور ICPC/ACPC" },
        href: "https://www.facebook.com/share/1BkEUbPYND/"
      }
    ]
  }
];
