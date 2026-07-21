import { Star, Users, Globe2, Clock, Trophy } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { icon: Star, value: "4.9/5", label: "Student Rating", tone: "text-amber-400" },
  { icon: Users, value: "160+", label: "Students", tone: "text-brand-blue" },
  { icon: Globe2, value: "20+", label: "Countries", tone: "text-brand-cyan" },
  { icon: Clock, value: "150+", label: "Hours of Training", tone: "text-brand-blue" },
  { icon: Trophy, value: "95%", label: "Student Satisfaction", tone: "text-amber-400" },
] as const;

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Reveal>
        <p className="label-mono text-center text-xs text-brand-blue">{"// live snapshot"}</p>
        <h2 className="mt-2 text-center font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          Trusted By <span className="text-brand-blue">Future Traders</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <SpotlightCard className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {STATS.map(({ icon: Icon, value, label, tone }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-2 px-4 py-8 text-center ${
                  i !== 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""
                } ${i === STATS.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <Icon className={`h-5 w-5 ${tone}`} strokeWidth={1.75} />
                <p className="font-numeric text-2xl font-semibold text-text">{value}</p>
                <p className="text-xs text-text-faint">{label}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}