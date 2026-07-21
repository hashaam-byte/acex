import { Reveal } from "@/components/ui/Reveal";

export function AcademyHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <span className="label-mono inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[11px] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
          structured_learning_paths
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          The <span className="text-brand-blue">Academy</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          A structured path for every level — from your first wallet to full strategy
          development. Move at your own pace, or follow the track we recommend for traders at
          your stage.
        </p>
      </Reveal>
    </section>
  );
}