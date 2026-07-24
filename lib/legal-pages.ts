export const LEGAL_PAGES = [
  { slug: "privacy", title: "Privacy Policy" },
  { slug: "terms", title: "Terms of Service" },
  { slug: "refund", title: "Refund Policy" },
  { slug: "disclaimer", title: "Disclaimer" },
  { slug: "risk-disclosure", title: "Risk Disclosure" },
] as const;

export type LegalSlug = (typeof LEGAL_PAGES)[number]["slug"];