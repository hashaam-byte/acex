import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VipHero } from "@/components/vip/VipHero";
import { VipPerks } from "@/components/vip/VipPerks";
import { MembershipPlans } from "@/components/vip/MembershipPlans";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "VIP Membership — AceX Trading Academy",
  description:
    "Daily VIP trading signals, live sessions, and 1-on-1 mentorship. Choose the AceX membership plan that fits your trading journey.",
};

export default function VipPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <VipHero />
        <VipPerks />
        <MembershipPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}