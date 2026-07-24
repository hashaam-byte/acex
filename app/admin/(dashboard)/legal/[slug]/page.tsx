import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { LEGAL_PAGES } from "@/lib/legal-pages";
import { LEGAL_DEFAULTS } from "@/lib/legal-default";
import { LegalPageForm } from "@/components/admin/LegalPageForm";

export const dynamic = "force-dynamic";

export default async function AdminLegalEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const known = LEGAL_PAGES.find((p) => p.slug === slug);
  if (!known) notFound();

  let existing: { title: string; content: string } | null = null;
  try {
    existing = await prisma.legalPage.findUnique({ where: { slug } });
  } catch {
    // no DB connection yet — fall through to defaults
  }

  const fallback = LEGAL_DEFAULTS[slug];

  return (
    <div>
      <Link
        href="/admin/legal"
        className="flex items-center gap-1.5 text-xs font-medium text-text-faint hover:text-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Legal Pages
      </Link>

      <h1 className="mt-3 font-heading text-2xl font-semibold text-text">{known.title}</h1>
      <p className="mt-1 text-sm text-text-faint">
        Live at <span className="label-mono">/legal/{slug}</span>
      </p>

      <div className="mt-6 max-w-3xl rounded-3xl border border-border bg-surface p-7">
        <LegalPageForm
          slug={slug}
          title={existing?.title ?? fallback.title}
          content={existing?.content ?? fallback.content}
        />
      </div>
    </div>
  );
}