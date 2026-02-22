import Link from "next/link";
import { WarningCircle, House, RocketLaunch, Sparkle } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found | Chalkframe",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-900 text-slate-300 selection:bg-violet-500/30 overflow-hidden font-sans">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 pt-24 md:pt-0">
                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-violet-600),_transparent_60%)] blur-[80px]" />
                </div>

                <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full animate-pulse-slow"></div>
                            <WarningCircle weight="duotone" className="text-violet-400 text-8xl md:text-9xl relative z-10" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-medium text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                        404
                    </h1>

                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-light text-slate-200">
                            Looks like you're lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 italic font-medium">void.</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-md mx-auto">
                            The page you're looking for was moved, removed, renamed, or might never have existed. Let's get you back on track.
                        </p>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200 rounded-xl px-8 py-4 font-bold text-sm md:text-base transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
                        >
                            <House weight="fill" /> Return Home
                        </Link>
                    </div>

                    <div className="pt-12 mt-12 border-t border-white/5 w-full">
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">Or explore our products</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                            <Link href="/proposalflow" className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors border-white/10 hover:border-violet-500/30 group">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                                    <RocketLaunch weight="duotone" className="text-xl" />
                                </div>
                                <div className="text-left text-sm">
                                    <div className="text-white font-medium">ProposalFlow</div>
                                    <div className="text-slate-400">Proposals in seconds.</div>
                                </div>
                            </Link>
                            <Link href="/ai" className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors border-white/10 hover:border-emerald-500/30 group">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Sparkle weight="duotone" className="text-xl" />
                                </div>
                                <div className="text-left text-sm">
                                    <div className="text-white font-medium">AI Advantage</div>
                                    <div className="text-slate-400">Save 10+ hours a week.</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
