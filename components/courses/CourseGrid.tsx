import Image from "next/image";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { COURSE_ICON_TONE, COURSE_LEVEL_LABELS } from "@/lib/course-icons";

export type CourseCardData = {
  id: string;
  title: string;
  iconKey: string | null;
  level: string;
  isHighlight: boolean;
  priceCents: number;
  lessonCount: number;
};

export function CourseGrid({ courses }: { courses: CourseCardData[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(({ id, title, iconKey, level, isHighlight, priceCents, lessonCount }) => {
          const tone = (iconKey && COURSE_ICON_TONE[iconKey]) || "blue";
          const icon = iconKey ? `/icons/${iconKey}.png` : null;
          const priceLabel = priceCents === 0 ? "Free" : `$${(priceCents / 100).toFixed(0)}`;
          const metaLabel = lessonCount > 0 ? `${lessonCount} Lessons` : priceLabel;

          return (
            <SpotlightCard
              key={id}
              className={`group transition-premium flex flex-col rounded-3xl border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-premium)] ${
                isHighlight
                  ? "border-amber-300/40 bg-gradient-to-b from-amber-300/[0.08] to-surface"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center">
                  {icon && (
                    <Image src={icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
                  )}
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-text-faint">
                  {COURSE_LEVEL_LABELS[level] || level}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-base font-semibold text-text">{title}</h3>
              <p
                className={`mt-1.5 text-xs font-medium ${
                  tone === "gold" ? "text-amber-300" : "text-text-faint"
                }`}
              >
                {metaLabel}
              </p>

              <button
                type="button"
                className={`mt-6 w-full rounded-full py-2.5 text-xs font-semibold transition-colors ${
                  isHighlight
                    ? "bg-amber-300 text-[#1a1200] hover:bg-amber-200"
                    : "border border-border-strong text-text hover:bg-surface-2"
                }`}
              >
                {isHighlight ? "Apply for VIP" : "View Course"}
              </button>
            </SpotlightCard>
          );
        })}
      </Reveal>
    </section>
  );
}