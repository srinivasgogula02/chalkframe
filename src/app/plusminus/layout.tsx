import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./plusminus.css";

const patrickHand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
    title: "plusMinus | Build Better Habits",
    description: "A simple, distraction-free tracker for your daily goals. Stop guessing and start measuring your progress.",
    alternates: {
        canonical: "https://chalkframe.com/plusminus",
    },
    openGraph: {
        title: "plusMinus | Build Better Habits",
        description: "A simple, distraction-free tracker for your daily goals. Measure your progress.",
        url: "https://chalkframe.com/plusminus",
        siteName: "Chalkframe",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "plusMinus - Habit Tracker",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "plusMinus | Build Better Habits",
        description: "A simple, distraction-free tracker for your daily goals.",
        images: ["/og-image.jpg"],
        creator: "@chalkframe",
    },
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`plusminus-wrapper ${patrickHand.variable} antialiased font-[family-name:var(--font-patrick-hand)]`}>
            {children}
        </div>
    );
}
