import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Chalkframe | AI Transformation Consultancy",
  description: "Chalkframe bridges the gap between business strategy and AI. Solving your most complex challenges with manual workflows and automated engines of growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans bg-slate-900 text-slate-50 antialiased overflow-x-hidden selection:bg-violet-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
