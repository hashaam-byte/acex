"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type SettingsResult = { success: boolean; message: string };

export async function changePassword(
  _prev: SettingsResult | null,
  formData: FormData
): Promise<SettingsResult> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "Not signed in." };
  }

  const currentPassword = String(formData.get("currentPassword") || "");
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (newPassword.length < 8) {
    return { success: false, message: "New password must be at least 8 characters." };
  }
  if (newPassword !== confirmPassword) {
    return { success: false, message: "New password and confirmation don't match." };
  }

  const admin = await prisma.adminUser.findUnique({ where: { id: session.user.id } });
  if (!admin) {
    return { success: false, message: "Account not found." };
  }

  const valid = await bcrypt.compare(currentPassword, admin.passwordHash);
  if (!valid) {
    return { success: false, message: "Current password is incorrect." };
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await prisma.adminUser.update({ where: { id: admin.id }, data: { passwordHash } });

  return { success: true, message: "Password updated." };
}

export async function updateGoogleEmail(
  _prev: SettingsResult | null,
  formData: FormData
): Promise<SettingsResult> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "Not signed in." };
  }

  const googleEmail = String(formData.get("googleEmail") || "").trim();

  if (googleEmail && !googleEmail.includes("@")) {
    return { success: false, message: "Enter a valid email address." };
  }

  try {
    await prisma.adminUser.update({
      where: { id: session.user.id },
      data: { googleEmail: googleEmail || null },
    });
  } catch {
    return {
      success: false,
      message: "That Google account is already linked to a different admin.",
    };
  }

  revalidatePath("/admin/settings");
  return {
    success: true,
    message: googleEmail
      ? "Google account linked. You can now sign in with it."
      : "Google account unlinked.",
  };
}