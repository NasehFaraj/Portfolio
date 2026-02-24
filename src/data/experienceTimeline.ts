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
  media?: TimelineMediaItem[];
  links?: {
    label: string;
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
      ar: "عن بعد"
    },
    dateRange: {
      start: "2025-02",
      end: "present",
      display: {
        en: "Feb 2025 – Present",
        ar: "Feb 2025 – Present"
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
        "Developed backend services for a multi-role system (Admin, Seller, Customer, Driver) using NestJS and TypeScript.",
        "Designed and implemented relational data models and workflows using PostgreSQL and TypeORM (advanced entity relations).",
        "Applied OOP and clean architecture patterns to keep modules testable and maintainable, and added Jest tests for critical flows.",
        "Prepared production-ready deployments on Linux VPS using Docker and Docker Compose, with environment separation and secure exposure for public APIs and private databases."
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
      ar: "Arab Private University for Science and Technology (AUST)"
    },
    location: {
      en: "Syria",
      ar: "Syria"
    },
    dateRange: {
      start: "2025-10",
      end: "present",
      display: {
        en: "Oct 2025 – Present",
        ar: "Oct 2025 – Present"
      }
    },
    bullets: {
      en: [
        "Taught Programming Fundamentals in C++ for first-year students (lectures + practice).",
        "Delivered hands-on backend development labs for fifth-year students (Node.js/Express, MVC, database integration)."
      ],
      ar: [
        "Taught Programming Fundamentals in C++ for first-year students (lectures + practice).",
        "Delivered hands-on backend development labs for fifth-year students (Node.js/Express, MVC, database integration)."
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
      ar: "AUST ICPC Team"
    },
    location: {
      en: "Syria",
      ar: "Syria"
    },
    dateRange: {
      start: "2023-03",
      end: "2025-10",
      display: {
        en: "Mar 2023 – Oct 2025",
        ar: "Mar 2023 – Oct 2025"
      }
    },
    bullets: {
      en: [
        "Coached ICPC team students in algorithms, data structures, and contest problem-solving, and prepared training sessions and practice sets."
      ],
      ar: [
        "Coached ICPC team students in algorithms, data structures, and contest problem-solving, and prepared training sessions and practice sets."
      ]
    },
    tags: {
      en: ["Volunteer", "ICPC Coach", "Algorithms", "Data Structures"],
      ar: ["تطوعي", "ICPC Coach", "Algorithms", "Data Structures"]
    },
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
      ar: "ICPC / Contest Achievement"
    },
    location: {
      en: "Syria",
      ar: "Syria"
    },
    dateRange: {
      start: "2021-01",
      end: "2025-09",
      display: {
        en: "Jan 2021 – Sep 2025",
        ar: "Jan 2021 – Sep 2025"
      }
    },
    bullets: {
      en: [
        "ICPC Regional Finals qualification with sustained contest performance.",
        "Solved 2,000+ competitive programming problems in C++."
      ],
      ar: [
        "ICPC Regional Finals qualification with sustained contest performance.",
        "Solved 2,000+ competitive programming problems in C++."
      ]
    },
    tags: {
      en: ["ICPC Regional Finalist", "2,000+ Problems", "C++"],
      ar: ["ICPC Regional Finalist", "2,000+ Problems", "C++"]
    },
    media: [
      {
        src: "/proof/cp-1.png",
        alt: {
          en: "Contest proof",
          ar: "توثيق مسابقة"
        },
        caption: { en: "ICPC Regional 2023", ar: "ICPC Regional 2023" }
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
      { label: "Codeforces", href: "https://codeforces.com/profile/Savitar-" },
      { label: "ICPC/ACPC Post", href: "https://www.facebook.com/share/1BkEUbPYND/" }
    ]
  }
];
