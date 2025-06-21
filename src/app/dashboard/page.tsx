"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Email: {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}