import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Blog — AceX Trading Academy",
  description:
    "Strategy breakdowns, market updates, and lessons from inside the AceX trading community.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}