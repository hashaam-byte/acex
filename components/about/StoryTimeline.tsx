const TIMELINE = [
  { year: "2022", text: "Started with crypto airdrops." },
  { year: "2023", text: "Began futures and perpetual trading." },
  { year: "2024", text: "Transitioned into professional crypto trading." },
  { year: "2025", text: "Developed a personal trading strategy." },
  { year: "2026", text: "Founded AceX Trading Academy." },
];

export function StoryTimeline() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            My <span className="text-brand-blue">Story</span>
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Five years from first airdrop to building a full academy.
          </p>
        </div>

        <ol className="relative mt-14 flex flex-col gap-10 pl-8 sm:pl-10">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent sm:left-[9px]"
          />
          {TIMELINE.map((step) => (
            <li key={step.year} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-brand-blue shadow-[0_0_0_4px_rgba(37,99,235,0.15)] sm:-left-10"
              />
              <p className="font-numeric text-sm font-semibold text-brand-cyan">{step.year}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
