import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import Script from "next/script";
import "./plusminus.css";

const patrickHand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
    title: "plusMinus | Build Better Habits",
    description: "A simple, distraction-free tracker for your daily goals. Stop guessing and start measuring your progress.",
    keywords: [
        "Habit Tracker",
        "PlusMinus",
        "Habit Tracking App",
        "Goal Tracker",
        "Daily Habits",
        "Productivity App",
        "Habit Building",
        "Progress Tracker",
        "Habit Formation",
        "Goal Setting"
    ],
    alternates: {
        canonical: "https://www.chalkframe.com/plusminus",
    },
    openGraph: {
        title: "plusMinus | Build Better Habits",
        description: "A simple, distraction-free tracker for your daily goals. Measure your progress.",
        url: "https://www.chalkframe.com/plusminus",
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
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "plusMinus",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "Web",
        "description": "A simple, distraction-free habit tracker for your daily goals",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "provider": {
            "@type": "Organization",
            "name": "Chalkframe"
        }
    };

    return (
        <div className={`plusminus-wrapper ${patrickHand.variable} antialiased font-[family-name:var(--font-patrick-hand)]`}>
            <Script
                id="plusminus-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema)
                }}
            />
            {children}
        </div>
    );
}
