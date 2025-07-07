import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "cdn.discordapp.com",
      "platform-lookaside.fbsbx.com"
    ],
  }
};

export default nextConfig;
