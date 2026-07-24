"use client";

import { useActionState } from "react";
import { KeyRound, CheckCircle2, AlertCircle } from "lucide-react";
import { changePassword, type SettingsResult } from "@/lib/action/settings";

const initialState: SettingsResult | null = null;

export function PasswordForm() {
  const [state, formAction, pending] = useActionState(changePassword, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label className="text-xs font-medium text-text-muted">Current password</label>
        <input
          type="password"
          name="currentPassword"
          required
          className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-text-muted">New password</label>
          <input
            type="password"
            name="newPassword"
            required
            minLength={8}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">Confirm new password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength={8}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
      </div>

      {state && (
        <div
          className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs ${
            state.success
              ? "border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan"
              : "border border-brand-red/30 bg-brand-red/10 text-brand-red"
          }`}
        >
          {state.success ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0" />
          )}
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex w-fit items-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim disabled:opacity-60"
      >
        <KeyRound className="h-4 w-4" />
        {pending ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}