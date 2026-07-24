import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-bg">
      <AdminSidebar />
      <main className="relative flex-1 overflow-y-auto">
        <div
          aria-hidden
          className="bg-dot-grid pointer-events-none absolute inset-0 text-text opacity-[0.02]"
        />
        <div className="relative mx-auto max-w-5xl px-8 py-10">{children}</div>
      </main>
    </div>
  );
}