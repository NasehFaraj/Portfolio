import packageJson from "../../package.json";

export type CaseStudyChallenge = {
  challenge: string;
  fix: string;
  outcome: string;
};

export type CaseStudyI18n = {
  title: string;
  heroKicker: string;
  backLabel: string;
  jumpToLabel: string;
  tocTitle: string;
  toc: {
    overview: string;
    myRole: string;
    stack: string;
    implementation: string;
    deployment: string;
    challenges: string;
    apiHighlights?: string;
    ordersLogistics?: string;
    driverTasks?: string;
    notifications?: string;
    adminAnalytics?: string;
    supportingServices?: string;
  };
  chips: {
    roleLabel: string;
    roleValue: string;
    statusLabel: string;
    statusValue: string;
    repoLabel: string;
    repoValue: string;
    liveLabel: string;
  };
  challengeLabels: {
    challenge: string;
    fix: string;
    outcome: string;
  };
  heroSummary: string;
  heroBullets: string[];
  heroStackLine: string;
  overview: string[];
  myRole: string[];
  stack: string[];
  implementation: string[];
  deployment: string[];
  challenges: CaseStudyChallenge[];
  apiHighlightLabels?: {
    auth: string;
    catalog: string;
    shopping: string;
  };
  apiHighlights?: {
    auth: string[];
    catalog: string[];
    shopping: string[];
  };
  ordersLogistics?: string[];
  driverTasks?: string[];
  notifications?: string[];
  adminAnalytics?: string[];
  supportingServices?: string[];
};

export type CaseStudyCardCopy = {
  title: string;
  summary: string;
  bullets: string[];
  stackLine: string;
  readLabel: string;
  liveLabel: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  card: {
    copy: {
      en: CaseStudyCardCopy;
      ar: CaseStudyCardCopy;
    };
    liveUrl?: string;
  };
  i18n: {
    en: CaseStudyI18n;
    ar: CaseStudyI18n;
  };
};

const stackLabels = [
  { key: "next", label: "Next.js" },
  { key: "react", label: "React" },
  { key: "react-dom", label: "React DOM" },
  { key: "typescript", label: "TypeScript" },
  { key: "tailwindcss", label: "Tailwind CSS" },
  { key: "framer-motion", label: "Framer Motion" }
];

const getStackItems = () => {
  const deps = (packageJson.dependencies ?? {}) as Record<string, string>;
  const devDeps = (packageJson.devDependencies ?? {}) as Record<string, string>;
  return stackLabels
    .filter((item) => Boolean(deps[item.key] || devDeps[item.key]))
    .map((item) => item.label);
};

const buildStackLine = (label = "Stack") => {
  const items = getStackItems();
  return items.length ? `${label}: ${items.join(" • ")}` : `${label}: Unspecified`;
};

const verifiedStackItems = () => {
  const items = getStackItems();
  return items.length ? items : ["Unverified stack items pending."];
};

const REMOVEDSummary =
  "A production express + MongoDB backend for a documentation/archive platform, with secure auth and media uploads.";

const REMOVEDBullets = [
  "express (TypeScript) backend with jsonwebtoken auth, password hashing, and security middleware.",
  "MongoDB modeling with mongoose + change-safe patterns and predictable IDs (mongoose-sequence).",
  "Media uploads using multer with image processing via sharp."
];

const REMOVEDStackLine =
  "Stack: express • TypeScript • MongoDB/mongoose • mongoose-sequence • jsonwebtoken • bcrypt • helmet • cors • dotenv • morgan • multer • sharp";

const REMOVEDStackLineAr =
  "التقنيات: express • TypeScript • MongoDB/mongoose • mongoose-sequence • jsonwebtoken • bcrypt • helmet • cors • dotenv • morgan • multer • sharp";

const trendyStackLine =
  "Stack: NestJS • PostgreSQL • TypeORM • JWT • Cloudinary • Firebase • Docker";

const trendyStackLineAr =
  "التقنيات: NestJS • PostgreSQL • TypeORM • JWT • Cloudinary • Firebase • Docker";

