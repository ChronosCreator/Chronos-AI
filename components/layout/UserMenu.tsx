"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/services/auth";
import useAuth from "@/hooks/useAuth";

export default function UserMenu() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return null;

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="text-sm text-white">
          {user.user_metadata?.full_name || "User"}
        </p>

        <p className="text-xs text-slate-400">
          {user.email}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl border border-red-500/30 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
      >
        Logout
      </button>
    </div>
  );
}