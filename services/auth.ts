import { supabase } from "@/lib/supabaseClient";

export async function signInWithGoogle() {
  const { data, error } =
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          "http://localhost:3000/auth/callback",
      },
    });

  if (error) throw error;

  return data;
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}