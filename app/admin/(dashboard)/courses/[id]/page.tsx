import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { updateCourse } from "@/lib/action/course";
import { CourseForm } from "@/components/admin/CourseForm";

export const dynamic = "force-dynamic";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) notFound();

  const boundUpdate = updateCourse.bind(null, id);

  return (
    <div>
      <Link
        href="/admin/courses"
        className="flex items-center gap-1.5 text-xs font-medium text-text-faint hover:text-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Courses
      </Link>

      <h1 className="mt-3 font-heading text-2xl font-semibold text-text">{course.title}</h1>
      <p className="mt-1 text-sm text-text-faint">
        Live at <span className="label-mono">/courses</span> (slug:{" "}
        <span className="label-mono">{course.slug}</span>)
      </p>

      <div className="mt-6 max-w-3xl rounded-3xl border border-border bg-surface p-7">
        <CourseForm
          action={boundUpdate}
          defaults={{
            title: course.title,
            slug: course.slug,
            description: course.description,
            level: course.level,
            category: course.category,
            iconKey: course.iconKey,
            priceCents: course.priceCents,
            order: course.order,
            isHighlight: course.isHighlight,
            isPublished: course.isPublished,
          }}
        />
      </div>
    </div>
  );
}