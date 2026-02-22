import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Cube,
    MagicWand,
    Article,
    Robot,
    Database,
    RocketLaunch,
    TerminalWindow,
    BriefcaseMetal
} from "@phosphor-icons/react/dist/ssr";
import ProductsBackground from "@/assets/products-background.png";

export const metadata: Metadata = {
    title: "Products | Chalkframe",
    description:
        "A suite of automated AI tools and products designed to solve specific business problems with zero overhead. ProposalFlow, Forever Blog, and more.",
    keywords: [
        "AI Products",
        "ProposalFlow",
        "AI Proposal Generator",
        "Forever Blog",
        "Business Automation Tools",
        "AI Software",
        "Automated Proposals",
        "AI SEO Tools"
    ],
    alternates: {
        canonical: "https://www.chalkframe.com/products",
    },
};

export default function ProductsPage() {
    return (
        <main className="relative">
            <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={ProductsBackground}
                        alt="Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                        placeholder="blur"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="animate-float mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-200 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
                        <Cube weight="fill" /> Product Suite
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-medium leading-[0.9] tracking-tighter mb-8 text-white">
                        Packaged{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 italic font-light">
                            Intelligence.
                        </span>
                    </h1>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        Specific solutions for specific problems. Same Chalkframe quality,
                        packaged for instant deployment.
                    </p>
                </div>
            </section>

            <section className="relative z-10 py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300 border border-violet-500/30 shadow-lg shadow-violet-900/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[60px] rounded-full group-hover:bg-violet-500/20 transition-all"></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/80 border border-violet-500/30 rounded-2xl flex items-center justify-center text-violet-400 shadow-lg">
                                <MagicWand className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>{" "}
                                Available Now
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            ProposalFlow
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            The AI that writes, designs, and formats professional proposals
                            instantly. Stop using Word. Close deals in 30 seconds.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    $9.99
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / Pack
                                </span>
                            </div>
                            <Link
                                href="/proposalflow"
                                target="_blank"
                                className="block w-full py-3 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white text-center font-bold transition-all rounded-xl shadow-lg shadow-violet-900/30"
                            >
                                Launch Tool
                            </Link>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center text-white">
                                <Article className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Available Now
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            The Forever Blog
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            A fully customized startup blog that matches your brand perfectly.
                            No monthly fees, ever. Hosting is on us.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    $99
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / One-Time
                                </span>
                            </div>
                            <Link
                                href="/blog-launch"
                                className="block w-full py-3 bg-white text-slate-900 text-center font-bold hover:bg-slate-200 transition-colors rounded-xl shadow-lg"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* NEW PRODUCTS START */}
                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center text-amber-400">
                                <Robot className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Available Now
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            The AI Advantage
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            Stop learning AI. Just copy us. Get our private prompt library and weekly copy-paste AI workflows delivered to your inbox.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    ₹499
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / Month
                                </span>
                            </div>
                            <Link
                                href="/ai"
                                className="block w-full py-3 bg-white/10 text-white text-center font-bold hover:bg-white/20 transition-colors rounded-xl"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center text-[#00FF41]">
                                <RocketLaunch className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Available Now
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            MVP Studio
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            Stop drawing pictures. Start shipping real software. We build your functional, coded web application MVP in days.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    ₹24,999
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / MVP
                                </span>
                            </div>
                            <Link
                                href="/prototype"
                                className="block w-full py-3 bg-white/10 text-white text-center font-bold hover:bg-white/20 transition-colors rounded-xl"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center text-fuchsia-400">
                                <TerminalWindow className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Closing Soon
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            Code Without Syntax
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            10x Developer Masterclass. A 1-hour live webinar teaching developers how to bypass syntax using AI.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    ₹49
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / Seat
                                </span>
                            </div>
                            <Link
                                href="/prompting"
                                className="block w-full py-3 bg-white/10 text-white text-center font-bold hover:bg-white/20 transition-colors rounded-xl"
                            >
                                Secure Seat
                            </Link>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/50 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                                <BriefcaseMetal className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Limited Slots
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">
                            1:1 Architecture Plan
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            Turn your idea into software without writing code. A private 60-minute strategy session with a Senior Architect.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-3xl font-display font-bold text-white">
                                    ₹8,999
                                </span>
                                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">
                                    / Session
                                </span>
                            </div>
                            <Link
                                href="/build"
                                className="block w-full py-3 bg-white/10 text-white text-center font-bold hover:bg-white/20 transition-colors rounded-xl"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                    {/* NEW PRODUCTS END */}

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group opacity-60 hover:opacity-100 transition-all duration-500 border border-dashed border-slate-700">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-center text-slate-500">
                                <Robot className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Coming Soon
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-slate-300 mb-2 relative z-10">
                            AI SEO Autopilot
                        </h3>
                        <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            Automated Generative Engine Optimization (GEO) engine. Generate 1,000+ landing pages
                            based on your niche keywords automatically.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4 opacity-50">
                                <span className="text-3xl font-display font-bold text-slate-400">
                                    $499
                                </span>
                                <span className="text-xs text-slate-600 mb-1 uppercase tracking-wider">
                                    / Setup
                                </span>
                            </div>
                            <button
                                disabled
                                className="block w-full py-3 bg-slate-800/50 text-slate-500 text-center font-bold cursor-not-allowed rounded-xl border border-white/5"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-3xl flex flex-col relative overflow-hidden group opacity-60 hover:opacity-100 transition-all duration-500 border border-dashed border-slate-700">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="w-14 h-14 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-center text-slate-500">
                                <Database className="text-3xl" weight="fill" />
                            </div>
                            <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                                Coming Soon
                            </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-slate-300 mb-2 relative z-10">
                            RAG Knowledge Base
                        </h3>
                        <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                            Turn your Google Drive or Notion into a chat-able AI expert. Instant
                            answers for your team without hallucination.
                        </p>

                        <div className="pt-6 border-t border-white/5 relative z-10">
                            <div className="flex items-end gap-2 mb-4 opacity-50">
                                <span className="text-3xl font-display font-bold text-slate-400">
                                    $299
                                </span>
                                <span className="text-xs text-slate-600 mb-1 uppercase tracking-wider">
                                    / Setup
                                </span>
                            </div>
                            <button
                                disabled
                                className="block w-full py-3 bg-slate-800/50 text-slate-500 text-center font-bold cursor-not-allowed rounded-xl border border-white/5"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
