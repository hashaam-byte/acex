import { Receipt } from "lucide-react";
import { ComingSoonPanel } from "@/components/admin/ComingSoonPanel";

export default function AdminPaymentsPage() {
  return (
    <ComingSoonPanel
      icon={Receipt}
      title="Payments"
      description="Review payment history across Stripe, Paystack, and Flutterwave."
    />
  );
}
