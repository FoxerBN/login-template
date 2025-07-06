'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Github, Google } from "@deemlol/next-icons";

export default function Home() {
   const { data: session } = useSession();

  return (
      <div>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <Google onClick={() => signOut()}size={24} color="#FFFFFF" />
        </>
      ) : (
        <Github onClick={() => signIn("github")} size={24} color="#FFFFFF" />
      )}
    </div>
      
      
  );
}
