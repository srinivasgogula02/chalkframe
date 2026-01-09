import ProposalFlowNavbar from "@/components/ProposalFlowNavbar";
import ProposalFlowFooter from "@/components/ProposalFlowFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ProposalFlow | AI Proposal Generator",
    description: "Stop Writing Proposals. Start Closing Deals. Generate, design, and brand high-converting proposals in under 30 seconds with AI.",
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
    return (
        <div className="bg-slate-950 text-slate-300 font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
            <ProposalFlowNavbar />
            {children}
            <ProposalFlowFooter />
        </div>
    );
}
