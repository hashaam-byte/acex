"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";

export function DeleteButton({
  id,
  label,
  action,
}: {
  id: string;
  label: string;
  action: (id: string) => Promise<void> | void;
}) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm(`Delete "${label}"? This can't be undone.`)) return;
    startTransition(() => {
      action(id);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      aria-label={`Delete ${label}`}
      className="flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-brand-red/10 hover:text-brand-red disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}