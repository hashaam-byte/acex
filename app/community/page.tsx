import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityStats } from "@/components/community/CommunityStats";
import { CommunityChannels } from "@/components/community/CommunityChannels";
import { CommunityFeatures } from "@/components/community/CommunityFeatures";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Community — AceX Trading Academy",
  description:
    "Join the AceX community on Discord, Telegram, and WhatsApp — trading challenges, leaderboards, and weekly discussions.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <CommunityHero />
        <CommunityStats />
        <CommunityChannels />
        <CommunityFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}