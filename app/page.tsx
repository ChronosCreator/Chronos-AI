import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import InterviewDemo from "@/components/landing/InterviewDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <InterviewDemo />
    </>
  );
}