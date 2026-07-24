"use client";

import { useActionState } from "react";
import { Link2, CheckCircle2, AlertCircle } from "lucide-react";
import { updateGoogleEmail, type SettingsResult } from "@/lib/action/settings";

const initialState: SettingsResult | null = null;

export function GoogleLinkForm({ currentGoogleEmail }: { currentGoogleEmail: string | null }) {
  const [state, formAction, pending] = useActionState(updateGoogleEmail, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label className="text-xs font-medium text-text-muted">Linked Google account email</label>
        <input
          type="email"
          name="googleEmail"
          defaultValue={currentGoogleEmail ?? ""}
          placeholder="you@gmail.com"
          className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
        <p className="mt-1.5 text-xs text-text-faint">
          Leave blank and save to unlink. Whoever signs in with this Google account on the login
          page becomes this admin — use an account only you control.
        </p>
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
        className="flex w-fit items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-2 disabled:opacity-60"
      >
        <Link2 className="h-4 w-4" />
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}