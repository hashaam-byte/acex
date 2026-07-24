"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type LegalSaveResult = { success: boolean; message: string };

export async function saveLegalPage(
  _prev: LegalSaveResult | null,
  formData: FormData
): Promise<LegalSaveResult> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "Not signed in." };
  }

  const slug = String(formData.get("slug") || "");
  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!slug || !title || !content) {
    return { success: false, message: "Title and content are required." };
  }

  await prisma.legalPage.upsert({
    where: { slug },
    update: { title, content },
    create: { slug, title, content },
  });

  revalidatePath(`/legal/${slug}`);
  revalidatePath(`/admin/legal/${slug}`);

  return { success: true, message: "Saved and published." };
}