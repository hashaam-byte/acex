export const BLOG_CATEGORIES = [
  "Crypto",
  "Forex",
  "Stocks",
  "Trading Psychology",
  "Risk Management",
  "Market News",
  "Tutorials",
  "Weekly Analysis",
] as const;

// icon + color tone shown on the blog card thumbnail, keyed by category
export const BLOG_CATEGORY_STYLE: Record<string, { icon: string; tone: string }> = {
  Crypto: { icon: "coins", tone: "amber" },
  Forex: { icon: "line-chart", tone: "blue" },
  Stocks: { icon: "trending-up", tone: "cyan" },
  "Trading Psychology": { icon: "brain", tone: "violet" },
  "Risk Management": { icon: "shield-check", tone: "blue" },
  "Market News": { icon: "newspaper", tone: "cyan" },
  Tutorials: { icon: "book-open", tone: "blue" },
  "Weekly Analysis": { icon: "bar-chart", tone: "blue" },
};