"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (!session) {
    redirect("/");
    return null;
  }

  return (
    
      <div style={{ backgroundColor: "rgba(128,128,128,0.1)" }} className="rounded-xl shadow-lg p-10 flex flex-col items-center space-y-4">
        <Image
          width={100}
          height={100}
          src={session.user?.image ?? "/avatar-placeholder.png"}
          alt="Avatar"
          className="rounded-full border-4 border-blue-400 shadow"
        />
        <h1 className="text-2xl font-bold text-white">{session.user?.name ?? "No Name"}</h1>
        <p className="text-gray-500">{session.user?.email}</p>
      </div>
    
  );
}
