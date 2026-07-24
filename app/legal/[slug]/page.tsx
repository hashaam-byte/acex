import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { prisma } from "@/lib/prisma";
import { LEGAL_PAGES } from "@/lib/legal-pages";
import { LEGAL_DEFAULTS } from "@/lib/legal-default";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const known = LEGAL_PAGES.find((p) => p.slug === slug);
  return { title: known ? `${known.title} — AceX Trading Academy` : "AceX Trading Academy" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const known = LEGAL_PAGES.find((p) => p.slug === slug);
  if (!known) notFound();

  let page: { title: string; content: string; updatedAt: Date } | null = null;
  try {
    page = await prisma.legalPage.findUnique({ where: { slug } });
  } catch {
    // no DB connection yet — fall through to default content below
  }

  const fallback = LEGAL_DEFAULTS[slug];
  const title = page?.title ?? fallback.title;
  const content = page?.content ?? fallback.content;
  const paragraphs = content.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {title}
        </h1>
        {page?.updatedAt && (
          <p className="mt-2 text-xs text-text-faint">
            Last updated {page.updatedAt.toLocaleDateString()}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {p}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}