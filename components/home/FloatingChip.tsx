export function FloatingChip({
  symbol,
  change,
  up,
  className = "",
}: {
  symbol: string;
  change: string;
  up: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden items-center gap-2 rounded-xl border border-border-strong bg-surface/95 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur sm:flex ${className}`}
    >
      <div>
        <p className="text-[9px] font-medium text-text-faint">{symbol}</p>
        <p
          className={`font-numeric text-[11px] font-semibold ${
            up ? "text-brand-cyan" : "text-brand-red"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
}
