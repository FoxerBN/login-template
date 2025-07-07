'use client'
import { useEffect, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { Github, Google, Discord, Facebook } from "@deemlol/next-icons";
import { redirect } from 'next/navigation'
export default function Home() {
  const { status } = useSession();
  console.log("Session Status:", status);
  
  const cardRef = useRef<HTMLDivElement>(null);
  if (status === "authenticated") {
    redirect("/dashboard");
  }
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add("animate-grow-in");
    }
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div
        ref={cardRef}
        className="grid grid-cols-2 gap-8 rounded-lg p-8 bg-white/4"
        style={{
          border: "1.5px solid #fff",
          borderRadius: "1rem",
          boxShadow: "0 0 16px 2px #fff, 0 0 4px 1px #fff inset",
        }}
      >
        <Github
          className="cursor-pointer brightness-75 transition hover:scale-110 hover:brightness-110"
          onClick={() => signIn("github")}
          size={56}
        />
        <Google
          className="cursor-pointer brightness-75 transition hover:scale-110 hover:brightness-110"
          onClick={() => signIn("google")}
          size={56}
        />
        <Discord
          className="cursor-pointer brightness-75 transition hover:scale-110 hover:brightness-110"
          onClick={() => signIn("discord")}
          size={56}
        />
        <Facebook
          className="cursor-pointer brightness-75 transition hover:scale-110 hover:brightness-110"
          onClick={() => signIn("facebook")}
          size={56}
        />
      </div>
    </div>
  );
}
