export function AcademyHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[130px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Structured Learning Paths
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          The <span className="text-brand-blue">Academy</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          A structured path for every level — from your first wallet to full strategy
          development. Move at your own pace, or follow the track we recommend for traders at
          your stage.
        </p>
      </div>
    </section>
  );
}
