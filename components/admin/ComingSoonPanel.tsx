import type { LucideIcon } from "lucide-react";

export function ComingSoonPanel({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-text">{title}</h1>
      <p className="mt-1 text-sm text-text-faint">{description}</p>

      <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-strong bg-surface px-6 py-20 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10">
          <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
        </div>
        <p className="mt-4 font-heading text-base font-semibold text-text">
          {title} management is next
        </p>
        <p className="mt-1.5 max-w-sm text-sm text-text-faint">
          The schema for this is already in place — full create/edit/delete screens are Phase 2.
        </p>
      </div>
    </div>
  );
}
