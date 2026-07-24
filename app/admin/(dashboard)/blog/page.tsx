import Link from "next/link";
import { Plus, Newspaper, Pencil } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { deleteBlogPost } from "@/lib/action/blog";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  let posts: Awaited<ReturnType<typeof prisma.blogPost.findMany>> = [];
  let connected = true;
  try {
    posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  } catch {
    connected = false;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-semibold text-text">Blog</h1>
          <p className="mt-1 text-sm text-text-faint">Posts shown on the public Blog page.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dim"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      {!connected && (
        <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-400">
          No database connection yet — connect one to manage posts here.
        </div>
      )}

      {connected && posts.length === 0 && (
        <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-strong bg-surface px-6 py-20 text-center">
          <Newspaper className="h-8 w-8 text-text-faint" strokeWidth={1.5} />
          <p className="mt-3 text-sm text-text-muted">No posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="mt-4 flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-blue-dim"
          >
            <Plus className="h-3.5 w-3.5" />
            Write your first post
          </Link>
        </div>
      )}

      {posts.length > 0 && (
        <div className="mt-6 flex flex-col gap-2.5">
          {posts.map(
            (post: {
              id: string;
              title: string;
              category: string;
              readTimeMins: number;
              isPublished: boolean;
              publishedAt: Date;
            }) => (
              <div
                key={post.id}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium text-text">{post.title}</p>
                    {!post.isPublished && (
                      <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] text-text-faint">
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-text-faint">
                    {post.category} · {post.readTimeMins} min read ·{" "}
                    {post.publishedAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Link
                    href={`/admin/blog/${post.id}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-text-faint transition-colors hover:bg-surface-2 hover:text-text"
                    aria-label={`Edit ${post.title}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <DeleteButton id={post.id} label={post.title} action={deleteBlogPost} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}