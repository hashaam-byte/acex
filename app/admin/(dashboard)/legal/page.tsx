import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { LEGAL_PAGES } from "@/lib/legal-pages";

export const dynamic = "force-dynamic";

export default async function AdminLegalListPage() {
  let updatedMap = new Map<string, Date>();
  try {
    const pages = await prisma.legalPage.findMany({ select: { slug: true, updatedAt: true } });
    updatedMap = new Map(
      pages.map((p: { slug: string; updatedAt: Date }) => [p.slug, p.updatedAt])
    );
  } catch {
    // no DB connection yet — page still renders with "not published" state
  }

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-text">Legal Pages</h1>
      <p className="mt-1 text-sm text-text-faint">
        Editable content for the pages linked in the site footer.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {LEGAL_PAGES.map(({ slug, title }) => {
          const updatedAt = updatedMap.get(slug);
          return (
            <Link
              key={slug}
              href={`/admin/legal/${slug}`}
              className="transition-premium flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4 hover:border-border-strong hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10">
                  <FileText className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{title}</p>
                  <p className="text-xs text-text-faint">
                    {updatedAt
                      ? `Updated ${updatedAt.toLocaleDateString()}`
                      : "Not published yet — using placeholder"}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-text-faint" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}