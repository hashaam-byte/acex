"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  GraduationCap,
  Newspaper,
  CreditCard,
  Radio,
  Users,
  Receipt,
  FileText,
  Settings,
  LogOut,
  ExternalLink,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "General",
    items: [{ label: "Overview", href: "/admin", icon: LayoutDashboard }],
  },
  {
    label: "Content",
    items: [
      { label: "Courses", href: "/admin/courses", icon: GraduationCap },
      { label: "Blog", href: "/admin/blog", icon: Newspaper },
      { label: "Pricing", href: "/admin/pricing", icon: CreditCard },
      { label: "VIP Signals", href: "/admin/vip-signals", icon: Radio },
      { label: "Legal Pages", href: "/admin/legal", icon: FileText },
    ],
  },
  {
    label: "People & Payments",
    items: [
      { label: "Students", href: "/admin/students", icon: Users },
      { label: "Payments", href: "/admin/payments", icon: Receipt },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-surface">
      <div className="flex items-center gap-2.5 border-b border-border px-5 py-5">
        <Image src="/logo/acex-mark.png" alt="AceX" width={28} height={28} className="h-7 w-7" />
        <div>
          <p className="font-heading text-sm font-semibold leading-none text-text">AceX</p>
          <p className="label-mono mt-0.5 text-[10px] text-text-faint">admin</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-faint">
              {group.label}
            </p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              {group.items.map(({ label, href, icon: Icon }) => {
                const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-blue/10 text-brand-blue"
                        : "text-text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-brand-blue" />
                    )}
                    <Icon className="ml-1 h-4 w-4" strokeWidth={1.75} />
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <Link
          href="/"
          target="_blank"
          className="mb-1 flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-text-faint transition-colors hover:bg-surface-2 hover:text-text"
        >
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
          View live site
        </Link>

        <div className="mt-2 flex items-center gap-2.5 rounded-xl px-3 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-xs font-semibold text-brand-blue">
            {(session?.user?.name || session?.user?.email || "A").charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-text">
              {session?.user?.name || "Admin"}
            </p>
            <p className="truncate text-[10px] text-text-faint">{session?.user?.email}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            aria-label="Sign out"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-brand-red/10 hover:text-brand-red"
          >
            <LogOut className="h-3.5 w-3.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </aside>
  );
}