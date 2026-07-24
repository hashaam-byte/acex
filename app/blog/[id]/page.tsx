import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { updateBlogPost } from "@/lib/action/blog";
import { BlogPostForm } from "@/components/admin/BlogForm";

export const dynamic = "force-dynamic";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  const boundUpdate = updateBlogPost.bind(null, id);

  return (
    <div>
      <Link
        href="/admin/blog"
        className="flex items-center gap-1.5 text-xs font-medium text-text-faint hover:text-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Blog
      </Link>

      <h1 className="mt-3 font-heading text-2xl font-semibold text-text">{post.title}</h1>
      <p className="mt-1 text-sm text-text-faint">
        Live at <span className="label-mono">/blog/{post.slug}</span>
      </p>

      <div className="mt-6 max-w-3xl rounded-3xl border border-border bg-surface p-7">
        <BlogPostForm
          action={boundUpdate}
          defaults={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            coverImageUrl: post.coverImageUrl,
            readTimeMins: post.readTimeMins,
            isPublished: post.isPublished,
          }}
        />
      </div>
    </div>
  );
}