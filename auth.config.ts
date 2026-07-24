import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe NextAuth config: no Credentials provider here (that needs
 * Prisma + bcrypt, which don't run on the Edge runtime). Middleware imports
 * only this file, so it never pulls in Node-only dependencies. The actual
 * provider with DB access lives in auth.ts, used everywhere except
 * middleware.
 */
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
