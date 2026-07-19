import { Star, Users, Globe2, Clock, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Star, value: "4.9/5", label: "Student Rating" },
  { icon: Users, value: "160+", label: "Students" },
  { icon: Globe2, value: "20+", label: "Countries" },
  { icon: Clock, value: "150+", label: "Hours of Training" },
  { icon: TrendingUp, value: "95%", label: "Student Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
              <Icon className="h-4 w-4 text-brand-cyan" strokeWidth={2} />
              <p className="font-numeric text-2xl font-semibold text-text">{value}</p>
              <p className="text-xs text-text-faint">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
