import {
  LineChart,
  CandlestickChart,
  ShieldCheck,
  Brain,
  Coins,
  Waypoints,
} from "lucide-react";
import { FeatureStrip } from "./FeatureStrip";

const CARDS = [
  {
    icon: LineChart,
    title: "Forex Trading",
    description: "Learn to trade the world's largest financial market with confidence.",
    tone: "blue",
  },
  {
    icon: CandlestickChart,
    title: "Technical Analysis",
    description: "Master chart patterns, indicators, and market trends.",
    tone: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Protect your capital and manage risk like a professional.",
    tone: "blue",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description: "Develop the mindset and discipline of successful traders.",
    tone: "violet",
  },
  {
    icon: Coins,
    title: "Crypto Trading",
    description: "Understand crypto markets and trade digital assets strategically.",
    tone: "amber",
  },
  {
    icon: Waypoints,
    title: "Price Action",
    description: "Learn to read the market and make high-probability decisions.",
    tone: "cyan",
  },
] as const;

const TONE_CLASSES: Record<string, string> = {
  blue: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_24px_rgba(37,99,235,0.25)]",
  cyan: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan shadow-[0_0_24px_rgba(34,211,238,0.25)]",
  violet: "border-indigo-400/30 bg-indigo-400/10 text-indigo-400 shadow-[0_0_24px_rgba(129,140,248,0.25)]",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_24px_rgba(251,191,36,0.25)]",
};

export function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          What <span className="text-brand-blue">You&apos;ll</span> Learn
        </h2>
        <p className="mt-3 text-sm text-text-muted">
          Master the essential skills and strategies used by professional traders.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, description, tone }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${TONE_CLASSES[tone]}`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
          </div>
        ))}
      </div>

      <FeatureStrip />
    </section>
  );
}
