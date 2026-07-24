import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";

// Full auth instance — Node.js runtime only (API routes, server components,
// server actions). Never imported by middleware.ts; see auth.config.ts for
// the edge-safe version that middleware actually uses.
//
// Two ways in, same one admin account:
//   1. Credentials — email + password, checked against AdminUser.passwordHash
//   2. Google — allowed only if the signed-in Google account's email matches
//      AdminUser.email.
//      This exists mainly as account recovery: if the password is lost,
//      signing in with the linked Google account gets back in.
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const admin = await prisma.adminUser.findUnique({ where: { email } });
        if (!admin) return null;

        const valid = await bcrypt.compare(password, admin.passwordHash);
        if (!valid) return null;

        return { id: admin.id, email: admin.email, name: admin.name };
      },
    }),
    Google,
  ],
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ account, profile }) {
      if (account?.provider !== "google") return true; // credentials already validated in authorize()

      const email = profile?.email;
      if (!email) return false;

      const admin = await prisma.adminUser.findFirst({
        where: { email },
      });
      // Only the one linked Google account may sign in this way — this is
      // an admin panel, not open sign-up.
      return !!admin;
    },
    async jwt({ token, user, account }) {
      // On initial sign-in (either provider), resolve to the internal
      // AdminUser id/email/name so the session always reflects the admin
      // record, not whatever the OAuth profile happened to send.
      if (user?.email && account) {
        const admin = await prisma.adminUser.findFirst({
          where: { email: user.email },
        });
        if (admin) {
          token.id = admin.id;
          token.email = admin.email;
          token.name = admin.name;
        }
      }
      return token;
    },
  },
});