"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { getUser } from "@/services/auth";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const currentUser = await getUser();

      setUser(currentUser);

      setLoading(false);
    }

    loadUser();
  }, []);

  return {
    user,
    loading,
  };
}