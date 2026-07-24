import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createBlogPost } from "@/lib/action/blog";
import { BlogPostForm } from "@/components/admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <div>
      <Link
        href="/admin/blog"
        className="flex items-center gap-1.5 text-xs font-medium text-text-faint hover:text-text"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Blog
      </Link>

      <h1 className="mt-3 font-heading text-2xl font-semibold text-text">New Post</h1>
      <p className="mt-1 text-sm text-text-faint">Add a new post to the public Blog page.</p>

      <div className="mt-6 max-w-3xl rounded-3xl border border-border bg-surface p-7">
        <BlogPostForm action={createBlogPost} />
      </div>
    </div>
  );
}