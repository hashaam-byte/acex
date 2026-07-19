import { Sprout, Compass, Rocket, CheckCircle2 } from "lucide-react";

const PATHS = [
  {
    level: "Beginner",
    icon: Sprout,
    tone: "cyan",
    tagline: "Start from zero, safely.",
    topics: ["Market Basics", "Wallets", "Exchanges", "Candlesticks"],
  },
  {
    level: "Intermediate",
    icon: Compass,
    tone: "blue",
    tagline: "Read structure like a pro.",
    topics: ["Technical Analysis", "Market Structure", "Liquidity", "Smart Money Concepts"],
  },
  {
    level: "Advanced",
    icon: Rocket,
    tone: "violet",
    tagline: "Trade your own edge.",
    topics: ["Price Action", "Trading Psychology", "Risk Management", "Strategy Development"],
  },
] as const;

const TONE_CLASSES: Record<string, { badge: string; icon: string }> = {
  cyan: { badge: "border-brand-cyan/30 bg-brand-cyan/10", icon: "text-brand-cyan" },
  blue: { badge: "border-brand-blue/30 bg-brand-blue/10", icon: "text-brand-blue" },
  violet: { badge: "border-indigo-400/30 bg-indigo-400/10", icon: "text-indigo-400" },
};

export function LearningPaths() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PATHS.map(({ level, icon: Icon, tone, tagline, topics }, i) => {
          const tones = TONE_CLASSES[tone];
          return (
            <div
              key={level}
              className="relative flex flex-col rounded-3xl border border-border bg-surface p-7"
            >
              <span className="font-numeric text-xs text-text-faint">
                Track {String(i + 1).padStart(2, "0")}
              </span>

              <div className={`mt-4 flex h-12 w-12 items-center justify-center rounded-full border ${tones.badge}`}>
                <Icon className={`h-5 w-5 ${tones.icon}`} strokeWidth={1.75} />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-text">{level}</h3>
              <p className="mt-1.5 text-sm text-text-muted">{tagline}</p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-sm text-text">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 ${tones.icon}`} strokeWidth={1.75} />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
