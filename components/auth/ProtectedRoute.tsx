"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(
        `/login?redirect=${encodeURIComponent(pathname)}`
      );
    }
  }, [loading, user, pathname, router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-6">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

          <p className="text-lg text-slate-300">
            Checking authentication...
          </p>
        </div>
      </main>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}