const REMOVEDCardCopy = {
  en: {
    title: "REMOVED REMOVED REMOVED",
    summary: REMOVEDSummary,
    bullets: REMOVEDBullets,
    stackLine: REMOVEDStackLine,
    readLabel: "Read case study",
    liveLabel: "Live product"
  },
  ar: {
    title: "REMOVED حرية REMOVED",
    summary:
      "باك-إند production مبني بـ Express + MongoDB لمنصة توثيق/أرشفة، مع مصادقة آمنة ورفع وسائط.",
    bullets: [
      "باك-إند Express (TypeScript) مع مصادقة jsonwebtoken، تشفير كلمات المرور عبر bcrypt، وطبقة حماية middleware.",
      "نمذجة MongoDB باستخدام mongoose مع أنماط أمان للتعديل ومعرّفات متوقعة عبر mongoose-sequence.",
      "رفع الوسائط عبر multer مع معالجة الصور عبر sharp."
    ],
    stackLine: REMOVEDStackLineAr,
    readLabel: "اقرأ دراسة الحالة",
    liveLabel: "عرض المنتج"
  }
};

const trendyCardCopy = {
  en: {
    title: "trendy",
    summary:
      "NestJS + PostgreSQL API for a multi-role logistics/marketplace platform connecting customers, stores, and drivers.",
    bullets: [
      "JWT auth with Refresh Token via HTTP-only cookie, Google OAuth, and RBAC for admin/seller/driver/customer.",
      "Order lifecycle from cart to delivery with pickup/delivery tasks and driver assignment by zone/speed/availability.",
      "Catalog + media management with Cloudinary signed uploads and Firebase push notifications."
    ],
    stackLine: trendyStackLine,
    readLabel: "Read case study",
    liveLabel: "Live product"
  },
  ar: {
    title: "ترندي",
    summary:
      "واجهة API مبنية بـ NestJS وPostgreSQL لمنصة لوجستية/ماركت-بليس متعددة الأدوار تربط العملاء بالمتاجر والسائقين.",
    bullets: [
      "مصادقة JWT مع Refresh Token عبر HTTP-only cookie وGoogle OAuth، وRBAC لأدوار admin/seller/driver/customer.",
      "دورة طلب كاملة من السلة حتى التسليم مع مهام PICKUP/DELIVERY وتعيين السائقين حسب المنطقة والسرعة والتوفر.",
      "إدارة كتالوج وميديا عبر Cloudinary signed uploads وإشعارات Push عبر Firebase."
    ],
    stackLine: trendyStackLineAr,
    readLabel: "اقرأ دراسة الحالة",
    liveLabel: "عرض المنتج"
  }
};

const REMOVEDOverview = [
  "This project is a production backend for a documentation/archive platform.",
  "I built the API using express with TypeScript and ESM to keep the codebase explicit and typed.",
  "The data layer uses MongoDB with mongoose to represent records and relationships safely.",
  "Authentication and baseline security are implemented with jsonwebtoken, bcrypt, helmet, and cors.",
  "Media uploads are supported through multer, with image processing handled by sharp."
];

const REMOVEDMyRole = [
  "I designed and built the express (TypeScript) REST API.",
  "I modeled MongoDB collections using mongoose.",
  "I implemented authentication/security layers (jsonwebtoken, bcrypt, helmet, cors).",
  "I handled media uploads (multer) and image processing (sharp).",
  "I deployed the service to production."
];

const REMOVEDStack = [
  "express (TypeScript, ESM)",
  "MongoDB + mongoose + mongoose-sequence",
  "jsonwebtoken, bcrypt, helmet, cors, dotenv",
  "morgan",
  "multer + sharp"
];

const REMOVEDImplementation = [
  "Security middleware with helmet and cors.",
  "Password hashing using bcrypt.",
  "jsonwebtoken-based authentication.",
  "Configuration loading using dotenv.",
  "CORS configuration for cross-origin requests.",
  "Incremental IDs with mongoose-sequence.",
  "Request logging using morgan.",
  "Upload pipeline using multer; image resizing/compression using sharp."
];

const REMOVEDDeployment = ["Deployed and operated the service in production."];

