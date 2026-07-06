export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">

      <div className="text-center">

        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

        <h1 className="mt-8 text-3xl font-bold text-white">
          Chronos AI
        </h1>

        <p className="mt-3 text-slate-400">
          Initializing AI Interview...
        </p>

      </div>

    </main>
  );
}