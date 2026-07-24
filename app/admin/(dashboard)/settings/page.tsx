import { ShieldCheck } from "lucide-react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { PasswordForm } from "@/components/admin/PasswordForm";
import { GoogleLinkForm } from "@/components/admin/GoogleLinkForm";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const session = await auth();
  const admin = session?.user?.id
    ? await prisma.adminUser.findUnique({ where: { id: session.user.id } })
    : null;

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-text">Settings</h1>
      <p className="mt-1 text-sm text-text-faint">Account security for your admin login.</p>

      <div className="mt-8 max-w-xl rounded-3xl border border-border bg-surface p-7">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
          <h2 className="font-heading text-base font-semibold text-text">Password</h2>
        </div>
        <p className="mt-1 text-xs text-text-faint">
          Signed in as <span className="text-text">{admin?.email ?? "—"}</span>
        </p>
        <div className="mt-5">
          <PasswordForm />
        </div>
      </div>

      <div className="mt-6 max-w-xl rounded-3xl border border-border bg-surface p-7">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
          <h2 className="font-heading text-base font-semibold text-text">Google Sign-In</h2>
        </div>
        <p className="mt-1 text-xs text-text-faint">
          Link a Google account as a backup way in — useful if you ever forget your password.
        </p>
        <div className="mt-5">
          <GoogleLinkForm currentGoogleEmail={admin?.googleEmail ?? null} />
        </div>
      </div>
    </div>
  );
}