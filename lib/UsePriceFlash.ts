"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks a numeric value and returns "up" / "down" for ~900ms right after it
 * changes, so components can flash a highlight — the visible cue that a
 * "live" number is actually refreshing, not just printed once.
 */
export function usePriceFlash(value: number | undefined) {
  const prev = useRef<number | undefined>(undefined);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (value === undefined) return;
    if (prev.current !== undefined && value !== prev.current) {
      setFlash(value > prev.current ? "up" : "down");
      const t = setTimeout(() => setFlash(null), 900);
      prev.current = value;
      return () => clearTimeout(t);
    }
    prev.current = value;
  }, [value]);

  return flash;
}