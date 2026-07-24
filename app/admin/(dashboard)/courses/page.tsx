import Link from "next/link";
import { Plus, GraduationCap, Pencil } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { DeleteCourseButton } from "@/components/admin/DeleteCourseButton";
import { COURSE_LEVEL_LABELS } from "@/lib/course-icons";

export const dynamic = "force-dynamic";

export default async function AdminCoursesPage() {
  let courses: Awaited<ReturnType<typeof prisma.course.findMany>> = [];
  let connected = true;
  try {
    courses = await prisma.course.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });
  } catch {
    connected = false;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-text">Courses</h1>
          <p className="mt-1 text-sm text-text-faint">
            Shown on the public Courses page, in this order.
          </p>
        </div>
        <Link
          href="/admin/courses/new"
          className="flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim"
        >
          <Plus className="h-4 w-4" />
          New Course
        </Link>
      </div>

      {!connected && (
        <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-400">
          No database connection yet — connect one to manage courses here.
        </div>
      )}

      {connected && courses.length === 0 && (
        <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-strong bg-surface px-6 py-20 text-center">
          <GraduationCap className="h-8 w-8 text-text-faint" strokeWidth={1.5} />
          <p className="mt-3 text-sm text-text-muted">No courses yet.</p>
          <Link
            href="/admin/courses/new"
            className="mt-4 flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-blue-dim"
          >
            <Plus className="h-3.5 w-3.5" />
            Create your first course
          </Link>
        </div>
      )}

      {courses.length > 0 && (
        <div className="mt-6 flex flex-col gap-2.5">
          {courses.map(
            (course: {
              id: string;
              title: string;
              category: string;
              level: string;
              priceCents: number;
              isPublished: boolean;
              isHighlight: boolean;
            }) => (
            <div
              key={course.id}
              className="flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-medium text-text">{course.title}</p>
                  {!course.isPublished && (
                    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] text-text-faint">
                      Draft
                    </span>
                  )}
                  {course.isHighlight && (
                    <span className="shrink-0 rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-0.5 text-[10px] text-amber-300">
                      Highlight
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-xs text-text-faint">
                  {course.category} · {COURSE_LEVEL_LABELS[course.level]} ·{" "}
                  {course.priceCents === 0 ? "Free" : `$${(course.priceCents / 100).toFixed(2)}`}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Link
                  href={`/admin/courses/${course.id}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-surface-2 hover:text-text"
                  aria-label={`Edit ${course.title}`}
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <DeleteCourseButton id={course.id} title={course.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}