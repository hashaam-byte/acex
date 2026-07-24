import { Radio } from "lucide-react";
import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminVipSignalsPage() {
  return (
    <ComingSoonPanel
      icon={Radio}
      title="VIP Signals"
      description="Post and manage trading signals for VIP members."
    />
  );
}
