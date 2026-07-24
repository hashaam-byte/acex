import type { CourseCardData } from "@/components/courses/CourseGrid";

const COURSE_SEED = [
  {
    title: "Crypto Mastery",
    iconKey: "course-crypto",
    lessons: "16 Lessons",
    level: "Beginner",
    highlight: false,
  },
  {
    title: "Forex Masterclass",
    iconKey: "course-forex",
    lessons: "20 Lessons",
    level: "Intermediate",
    highlight: false,
  },
  {
    title: "Stock Market Essentials",
    iconKey: "course-stocks",
    lessons: "15 Lessons",
    level: "Beginner",
    highlight: false,
  },
  {
    title: "Risk Management Blueprint",
    iconKey: "course-risk",
    lessons: "8 Lessons",
    level: "All Levels",
    highlight: false,
  },
  {
    title: "Trading Psychology",
    iconKey: "course-psychology",
    lessons: "12 Lessons",
    level: "All Levels",
    highlight: false,
  },
  {
    title: "VIP Mentorship Program",
    iconKey: "course-vip",
    lessons: "Exclusive",
    level: "Advanced",
    highlight: true,
  },
] as const;

function mapLevel(level: string): CourseCardData["level"] {
  switch (level) {
    case "Intermediate":
      return "INTERMEDIATE";
    case "Advanced":
      return "ADVANCED";
    case "All Levels":
      return "ALL_LEVELS";
    case "Beginner":
    default:
      return "BEGINNER";
  }
}

function parseLessonCount(lessons: string): number {
  const match = lessons.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

// Shown until a database is connected and courses are added from
// /admin/courses — keeps the public page looking complete rather than empty.
export const FALLBACK_COURSES: CourseCardData[] = COURSE_SEED.map((course, index) => ({
  id: `fallback-${index + 1}`,
  title: course.title,
  iconKey: course.iconKey,
  level: mapLevel(course.level),
  isHighlight: course.highlight,
  priceCents: 0,
  lessonCount: parseLessonCount(course.lessons),
}));