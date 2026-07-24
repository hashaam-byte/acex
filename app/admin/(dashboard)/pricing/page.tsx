import { CreditCard } from "lucide-react";
import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminPricingPage() {
  return (
    <ComingSoonPanel
      icon={CreditCard}
      title="Pricing"
      description="Edit membership plans, prices, and features shown on the VIP page."
    />
  );
}
