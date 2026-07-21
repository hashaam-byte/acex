import Image from "next/image";
import { TrendingUp } from "lucide-react";

export function PortraitCard() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-premium)]">
      <Image
        src="/about/founder-portrait.jpg"
        alt="AceX — founder and lead mentor"
        fill
        priority
        sizes="(min-width: 1024px) 384px, 90vw"
        className="object-cover"
      />

      {/* scrim for legible overlay text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
      />

      {/* ambient brand glow, sits above the scrim, below the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[90px] mix-blend-screen"
      />

      <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
        Available for mentorship
      </span>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-heading text-lg font-semibold text-white">AceX</p>
        <p className="text-xs text-white/70">Founder &amp; Lead Mentor</p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-white/15 bg-black/30 px-3.5 py-2.5 backdrop-blur">
          <span className="text-[11px] font-medium text-white/70">Live P&amp;L (30d)</span>
          <span className="flex items-center gap-1 font-numeric text-xs font-semibold text-brand-cyan">
            <TrendingUp className="h-3.5 w-3.5" />
            +18.4%
          </span>
        </div>
      </div>
    </div>
  );
}