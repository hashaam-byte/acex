import { ChevronRight, ChevronDown } from "lucide-react";

const TIMELINE = [
  {
    year: "2022",
    title: "The Beginning",
    text: "Stepped into the world of cryptocurrency through airdrops, testnets, and blockchain reward programs, building a strong foundation in the crypto ecosystem and learning how decentralized technologies work.",
  },
  {
    year: "2023",
    title: "Entering the Market",
    text: "Began actively trading the crypto futures and perpetual markets, studying market structure, technical analysis, and risk management while gaining real trading experience.",
  },
  {
    year: "2024",
    title: "Reinvention",
    text: "Made the decision to fully transition from airdrops into professional crypto trading, focusing entirely on developing consistency, discipline, and long-term profitability.",
  }, 
  {
    year: "2025",
    title: "Building My Edge",
    text: "Refined my trading philosophy, revised my overall trading approach, and developed my own trading strategy based on market structure, price action, and disciplined risk management.",
  },
  {
    year: "2026",
    title: "Birth of AceX",
    text: "Founded AceX Trading Academy with a mission to educate, mentor, and build a thriving community where traders can learn, grow, and achieve financial freedom together.",
  },
];

export function StoryTimeline() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            My <span className="text-brand-blue">Story</span>
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Five years from first airdrop to building a full academy.
          </p>
        </div>
 
        <div className="mt-14 flex flex-col items-stretch lg:flex-row lg:items-center">
          {TIMELINE.map((step, i) => (
            <div key={step.year} className="flex flex-col items-center lg:flex-1 lg:flex-row">
              <div className="transition-premium w-full rounded-3xl border border-border bg-surface p-5 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
                <span className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1 font-numeric text-xs font-semibold text-brand-blue">
                  {step.year}
                </span>
                <h3 className="mt-3 font-heading text-[15px] font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{step.text}</p>
              </div>
 
              {i < TIMELINE.length - 1 && (
                <div className="flex items-center justify-center py-2 lg:px-2 lg:py-0">
                  <ChevronDown className="h-4 w-4 shrink-0 text-brand-cyan lg:hidden" strokeWidth={2} />
                  <ChevronRight
                    className="hidden h-4 w-4 shrink-0 text-brand-cyan lg:block"
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}