
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";

import type { NextAuthOptions } from "next-auth";
<<<<<<< HEAD
// import logger from "@/app/lib/logger";
=======

>>>>>>> 6e45d10 (added winston logger common&error)

const authOptions: NextAuthOptions = {
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

      try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/save-user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.INTERNAL_API_SECRET!,
          },
          body: JSON.stringify({
            provider: account.provider,
            provider_id: account.providerAccountId,
            username: user.name,
            email: user.email,
          }),
        });
      } catch (error) {
        // logger.error("Error saving user during signIn event", { error });
        console.log("Error saving user during signIn event", error);
        
      }

      // logger.info(`User signed in: ${user.name} (${user.email}) with provider: ${account.provider}`);
    },
  },
  // logger: {
  //   error(code, metadata) {
  //     const metaObj = metadata && typeof metadata === "object" ? metadata : {};
  //     const errorMsg = (metaObj as { error?: { message?: string } }).error?.message || 
  //                     (metaObj as { message?: string }).message || "";
      
  //     logger.error(
  //       `[next-auth][error][${code}]${errorMsg ? ` - ${errorMsg}` : ""}`,
  //       metadata
  //     );
  //   },
  //   warn(code) {
  //     logger.warn(`[next-auth][warn][${code}]`);
  //   },
  //   debug(code, metadata) {
  //     logger.debug(`[next-auth][debug][${code}]`, metadata);
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };