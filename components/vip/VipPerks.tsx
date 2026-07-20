import Image from "next/image";
import {
  BarChart3,
  Video,
  Users,
  Newspaper,
  ClipboardCheck,
  GraduationCap,
  PieChart,
  UserCheck,
  Headphones,
} from "lucide-react";

const PERKS = [
  { image: "/icons/vip-signals.png", label: "Daily VIP Signals" },
  { icon: BarChart3, label: "Weekly Analysis" },
  { icon: Video, label: "Live Trading" },
  { icon: Users, label: "Private Community" },
  { icon: Newspaper, label: "Market Updates" },
  { icon: ClipboardCheck, label: "Trade Reviews" },
  { icon: GraduationCap, label: "Exclusive Classes" },
  { icon: PieChart, label: "Portfolio Review" },
  { icon: UserCheck, label: "Mentorship" },
  { icon: Headphones, label: "Priority Support" },
];

export function VipPerks() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {PERKS.map(({ icon: Icon, image, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-6 text-center transition-colors hover:border-amber-300/40"
          >
            {image ? (
              <div className="flex h-10 w-10 items-center justify-center">
                <Image src={image} alt="" width={40} height={40} className="h-full w-full object-contain" />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/10">
                {Icon && <Icon className="h-4 w-4 text-amber-300" strokeWidth={1.75} />}
              </div>
            )}
            <p className="text-xs font-medium text-text">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
