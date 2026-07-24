"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteCourse } from "@/lib/action/course";

export function DeleteCourseButton({ id, title }: { id: string; title: string }) {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    startTransition(() => {
      deleteCourse(id);
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      aria-label={`Delete ${title}`}
      className="flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-brand-red/10 hover:text-brand-red disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}