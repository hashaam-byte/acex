import {
  LineChart,
  CandlestickChart,
  ShieldCheck,
  Brain,
  Coins,
  Waypoints,
} from "lucide-react";

const CARDS = [
  {
    icon: LineChart,
    title: "Forex Trading",
    description: "Trade the world's largest financial market with confidence.",
  },
  {
    icon: CandlestickChart,
    title: "Technical Analysis",
    description: "Master chart patterns, indicators, and market trends.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Protect your capital and trade like a professional.",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description: "Develop the mindset of a consistently successful trader.",
  },
  {
    icon: Coins,
    title: "Crypto Trading",
    description: "Navigate crypto markets and trade digital assets.",
  },
  {
    icon: Waypoints,
    title: "Price Action",
    description: "Read the market and make high-probability decisions.",
  },
];

export function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          What You&apos;ll <span className="text-brand-blue">Learn</span>
        </h2>
        <p className="mt-3 text-sm text-text-muted">
          Master the essential skills and strategies used by professional traders.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)]">
              <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
