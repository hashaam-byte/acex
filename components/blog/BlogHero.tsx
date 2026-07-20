const CATEGORIES = [
  "All",
  "Crypto",
  "Forex",
  "Stocks",
  "Trading Psychology",
  "Risk Management",
  "Market News",
  "Tutorials",
  "Weekly Analysis",
];

export function BlogHero() {
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
      <div className="relative mx-auto max-w-3xl px-6 pt-20 text-center lg:px-8 lg:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          Insights &amp; Market Notes
        </span>
        <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          From the <span className="text-brand-blue">Blog</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-text-muted">
          Strategy breakdowns, market updates, and lessons from inside the AceX community.
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 px-6 lg:px-8">
        {CATEGORIES.map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
              i === 0
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-border text-text-muted"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
}