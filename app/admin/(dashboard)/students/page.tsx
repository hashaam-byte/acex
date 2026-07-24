import { Users } from "lucide-react";
import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminStudentsPage() {
  return (
    <ComingSoonPanel
      icon={Users}
      title="Students"
      description="View student accounts and their enrollment details."
    />
  );
}
