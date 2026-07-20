import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchoolHero } from "@/components/school/SchoolHero";
import { CampusFeatures } from "@/components/school/CampusFeatures";
import { NotifyForm } from "@/components/school/NotifyForm";

export const metadata: Metadata = {
  title: "Trading School (Coming Soon) — AceX Trading Academy",
  description:
    "AceX Trading School: a future physical campus with trading labs, smart classrooms, and a student community.",
};

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <SchoolHero />
        <CampusFeatures />
        <NotifyForm />
      </main>
      <Footer />
    </div>
  );
}