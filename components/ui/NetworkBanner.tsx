"use client";

import { WifiOff } from "lucide-react";
import useNetworkStatus from "@/hooks/useNetworkStatus";

export default function NetworkBanner() {
  const online = useNetworkStatus();

  if (online) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-red-600 px-4 py-3 text-center text-white shadow-lg">

      <div className="flex items-center justify-center gap-3">

        <WifiOff size={18} />

        <span className="font-medium">
          No internet connection. Some features may not work.
        </span>

      </div>

    </div>
  );
}