import { Crown } from "lucide-react";

export function VipHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-amber-300/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-1.5 text-xs font-medium text-amber-300">
          <Crown className="h-3.5 w-3.5" />
          Exclusive High-Probability Setups
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          AceX <span className="text-amber-300">VIP</span> Membership
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          Daily signals, live trading sessions, and direct mentorship — for traders ready to move
          from learning to executing with an edge.
        </p>
      </div>
    </section>
  );
}