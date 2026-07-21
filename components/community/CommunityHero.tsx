import { Reveal } from "@/components/ui/Reveal";

export function CommunityHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-brand-cyan/15 blur-[130px]"
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
      <Reveal className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Connect. Learn. Grow Together.
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Join a <span className="text-brand-blue">Global Community</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          Thousands of traders across 20+ countries, sharing setups, reviewing trades, and holding
          each other accountable — every single day.
        </p>
      </Reveal>
    </section>
  );
}