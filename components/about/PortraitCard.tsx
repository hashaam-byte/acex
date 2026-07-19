import Image from "next/image";
import { TrendingUp } from "lucide-react";

/**
 * Placeholder for a real founder portrait. Built from brand elements (logo
 * mark, monogram, chart texture) rather than a fabricated "photo" of a
 * person who doesn't exist — swap the commented block below for a real
 * <Image src="/about/founder.jpg" /> when a photo is available.
 */
export function PortraitCard() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-bg shadow-[var(--shadow-card)]">
      {/* faint grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[90px]"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
        <Image
          src="/logo/acex-mark.png"
          alt="AceX"
          width={88}
          height={88}
          className="h-20 w-20"
        />
        <div>
          <p className="font-heading text-lg font-semibold text-text">AceX</p>
          <p className="text-xs text-text-faint">Founder &amp; Lead Mentor</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border-strong bg-surface/90 px-3.5 py-2.5 backdrop-blur">
        <span className="text-[11px] font-medium text-text-muted">Live P&amp;L (30d)</span>
        <span className="flex items-center gap-1 font-numeric text-xs font-semibold text-brand-cyan">
          <TrendingUp className="h-3.5 w-3.5" />
          +18.4%
        </span>
      </div>
    </div>
  );
}
