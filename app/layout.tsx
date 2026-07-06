import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NetworkBanner from "@/components/ui/NetworkBanner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chronos AI",
    template: "%s | Chronos AI",
  },

  description:
    "Chronos AI is an AI-powered mock interview platform that helps developers prepare for technical interviews with voice interaction, AI evaluation, and instant feedback.",

  keywords: [
    "Chronos AI",
    "AI Interview",
    "Mock Interview",
    "Interview Preparation",
    "Technical Interview",
    "Software Engineer",
    "Frontend Interview",
    "Full Stack Interview",
    "React",
    "Next.js",
    "AI",
  ],

  authors: [
    {
      name: "Sumit Kumar",
    },
  ],

  creator: "Sumit Kumar",

  metadataBase: new URL("https://chronos-ai.vercel.app"),

  openGraph: {
    title: "Chronos AI",
    description:
      "AI-powered technical interview platform with voice interaction and instant feedback.",
    url: "https://chronos-ai.vercel.app",
    siteName: "Chronos AI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chronos AI",
    description:
      "Practice technical interviews with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}

  <NetworkBanner />

  <Toaster
    richColors
    position="top-right"
  />
</body>
    </html>
  );
}
