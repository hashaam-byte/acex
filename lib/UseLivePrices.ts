"use client";

import { useEffect, useRef, useState } from "react";

export type LivePrice = {
  usd: number;
  usd_24h_change: number;
};

export type LivePrices = Record<string, LivePrice>;

const COINGECKO_IDS = ["bitcoin", "ethereum", "solana", "ripple"] as const;

// Fallback values shown instantly and used if the live fetch fails — keeps the
// UI populated (no layout jump, no blank state) rather than silently breaking
// if CoinGecko is unreachable, rate-limited, or the network is offline.
const FALLBACK: LivePrices = {
  bitcoin: { usd: 68240, usd_24h_change: 2.48 },
  ethereum: { usd: 3412, usd_24h_change: 1.63 },
  solana: { usd: 162.9, usd_24h_change: 3.91 },
  ripple: { usd: 0.62, usd_24h_change: -0.9 },
};

const REFRESH_MS = 45_000;

/**
 * Live crypto prices, refetched on an interval. Falls back to static
 * illustrative values (and flags `isLive: false`) if the API call fails, so
 * the UI never shows a broken or empty state.
 */
export function useLivePrices() {
  const [prices, setPrices] = useState<LivePrices>(FALLBACK);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    async function fetchPrices() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${COINGECKO_IDS.join(
            ","
          )}&vs_currencies=usd&include_24hr_change=true`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`CoinGecko responded ${res.status}`);
        const data = (await res.json()) as LivePrices;
        if (!mounted.current) return;
        setPrices((prev) => ({ ...prev, ...data }));
        setIsLive(true);
        setLastUpdated(new Date());
      } catch {
        // network blocked, offline, or rate-limited — keep showing fallback/last-known values
        if (mounted.current) setIsLive(false);
      } finally {
        if (mounted.current) setLoading(false);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, REFRESH_MS);
    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return { prices, isLive, loading, lastUpdated };
}