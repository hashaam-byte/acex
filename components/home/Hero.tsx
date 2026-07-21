import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { TradingDeviceMockup } from "./TradingDeviceMockup";
import { FloatingChip } from "./FloatingChip";
import { TrustAvatars } from "./TrustAvatars";
import { MarketTicker } from "./MarketTicker";

export function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden">
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

      {/* faint grid texture, matching the other page heroes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse 80% 70% at 20% 20%, black, transparent)",
        }}
      />

      {/* faint decorative candlestick silhouette along the left edge */}
      <svg
        aria-hidden
        viewBox="0 0 120 400"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-[120px] text-brand-blue/[0.08] lg:block"
      >
        {[
          { x: 8, y: 60, h: 90 },
          { x: 28, y: 140, h: 60 },
          { x: 48, y: 40, h: 130 },
          { x: 68, y: 180, h: 70 },
          { x: 88, y: 100, h: 110 },
          { x: 108, y: 220, h: 50 },
        ].map((bar) => (
          <rect key={bar.x} x={bar.x} y={bar.y} width="8" height={bar.h} rx="1.5" fill="currentColor" />
        ))}
      </svg>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        {/* Copy column */}
        <div className="relative z-10">
          <span className="label-mono inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[11px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
            markets open · forex / crypto / stocks
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
          {/* Globe: sits behind the mockup, dimmed, slowly spinning */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 lg:-top-32">
            <Image
              src="/hero/globe.png"
              alt=""
              aria-hidden
              width={640}
              height={640}
              priority
              className="animate-spin-slow w-[440px] max-w-none opacity-0 mix-blend-screen dark:opacity-60 sm:w-[520px] lg:w-[560px]"
            />
          </div>

          <FloatingChip symbol="EUR/USD" change="+0.32%" up className="-left-4 -top-6 lg:-left-8" />
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