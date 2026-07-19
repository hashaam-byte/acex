import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-hero)] px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]"
        />
        <h2 className="relative font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Start Your Trading Journey?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm text-white/80">
          Join thousands of traders who are learning, trading, and growing with AceX.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/community"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-dim transition-transform hover:scale-[1.03]"
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
