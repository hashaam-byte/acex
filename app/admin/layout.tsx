import type { ReactNode } from "react";
import { AdminSessionProvider } from "@/components/admin/AdminSessionProvider";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <AdminSessionProvider>{children}</AdminSessionProvider>;
}
