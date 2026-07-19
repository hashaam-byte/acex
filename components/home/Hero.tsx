import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle, BadgeCheck } from "lucide-react";
import { TradingDeviceMockup } from "./TradingDeviceMockup";
import { FloatingChip } from "./FloatingChip";
import { TrustAvatars } from "./TrustAvatars";
import { MarketTicker } from "./MarketTicker";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-120px] h-[420px] w-[420px] rounded-full bg-brand-blue/20 blur-[120px] animate-pulse-slow dark:bg-brand-blue/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-brand-cyan/15 blur-[120px] animate-pulse-slow dark:bg-brand-cyan/20"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        {/* Copy column */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
            <BadgeCheck className="h-3.5 w-3.5 text-brand-cyan" />
            Learn Forex &middot; Crypto &middot; Stocks
          </span>

          <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
            <span className="block text-text">Learn.</span>
            <span className="block text-brand-blue">Trade.</span>
            <span className="block text-brand-cyan">Grow.</span>
          </h1>

          <p className="mt-6 max-w-[50ch] text-[15.5px] leading-relaxed text-text-muted">
            AceX Trading Academy is more than an academy — it&apos;s a community of ambitious
            individuals committed to mastering the financial markets. From complete beginners to
            seasoned traders, we provide structured education, proven trading frameworks, live
            market analysis, and ongoing mentorship.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--glow-blue)] transition-all hover:bg-brand-blue-dim"
            >
              Join the Community
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:bg-surface-2"
            >
              <PlayCircle className="h-4 w-4" />
              Start Learning Now
            </Link>
          </div>

          <div className="mt-10">
            <TrustAvatars />
          </div>
        </div>

        {/* Device mockup column */}
        <div className="relative z-10">
          {/* Globe: sits behind the mockup, dimmed and blended into the dark background */}
          <Image
            src="/hero/globe.png"
            alt=""
            aria-hidden
            width={640}
            height={640}
            priority
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 w-[440px] max-w-none -translate-x-1/2 opacity-0 mix-blend-screen dark:opacity-60 sm:w-[520px] lg:-top-32 lg:w-[560px]"
          />

          <FloatingChip symbol="EUR/USD" change="+0.32%" up className="-left-4 -top-6 lg:-left-8" />
          <FloatingChip symbol="BTC/USD" change="+1.35%" up className="-right-2 -top-10 lg:-right-6" />
          <FloatingChip symbol="GBP/USD" change="-0.15%" up={false} className="-left-6 bottom-16 lg:-left-10" />

          <div className="pt-8">
            <TradingDeviceMockup />
          </div>
        </div>
      </div>

      <MarketTicker />
    </section>
  );
}
