"use client";

import { useLivePrices } from "@/lib/UseLivePrices";

// Forex/index data kept static — free, no-key live feeds for these don't
// exist the way they do for crypto. Clearly illustrative, blended with the
// genuinely live crypto prices below.
const STATIC_ITEMS = [
  { symbol: "EUR/USD", value: "1.0842", change: "+0.87%", up: true },
  { symbol: "XAU/USD", value: "2,381", change: "+1.32%", up: true },
  { symbol: "NASDAQ", value: "18,204", change: "+1.24%", up: true },
  { symbol: "GBP/USD", value: "1.2716", change: "-0.34%", up: false },
  { symbol: "S&P 500", value: "5,624", change: "+0.62%", up: true },
];

const CRYPTO_MAP = [
  { id: "bitcoin", symbol: "BTC/USD" },
  { id: "ethereum", symbol: "ETH/USD" },
  { id: "solana", symbol: "SOL/USD" },
  { id: "ripple", symbol: "XRP/USD" },
];

export function MarketTicker() {
  const { prices, isLive } = useLivePrices();

  const cryptoItems = CRYPTO_MAP.map(({ id, symbol }) => {
    const p = prices[id];
    if (!p) return null;
    const value = p.usd >= 100 ? p.usd.toLocaleString(undefined, { maximumFractionDigits: 0 }) : p.usd.toFixed(2);
    const change = `${p.usd_24h_change >= 0 ? "+" : ""}${p.usd_24h_change.toFixed(2)}%`;
    return { symbol, value, change, up: p.usd_24h_change >= 0 };
  }).filter(Boolean) as { symbol: string; value: string; change: string; up: boolean }[];

  const items = [...cryptoItems, ...STATIC_ITEMS];
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/60">
      <div className="flex w-max animate-ticker">
        {loop.map((item, i) => (
          <div key={`${item.symbol}-${i}`} className="flex shrink-0 items-center gap-2 px-6 py-2.5 text-xs">
            <span className="font-numeric font-medium text-text-muted">{item.symbol}</span>
            <span className="font-numeric text-text">{item.value}</span>
            <span className={`font-numeric font-medium ${item.up ? "text-brand-cyan" : "text-brand-red"}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>

      {isLive && (
        <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 rounded-full bg-bg/80 px-2 py-1 text-[10px] font-medium text-text-faint backdrop-blur sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
          Live
        </span>
      )}
    </div>
  );
}