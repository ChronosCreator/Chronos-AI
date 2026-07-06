import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-cyan-400">
          404
        </h1>

        <p className="mt-4 text-xl text-white">
          Page not found
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}