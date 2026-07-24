"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type CourseResult = { success: boolean; message: string };

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readCourseFields(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slugInput = String(formData.get("slug") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const level = String(formData.get("level") || "BEGINNER");
  const category = String(formData.get("category") || "").trim();
  const iconKey = String(formData.get("iconKey") || "") || null;
  const priceDollars = parseFloat(String(formData.get("price") || "0"));
  const order = parseInt(String(formData.get("order") || "0"), 10) || 0;
  const isHighlight = formData.get("isHighlight") === "on";
  const isPublished = formData.get("isPublished") === "on";

  return {
    title,
    slug: slugInput ? slugify(slugInput) : slugify(title),
    description,
    level: level as "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS",
    category,
    iconKey,
    priceCents: Math.round((Number.isFinite(priceDollars) ? priceDollars : 0) * 100),
    order,
    isHighlight,
    isPublished,
  };
}

export async function createCourse(
  _prev: CourseResult | null,
  formData: FormData
): Promise<CourseResult> {
  const session = await auth();
  if (!session?.user?.id) return { success: false, message: "Not signed in." };

  const fields = readCourseFields(formData);
  if (!fields.title || !fields.description || !fields.category) {
    return { success: false, message: "Title, description, and category are required." };
  }

  try {
    await prisma.course.create({ data: fields });
  } catch {
    return { success: false, message: "A course with that slug already exists." };
  }

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  redirect("/admin/courses");
}

export async function updateCourse(
  id: string,
  _prev: CourseResult | null,
  formData: FormData
): Promise<CourseResult> {
  const session = await auth();
  if (!session?.user?.id) return { success: false, message: "Not signed in." };

  const fields = readCourseFields(formData);
  if (!fields.title || !fields.description || !fields.category) {
    return { success: false, message: "Title, description, and category are required." };
  }

  try {
    await prisma.course.update({ where: { id }, data: fields });
  } catch {
    return { success: false, message: "Could not save — check the slug isn't already used." };
  }

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  redirect("/admin/courses");
}

export async function deleteCourse(id: string) {
  const session = await auth();
  if (!session?.user?.id) return;

  await prisma.course.delete({ where: { id } });
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}