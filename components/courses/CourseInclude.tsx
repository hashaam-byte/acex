import Image from "next/image";

const INCLUDES = [
  { icon: "/icons/include-videos.png", label: "Videos" },
  { icon: "/icons/include-notes.png", label: "Notes" },
  { icon: "/icons/include-assignments.png", label: "Assignments" },
  { icon: "/icons/include-quizzes.png", label: "Quizzes" },
  { icon: "/icons/include-live.png", label: "Live Sessions" },
  { icon: "/icons/include-certificate.png", label: "Completion Certificate" },
];

export function CourseIncludes() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-faint">
          Every Course Includes
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {INCLUDES.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image src={icon} alt="" width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <p className="text-xs font-medium text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
