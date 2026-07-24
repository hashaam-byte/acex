import Link from "next/link";
import { GraduationCap, Newspaper, CreditCard, Radio, Users, Receipt, ArrowUpRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const dynamic = "force-dynamic";

async function getCounts() {
  try {
    const [courses, posts, plans, signals, students, payments] = await Promise.all([
      prisma.course.count(),
      prisma.blogPost.count(),
      prisma.pricingPlan.count(),
      prisma.vipSignal.count({ where: { isActive: true } }),
      prisma.student.count(),
      prisma.payment.count(),
    ]);
    return { courses, posts, plans, signals, students, payments, connected: true };
  } catch {
    return { courses: 0, posts: 0, plans: 0, signals: 0, students: 0, payments: 0, connected: false };
  }
}

export default async function AdminOverviewPage() {
  const counts = await getCounts();

  const cards = [
    { label: "Courses", value: counts.courses, icon: GraduationCap, href: "/admin/courses", tone: "blue" },
    { label: "Blog Posts", value: counts.posts, icon: Newspaper, href: "/admin/blog", tone: "cyan" },
    { label: "Pricing Plans", value: counts.plans, icon: CreditCard, href: "/admin/pricing", tone: "violet" },
    { label: "Active VIP Signals", value: counts.signals, icon: Radio, href: "/admin/vip-signals", tone: "amber" },
    { label: "Students", value: counts.students, icon: Users, href: "/admin/students", tone: "blue" },
    { label: "Payments", value: counts.payments, icon: Receipt, href: "/admin/payments", tone: "cyan" },
  ] as const;

  const TONE: Record<string, string> = {
    blue: "border-brand-blue/25 bg-brand-blue/10 text-brand-blue",
    cyan: "border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan",
    violet: "border-indigo-400/25 bg-indigo-400/10 text-indigo-400",
    amber: "border-amber-400/25 bg-amber-400/10 text-amber-400",
  };

  return (
    <div>
      <p className="label-mono text-xs text-brand-blue">{"// dashboard"}</p>
      <h1 className="mt-1 font-heading text-2xl font-semibold text-text">Overview</h1>
      <p className="mt-1 text-sm text-text-faint">A snapshot of everything on the site.</p>

      {!counts.connected && (
        <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-400">
          No database connection yet — these counts will populate once{" "}
          <code className="label-mono text-xs">DATABASE_URL</code> is set and migrations have run.
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {cards.map(({ label, value, icon: Icon, href, tone }) => (
          <Link key={label} href={href}>
            <SpotlightCard className="transition-premium group rounded-3xl border border-border bg-surface p-5 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-premium)]">
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${TONE[tone]}`}>
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-text-faint opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-4 font-numeric text-3xl font-semibold text-text">{value}</p>
              <p className="text-xs text-text-faint">{label}</p>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </div>
  );
}