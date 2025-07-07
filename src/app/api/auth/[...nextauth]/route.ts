import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";

import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    
  ],
  events: {
    async signIn({ user, account }) {
      if (!account) return;

      await fetch(`${process.env.NEXTAUTH_URL}/api/save-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: account.provider,
          provider_id: account.providerAccountId,
          username: user.name,
          email: user.email,
        }),
      });
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

//TODO 
// if (req.headers.get("x-api-key") !== process.env.INTERNAL_API_SECRET) {
//   return new Response("Forbidden", { status: 403 });
// }
// headers: {
//   "Content-Type": "application/json",
//   "x-api-key": process.env.INTERNAL_API_SECRET!,
// }