"use client";

import { useActionState } from "react";
import { Save, CheckCircle2, AlertCircle } from "lucide-react";
import type { BlogResult } from "@/lib/action/blog";
import { BLOG_CATEGORIES } from "@/lib/blog-category";

const initialState: BlogResult | null = null;

type BlogAction = (prev: BlogResult | null, formData: FormData) => Promise<BlogResult>;

export function BlogPostForm({
  action,
  defaults,
}: {
  action: BlogAction;
  defaults?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    coverImageUrl: string | null;
    readTimeMins: number;
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
            placeholder="beginners-guide-to-crypto"
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-text-muted">Excerpt</label>
        <textarea
          name="excerpt"
          defaultValue={defaults?.excerpt}
          required
          rows={2}
          className="mt-1.5 w-full resize-y rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-text-muted">Content (markdown)</label>
        <textarea
          name="content"
          defaultValue={defaults?.content}
          required
          rows={12}
          className="mt-1.5 w-full resize-y rounded-xl border border-border bg-bg px-3.5 py-3 font-numeric text-sm leading-relaxed text-text outline-none focus:border-brand-blue"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className="text-xs font-medium text-text-muted">Category</label>
          <select
            name="category"
            defaultValue={defaults?.category || BLOG_CATEGORIES[0]}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-text-muted">Read time (mins)</label>
          <input
            type="number"
            name="readTimeMins"
            min="1"
            defaultValue={defaults?.readTimeMins ?? 5}
            className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
          />
        </div>
        <div className="flex items-end pb-2.5">
          <label className="flex items-center gap-2 text-sm text-text">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={defaults?.isPublished ?? true}
              className="h-4 w-4 rounded border-border-strong accent-brand-blue"
            />
            Published
          </label>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-text-muted">
          Cover image URL <span className="text-text-faint">(optional)</span>
        </label>
        <input
          type="text"
          name="coverImageUrl"
          defaultValue={defaults?.coverImageUrl ?? ""}
          placeholder="https://…"
          className="mt-1.5 w-full rounded-xl border border-border bg-bg px-3.5 py-2.5 text-sm text-text outline-none focus:border-brand-blue"
        />
        <p className="mt-1.5 text-xs text-text-faint">
          Leave blank to use a themed icon thumbnail instead, matching the category.
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
        className="flex w-fit items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim disabled:opacity-60"
      >
        <Save className="h-4 w-4" />
        {pending ? "Saving…" : "Save Post"}
      </button>
    </form>
  );
}