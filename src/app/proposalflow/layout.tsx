import ProposalFlowNavbar from "@/components/ProposalFlowNavbar";
import ProposalFlowFooter from "@/components/ProposalFlowFooter";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "ProposalFlow | AI Proposal Generator",
    description: "Stop Writing Proposals. Start Closing Deals. Generate, design, and brand high-converting proposals in under 30 seconds with AI.",
    keywords: [
        "AI Proposal Generator",
        "ProposalFlow",
        "Automated Proposals",
        "Proposal Software",
        "AI Proposal Writer",
        "Business Proposals",
        "Proposal Automation",
        "AI for Sales",
        "Proposal Templates",
        "Brand Brain"
    ],
    alternates: {
        canonical: "https://www.chalkframe.com/proposalflow",
    },
    openGraph: {
        title: "ProposalFlow | AI Proposal Generator",
        description: "Stop Writing Proposals. Start Closing Deals. Generate high-converting proposals in under 30 seconds.",
        url: "https://www.chalkframe.com/proposalflow",
        siteName: "Chalkframe",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ProposalFlow - AI Proposal Generator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ProposalFlow | AI Proposal Generator",
        description: "Stop Writing Proposals. Start Closing Deals.",
        images: ["/og-image.jpg"],
        creator: "@chalkframe",
    },
};

export default function ProposalFlowLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ProposalFlow",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI-powered proposal generator that creates professional, branded proposals in under 30 seconds",
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "9.99",
            "highPrice": "69.00",
            "priceCurrency": "USD",
            "offerCount": "3"
        },
        "provider": {
            "@type": "Organization",
            "name": "Chalkframe"
        }
    };

    return (
        <div className="bg-slate-950 text-slate-300 font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
            <Script
                id="proposalflow-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productSchema)
                }}
            />
            <ProposalFlowNavbar />
            {children}
            <ProposalFlowFooter />
        </div>
    );
}
