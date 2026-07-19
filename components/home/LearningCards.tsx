import Image from "next/image";
import { FeatureStrip } from "./FeatureStrip";

const CARDS = [
  {
    icon: "/icons/forex.png",
    title: "Forex Trading",
    description: "Learn to trade the world's largest financial market with confidence.",
  },
  {
    icon: "/icons/candlestick.png",
    title: "Technical Analysis",
    description: "Master chart patterns, indicators, and market trends.",
  },
  {
    icon: "/icons/shield.png",
    title: "Risk Management",
    description: "Protect your capital and manage risk like a professional.",
  },
  {
    icon: "/icons/brain.png",
    title: "Trading Psychology",
    description: "Develop the mindset and discipline of successful traders.",
  },
  {
    icon: "/icons/crypto.png",
    title: "Crypto Trading",
    description: "Understand crypto markets and trade digital assets strategically.",
  },
  {
    icon: "/icons/price-action.png",
    title: "Price Action",
    description: "Learn to read the market and make high-probability decisions.",
  },
];

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
        {CARDS.map(({ icon, title, description }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/10 blur-[50px] transition-opacity group-hover:opacity-80"
            />
            <div className="relative flex h-14 w-14 items-center justify-center">
              <Image src={icon} alt="" width={64} height={64} className="h-full w-full object-contain" />
            </div>
            <h3 className="relative mt-4 font-heading text-base font-semibold text-text">{title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
          </div>
        ))}
      </div>

      <FeatureStrip />
    </section>
  );
}