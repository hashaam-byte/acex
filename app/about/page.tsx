import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutIntro } from "@/components/about/AboutIntro";
import { StoryTimeline } from "@/components/about/StoryTimeline";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About — AceX Trading Academy",
  description:
    "Meet AceX: professional trader, tutor, mentor, and financial analyst behind AceX Trading Academy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <AboutIntro />
        <StoryTimeline />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
