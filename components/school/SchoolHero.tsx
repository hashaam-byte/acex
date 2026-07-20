import Image from "next/image";
import { Sparkles } from "lucide-react";

export function SchoolHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 pt-20 text-center lg:px-8 lg:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
          <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
          Coming Soon
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          AceX <span className="text-brand-blue">Trading School</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          Our vision extends beyond online education. We&apos;re building a physical trading
          academy where aspiring traders can learn, collaborate, and master the financial markets
          together.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <Image
            src="/school/campus.jpg"
            alt="AceX Trading School campus — a modern glass building, exterior at dusk"
            width={1600}
            height={1067}
            priority
            className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-1 sm:bottom-7 sm:left-7 sm:right-7">
            <p className="text-xs font-medium text-white/80">A World-Class Physical Campus</p>
            <p className="max-w-md text-sm text-white/95 sm:text-base">
              Where knowledge meets real-world trading experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}