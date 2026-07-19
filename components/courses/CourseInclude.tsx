import { PlayCircle, FileText, ClipboardList, HelpCircle, Radio, Award } from "lucide-react";

const INCLUDES = [
  { icon: PlayCircle, label: "Videos" },
  { icon: FileText, label: "Notes" },
  { icon: ClipboardList, label: "Assignments" },
  { icon: HelpCircle, label: "Quizzes" },
  { icon: Radio, label: "Live Sessions" },
  { icon: Award, label: "Completion Certificate" },
];

export function CourseIncludes() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-faint">
          Every Course Includes
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {INCLUDES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface">
                <Icon className="h-[18px] w-[18px] text-brand-blue" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-medium text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}