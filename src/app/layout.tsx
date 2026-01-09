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
  metadataBase: new URL("https://www.chalkframe.com"),
  title: {
    default: "Chalkframe | AI Transformation Consultancy",
    template: "%s | Chalkframe",
  },
  description: "Chalkframe bridges the gap between business strategy and AI. Solving your most complex challenges with manual workflows and automated engines of growth.",
  keywords: ["AI Consultancy", "Automation", "Workflow Automation", "AI Agents", "Business Growth"],
  authors: [{ name: "Chalkframe" }],
  creator: "Chalkframe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.chalkframe.com",
    siteName: "Chalkframe",
    title: "Chalkframe | AI Transformation Consultancy",
    description: "Chalkframe bridges the gap between business strategy and AI. Solving your most complex challenges with manual workflows and automated engines of growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chalkframe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chalkframe | AI Transformation Consultancy",
    description: "Chalkframe bridges the gap between business strategy and AI.",
    images: ["/og-image.jpg"],
    creator: "@chalkframe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
