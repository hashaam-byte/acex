import Link from "next/link";
import { Coins, LineChart, TrendingUp, Brain, ShieldCheck, BarChart3, Clock, ArrowRight } from "lucide-react";

const POSTS = [
  {
    title: "A Beginner's Guide to Crypto Trading",
    excerpt: "Everything you need to know before placing your first crypto trade.",
    category: "Crypto",
    date: "May 15, 2026",
    readTime: "8 min read",
    icon: Coins,
    tone: "amber",
  },
  {
    title: "Risk Management Strategies That Actually Work",
    excerpt: "Protect your capital first — the returns follow from there.",
    category: "Risk Management",
    date: "May 10, 2026",
    readTime: "6 min read",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    title: "How to Read Market Structure Like a Pro",
    excerpt: "Spot the shifts institutions leave behind before the crowd does.",
    category: "Tutorials",
    date: "May 5, 2026",
    readTime: "10 min read",
    icon: LineChart,
    tone: "cyan",
  },
  {
    title: "Trading Psychology: Mastering Your Emotions",
    excerpt: "Why discipline beats a perfect strategy every single time.",
    category: "Trading Psychology",
    date: "April 28, 2026",
    readTime: "7 min read",
    icon: Brain,
    tone: "violet",
  },
  {
    title: "Weekly Market Outlook",
    excerpt: "Key levels and events to watch across Forex, Crypto, and Stocks.",
    category: "Weekly Analysis",
    date: "April 21, 2026",
    readTime: "5 min read",
    icon: BarChart3,
    tone: "blue",
  },
  {
    title: "Stock Market Essentials for New Traders",
    excerpt: "The fundamentals that make everything else click into place.",
    category: "Stocks",
    date: "April 14, 2026",
    readTime: "9 min read",
    icon: TrendingUp,
    tone: "cyan",
  },
];

const TONE_CLASSES: Record<string, string> = {
  amber: "text-amber-400",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
  violet: "text-indigo-400",
};

const TONE_BG: Record<string, string> = {
  amber: "from-amber-400/15 to-transparent",
  blue: "from-brand-blue/15 to-transparent",
  cyan: "from-brand-cyan/15 to-transparent",
  violet: "from-indigo-400/15 to-transparent",
};

export function BlogGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ title, excerpt, category, date, readTime, icon: Icon, tone }) => (
          <Link
            key={title}
            href="#"
            className="transition-premium group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-premium)]"
          >
            <div
              className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${TONE_BG[tone]} bg-surface-2`}
            >
              <Icon className={`h-9 w-9 ${TONE_CLASSES[tone]}`} strokeWidth={1.5} />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className={`text-[11px] font-semibold uppercase tracking-wide ${TONE_CLASSES[tone]}`}>
                {category}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-text">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{excerpt}</p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-text-faint">
                <span>{date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {readTime}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 border-t border-border px-6 py-3 text-xs font-semibold text-brand-blue">
              Read Article
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}