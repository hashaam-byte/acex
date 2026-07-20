import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#050816] px-8 py-20 text-center sm:px-16">
        {/* quiet, static glow — no color animation */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-blue/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] translate-x-1/4 translate-y-1/4 rounded-full bg-brand-cyan/15 blur-[100px]"
        />
        {/* faint grid, Apple-keynote style */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />

        <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          Start Today
        </p>
        <h2 className="relative mx-auto mt-4 max-w-xl font-heading text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
          Ready to start your trading journey?
        </h2>
        <p className="relative mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-white/55">
          Join a community of traders learning, trading, and growing with AceX.
        </p>

        <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/community"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050816] transition-transform hover:scale-[1.02]"
          >
            Join the Community
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/academy"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Start Learning
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}