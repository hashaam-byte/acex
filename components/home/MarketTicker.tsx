const TICKER_ITEMS = [
  { symbol: "BTC/USD", value: "68,240", change: "+2.48%", up: true },
  { symbol: "ETH/USD", value: "3,412", change: "+1.63%", up: true },
  { symbol: "EUR/USD", value: "1.0842", change: "+0.87%", up: true },
  { symbol: "XAU/USD", value: "2,381", change: "+1.32%", up: true },
  { symbol: "NASDAQ", value: "18,204", change: "+1.24%", up: true },
  { symbol: "GBP/USD", value: "1.2716", change: "-0.34%", up: false },
  { symbol: "SOL/USD", value: "162.90", change: "+3.91%", up: true },
  { symbol: "S&P 500", value: "5,624", change: "+0.62%", up: true },
];

export function MarketTicker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/60">
      <div className="flex w-max animate-ticker">
        {loop.map((item, i) => (
          <div
            key={`${item.symbol}-${i}`}
            className="flex shrink-0 items-center gap-2 px-6 py-2.5 text-xs"
          >
            <span className="font-numeric font-medium text-text-muted">{item.symbol}</span>
            <span className="font-numeric text-text">{item.value}</span>
            <span
              className={`font-numeric font-medium ${
                item.up ? "text-brand-cyan" : "text-brand-red"
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
