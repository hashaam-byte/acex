"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Calculator, TrendingUp, TrendingDown } from "lucide-react";
import { useLivePrices } from "@/lib/UseLivePrices";

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
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-blue/10 blur-[90px]"
        />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10">
              <Calculator className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-text">Trading Calculator</h3>
              <p className="text-xs text-text-faint">See it in real terms, at today&apos;s price.</p>
            </div>
          </div>

          <span className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-faint sm:flex">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-brand-cyan animate-pulse-slow" : "bg-text-faint"
              }`}
            />
            {isLive ? "Live price" : "Illustrative"}
          </span>
        </div>

        {/* asset picker */}
        <div className="relative mt-6 flex flex-wrap gap-2">
          {ASSETS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setAssetId(a.id)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                assetId === a.id
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-border text-text-muted hover:border-border-strong hover:text-text"
              }`}
            >
              {a.symbol}
            </button>
          ))}
        </div>

        {/* current price */}
        <div className="relative mt-5 flex items-baseline gap-2">
          <span className="font-numeric text-2xl font-semibold text-text">
            {loading && !price
              ? "—"
              : price
                ? `$${price.usd.toLocaleString(undefined, { maximumFractionDigits: price.usd < 10 ? 4 : 2 })}`
                : "—"}
          </span>
          {price && (
            <span
              className={`flex items-center gap-1 font-numeric text-xs font-medium ${
                isUp ? "text-brand-cyan" : "text-brand-red"
              }`}
            >
              {isUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {isUp ? "+" : ""}
              {price.usd_24h_change.toFixed(2)}% (24h)
            </span>
          )}
        </div>

        {/* calculator */}
        <div className="relative mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <label className="text-[11px] font-medium text-text-faint">
              {direction === "toCrypto" ? "You pay (USD)" : `You have (${asset.symbol})`}
            </label>
            <div className="mt-1.5 flex items-center rounded-xl border border-border bg-bg px-3.5 py-3">
              <span className="mr-1.5 text-sm text-text-faint">
                {direction === "toCrypto" ? "$" : ""}
              </span>
              <input
                type="number"
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full min-w-0 bg-transparent font-numeric text-sm text-text outline-none"
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
            className="mx-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-text-muted transition-colors hover:text-text sm:mt-5"
          >
            <ArrowUpDown className="h-4 w-4" strokeWidth={1.75} />
          </button>

          <div className="flex-1">
            <label className="text-[11px] font-medium text-text-faint">
              {direction === "toCrypto" ? `You get (${asset.symbol})` : "You get (USD)"}
            </label>
            <div className="mt-1.5 flex items-center rounded-xl border border-brand-blue/30 bg-brand-blue/5 px-3.5 py-3">
              <span className="mr-1.5 text-sm text-text-faint">
                {direction === "toUsd" ? "$" : ""}
              </span>
              <span className="font-numeric text-sm font-semibold text-text">
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

        <p className="relative mt-5 text-center text-[11px] text-text-faint">
          For illustration only — not financial advice. Prices update automatically every 45s.
        </p>
      </div>
    </section>
  );
}