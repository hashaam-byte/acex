"use client";

import { useActionState } from "react";
import { Save, CheckCircle2, AlertCircle } from "lucide-react";
import type { CourseResult } from "@/lib/action/course";
import { COURSE_ICON_KEYS, COURSE_LEVELS, COURSE_LEVEL_LABELS } from "@/lib/course-icons";

const initialState: CourseResult | null = null;

type CourseAction = (prev: CourseResult | null, formData: FormData) => Promise<CourseResult>;

export function CourseForm({
  action,
  defaults,
}: {
  action: CourseAction;
  defaults?: {
    title: string;
    slug: string;
    description: string;
    level: string;
    category: string;
    iconKey: string | null;
    priceCents: number;
    order: number;
    isHighlight: boolean;
    isPublished: boolean;
  };
}) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-text-muted">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={defaults?.title}
            required
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">
            Slug <span className="text-text-faint">(leave blank to auto-generate)</span>
          </label>
          <input
            type="text"
            name="slug"
            defaultValue={defaults?.slug}
            placeholder="crypto-mastery"
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-text-muted">Description</label>
        <textarea
          name="description"
          defaultValue={defaults?.description}
          required
          rows={3}
          className="mt-1.5 w-full resize-y rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="text-xs font-medium text-text-muted">Level</label>
          <select
            name="level"
            defaultValue={defaults?.level || "BEGINNER"}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          >
            {COURSE_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {COURSE_LEVEL_LABELS[lvl]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={defaults?.category}
            required
            placeholder="Crypto"
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">Icon</label>
          <select
            name="iconKey"
            defaultValue={defaults?.iconKey || ""}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          >
            <option value="">None</option>
            {COURSE_ICON_KEYS.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="text-xs font-medium text-text-muted">Price (USD)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            min="0"
            defaultValue={defaults ? (defaults.priceCents / 100).toFixed(2) : "0"}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">Display order</label>
          <input
            type="number"
            name="order"
            defaultValue={defaults?.order ?? 0}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div className="flex flex-col justify-end gap-2 pb-2.5">
          <label className="flex items-center gap-2 text-sm text-text">
            <input
              type="checkbox"
              name="isHighlight"
              defaultChecked={defaults?.isHighlight}
              className="h-4 w-4 rounded border-border-strong accent-brand-blue"
            />
            Highlight (VIP-style card)
          </label>
          <label className="flex items-center gap-2 text-sm text-text">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={defaults?.isPublished ?? true}
              className="h-4 w-4 rounded border-border-strong accent-brand-blue"
            />
            Published (visible on site)
          </label>
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
        className="flex w-fit items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim disabled:opacity-60"
      >
        <Save className="h-4 w-4" />
        {pending ? "Saving…" : "Save Course"}
      </button>
    </form>
  );
}