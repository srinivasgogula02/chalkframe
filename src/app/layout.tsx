import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TK42CQKYWR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TK42CQKYWR');
          `}
        </Script>
      </body>
    </html>
  );
}
