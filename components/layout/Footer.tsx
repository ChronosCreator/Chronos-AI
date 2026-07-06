"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-cyan-500/20 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Chronos AI
          </h2>

          <p className="mt-2 max-w-md text-slate-400">
            AI-powered interview preparation platform built
            with Next.js, AI, Speech Recognition, and modern
            web technologies.
          </p>
        </div>

        <div className="flex gap-5">
          <Link
            href="https://github.com/ChronosCreator"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub
              size={22}
              className="text-slate-400 transition hover:text-cyan-400"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/sumitkumar-java/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={22}
              className="text-slate-400 transition hover:text-cyan-400"
            />
          </Link>

          <Link
            href="mailto:skjangid091205@gmail.com"
            aria-label="Email"
          >
            <Mail
              size={22}
              className="text-slate-400 transition hover:text-cyan-400"
            />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Chronos AI • Built by Sumit Kumar
      </div>
    </footer>
  );
}