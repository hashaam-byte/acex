import { Radio, BookOpenCheck, Target, Users2, GraduationCap } from "lucide-react";

const FEATURES = [
  {
    icon: Radio,
    title: "Live Market Analysis",
    description: "Real-time sessions with expert traders.",
  },
  {
    icon: BookOpenCheck,
    title: "Structured Courses",
    description: "Step-by-step learning from beginner to advanced.",
  },
  {
    icon: Target,
    title: "Proven Strategies",
    description: "Battle-tested frameworks that work in any market.",
  },
  {
    icon: Users2,
    title: "Community Support",
    description: "Connect, share, and grow with like-minded traders.",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    description: "Get guidance from experienced professionals.",
  },
];

export function FeatureStrip() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-5">
      {FEATURES.map(({ icon: Icon, title, description }) => (
        <div key={title} className="text-center sm:text-left">
          <Icon className="mx-auto h-5 w-5 text-brand-blue sm:mx-0" strokeWidth={1.75} />
          <h3 className="mt-3 text-sm font-semibold text-text">{title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-text-faint">{description}</p>
        </div>
      ))}
    </div>
  );
}
