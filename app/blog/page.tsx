import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid, type BlogCardData } from "@/components/blog/BlogGrid";
import { CTA } from "@/components/home/CTA";
import { prisma } from "@/lib/prisma";
import { FALLBACK_POSTS } from "@/lib/blog-fallback";

export const metadata: Metadata = {
  title: "Blog — AceX Trading Academy",
  description:
    "Strategy breakdowns, market updates, and lessons from inside the AceX trading community.",
};

async function getPosts(): Promise<BlogCardData[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });

    if (posts.length === 0) return FALLBACK_POSTS;

    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.publishedAt.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTimeMins: post.readTimeMins,
      coverImageUrl: post.coverImageUrl,
    }));
  } catch {
    return FALLBACK_POSTS;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <BlogHero />
        <BlogGrid posts={posts} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}