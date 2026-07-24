import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createCourse } from "@/lib/action/course";
import { CourseForm } from "@/components/admin/CourseForm";

export default function NewCoursePage() {
  return (
    <div>
      <Link
        href="/admin/courses"
        className="flex items-center gap-1.5 text-xs font-medium text-text-faint hover:text-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Courses
      </Link>

      <h1 className="mt-3 font-heading text-2xl font-semibold text-text">New Course</h1>
      <p className="mt-1 text-sm text-text-faint">Add a new course to the public Courses page.</p>

      <div className="mt-6 max-w-3xl rounded-3xl border border-border bg-surface p-7">
        <CourseForm action={createCourse} />
      </div>
    </div>
  );
}