const REMOVEDChallenges: CaseStudyChallenge[] = [
  {
    challenge: "Production crypto-mining incidents (repeated).",
    fix: "Hardening actions (no-new-privileges, non-root, docker compose).",
    outcome: "Service stabilized after hardening; repeated compromises stopped."
  },
  {
    challenge: "Upload validation mistake.",
    fix: "Restricted allowed file types and validated uploads.",
    outcome:
      "Malicious upload vector removed by stricter validation; upload flow became safer."
  },
  {
    challenge: "SSH brute-force attempts.",
    fix: "Disabled password login; SSH keys only.",
    outcome:
      "Reduced attack surface by disabling password login and using SSH keys only."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "REMOVED-REMOVED-REMOVED",
    title: "REMOVED REMOVED REMOVED",
    card: {
      copy: REMOVEDCardCopy,
      liveUrl: "https://REMOVED-of-REMOVED-REMOVED.com/",
    },
    i18n: {
      en: {
        title: "REMOVED REMOVED REMOVED",
        heroKicker: "Case Study",
        backLabel: "Back to case studies",
        jumpToLabel: "Jump to",
        tocTitle: "Table of contents",
        toc: {
          overview: "Overview",
          myRole: "My Role",
          stack: "Stack",
          implementation: "Implementation Notes",
          deployment: "Deployment",
          challenges: "Challenges"
        },
        chips: {
          roleLabel: "Role",
          roleValue: "Backend + Deployment",
          statusLabel: "Status",
          statusValue: "Production",
          repoLabel: "Repo",
          repoValue: "Private",
          liveLabel: "Live"
        },
        challengeLabels: {
          challenge: "Challenge",
          fix: "Fix",
          outcome: "Outcome"
        },
        heroSummary: REMOVEDSummary,
        heroBullets: REMOVEDBullets,
        heroStackLine: REMOVEDStackLine,
        overview: REMOVEDOverview,
        myRole: REMOVEDMyRole,
        stack: REMOVEDStack,
        implementation: REMOVEDImplementation,
        deployment: REMOVEDDeployment,
        challenges: REMOVEDChallenges
      },
      ar: {
        title: "REMOVED حرية REMOVED",
        heroKicker: "دراسة حالة",
        backLabel: "العودة إلى دراسات الحالة",
        jumpToLabel: "انتقل إلى",
        tocTitle: "جدول المحتويات",
        toc: {
          overview: "نظرة عامة",
          myRole: "دوري",
          stack: "التقنيات",
          implementation: "ملاحظات تنفيذية",
          deployment: "النشر",
          challenges: "التحديات"
        },
        chips: {
          roleLabel: "الدور",
          roleValue: "Backend + Deployment",
          statusLabel: "الحالة",
          statusValue: "Production",
          repoLabel: "المستودع",
          repoValue: "Private",
          liveLabel: "الموقع"
        },
        challengeLabels: {
          challenge: "التحدي",
          fix: "الإصلاح",
          outcome: "النتيجة"
        },
        heroSummary:
          "باك-إند إنتاجي مبني بـ express وMongoDB لمنصة توثيق/أرشفة، مع تسجيل دخول آمن ودعم رفع ملفات ومعالجة صور.",
        heroBullets: [
          "باك-إند express (TypeScript) مع مصادقة jsonwebtoken وتشفير كلمات المرور وميدلوير حماية.",
          "نمذجة MongoDB باستخدام mongoose مع معرفات متزايدة عبر mongoose-sequence.",
          "رفع الملفات عبر multer ومعالجة الصور عبر sharp."
        ],
        heroStackLine:
          "التقنيات: express • TypeScript • MongoDB/mongoose • mongoose-sequence • jsonwebtoken • bcrypt • helmet • cors • dotenv • morgan • multer • sharp",
        overview: [
          "هذا المشروع هو باك-إند إنتاجي لمنصة توثيق/أرشفة.",
          "قمت ببناء الـ API باستخدام express مع TypeScript وESM للحفاظ على وضوح الأنواع.",
          "طبقة البيانات تستخدم MongoDB مع mongoose لتمثيل السجلات بشكل منظم.",
          "طبقة الحماية تعتمد jsonwebtoken وbcrypt وhelmet وcors.",
          "رفع الوسائط يتم عبر multer، ومعالجة الصور عبر sharp."
        ],
        myRole: [
          "قمت بتصميم وبناء REST API باستخدام express (TypeScript).",
          "قمت بنمذجة بيانات MongoDB باستخدام mongoose.",
          "نفذت طبقات المصادقة والحماية (jsonwebtoken وbcrypt وhelmet وcors).",
          "توليت رفع الملفات عبر multer ومعالجة الصور عبر sharp.",
          "قمت بنشر الخدمة للإنتاج."
        ],
        stack: [
          "express (TypeScript, ESM)",
          "MongoDB + mongoose + mongoose-sequence",
          "jsonwebtoken, bcrypt, helmet, cors, dotenv",
          "morgan",
          "multer + sharp"
        ],
        implementation: [
          "ميدلوير حماية باستخدام helmet وcors.",
          "تشفير كلمات المرور باستخدام bcrypt.",
          "مصادقة باستخدام jsonwebtoken.",
          "تحميل الإعدادات عبر dotenv.",
          "إعداد cors للطلبات العابرة للنطاق.",
          "معرفات متزايدة باستخدام mongoose-sequence.",
          "تسجيل الطلبات عبر morgan.",
          "رفع الملفات عبر multer ومعالجة الصور عبر sharp."
        ],
        deployment: ["تم نشر وتشغيل الخدمة في الإنتاج."],
        challenges: [
          {
            challenge: "حوادث تعدين عملات على الإنتاج (متكررة).",
            fix: "إجراءات تقوية (no-new-privileges وnon-root وdocker compose).",
            outcome: "استقرت الخدمة بعد التقوية وتوقفت الاختراقات المتكررة."
          },
          {
            challenge: "خطأ في التحقق من الملفات المرفوعة.",
            fix: "تقييد الأنواع المسموحة والتحقق من الرفع.",
            outcome:
              "تم إزالة مسار رفع الملفات الضارة وأصبح تدفق الرفع أكثر أمانًا."
          },
          {
            challenge: "محاولات brute-force على SSH.",
            fix: "إيقاف تسجيل الدخول بكلمة مرور والاكتفاء بمفاتيح SSH.",
            outcome:
              "تم تقليل سطح الهجوم بتعطيل كلمات المرور والاكتفاء بمفاتيح SSH."
          }
        ]
      }
    }
  },
  {
    slug: "trendy",
    title: "trendy",
    card: {
      copy: trendyCardCopy
    },
    i18n: {
      en: {
        title: "trendy",
        heroKicker: "Case Study",
        backLabel: "Back to case studies",
        jumpToLabel: "Jump to",
        tocTitle: "Table of contents",
        toc: {
          overview: "Overview",
          myRole: "My Role",
          stack: "Stack",
          implementation: "Implementation Notes",
          deployment: "Deployment",
          challenges: "Challenges",
          apiHighlights: "API Highlights",
          ordersLogistics: "Orders & Logistics",
          driverTasks: "Driver Tasks",
          notifications: "Notifications",
          adminAnalytics: "Admin Analytics",
          supportingServices: "Supporting Services"
        },
        chips: {
          roleLabel: "Role",
          roleValue: "Backend + Deployment",
          statusLabel: "Status",
          statusValue: "Production",
          repoLabel: "Repo",
          repoValue: "Private",
          liveLabel: "Live"
        },
        challengeLabels: {
          challenge: "Challenge",
          fix: "Fix",
          outcome: "Outcome"
        },
        heroSummary:
          "An API built with NestJS and PostgreSQL for a multi-role logistics/marketplace platform connecting customers, stores, and drivers. It covers the full order lifecycle from cart to delivery with pickup/drop-off tasks, driver assignment by zone, speed, and availability, real-time notifications, and order status tracking. It includes product catalog management, media assets, reviews, and admin analytics for orders and revenue.",
        heroBullets: [
          "Multi-role logistics/marketplace API covering the cart-to-delivery flow.",
          "Driver assignment by zone/speed/availability with task-based pickup and delivery.",
          "Catalog + media management, Firebase push notifications, and admin analytics."
        ],
        heroStackLine: trendyStackLine,
        overview: [
          "This project is an API for a multi-role logistics/marketplace platform connecting customers, stores, and drivers.",
          "It covers the full order lifecycle from cart to delivery, including pickup/delivery tasks, driver assignment by zone, speed, and availability, real-time notifications, and order status tracking.",
          "It includes product catalog management, media assets, reviews, and admin analytics for orders and revenue."
        ],
        myRole: [
          "I designed and built the NestJS backend.",
          "I modeled PostgreSQL using TypeORM.",
          "I implemented RBAC and auth flows (JWT + Refresh Token via HTTP-only cookie + Google OAuth).",
          "I implemented the order lifecycle and driver tasks logic.",
          "I integrated Cloudinary signed uploads and Firebase push notifications.",
          "I prepared Docker-based staging/production setup and a health endpoint."
        ],
        stack: [
          "NestJS (TypeScript)",
          "PostgreSQL",
          "TypeORM",
          "JWT + Refresh Token via HTTP-only cookie + Google OAuth",
          "Cloudinary signed uploads",
          "Firebase push notifications",
          "Docker (staging/production)",
          "Health endpoint",
          "External USD-rate API"
        ],
        implementation: [],
        deployment: [],
        challenges: [],
        apiHighlightLabels: {
          auth: "Auth & Users",
          catalog: "Catalog",
          shopping: "Shopping Experience"
        },
        apiHighlights: {
          auth: [
            "Email signup/login, code verification, and password recovery.",
            "Google OAuth and Refresh Token via HTTP-only cookie.",
            "RBAC (admin/seller/driver/customer) with admin user activation."
          ],
          catalog: [
            "Hierarchical categories with speedType (fast/slow) affecting delivery speed.",
            "Products with colors/sizes, return window, and availability.",
            "Media (images/video) with Cloudinary signed uploads, store logos, and driver photos."
          ],
          shopping: [
            "Cart items store a snapshot of the product at purchase time for stable pricing/data.",
            "Favorites.",
            "Separate ratings for product/seller/driver (one rating per customer per target)."
          ]
        },
        ordersLogistics: [
          "Order creation from cart with customer profile validation; delivery speed is inferred from product categories.",
          "Slow orders require time windows; fast orders have no window.",
          "Seller-level item confirmation/rejection with a 15-minute window and auto-reject on timeout.",
          "Order statuses include: PENDING/CONFIRMED/READY_FOR_DELIVERY/PROCESSING/SHIPPED/DELIVERED/RETURN_REQUESTED/CANCELLED..."
        ],
        driverTasks: [
          "Orders split into PICKUP/DELIVERY tasks.",
          "Assign the least-busy driver by zone, speed, and availability while preventing overlapping time windows for the same driver.",
          "Task status updates drive order status, with pickup and delivery confirmation via delivery code.",
          "Customer and seller tracking."
        ],
        notifications: [
          "Device registration and Firebase push notifications.",
          "Admin broadcast messaging."
        ],
        adminAnalytics: [
          "Summaries for orders, revenue, and users.",
          "Top stores and drivers.",
          "Time-series charts for orders and revenue."
        ],
        supportingServices: [
          "External USD-rate API.",
          "Health endpoint.",
          "Dockerized staging/production."
        ]
      },
      ar: {
        title: "ترندي",
        heroKicker: "دراسة حالة",
        backLabel: "العودة إلى دراسات الحالة",
        jumpToLabel: "انتقل إلى",
        tocTitle: "جدول المحتويات",
        toc: {
          overview: "نظرة عامة",
          myRole: "دوري",
          stack: "التقنيات",
          implementation: "ملاحظات تنفيذية",
          deployment: "النشر",
          challenges: "التحديات",
          apiHighlights: "أبرز واجهات API",
          ordersLogistics: "الطلبات واللوجستيات",
          driverTasks: "مهام السائقين",
          notifications: "الإشعارات",
          adminAnalytics: "تحليلات الإدارة",
          supportingServices: "الخدمات الداعمة"
        },
        chips: {
          roleLabel: "الدور",
          roleValue: "Backend + Deployment",
          statusLabel: "الحالة",
          statusValue: "Production",
          repoLabel: "المستودع",
          repoValue: "Private",
          liveLabel: "الموقع"
        },
        challengeLabels: {
          challenge: "التحدي",
          fix: "الإصلاح",
          outcome: "النتيجة"
        },
        heroSummary:
          "واجهة API مبنية بـ NestJS وPostgreSQL لمنصة لوجستية/ماركت-بليس متعددة الأدوار تربط العملاء بالمتاجر والسائقين. تغطي دورة الطلب كاملة من السلة وحتى التسليم مع مهام استلام/توصيل، تعيين السائقين حسب المنطقة والسرعة والتوفر، وإشعارات فورية ومتابعة حالة الطلب. فيها إدارة كتالوج المنتجات، ملفات ميديا، تقييمات، وتحليلات إدارية للطلبات والإيرادات.",
        heroBullets: [
          "واجهة لوجستية/ماركت-بليس متعددة الأدوار تغطي دورة الطلب من السلة حتى التسليم.",
          "تعيين السائقين حسب المنطقة والسرعة والتوفر مع مهام PICKUP/DELIVERY.",
          "إدارة كتالوج وميديا وإشعارات Push وتحليلات إدارية."
        ],
        heroStackLine: trendyStackLineAr,
        overview: [
          "واجهة API مبنية بـ NestJS وPostgreSQL لمنصة لوجستية/ماركت-بليس متعددة الأدوار تربط العملاء بالمتاجر والسائقين.",
          "تغطي دورة الطلب كاملة من السلة وحتى التسليم مع مهام استلام/توصيل، تعيين السائقين حسب المنطقة والسرعة والتوفر، وإشعارات فورية ومتابعة حالة الطلب.",
          "فيها إدارة كتالوج المنتجات، ملفات ميديا، تقييمات، وتحليلات إدارية للطلبات والإيرادات."
        ],
        myRole: [
          "صممت وبنيت باك-إند NestJS.",
          "نمذجت PostgreSQL باستخدام TypeORM.",
          "نفذت RBAC وتدفقات المصادقة (JWT + Refresh Token عبر HTTP-only cookie + Google OAuth).",
          "نفذت دورة الطلب ومنطق مهام السائقين.",
          "دمجت Cloudinary signed uploads وإشعارات Push عبر Firebase.",
          "حضّرت إعداد Docker لبيئات staging/production مع Health endpoint."
        ],
        stack: [
          "NestJS (TypeScript)",
          "PostgreSQL",
          "TypeORM",
          "JWT + Refresh Token عبر HTTP-only cookie + Google OAuth",
          "Cloudinary signed uploads",
          "Firebase (push)",
          "Docker (staging/production)",
          "Health endpoint",
          "External USD-rate API"
        ],
        implementation: [],
        deployment: [],
        challenges: [],
        apiHighlightLabels: {
          auth: "المصادقة والمستخدمون",
          catalog: "الكتالوج",
          shopping: "تجربة التسوق"
        },
        apiHighlights: {
          auth: [
            "تسجيل/دخول بالبريد، تحقق عبر كود، استرجاع كلمة مرور، Google OAuth، Refresh Token عبر HTTP-only cookie، مع صلاحيات RBAC (admin/seller/driver/customer) وتفعيل المستخدمين من الأدمن."
          ],
          catalog: [
            "تصنيفات شجرية مع speedType (سريع/بطيء) تؤثر على سرعة التوصيل، منتجات بألوان/مقاسات/نافذة إرجاع/توافر، وسائط (صور/فيديو) وتواقيع رفع Cloudinary، وشعارات متاجر/صور سائقين."
          ],
          shopping: [
            "سلة مشتريات بعناصر مع snapshot للمنتج (لتثبيت السعر/البيانات وقت الشراء)، مفضلة، وتقييمات منفصلة للمنتج/البائع/السائق (تقييم واحد لكل عميل لكل هدف)."
          ]
        },
        ordersLogistics: [
          "إنشاء الطلب من السلة مع تحقق من ملف العميل، سرعة التوصيل تُستنتج من تصنيفات المنتجات؛ الطلب البطيء يتطلب نوافذ زمنية، والسريع بدون نافذة.",
          "البنود تُدار على مستوى البائع (تأكيد/رفض) مع مهلة 15 دقيقة ورفض تلقائي للمعلّق.",
          "حالات الطلب تشمل: PENDING/CONFIRMED/READY_FOR_DELIVERY/PROCESSING/SHIPPED/DELIVERED/RETURN_REQUESTED/CANCELLED…"
        ],
        driverTasks: [
          "تقسيم الطلب إلى مهام PICKUP/DELIVERY، وتعيين أقل سائق مشغول حسب المنطقة والسرعة والتوفر مع منع تداخل نوافذ زمنية لنفس السائق.",
          "تحديث حالة المهمة يحدّث حالة الطلب، مع تأكيد الاستلام والتسليم (برمز تسليم). تتبع للعميل والبائع."
        ],
        notifications: [
          "تسجيل أجهزة وإرسال Push عبر Firebase، مع إرسال جماعي من الأدمن."
        ],
        adminAnalytics: [
          "ملخص طلبات/إيرادات/مستخدمين، أفضل المتاجر والسائقين، ومخططات زمنية للطلبات والإيرادات."
        ],
        supportingServices: [
          "جلب سعر الدولار من API خارجي، Health endpoint، وتشغيل داخل Docker (staging/production)."
        ]
      }
    }
  }
];
