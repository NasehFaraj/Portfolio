const nonTranslatableTerms = [
  "JWT",
  "RBAC",
  "OAuth",
  "OAuth2",
  "REST",
  "GraphQL",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Nginx",
  "Redis",
  "Node.js",
  "NestJS",
  "TypeScript",
  "Express",
  "Express.js",
  "AWS",
  "GCP",
  "Azure",
  "VPS",
  "HTTPS",
  "API",
  "APIs",
  "Git/GitHub",
  "Linux/VPS",
  "Postman"
];

const nonTranslatableLookup = new Map(
  nonTranslatableTerms.map((term) => [term.toLowerCase(), term])
);

const isCompoundNonTranslatable = (label: string) => {
  const parts = label.split(/[\s/+,&()]+/).filter(Boolean);
  return (
    parts.length > 1 &&
    parts.every((part) => nonTranslatableLookup.has(part.toLowerCase()))
  );
};

export const formatTagLabel = (label: string, isArabic: boolean) => {
  const normalized = label.trim();
  const matched = nonTranslatableLookup.get(normalized.toLowerCase());
  const isTechnical = Boolean(matched) || isCompoundNonTranslatable(normalized);

  if (!isArabic) {
    return { text: label, isTechnical: false };
  }

  if (matched) {
    return { text: matched, isTechnical: true };
  }

  if (isTechnical) {
    return { text: normalized, isTechnical: true };
  }

  return { text: label, isTechnical: false };
};

export { nonTranslatableTerms };
