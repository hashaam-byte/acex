"use client";

import { Bitcoin, Coins } from "lucide-react";
import { CandleChart } from "./CandleChart";
import { useLivePrices } from "@/lib/UseLivePrices";
import { usePriceFlash } from "@/lib/UsePriceFlash";

const STATIC_WATCHLIST = [
  { pair: "EUR/USD", price: "1.0845", up: true },
  { pair: "GBP/USD", price: "1.2716", up: false },
  { pair: "XAU/USD", price: "2,387.75", up: true },
  { pair: "NASDAQ", price: "18,567.19", up: true },
];

export function TradingDeviceMockup() {
  const { prices, isLive } = useLivePrices();
  const btc = prices.bitcoin;
  const eth = prices.ethereum;
  const btcFlash = usePriceFlash(btc?.usd);
  const ethFlash = usePriceFlash(eth?.usd);

  const watchlist = [
    ...STATIC_WATCHLIST.slice(0, 3),
    {
      pair: "BTC/USD",
      price: btc ? btc.usd.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "—",
      up: (btc?.usd_24h_change ?? 0) >= 0,
    },
    {
      pair: "ETH/USD",
      price: eth ? eth.usd.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "—",
      up: (eth?.usd_24h_change ?? 0) >= 0,
    },
    STATIC_WATCHLIST[3],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* floating coin badges */}
      <div className="absolute -left-3 -top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 bg-surface shadow-[var(--shadow-card)] sm:-left-6">
        <Bitcoin className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
      </div>
      <div className="absolute -right-2 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/30 bg-surface shadow-[var(--shadow-card)] sm:-right-4">
        <Coins className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
      </div>

      {/* Laptop */}
      <div className="relative rounded-2xl border border-border-strong bg-surface p-2.5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-1.5 px-1.5 pb-2">
          <span className="h-2 w-2 rounded-full bg-brand-red/70" />
          <span className="h-2 w-2 rounded-full bg-text-faint/40" />
          <span className="h-2 w-2 rounded-full bg-brand-cyan/60" />
          <div className="ml-3 flex gap-4 text-[10px] font-medium text-text-faint">
            <span className="text-text">Charts</span>
            <span>Markets</span>
            <span>News</span>
            <span>Calendar</span>
          </div>
          {isLive && (
            <span className="ml-auto mr-1.5 flex items-center gap-1 text-[8px] font-medium text-text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
              Live
            </span>
          )}
        </div>

        <div className="grid grid-cols-[110px_1fr] gap-2.5 rounded-xl bg-bg p-2.5">
          <div className="hidden sm:block">
            <p className="px-1 text-[9px] font-medium uppercase tracking-wide text-text-faint">
              Watchlist
            </p>
            <ul className="mt-1.5 flex flex-col gap-1">
              {watchlist.map((item) => (
                <li key={item.pair} className="flex items-center justify-between rounded-md px-1.5 py-1 text-[9.5px]">
                  <span className="text-text-muted">{item.pair}</span>
                  <span className={`font-numeric ${item.up ? "text-brand-cyan" : "text-brand-red"}`}>
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-lg border border-border bg-surface">
            <div className="flex items-center justify-between px-3 pt-2.5">
              <div>
                <p className="text-[9px] text-text-faint">BTC / USD</p>
                <p
                  className={`font-numeric rounded text-sm font-semibold text-text ${
                    btcFlash === "up" ? "flash-up" : btcFlash === "down" ? "flash-down" : ""
                  }`}
                >
                  {btc ? btc.usd.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "—"}
                  <span
                    className={`ml-1.5 text-[10px] font-medium ${
                      (btc?.usd_24h_change ?? 0) >= 0 ? "text-brand-cyan" : "text-brand-red"
                    }`}
                  >
                    {btc ? `${btc.usd_24h_change >= 0 ? "+" : ""}${btc.usd_24h_change.toFixed(2)}%` : ""}
                  </span>
                </p>
              </div>
              <div className="hidden gap-1 sm:flex">
                {["1D", "1W", "1M", "1Y", "All"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded px-1.5 py-0.5 text-[8px] font-medium ${
                      i === 0 ? "bg-brand-blue/15 text-brand-blue" : "text-text-faint"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-[92px] px-1.5 pt-1 text-text">
              <CandleChart />
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-4 gap-1.5 border-t border-border pt-2">
            <DeviceStat label="Total Balance" value="$24,580.75" tone="up" />
            <DeviceStat label="Open P&amp;L" value="+$1,250.34" tone="up" />
            <DeviceStat label="Win Rate" value="68.7%" tone="neutral" />
            <DeviceStat label="Active Trades" value="7" tone="neutral" />
          </div>
        </div>

        <div className="mx-auto -mb-2.5 mt-1.5 h-2 w-[86%] rounded-b-xl bg-border-strong/60" />
      </div>

      {/* Phone */}
      <div className="absolute -bottom-8 -right-4 w-[108px] rounded-[20px] border border-border-strong bg-surface p-1.5 shadow-[var(--shadow-card)] sm:-right-10 sm:w-[124px]">
        <div className="rounded-[14px] bg-bg p-2">
          <p className="text-[8px] text-text-faint">ETH / USD</p>
          <p
            className={`font-numeric rounded text-[13px] font-semibold text-text ${
              ethFlash === "up" ? "flash-up" : ethFlash === "down" ? "flash-down" : ""
            }`}
          >
            {eth ? eth.usd.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "—"}
            <span
              className={`ml-1 text-[8px] font-medium ${
                (eth?.usd_24h_change ?? 0) >= 0 ? "text-brand-cyan" : "text-brand-red"
              }`}
            >
              {eth ? `${eth.usd_24h_change >= 0 ? "+" : ""}${eth.usd_24h_change.toFixed(2)}%` : ""}
            </span>
          </p>
          <div className="mt-1 h-[46px] text-text">
            <CandleChart />
          </div>
          <div className="mt-1.5 flex gap-1">
            <span className="flex-1 rounded-md bg-brand-red/15 py-1 text-center text-[8px] font-semibold text-brand-red">
              Sell
            </span>
            <span className="flex-1 rounded-md bg-brand-blue py-1 text-center text-[8px] font-semibold text-white">
              Buy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceStat({ label, value, tone }: { label: string; value: string; tone: "up" | "down" | "neutral" }) {
  return (
    <div className="rounded-md bg-surface px-1.5 py-1.5">
      <p className="truncate text-[7.5px] text-text-faint">{label}</p>
      <p
        className={`font-numeric text-[10px] font-semibold ${
          tone === "up" ? "text-brand-cyan" : tone === "down" ? "text-brand-red" : "text-text"
        }`}
      >
        {value}
      </p>
    </div>
  );
}