import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { LearningPaths } from "@/components/academy/LearningPaths";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Academy — AceX Trading Academy",
  description:
    "Structured learning paths for every level: Beginner, Intermediate, and Advanced trading education.",
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <AcademyHero />
        <LearningPaths />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
