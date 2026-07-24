"use client";

import { useActionState } from "react";
import { Save, CheckCircle2, AlertCircle } from "lucide-react";
import { saveLegalPage, type LegalSaveResult } from "@/lib/action/legal";

const initialState: LegalSaveResult | null = null;

export function LegalPageForm({
  slug,
  title,
  content,
}: {
  slug: string;
  title: string;
  content: string;
}) {
  const [state, formAction, pending] = useActionState(saveLegalPage, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="slug" value={slug} />

      <div>
        <label className="text-xs font-medium text-text-muted">Page title</label>
        <input
          type="text"
          name="title"
          defaultValue={title}
          required
          className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-text-muted">
          Content — separate paragraphs with a blank line
        </label>
        <textarea
          name="content"
          defaultValue={content}
          required
          rows={18}
          className="mt-1.5 w-full resize-y rounded-xl border border-border bg-bg px-3.5 py-3 font-numeric text-sm leading-relaxed text-text outline-none focus:border-brand-blue"
        />
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
        <Save className="h-4 w-4" />
        {pending ? "Saving…" : "Save & Publish"}
      </button>
    </form>
  );
}