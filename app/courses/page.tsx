import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { CourseIncludes } from "@/components/courses/CourseInclude";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Courses — AceX Trading Academy",
  description:
    "Expert-designed courses in Crypto, Forex, Stocks, Risk Management, Trading Psychology, and our exclusive VIP Mentorship Program.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <CoursesHero />
        <CourseGrid />
        <CourseIncludes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}