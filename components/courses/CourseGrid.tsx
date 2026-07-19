import { Coins, LineChart, TrendingUp, ShieldCheck, Brain, Crown } from "lucide-react";

const COURSES = [
  {
    icon: Coins,
    title: "Crypto Mastery",
    lessons: "16 Lessons",
    level: "Beginner",
    tone: "amber",
    highlight: false,
  },
  {
    icon: LineChart,
    title: "Forex Masterclass",
    lessons: "20 Lessons",
    level: "Intermediate",
    tone: "blue",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Stock Market Essentials",
    lessons: "15 Lessons",
    level: "Beginner",
    tone: "cyan",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Risk Management Blueprint",
    lessons: "8 Lessons",
    level: "All Levels",
    tone: "blue",
    highlight: false,
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    lessons: "12 Lessons",
    level: "All Levels",
    tone: "violet",
    highlight: false,
  },
  {
    icon: Crown,
    title: "VIP Mentorship Program",
    lessons: "Exclusive",
    level: "Advanced",
    tone: "gold",
    highlight: true,
  },
] as const;

const TONE_CLASSES: Record<string, { badge: string; icon: string }> = {
  amber: { badge: "border-amber-400/30 bg-amber-400/10", icon: "text-amber-400" },
  blue: { badge: "border-brand-blue/30 bg-brand-blue/10", icon: "text-brand-blue" },
  cyan: { badge: "border-brand-cyan/30 bg-brand-cyan/10", icon: "text-brand-cyan" },
  violet: { badge: "border-indigo-400/30 bg-indigo-400/10", icon: "text-indigo-400" },
  gold: { badge: "border-amber-300/40 bg-amber-300/15", icon: "text-amber-300" },
};

export function CourseGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map(({ icon: Icon, title, lessons, level, tone, highlight }) => {
          const tones = TONE_CLASSES[tone];
          return (
            <div
              key={title}
              className={`group flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
                highlight
                  ? "border-amber-300/40 bg-gradient-to-b from-amber-300/[0.08] to-surface"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${tones.badge}`}>
                  <Icon className={`h-5 w-5 ${tones.icon}`} strokeWidth={1.75} />
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-faint">
                  {level}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
              <p className={`mt-1.5 text-xs font-medium ${highlight ? "text-amber-300" : "text-text-faint"}`}>
                {lessons}
              </p>

              <button
                type="button"
                className={`mt-6 w-full rounded-full py-2.5 text-xs font-semibold transition-colors ${
                  highlight
                    ? "bg-amber-300 text-[#1a1200] hover:bg-amber-200"
                    : "border border-border-strong text-text hover:bg-surface-2"
                }`}
              >
                {highlight ? "Apply for VIP" : "View Course"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}