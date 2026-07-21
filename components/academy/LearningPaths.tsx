import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const PATHS = [
  {
    level: "Beginner",
    price: "$55",
    icon: "/icons/academy-beginner.png",
    tone: "green",
    tagline: "Start from zero, safely.",
    topics: ["Market Basics", "Wallets", "Exchanges", "Candlesticks"],
  },
  {
    level: "Intermediate",
    price: "$105",
    icon: "/icons/academy-intermediate.png",
    tone: "blue",
    tagline: "Read structure like a pro.",
    topics: ["Technical Analysis", "Market Structure", "Liquidity", "Smart Money Concepts"],
  },
  {
    level: "Advanced",
    price: "$225",
    icon: "/icons/academy-advanced.png",
    tone: "purple",
    tagline: "Trade your own edge.",
    topics: ["Price Action", "Trading Psychology", "Risk Management", "Strategy Development"],
  },
] as const;

const TONE_CLASSES: Record<string, { badge: string; icon: string; glow: string }> = {
  green: {
    badge: "border-brand-green/30 bg-brand-green/10",
    icon: "text-brand-green",
    glow: "bg-brand-green/20",
  },
  blue: {
    badge: "border-brand-blue/30 bg-brand-blue/10",
    icon: "text-brand-blue",
    glow: "bg-brand-blue/20",
  },
  purple: {
    badge: "border-violet-400/30 bg-violet-400/10",
    icon: "text-violet-400",
    glow: "bg-violet-400/20",
  },
};

export function LearningPaths() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PATHS.map(({ level, price, icon, tone, tagline, topics }, i) => {
          const tones = TONE_CLASSES[tone];
          return (
            <SpotlightCard
              key={level}
              className="group transition-premium relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-premium)]"
            >
              {/* ambient glow, tinted per level */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${tones.glow} blur-[70px] transition-opacity group-hover:opacity-80`}
              />
              {/* faint grid texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />

              <div className="relative flex items-center justify-between">
                <span className="font-numeric text-xs text-text-faint">
                  Track {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-numeric text-lg font-semibold text-text">{price}</span>
              </div>

              <div className="relative mt-4 flex h-14 w-14 items-center justify-center">
                <Image src={icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
              </div>

              <h3 className="relative mt-5 font-heading text-xl font-semibold text-text">
                {level}
              </h3>
              <p className="relative mt-1.5 text-sm text-text-muted">{tagline}</p>

              <ul className="relative mt-6 flex flex-col gap-3 border-t border-border pt-6">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2.5 text-sm text-text">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 ${tones.icon}`} strokeWidth={1.75} />
                    {topic}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          );
        })}
      </Reveal>
    </section>
  );
}