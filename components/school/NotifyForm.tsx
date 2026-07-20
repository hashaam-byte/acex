"use client";

import { Bell } from "lucide-react";

export function NotifyForm() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10">
          <Bell className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          Be the first to know
        </h2>
        <p className="mt-2.5 text-sm text-text-muted">
          Get notified the moment applications open for the physical campus.
        </p>

        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-2.5 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full min-w-0 rounded-full border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-brand-blue"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}