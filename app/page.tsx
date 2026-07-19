import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { LearningCards } from "@/components/home/LearningCards";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <LearningCards />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
