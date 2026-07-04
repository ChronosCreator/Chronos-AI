"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main>
        {/* Dashboard Content */}
      </main>
    </ProtectedRoute>
  );
}