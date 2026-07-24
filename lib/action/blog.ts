"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type BlogResult = { success: boolean; message: string };

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readFields(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slugInput = String(formData.get("slug") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const coverImageUrl = String(formData.get("coverImageUrl") || "").trim() || null;
  const readTimeMins = parseInt(String(formData.get("readTimeMins") || "5"), 10) || 5;
  const isPublished = formData.get("isPublished") === "on";

  return {
    title,
    slug: slugInput ? slugify(slugInput) : slugify(title),
    excerpt,
    content,
    category,
    coverImageUrl,
    readTimeMins,
    isPublished,
  };
}

export async function createBlogPost(
  _prev: BlogResult | null,
  formData: FormData
): Promise<BlogResult> {
  const session = await auth();
  if (!session?.user?.id) return { success: false, message: "Not signed in." };

  const fields = readFields(formData);
  if (!fields.title || !fields.excerpt || !fields.content || !fields.category) {
    return { success: false, message: "Title, excerpt, content, and category are required." };
  }

  try {
    await prisma.blogPost.create({ data: fields });
  } catch {
    return { success: false, message: "A post with that slug already exists." };
  }

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function updateBlogPost(
  id: string,
  _prev: BlogResult | null,
  formData: FormData
): Promise<BlogResult> {
  const session = await auth();
  if (!session?.user?.id) return { success: false, message: "Not signed in." };

  const fields = readFields(formData);
  if (!fields.title || !fields.excerpt || !fields.content || !fields.category) {
    return { success: false, message: "Title, excerpt, content, and category are required." };
  }

  try {
    await prisma.blogPost.update({ where: { id }, data: fields });
  } catch {
    return { success: false, message: "Could not save — check the slug isn't already used." };
  }

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  const session = await auth();
  if (!session?.user?.id) return;

  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}