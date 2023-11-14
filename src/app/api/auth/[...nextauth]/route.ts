import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

import { verifyUserCredentials } from "@/lib/api";

export const nextAuthOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await verifyUserCredentials(credentials);

        return user;
      },
    }),
  ],
  callbacks: {
    /**
     * The jwt() callback is called with user when the user first logs in.
     * The `user` object will be populated with the object that is returned from the authorize function.
     * The object that is returned from the jwt() callback is what will be saved on the session cookie.
     */
    async jwt({ token, user, account, profile }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as unknown as JWT;
      }
      return token;
    },

    /**
     * The session() callback receives the session cookie content in its `token` parameter.
     * Whatever is returned from this callback -
     * is what will be presented when `useSession` or `getServerSession` is called.
     */
    async session({ session, token, user, newSession, trigger }) {
      const { email, name, sub } = token;

      const userSession = { ...session, email, name, sub };
      return userSession;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };

/**
 * article: https://medium.com/ascentic-technology/authentication-with-next-js-13-and-next-auth-9c69d55d6bfd
 */
