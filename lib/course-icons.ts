export const COURSE_ICON_KEYS = [
  "course-crypto",
  "course-forex",
  "course-stocks",
  "course-risk",
  "course-psychology",
  "course-vip",
] as const;

export const COURSE_LEVELS = ["BEGINNER", "INTERMEDIATE", "ADVANCED", "ALL_LEVELS"] as const;

export const COURSE_LEVEL_LABELS: Record<string, string> = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  ALL_LEVELS: "All Levels",
};

// Maps each icon to the card accent color used on the public Courses page —
// keeps the color scheme consistent without a separate "tone" field in the
// database that the admin would have to think about.
export const COURSE_ICON_TONE: Record<string, string> = {
  "course-crypto": "amber",
  "course-forex": "blue",
  "course-stocks": "cyan",
  "course-risk": "blue",
  "course-psychology": "violet",
  "course-vip": "gold",
};