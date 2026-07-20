import { Users2, Globe2, MessagesSquare, Clock3 } from "lucide-react";

const STATS = [
  { icon: Users2, value: "160+", label: "Active Members" },
  { icon: Globe2, value: "20+", label: "Countries" },
  { icon: MessagesSquare, value: "50+", label: "Weekly Discussions" },
  { icon: Clock3, value: "24/7", label: "Community Support" },
];

export function CommunityStats() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="transition-premium flex flex-col items-center gap-2.5 rounded-3xl border border-border bg-surface px-4 py-7 text-center hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
          >
            <Icon className="h-5 w-5 text-brand-cyan" strokeWidth={1.75} />
            <p className="font-numeric text-2xl font-semibold text-text">{value}</p>
            <p className="text-xs text-text-faint">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}