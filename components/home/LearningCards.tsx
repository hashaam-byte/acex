import {
  LineChart,
  CandlestickChart,
  ShieldCheck,
  Brain,
  Coins,
  Waypoints,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureStrip } from "./FeatureStrip";

const TONE_CLASSES: Record<string, string> = {
  blue: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
  cyan: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  violet: "border-indigo-400/30 bg-indigo-400/10 text-indigo-400",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-400",
};

export function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="label-mono text-xs text-brand-blue">{"// curriculum"}</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          What <span className="text-brand-blue">You&apos;ll</span> Learn
        </h2>
        <p className="mt-3 text-sm text-text-muted">
          Master the essential skills and strategies used by professional traders.
        </p>
      </Reveal>

      {/* Bento grid — deliberately asymmetric instead of a uniform 3x2 */}
      <Reveal delay={100} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <BentoCard
          icon={LineChart}
          title="Forex Trading"
          description="Learn to trade the world's largest financial market with confidence — majors, minors, and exotics."
          tone="blue"
          span="lg:col-span-3"
          large
        />
        <BentoCard
          icon={CandlestickChart}
          title="Technical Analysis"
          description="Master chart patterns, indicators, and market trends."
          tone="cyan"
          span="lg:col-span-3"
          large
        />
        <BentoCard
          icon={ShieldCheck}
          title="Risk Management"
          description="Protect your capital and manage risk like a professional."
          tone="blue"
          span="lg:col-span-2"
        />
        <BentoCard
          icon={Brain}
          title="Trading Psychology"
          description="Develop the mindset of successful traders."
          tone="violet"
          span="lg:col-span-2"
        />
        <BentoCard
          icon={Coins}
          title="Crypto Trading"
          description="Trade digital assets strategically."
          tone="amber"
          span="lg:col-span-2"
        />

        {/* full-width banner card for variety */}
        <SpotlightCard className="lg:col-span-6 transition-premium flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface p-6 hover:border-border-strong hover:shadow-[var(--shadow-premium)] sm:flex-row sm:items-center">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${TONE_CLASSES.cyan}`}
          >
            <Waypoints className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-base font-semibold text-text">Price Action</h3>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              Learn to read the market and make high-probability decisions — no lagging indicators required.
            </p>
          </div>
          <MiniSparkline />
        </SpotlightCard>
      </Reveal>

      <FeatureStrip />
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  description,
  tone,
  span,
  large,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  tone: string;
  span: string;
  large?: boolean;
}) {
  return (
    <SpotlightCard
      className={`group transition-premium rounded-3xl border border-border bg-surface hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-premium)] ${span} ${
        large ? "p-7" : "p-6"
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${TONE_CLASSES[tone]}`}>
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className={`mt-5 font-heading font-semibold text-text ${large ? "text-lg" : "text-base"}`}>
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
    </SpotlightCard>
  );
}

function MiniSparkline() {
  return (
    <svg viewBox="0 0 160 48" className="hidden h-10 w-32 shrink-0 text-brand-cyan sm:block">
      <polyline
        points="0,36 20,30 40,34 60,18 80,24 100,10 120,16 140,4 160,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}