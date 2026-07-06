export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

        <h2 className="mt-6 text-2xl font-semibold text-white">
          Preparing Interview
        </h2>

        <p className="mt-2 text-slate-400">
          Chronos AI is generating your interview...
        </p>

      </div>

    </main>
  );
}