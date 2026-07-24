import type { BlogCardData } from "@/components/blog/BlogGrid";

export const FALLBACK_POSTS: (BlogCardData & { content: string })[] = [
  {
    slug: "beginners-guide-to-crypto-trading",
    title: "A Beginner's Guide to Crypto Trading",
    excerpt: "Everything you need to know before placing your first crypto trade.",
    category: "Crypto",
    date: "May 15, 2026",
    readTimeMins: 8,
    coverImageUrl: null,
    content:
      "Crypto trading starts with understanding the basics: wallets, exchanges, and how price actually moves.\n\nBefore risking real money, get comfortable with a demo account, learn how order types work, and understand the difference between spot and leveraged trading.\n\nStart small, keep a trading journal, and treat your first few months as tuition — not profit.",
  },
  {
    slug: "risk-management-strategies-that-actually-work",
    title: "Risk Management Strategies That Actually Work",
    excerpt: "Protect your capital first — the returns follow from there.",
    category: "Risk Management",
    date: "May 10, 2026",
    readTimeMins: 6,
    coverImageUrl: null,
    content:
      "Most traders lose not because their analysis is wrong, but because their position sizing is.\n\nA simple rule: never risk more than 1-2% of your account on a single trade. Combine that with a clear stop-loss before you enter, not after.\n\nRisk management won't make you a genius trader, but it keeps you in the game long enough to become one.",
  },
  {
    slug: "how-to-read-market-structure-like-a-pro",
    title: "How to Read Market Structure Like a Pro",
    excerpt: "Spot the shifts institutions leave behind before the crowd does.",
    category: "Tutorials",
    date: "May 5, 2026",
    readTimeMins: 10,
    coverImageUrl: null,
    content:
      "Market structure is the skeleton underneath every chart — higher highs and higher lows in an uptrend, the reverse in a downtrend.\n\nLearning to spot a break of structure, and distinguishing it from a temporary pullback, is one of the highest-leverage skills a trader can build.\n\nStart by marking structure on higher timeframes before you ever look at an entry.",
  },
  {
    slug: "trading-psychology-mastering-your-emotions",
    title: "Trading Psychology: Mastering Your Emotions",
    excerpt: "Why discipline beats a perfect strategy every single time.",
    category: "Trading Psychology",
    date: "April 28, 2026",
    readTimeMins: 7,
    coverImageUrl: null,
    content:
      "A mediocre strategy traded with discipline will outperform a great strategy traded emotionally, every time.\n\nRevenge trading, moving stop-losses, and oversizing after a win are the three habits that quietly destroy accounts.\n\nBuild rules you follow regardless of how you feel in the moment — that's the actual edge.",
  },
  {
    slug: "weekly-market-outlook",
    title: "Weekly Market Outlook",
    excerpt: "Key levels and events to watch across Forex, Crypto, and Stocks.",
    category: "Weekly Analysis",
    date: "April 21, 2026",
    readTimeMins: 5,
    coverImageUrl: null,
    content:
      "This is a placeholder weekly outlook — replace this with real analysis from /admin/blog each week.\n\nCover the key macro events, the levels you're watching, and anything that changed from last week's view.",
  },
  {
    slug: "stock-market-essentials-for-new-traders",
    title: "Stock Market Essentials for New Traders",
    excerpt: "The fundamentals that make everything else click into place.",
    category: "Stocks",
    date: "April 14, 2026",
    readTimeMins: 9,
    coverImageUrl: null,
    content:
      "Before trading individual stocks, understand what actually moves them: earnings, sector trends, and broad market conditions.\n\nStart by tracking a small watchlist of familiar companies, and pay attention to how their price reacts to news over a few weeks before putting on your first position.",
  },
];