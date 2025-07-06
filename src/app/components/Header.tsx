"use client";
import { signOut,useSession } from "next-auth/react";
export default function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <h1>My Site Header</h1>
      <button onClick={() => signOut()}>{session ? "Sign out" : ""}</button>
    </header>
  );
}