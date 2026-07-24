/**
 * Creates the first admin user, reading credentials from env vars so the
 * password is never hardcoded in source. Safe to re-run — it updates the
 * existing admin instead of erroring if one already exists.
 *
 * Run with: npx prisma db seed
 * (requires SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD, SEED_ADMIN_NAME in .env)
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { LEGAL_DEFAULTS } from "../lib/legal-default";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  const name = process.env.SEED_ADMIN_NAME || "AceX Admin";

  if (!email || !password) {
    throw new Error(
      "Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in your .env before seeding."
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: { passwordHash, name },
    create: { email, passwordHash, name },
  });

  console.log(`Admin user ready: ${admin.email}`);

  // Seed legal pages with starter content — only if they don't already
  // exist, so re-running seed never overwrites edits made from /admin/legal.
  for (const [slug, { title, content }] of Object.entries(LEGAL_DEFAULTS)) {
    await prisma.legalPage.upsert({
      where: { slug },
      update: {},
      create: { slug, title, content },
    });
  }
  console.log(`Legal pages ready: ${Object.keys(LEGAL_DEFAULTS).join(", ")}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });