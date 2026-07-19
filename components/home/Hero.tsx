import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { CandleChart } from "./CandleChart";
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

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-20">
        {/* Copy column */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Learn Forex &middot; Crypto &middot; Stocks
          </span>

          <h1 className="mt-6 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl">
            Learn.{" "}
            <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
              Trade.
            </span>
            <br />
            Grow.
          </h1>

          <p className="mt-6 max-w-[52ch] text-[15.5px] leading-relaxed text-text-muted">
            AceX Trading Academy is more than an academy — it&apos;s a community of ambitious
            individuals committed to mastering the financial markets. From complete beginners to
            seasoned traders, we provide structured education, proven frameworks, live market
            analysis, and ongoing mentorship.
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

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-text-faint">
            <Metric value="4.9/5" label="Student Rating" />
            <Metric value="160+" label="Students" />
            <Metric value="20+" label="Countries" />
            <Metric value="150+" label="Hours of Training" />
          </div>
        </div>

        {/* Chart panel */}
        <div className="relative z-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="text-xs text-text-faint">BTC / USD</p>
                <p className="font-numeric text-lg font-semibold text-text">
                  68,240.12
                  <span className="ml-2 text-xs font-medium text-brand-cyan">+2.48%</span>
                </p>
              </div>
              <div className="flex gap-1.5">
                {["1H", "1D", "1W"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-md px-2 py-1 text-[11px] font-medium ${
                      i === 1
                        ? "bg-brand-blue/15 text-brand-blue"
                        : "text-text-faint"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-[220px] px-4 pt-4 text-text">
              <CandleChart />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <MiniStat label="Price Action" value="High Conviction" />
            <MiniStat label="Risk Management" value="1.5% / Trade" />
          </div>
        </div>
      </div>

      <MarketTicker />
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="font-numeric text-sm font-semibold text-text">{value}</span>
      <span>{label}</span>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-4 py-3">
      <p className="text-[11px] text-text-faint">{label}</p>
      <p className="mt-1 font-numeric text-sm font-semibold text-text">{value}</p>
    </div>
  );
}
