"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@/hooks/useAuth";
import LoadingCard from "@/components/ui/LoadingCard";
import ErrorCard from "@/components/ui/ErrorCard";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6">
        <LoadingCard
          title="Authenticating..."
          message="Checking your account and preparing your dashboard."
        />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6">
        <ErrorCard
          title="Authentication Required"
          message="Redirecting you to the login page..."
        />
      </div>
    );
  }

  return <>{children}</>;
}