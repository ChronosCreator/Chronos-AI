import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import InterviewDemo from "@/components/landing/InterviewDemo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <InterviewDemo />
      <section
  id="about"
  className="mx-auto mt-32 max-w-7xl rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl"
>
  <div className="max-w-4xl">
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
      About Chronos AI
    </span>

    <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
      Built to Help Developers
      <br />
      Crack Technical Interviews
    </h2>

    <p className="mt-8 text-lg leading-8 text-slate-400">
      Chronos AI is an AI-powered mock interview platform that
      simulates real technical interviews using voice interaction,
      AI evaluation, live transcription, and personalized feedback.
      Whether You&apos;re preparing for internships or software
      engineering roles, Chronos AI helps you practice with
      confidence.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <h3 className="text-3xl font-bold text-cyan-400">
          AI
        </h3>

        <p className="mt-2 text-slate-400">
          Smart interview evaluation powered by LLMs.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <h3 className="text-3xl font-bold text-cyan-400">
          Voice
        </h3>

        <p className="mt-2 text-slate-400">
          Speak naturally with real-time speech recognition.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <h3 className="text-3xl font-bold text-cyan-400">
          Feedback
        </h3>

        <p className="mt-2 text-slate-400">
          Receive instant analysis and improvement suggestions.
        </p>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}