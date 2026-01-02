
import {
    XCircle,
    Clock,
    Files,
    Trash,
    CheckCircle,
    Lightning,
    Globe,
    ChartLineUp,
    PaintBucket,
    MagicWand,
    Circuitry,
    CursorClick,
    Check,
    Crown
} from "@phosphor-icons/react/dist/ssr";
import TypewriterHero from "@/components/TypewriterHero";
import ProposalFlowHeroActions from "@/components/ProposalFlowHeroActions";
import ProposalPreviewCard from "@/components/ProposalPreviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function ProposalFlowPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-screen"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md mb-8 animate-float shadow-xl hover:border-violet-500/50 transition-colors cursor-pointer max-w-[90vw] whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="flex h-2 w-2 relative shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-semibold text-slate-300 tracking-wide truncate">
                            Live Editor v2.0 is Public
                        </span>
                    </div>

                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] tracking-tight mb-6 md:mb-8 drop-shadow-2xl">
                        Stop Writing Proposals.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300">
                            Start Closing Deals.
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
                        The first proposal tool that thinks like a sales pro. Generate, design, and brand high-converting proposals in{" "}
                        <span className="text-slate-200 font-semibold border-b border-violet-500/50">
                            under 30 seconds
                        </span>
                        .
                    </p>

                    <ProposalFlowHeroActions />

                    <ScrollReveal delay={100}>
                        <TypewriterHero />
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <ProposalPreviewCard />
                    </ScrollReveal>
                </div>
            </section>

            {/* Trusted By Scroll */}
            <div className="w-full bg-slate-950 border-y border-white/5 py-6 md:py-8 overflow-hidden relative z-20">
                <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
                    <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest">
                        Trusted by 2,000+ High-Growth Agencies
                    </p>
                </div>
                <div className="flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex animate-scroll gap-12 md:gap-16 items-center whitespace-nowrap min-w-full">
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">ACME Corp</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Polymath</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Stark Industries</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Wayne Ent</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Cyberdyne</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Massive Dynamic</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">ACME Corp</span>
                        <span className="text-xl md:text-2xl font-display font-bold text-slate-700">Polymath</span>
                    </div>
                </div>
            </div>

            {/* ROI Section */}
            <section id="roi" className="py-16 md:py-24 bg-slate-900 border-b border-slate-800 relative">
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-12 md:mb-16">
                            <span className="text-violet-400 font-mono text-xs font-bold tracking-wider uppercase px-2 py-1 bg-violet-500/10 rounded border border-violet-500/20">
                                ROI Analysis
                            </span>
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 px-4">
                                Stop paying the "Manual Labor Tax".
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-5xl mx-auto">
                        <ScrollReveal delay={100} className="h-full">
                            <div className="p-6 md:p-8 rounded-3xl border border-red-500/10 bg-slate-900 relative overflow-hidden group h-full">
                                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                                <div className="absolute top-0 right-0 p-4">
                                    <XCircle className="text-red-500 text-2xl opacity-50" weight="bold" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-red-400 mb-6 relative z-10">
                                    The Old Way
                                </h3>
                                <ul className="space-y-5 text-slate-400 relative z-10">
                                    <li className="flex gap-4 items-start">
                                        <Clock className="text-red-400 text-lg mt-0.5" weight="fill" />
                                        <div>
                                            <strong className="text-slate-300 block">2-4 Hours</strong>
                                            <span className="text-xs">wasted per proposal draft</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <Files className="text-red-400 text-lg mt-0.5" weight="fill" />
                                        <div>
                                            <strong className="text-slate-300 block">Static PDFs</strong>
                                            <span className="text-xs">Hard to edit, impossible to track</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <Trash className="text-red-400 text-lg mt-0.5" weight="fill" />
                                        <div>
                                            <strong className="text-slate-300 block">Generic Templates</strong>
                                            <span className="text-xs">Client feels like "just another number"</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200} className="h-full">
                            <div className="p-6 md:p-8 rounded-3xl border border-violet-500 bg-slate-900 relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)] h-full">
                                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none"></div>
                                <div className="absolute top-0 right-0 px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-bl-xl tracking-wider shadow-lg">
                                    WINNER
                                </div>
                                <h3 className="font-display font-bold text-xl text-white mb-6 relative z-10 flex items-center gap-2">
                                    ProposalFlow Way <CheckCircle className="text-violet-400" weight="fill" />
                                </h3>
                                <ul className="space-y-5 text-slate-300 relative z-10">
                                    <li className="flex gap-4 items-start">
                                        <div className="p-1 bg-violet-500/20 rounded text-violet-400">
                                            <Lightning weight="fill" />
                                        </div>
                                        <div>
                                            <strong className="text-white block">30 Seconds</strong>
                                            <span className="text-xs text-slate-400">Full draft generated by AI</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="p-1 bg-violet-500/20 rounded text-violet-400">
                                            <Globe weight="fill" />
                                        </div>
                                        <div>
                                            <strong className="text-white block">Live Web Docs</strong>
                                            <span className="text-xs text-slate-400">Interactive, responsive, trackable</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="p-1 bg-violet-500/20 rounded text-violet-400">
                                            <ChartLineUp weight="fill" />
                                        </div>
                                        <div>
                                            <strong className="text-white block">Smart ROI Tables</strong>
                                            <span className="text-xs text-slate-400">Sell the value, not the hours</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-32 relative bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <ScrollReveal>
                        <div className="mb-12 md:mb-20">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                                Not just a writer.
                                <br />
                                <span className="text-slate-500">A closing assistant.</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group glass-card">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full group-hover:bg-violet-600/20 transition-all duration-700"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg">
                                    <PaintBucket className="text-violet-400 text-xl md:text-2xl" weight="fill" />
                                </div>
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                                    Brand Brain™
                                </h3>
                                <p className="text-slate-400 max-w-md text-base md:text-lg leading-relaxed">
                                    Upload your logo, hex codes, and tone of voice once. Our AI automatically injects your visual identity into every single document.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-12 relative h-48 md:h-56 w-full bg-slate-900/50 rounded-xl border border-slate-800/50 overflow-hidden flex items-center justify-center backdrop-blur-sm group-hover:border-violet-500/30 transition-colors">
                                <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
                                <div className="flex gap-4 md:gap-6 items-center transform group-hover:scale-105 transition-transform duration-500 ease-out scale-75 md:scale-100 origin-center">
                                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-2xl border-4 border-slate-100 relative z-10">
                                        <div className="w-10 h-10 border border-slate-900 bg-slate-900/10 relative flex items-center justify-center rounded-md">
                                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-slate-800 border border-white"></div>
                                            <MagicWand className="text-slate-800" weight="bold" />
                                        </div>
                                    </div>
                                    <div className="w-12 h-1 bg-gradient-to-r from-slate-700 to-violet-500 rounded-full"></div>
                                    <div className="w-40 h-52 bg-white rounded-lg shadow-2xl p-3 scale-90 border-t-8 border-violet-500 relative z-10 transform rotate-3">
                                        <div className="w-8 h-8 border border-slate-900 bg-slate-900/10 relative flex items-center justify-center mb-3 rounded-sm">
                                            <MagicWand className="text-slate-800 text-[10px]" weight="bold" />
                                        </div>
                                        <div className="h-2.5 w-full bg-slate-100 mb-2 rounded-sm"></div>
                                        <div className="h-2.5 w-3/4 bg-slate-100 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ScrollReveal delay={200} className="h-full">
                            <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden group glass-card h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <Circuitry className="text-emerald-400 text-xl md:text-2xl" weight="fill" />
                                </div>
                                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2">
                                    Reasoning Engine
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Switch to "Reasoning Mode" for complex deals. The AI analyzes business logic and ROI.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="h-full">
                            <div className="rounded-3xl p-6 md:p-8 relative overflow-hidden group glass-card h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <CursorClick className="text-blue-400 text-xl md:text-2xl" weight="fill" />
                                </div>
                                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2">
                                    Visual Editor
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    This isn't a PDF. It's a live web doc. Click any text to edit it instantly.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 md:py-32 bg-slate-950 relative border-t border-white/5">
                <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                                Pay once. Use forever.
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg">
                                No monthly fees. Buy credits that never expire.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <ScrollReveal className="order-2 md:order-1 h-full">
                            <div className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
                                <h3 className="font-display font-bold text-xl text-white">Starter Pack</h3>
                                <div className="mt-4 mb-8">
                                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">$9.99</span>
                                    <span className="text-slate-500 font-medium">/pack</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8 flex-grow">
                                    Great for one-off proposals.
                                </p>
                                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" />
                                        <strong>200 Credits</strong>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" /> Lifetime Validity
                                    </li>
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" /> Standard Speed
                                    </li>
                                </ul>
                                <Link
                                    href="https://proposalflow.chalkframe.com/pricing"
                                    className="block w-full py-3.5 rounded-xl border border-slate-700 text-white font-bold text-center hover:bg-slate-800 transition-colors"
                                >
                                    Buy 200 Credits
                                </Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="order-1 md:order-2 h-full">
                            <div className="p-8 md:p-10 rounded-3xl bg-slate-900 border-2 border-violet-600 relative transform translate-y-0 md:-translate-y-6 shadow-[0_0_50px_rgba(99,102,241,0.15)] h-full flex flex-col">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                                    Best Value
                                </div>
                                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                                    Pro Pack <Crown weight="fill" className="text-yellow-500" />
                                </h3>
                                <div className="mt-4 mb-8">
                                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">$24.99</span>
                                    <span className="text-slate-500 font-medium">/pack</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8 flex-grow">
                                    For consistent closers.
                                </p>
                                <ul className="space-y-4 text-sm text-white mb-8">
                                    <li className="flex gap-3">
                                        <CheckCircle weight="fill" className="text-violet-400" />
                                        <strong>750 Credits</strong>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle weight="fill" className="text-violet-400" />
                                        <strong>Brand Brain™</strong> (Auto-Logo)
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle weight="fill" className="text-violet-400" />
                                        <strong>Reasoning Model</strong> Access
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle weight="fill" className="text-violet-400" /> Priority Queue
                                    </li>
                                </ul>
                                <Link
                                    href="https://proposalflow.chalkframe.com/pricing"
                                    className="block w-full py-3.5 rounded-xl bg-violet-600 text-white font-bold text-center hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/40"
                                >
                                    Buy 750 Credits
                                </Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="order-3 h-full">
                            <div className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
                                <h3 className="font-display font-bold text-xl text-white">Agency Pack</h3>
                                <div className="mt-4 mb-8">
                                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">$69.00</span>
                                    <span className="text-slate-500 font-medium">/pack</span>
                                </div>
                                <p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8 flex-grow">
                                    Volume heavy lead-gen agencies.
                                </p>
                                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" />
                                        <strong>2,200 Credits</strong>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" /> Commercial Use Ready
                                    </li>
                                    <li className="flex gap-3">
                                        <Check weight="bold" className="text-violet-500" /> Highest Speed
                                    </li>
                                </ul>
                                <Link
                                    href="https://proposalflow.chalkframe.com/pricing"
                                    className="block w-full py-3.5 rounded-xl border border-slate-700 text-white font-bold text-center hover:bg-slate-800 transition-colors"
                                >
                                    Buy 2,200 Credits
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
