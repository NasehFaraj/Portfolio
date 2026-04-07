export type OtherProject = {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  summary: {
    en: string;
    ar: string;
  };
  bullets: {
    en: string[];
    ar: string[];
  };
  stack: string[];
  links: {
    demoUrl?: string;
    githubUrl?: string;
  };
};

export const otherProjects: OtherProject[] = [
  {
    id: "real-estate",
    title: {
      en: "real-estate",
      ar: "real-estate"
    },
    summary: {
      en:
        "A smart real estate operations API that matches property offers with client requests, manages broker workflows, and provides secure role-based access for teams.",
      ar:
        "واجهة API ذكية لعمليات العقارات تطابق عروض العقارات مع طلبات العملاء، وتدير سير عمل الوسطاء، وتوفر صلاحيات وصول آمنة حسب الدور للفرق."
    },
    bullets: {
      en: [
        "Matches property offers with client requests automatically.",
        "Role-based workflows for admin, manager, and broker.",
        "Secure authentication with access and refresh tokens.",
        "Filtering, pagination, and statistics endpoints for operational insights.",
        "Swagger documentation and Docker-based local development.",
        "Automated testing with Vitest and API integration coverage.",
        "CI pipeline on GitHub Actions for continuous verification.",
        "Code quality checks with ESLint, Prettier, and TypeScript type checking."
      ],
      ar: [
        "مطابقة عروض العقارات مع طلبات العملاء بشكل تلقائي.",
        "سير عمل حسب الدور لكل من admin وmanager وbroker.",
        "مصادقة آمنة باستخدام access tokens وrefresh tokens.",
        "واجهات فلترة وترقيم صفحات وإحصائيات للحصول على رؤى تشغيلية.",
        "توثيق Swagger وتشغيل محلي عبر Docker.",
        "اختبارات آلية باستخدام Vitest مع تغطية لتكامل الـ API.",
        "خط CI على GitHub Actions للتحقق المستمر.",
        "فحوصات جودة عبر ESLint وPrettier وTypeScript type checking."
      ]
    },
    stack: [
      "Express (TypeScript/ESM)",
      "MongoDB/Mongoose",
      "JWT",
      "Swagger",
      "Vitest",
      "Docker",
      "GitHub Actions",
      "ESLint",
      "Prettier"
    ],
    links: {
      githubUrl: "https://github.com/NasehFaraj/real-estate"
    }
  },
  {
    id: "online-education-system",
    title: {
      en: "Online-education-system",
      ar: "Online-education-system"
    },
    summary: {
      en:
        "A distance-learning platform I built as my graduation project (grade 97). It includes video lessons and PDF files, blog/discussion threads for questions, teacher/student/admin roles, and user management from the admin dashboard.",
      ar:
        "منصة تعليم عن بعد أنشأتها كمشروع تخرج (العلامة 97). تشمل دروس فيديو وملفات PDF، وبلوغ/نقاشات للأسئلة، وأدوار أستاذ/طالب/أدمن، وإدارة مستخدمين من لوحة الأدمن."
    },
    bullets: {
      en: [
        "AI-generated interactive multiple-choice quizzes via Gemini Pro 2.5 API (auto scoring).",
        "Teacher-created multiple-choice quizzes are also supported.",
        "Learning content: video + PDF with lesson management.",
        "Roles: admin / teacher / student with user management.",
        "Login via Google OAuth2."
      ],
      ar: [
        "توليد اختبارات اختيار من متعدد تفاعلية عبر Gemini Pro 2.5 API مع تصحيح/علامة تلقائية.",
        "دعم اختبارات اختيار من متعدد يضيفها الأساتذة أيضًا.",
        "محتوى تعليمي: فيديو + PDF + إدارة دروس.",
        "أدوار: admin / teacher / student + إدارة مستخدمين.",
        "تسجيل دخول عبر Google OAuth2."
      ]
    },
    stack: [
      "Express (TypeScript/ESM)",
      "MongoDB/Mongoose",
      "Passport (Google OAuth)",
      "Nodemailer",
      "JWT",
      "Helmet",
      "Multer",
      "EJS",
      "sessions (express-session + connect-mongo)",
      "mediasoup",
      "Winston",
      "Swagger (swagger-jsdoc + swagger-ui-express)",
      "Axios"
    ],
    links: {}
  },
  {
    id: "adam-educational-center",
    title: {
      en: "adam-educational-center",
      ar: "adam-educational-center"
    },
    summary: {
      en:
        "A student portal for an educational center showing tasks, grades, and notes entered by admins, with an Express + MongoDB backend and VPS deployment.",
      ar:
        "بوابة لمركز تعليمي تعرض وظائف/علامات/ملاحظات الطالب تُضاف من الأدمن، مع باك-إند Express + MongoDB ونشر على VPS."
    },
    bullets: {
      en: [
        "Student portal for tasks, grades, and notes entered by admins.",
        "Express + MongoDB backend.",
        "Deployed on a VPS."
      ],
      ar: [
        "بوابة تعرض وظائف/علامات/ملاحظات الطالب تُضاف من الأدمن.",
        "باك-إند Express + MongoDB.",
        "نشر على VPS."
      ]
    },
    stack: [
      "Express (TypeScript/ESM)",
      "MongoDB/Mongoose",
      "JWT",
      "bcryptjs",
      "Helmet",
      "CORS",
      "Multer",
      "Morgan",
      "dotenv"
    ],
    links: {}
  }
];
