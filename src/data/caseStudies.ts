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

export type CaseStudy = {
  slug: string;
  title: string;
  card: {
    liveUrl?: string;
  };
  i18n: {
    en: CaseStudyI18n;
    ar: CaseStudyI18n;
  };
};

const trendingStackLine =
  "Stack: NestJS • PostgreSQL • TypeORM • JWT • Cloudinary • Firebase • Docker";

const trendingStackLineAr =
  "التقنيات: NestJS • PostgreSQL • TypeORM • JWT • Cloudinary • Firebase • Docker";

export const caseStudies: CaseStudy[] = [
  {
    slug: "trending",
    title: "Trending",
    card: {},
    i18n: {
      en: {
        title: "Trending",
        heroKicker: "Work Experience",
        backLabel: "Back to work experience",
        jumpToLabel: "Jump to",
        tocTitle: "Table of contents",
        toc: {
          overview: "Overview",
          myRole: "Responsibilities",
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
          roleValue: "Backend Engineer (Contract)",
          statusLabel: "Duration",
          statusValue: "Aug 2025 - Mar 2026",
          repoLabel: "",
          repoValue: "",
          liveLabel: "Live"
        },
        challengeLabels: {
          challenge: "Challenge",
          fix: "Fix",
          outcome: "Outcome"
        },
        heroSummary:
          "Production backend ownership for a multi-role e-commerce & logistics platform (customers, merchants, and drivers). I delivered core APIs and workflows that power the full order lifecycle-from cart to delivery-covering pickup/drop-off tasks, driver assignment logic, real-time notifications, and order status tracking. The system also supports catalog & media management, reviews, and admin analytics for orders and revenue.",
        heroBullets: [
          "Owned backend delivery for a multi-role marketplace/logistics API covering cart-to-delivery workflows.",
          "Implemented driver assignment and task-based pickup/delivery flows with operational constraints (zone/speed/availability).",
          "Built catalog & media modules, notifications, and admin insights to support day-to-day operations."
        ],
        heroStackLine: trendingStackLine,
        overview: [
          "This work experience reflects production backend ownership for a multi-role logistics/marketplace platform connecting customers, stores, and drivers.",
          "It covers the full order lifecycle from cart to delivery, including pickup/delivery tasks, driver assignment by zone, speed, and availability, real-time notifications, and order status tracking.",
          "The platform supports product catalog management, media assets, reviews, and admin analytics for orders and revenue."
        ],
        myRole: [
          "Owned the NestJS backend architecture and core service modules.",
          "Designed PostgreSQL data model and TypeORM relations for operational workflows.",
          "Implemented authentication and RBAC (JWT + refresh tokens via HTTP-only cookies; Google OAuth where applicable).",
          "Delivered order lifecycle logic and driver task workflows end-to-end.",
          "Integrated Cloudinary signed uploads for media and Firebase push notifications.",
          "Prepared Docker-based staging/production deployments and health monitoring endpoints."
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
        challenges: [
          {
            challenge: "Repeated crypto-mining incidents targeting production containers.",
            fix: "Hardened runtime and Compose defaults: non-root containers, no-new-privileges, tighter permissions, and stricter deployment controls.",
            outcome: "Production stability improved; compromises stopped and uptime normalized."
          },
          {
            challenge: "Persistent SSH brute-force attempts against VPS environments.",
            fix: "Disabled password auth and enforced SSH key-only access for operational accounts.",
            outcome: "Attack surface reduced and unauthorized login attempts became significantly less risky."
          }
        ],
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
          "Seller-level item confirmation/rejection with a 15-minute window and auto-reject on timeout."
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
        title: "Trending",
        heroKicker: "خبرة عملية",
        backLabel: "العودة إلى الخبرة العملية",
        jumpToLabel: "انتقل إلى",
        tocTitle: "جدول المحتويات",
        toc: {
          overview: "نظرة عامة",
          myRole: "المسؤوليات",
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
          roleValue: "Backend Engineer (Contract)",
          statusLabel: "المدة",
          statusValue: "أغسطس 2025 - مارس 2026",
          repoLabel: "",
          repoValue: "",
          liveLabel: "الموقع"
        },
        challengeLabels: {
          challenge: "التحدي",
          fix: "الإصلاح",
          outcome: "النتيجة"
        },
        heroSummary:
          "امتلاك باك-إند إنتاجي لمنصة تجارة إلكترونية ولوجستيات متعددة الأدوار (عملاء، تجار، سائقون). تم تسليم واجهات وخطوط عمل أساسية تغطي دورة الطلب كاملة من السلة حتى التسليم، بما يشمل مهام الاستلام/التسليم، منطق تعيين السائقين، الإشعارات الفورية، وتتبع حالة الطلب. كما تدعم المنصة إدارة الكتالوج والميديا والتقييمات وتحليلات الإدارة للطلبات والإيرادات.",
        heroBullets: [
          "امتلاك تسليم باك-إند لمنصة Marketplace/Logistics متعددة الأدوار تغطي دورة cart-to-delivery.",
          "تنفيذ منطق تعيين السائقين وتدفقات مهام pickup/delivery بقيود تشغيلية (المنطقة/السرعة/التوفر).",
          "بناء وحدات الكتالوج والميديا والإشعارات ورؤى الإدارة لدعم التشغيل اليومي."
        ],
        heroStackLine: trendingStackLineAr,
        overview: [
          "هذه خبرة عملية تركّز على امتلاك باك-إند منصة لوجستية/ماركت-بليس متعددة الأدوار تربط العملاء بالمتاجر والسائقين.",
          "تغطي دورة الطلب كاملة من السلة وحتى التسليم مع مهام استلام/توصيل وتعيين السائقين حسب المنطقة والسرعة والتوفر، إضافة إلى إشعارات فورية ومتابعة حالة الطلب.",
          "تدعم المنصة إدارة كتالوج المنتجات والوسائط والتقييمات وتحليلات إدارية للطلبات والإيرادات."
        ],
        myRole: [
          "امتلكت معمارية باك-إند NestJS ووحدات الخدمات الأساسية.",
          "صممت نموذج بيانات PostgreSQL وعلاقات TypeORM لسير العمل التشغيلي.",
          "نفذت المصادقة وصلاحيات RBAC (JWT + refresh tokens عبر HTTP-only cookies؛ وGoogle OAuth عند الحاجة).",
          "سلمت منطق دورة الطلب وتدفقات مهام السائقين من النهاية إلى النهاية.",
          "دمجت Cloudinary signed uploads للوسائط وإشعارات Firebase Push.",
          "حضرت نشر Docker لبيئات staging/production مع نقاط health monitoring."
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
        challenges: [
          {
            challenge: "حوادث تعدين عملات متكررة استهدفت حاويات الإنتاج.",
            fix: "تقوية إعدادات التشغيل وCompose: تشغيل non-root، تفعيل no-new-privileges، تشديد الصلاحيات، وضوابط نشر أكثر صرامة.",
            outcome: "تحسن الاستقرار في الإنتاج وتوقفت الاختراقات المتكررة وعاد uptime للوضع الطبيعي."
          },
          {
            challenge: "محاولات brute-force مستمرة على SSH في بيئات VPS.",
            fix: "تعطيل password auth وفرض SSH key-only لحسابات التشغيل.",
            outcome: "انخفض سطح الهجوم وأصبحت محاولات الدخول غير المصرح بها أقل خطورة بشكل ملحوظ."
          }
        ],
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
          "البنود تُدار على مستوى البائع (تأكيد/رفض) مع مهلة 15 دقيقة ورفض تلقائي للمعلّق."
        ],
        driverTasks: [
          "تقسيم الطلب إلى مهام PICKUP/DELIVERY، وتعيين أقل سائق مشغول حسب المنطقة والسرعة والتوفر مع منع تداخل نوافذ زمنية لنفس السائق.",
          "تحديث حالة المهمة يحدّث حالة الطلب، مع تأكيد الاستلام والتسليم (برمز تسليم). تتبع للعميل والبائع."
        ],
        notifications: ["تسجيل أجهزة وإرسال Push عبر Firebase، مع إرسال جماعي من الأدمن."],
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
