import Image from "next/image";

const COURSES = [
  {
    icon: "/icons/course-crypto.png",
    title: "Crypto Mastery",
    lessons: "16 Lessons",
    level: "Beginner",
    tone: "amber",
    highlight: false,
  },
  {
    icon: "/icons/course-forex.png",
    title: "Forex Masterclass",
    lessons: "20 Lessons",
    level: "Intermediate",
    tone: "blue",
    highlight: false,
  },
  {
    icon: "/icons/course-stocks.png",
    title: "Stock Market Essentials",
    lessons: "15 Lessons",
    level: "Beginner",
    tone: "cyan",
    highlight: false,
  },
  {
    icon: "/icons/course-risk.png",
    title: "Risk Management Blueprint",
    lessons: "8 Lessons",
    level: "All Levels",
    tone: "blue",
    highlight: false,
  },
  {
    icon: "/icons/course-psychology.png",
    title: "Trading Psychology",
    lessons: "12 Lessons",
    level: "All Levels",
    tone: "violet",
    highlight: false,
  },
  {
    icon: "/icons/course-vip.png",
    title: "VIP Mentorship Program",
    lessons: "Exclusive",
    level: "Advanced",
    tone: "gold",
    highlight: true,
  },
] as const;

export function CourseGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map(({ icon, title, lessons, level, highlight }) => (
          <div
            key={title}
            className={`group flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
              highlight
                ? "border-amber-300/40 bg-gradient-to-b from-amber-300/[0.08] to-surface"
                : "border-border bg-surface hover:border-border-strong"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center">
                <Image src={icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
              </div>
              <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-faint">
                {level}
              </span>
            </div>

            <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
            <p className={`mt-1.5 text-xs font-medium ${highlight ? "text-amber-300" : "text-text-faint"}`}>
              {lessons}
            </p>

            <button
              type="button"
              className={`mt-6 w-full rounded-full py-2.5 text-xs font-semibold transition-colors ${
                highlight
                  ? "bg-amber-300 text-[#1a1200] hover:bg-amber-200"
                  : "border border-border-strong text-text hover:bg-surface-2"
              }`}
            >
              {highlight ? "Apply for VIP" : "View Course"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
