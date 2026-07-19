import { Layers, Radio, Crown, Users2 } from "lucide-react";

const REASONS = [
  {
    icon: Layers,
    title: "Structured Learning",
    description: "Step-by-step path from beginner to pro trader.",
  },
  {
    icon: Radio,
    title: "Live Market Sessions",
    description: "Trade alongside experienced mentors in real time.",
  },
  {
    icon: Crown,
    title: "VIP Signals",
    description: "High-probability trade setups, delivered daily.",
    accent: true,
  },
  {
    icon: Users2,
    title: "Community Support",
    description: "Grow with like-minded traders worldwide.",
  },
];

export function WhyChoose() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Why Choose <span className="text-brand-blue">AceX</span>?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                  accent
                    ? "border-brand-green/30 bg-brand-green/10"
                    : "border-brand-blue/25 bg-brand-blue/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${accent ? "text-brand-green" : "text-brand-blue"}`}
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
