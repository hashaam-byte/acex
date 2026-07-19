import { Star, Users, Globe2, Clock, Trophy } from "lucide-react";

const STATS = [
  { icon: Star, value: "4.9/5", label: "Student Rating", tone: "text-amber-400" },
  { icon: Users, value: "160+", label: "Students", tone: "text-brand-blue" },
  { icon: Globe2, value: "20+", label: "Countries", tone: "text-brand-cyan" },
  { icon: Clock, value: "150+", label: "Hours of Training", tone: "text-brand-blue" },
  { icon: Trophy, value: "95%", label: "Student Satisfaction", tone: "text-amber-400" },
] as const;

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          Trusted By <span className="text-brand-blue">Future Traders</span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map(({ icon: Icon, value, label, tone }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-7 text-center"
            >
              <Icon className={`h-5 w-5 ${tone}`} strokeWidth={1.75} />
              <p className="font-numeric text-2xl font-semibold text-text">{value}</p>
              <p className="text-xs text-text-faint">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
