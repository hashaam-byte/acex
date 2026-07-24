import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CourseGrid, type CourseCardData } from "@/components/courses/CourseGrid";
import { CourseIncludes } from "@/components/courses/CourseInclude";
import { CTA } from "@/components/home/CTA";
import { prisma } from "@/lib/prisma";
import { FALLBACK_COURSES } from "@/lib/course-fallback";

export const metadata: Metadata = {
  title: "Courses — AceX Trading Academy",
  description:
    "Expert-designed courses in Crypto, Forex, Stocks, Risk Management, Trading Psychology, and our exclusive VIP Mentorship Program.",
};

// Revalidates periodically rather than on every request — course listings
// don't need to be instant-live the way admin previews do.
export const revalidate = 60;

async function getCourses(): Promise<CourseCardData[]> {
  try {
    const courses = await prisma.course.findMany({
      where: { isPublished: true },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      include: { _count: { select: { lessons: true } } }
    });
    if (courses.length === 0) return FALLBACK_COURSES;
    return courses.map(
      (c: {
        id: string;
        title: string;
        iconKey: string | null;
        level: string;
        isHighlight: boolean;
        priceCents: number;
        _count: { lessons: number };
      }) => ({
        id: c.id,
        title: c.title,
        iconKey: c.iconKey,
        level: c.level,
        isHighlight: c.isHighlight,
        priceCents: c.priceCents,
        lessonCount: c._count.lessons,
      })
    );
  } catch {
    return FALLBACK_COURSES;
  }
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <CoursesHero />
        <CourseGrid courses={courses} />
        <CourseIncludes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}