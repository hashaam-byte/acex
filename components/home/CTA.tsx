import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 text-center shadow-[0_0_80px_rgba(37,99,235,0.35)] sm:px-16">
        {/* animated brand gradient backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(120deg,#2563EB,#22D3EE,#2563EB)]"
        />
        {/* soft top highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_60%)]"
        />
        {/* sparkle accents */}
        <Sparkles
          aria-hidden
          className="animate-twinkle absolute left-[12%] top-8 h-4 w-4 text-white/70"
          style={{ animationDelay: "0.3s" }}
        />
        <Sparkles
          aria-hidden
          className="animate-twinkle absolute right-[16%] top-14 h-3 w-3 text-white/60"
          style={{ animationDelay: "1.1s" }}
        />
        <Sparkles
          aria-hidden
          className="animate-twinkle absolute bottom-10 left-[22%] h-3.5 w-3.5 text-white/50"
          style={{ animationDelay: "1.7s" }}
        />

        <span className="relative inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Limited Onboarding Spots This Month
        </span>

        <h2 className="relative mt-5 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Start Your Trading Journey?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm text-white/85">
          Join thousands of traders who are learning, trading, and growing with AceX.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/community"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dim shadow-lg shadow-black/10 transition-transform hover:scale-[1.04]"
          >
            Join the Community
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/academy"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </section>
  );
}