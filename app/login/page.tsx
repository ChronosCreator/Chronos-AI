"use client";

import { signInWithGoogle } from "@/services/auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Welcome to Chronos AI
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Sign in to continue your AI interview journey.
        </p>

        <button
          onClick={signInWithGoogle}
          className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-lg font-semibold text-white transition hover:scale-105"
        >
          Continue with Google
        </button>

      </div>

    </main>
  );
}