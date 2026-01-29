import ProposalFlowNavbar from "@/components/ProposalFlowNavbar";
import ProposalFlowFooter from "@/components/ProposalFlowFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ProposalFlow | AI Proposal Generator",
    description: "Stop Writing Proposals. Start Closing Deals.",
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
