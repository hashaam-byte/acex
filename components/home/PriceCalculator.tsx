"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Calculator, TrendingUp, TrendingDown } from "lucide-react";
import { useLivePrices } from "@/lib/useLivePrices";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const ASSETS = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "ripple", symbol: "XRP" },
] as const;

export function PriceCalculator() {
  const { prices, isLive, loading } = useLivePrices();
  const [assetId, setAssetId] = useState<(typeof ASSETS)[number]["id"]>("bitcoin");
  const [direction, setDirection] = useState<"toCrypto" | "toUsd">("toCrypto");
  const [amount, setAmount] = useState("1000");

  const asset = ASSETS.find((a) => a.id === assetId)!;
  const price = prices[assetId];

  const result = useMemo(() => {
    const n = parseFloat(amount);
    if (!price || Number.isNaN(n)) return null;
    return direction === "toCrypto" ? n / price.usd : n * price.usd;
  }, [amount, direction, price]);

  const isUp = (price?.usd_24h_change ?? 0) >= 0;

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
      <Reveal>
        <div className="gradient-border rounded-[28px] p-[1px]">
          <SpotlightCard className="relative overflow-hidden rounded-[27px] border border-border bg-surface p-7 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/10 blur-[100px]"
            />

            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10">
                  <Calculator className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="label-mono text-[10px] text-brand-blue">{"// live calculator"}</p>
                  <h3 className="font-heading text-base font-semibold text-text">Trading Calculator</h3>
                </div>
              </div>

              <span className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-faint">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isLive ? "bg-brand-cyan animate-pulse-slow" : "bg-text-faint"
                  }`}
                />
                {isLive ? "Live price" : "Illustrative"}
              </span>
            </div>

            {/* asset picker — segmented control */}
            <div className="relative mt-6 inline-flex rounded-full border border-border bg-bg p-1">
              {ASSETS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAssetId(a.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    assetId === a.id
                      ? "bg-brand-blue text-white"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {a.symbol}
                </button>
              ))}
            </div>

            {/* current price — big ticker-style readout */}
            <div className="relative mt-6 flex items-baseline gap-3">
              <span className="font-numeric text-4xl font-semibold tabular-nums tracking-tight text-text sm:text-5xl">
                {loading && !price
                  ? "—"
                  : price
                    ? `$${price.usd.toLocaleString(undefined, { maximumFractionDigits: price.usd < 10 ? 4 : 2 })}`
                    : "—"}
              </span>
              {price && (
                <span
                  className={`flex items-center gap-1 rounded-full px-2 py-1 font-numeric text-xs font-semibold ${
                    isUp ? "bg-brand-cyan/10 text-brand-cyan" : "bg-brand-red/10 text-brand-red"
                  }`}
                >
                  {isUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {isUp ? "+" : ""}
                  {price.usd_24h_change.toFixed(2)}%
                </span>
              )}
            </div>

            {/* calculator */}
            <div className="relative mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <label className="label-mono text-[10px] text-text-faint">
                  {direction === "toCrypto" ? "you_pay (usd)" : `you_have (${asset.symbol.toLowerCase()})`}
                </label>
                <div className="mt-1.5 flex items-center rounded-2xl border border-border bg-bg px-4 py-3.5">
                  <span className="mr-1.5 text-sm text-text-faint">
                    {direction === "toCrypto" ? "$" : ""}
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full min-w-0 bg-transparent font-numeric text-base text-text outline-none"
                    placeholder="0"
                  />
                  {direction === "toUsd" && (
                    <span className="ml-1.5 text-sm text-text-faint">{asset.symbol}</span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDirection((d) => (d === "toCrypto" ? "toUsd" : "toCrypto"))}
                aria-label="Swap direction"
                className="transition-premium mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-text-muted hover:rotate-180 hover:text-brand-blue sm:mt-5"
              >
                <ArrowUpDown className="h-4 w-4" strokeWidth={1.75} />
              </button>

              <div className="flex-1">
                <label className="label-mono text-[10px] text-text-faint">
                  {direction === "toCrypto" ? `you_get (${asset.symbol.toLowerCase()})` : "you_get (usd)"}
                </label>
                <div className="mt-1.5 flex items-center rounded-2xl border border-brand-blue/30 bg-brand-blue/5 px-4 py-3.5">
                  <span className="mr-1.5 text-sm text-text-faint">
                    {direction === "toUsd" ? "$" : ""}
                  </span>
                  <span className="font-numeric text-base font-semibold text-text">
                    {result === null
                      ? "—"
                      : direction === "toCrypto"
                        ? result.toLocaleString(undefined, { maximumFractionDigits: 6 })
                        : result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                  {direction === "toCrypto" && (
                    <span className="ml-1.5 text-sm text-text-faint">{asset.symbol}</span>
                  )}
                </div>
              </div>
            </div>

            <p className="relative mt-6 text-center text-[11px] text-text-faint">
              For illustration only — not financial advice. Prices update automatically every 45s.
            </p>
          </SpotlightCard>
        </div>
      </Reveal>
    </section>
  );
}