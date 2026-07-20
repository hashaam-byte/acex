"use client";

/**
 * Coded (not rasterized) candlestick chart so it repaints correctly across
 * light/dark themes. Bullish candles use brand blue/cyan instead of the
 * conventional green, matching the rest of the site's palette.
 */

type Candle = { x: number; open: number; close: number; high: number; low: number };

const CANDLES: Candle[] = [
  { x: 0, open: 210, close: 190, high: 216, low: 184 },
  { x: 1, open: 190, close: 198, high: 204, low: 182 },
  { x: 2, open: 198, close: 172, high: 202, low: 166 },
  { x: 3, open: 172, close: 180, high: 186, low: 164 },
  { x: 4, open: 180, close: 150, high: 184, low: 144 },
  { x: 5, open: 150, close: 160, high: 166, low: 140 },
  { x: 6, open: 160, close: 132, high: 164, low: 126 },
  { x: 7, open: 132, close: 142, high: 148, low: 122 },
  { x: 8, open: 142, close: 112, high: 146, low: 106 },
  { x: 9, open: 112, close: 120, high: 128, low: 100 },
  { x: 10, open: 120, close: 92, high: 124, low: 86 },
  { x: 11, open: 92, close: 102, high: 110, low: 80 },
  { x: 12, open: 102, close: 70, high: 106, low: 64 },
  { x: 13, open: 70, close: 80, high: 88, low: 58 },
  { x: 14, open: 80, close: 48, high: 84, low: 42 },
];

const STEP = 34;
const CANDLE_W = 14;

export function CandleChart() {
  const width = CANDLES.length * STEP + 20;
  const height = 240;

  const linePoints = CANDLES.map((c, i) => {
    const cx = 20 + i * STEP + CANDLE_W / 2;
    return `${cx},${c.close}`;
  }).join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Illustrative uptrending candlestick chart"
    >
      <defs>
        <linearGradient id="trendLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[40, 90, 140, 190].map((y) => (
        <line key={y} x1="0" y1={y} x2={width} y2={y} stroke="currentColor" className="text-border" strokeWidth="1" />
      ))}

      <polygon points={`20,${height} ${linePoints} ${width - 20},${height}`} fill="url(#areaFill)" />

      {CANDLES.map((c, i) => {
        const cx = 20 + i * STEP;
        const isUp = c.close < c.open;
        const bodyTop = Math.min(c.open, c.close);
        const bodyHeight = Math.max(Math.abs(c.close - c.open), 4);
        return (
          <g key={c.x} className="animate-candle" style={{ animationDelay: `${i * 55}ms` }}>
            <line
              x1={cx + CANDLE_W / 2}
              x2={cx + CANDLE_W / 2}
              y1={c.high}
              y2={c.low}
              stroke={isUp ? "#22D3EE" : "#F43F5E"}
              strokeWidth="1.5"
              opacity="0.8"
            />
            <rect
              x={cx}
              y={bodyTop}
              width={CANDLE_W}
              height={bodyHeight}
              rx="2"
              fill={isUp ? "#2563EB" : "#F43F5E"}
              opacity={isUp ? "0.9" : "0.7"}
            />
          </g>
        );
      })}

      <polyline
        points={linePoints}
        fill="none"
        stroke="url(#trendLine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}