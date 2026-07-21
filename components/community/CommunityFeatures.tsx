import { Trophy, BarChart3, CalendarDays, Gift } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const FEATURES = [
  {
    icon: Trophy,
    title: "Trading Challenges",
    description: "Monthly challenges to test your discipline, not just your P&L.",
  },
  {
    icon: BarChart3,
    title: "Leaderboards",
    description: "See how your consistency stacks up against the community.",
  },
  {
    icon: CalendarDays,
    title: "Weekly Discussions",
    description: "Structured threads on strategy, psychology, and market outlook.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    description: "Bring a friend into the community and both of you earn perks.",
  },
];

export function CommunityFeatures() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            More Than <span className="text-brand-blue">a Chat Room</span>
          </h2>
          <p className="mt-3 text-sm text-text-muted">
            Structure and accountability, not just noise.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <SpotlightCard
              key={title}
              className="transition-premium rounded-3xl border border-border bg-surface p-6 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/10">
                <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-text">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{description}</p>
            </SpotlightCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}