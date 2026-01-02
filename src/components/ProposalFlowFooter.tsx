import Link from "next/link";
import { MagicWand } from "@phosphor-icons/react/dist/ssr";

export default function ProposalFlowFooter() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
                    <div className="flex items-center gap-3 group mb-6 md:mb-0">
                        <div className="w-8 h-8 border border-violet-500 bg-violet-500/20 relative flex items-center justify-center">
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-violet-400 shadow-[0_0_10px_#a78bfa]"></div>
                            <MagicWand className="text-violet-300" weight="bold" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-wide uppercase text-white">
                            ProposalFlow
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-slate-400">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Twitter
                        </Link>
                    </div>
                </div>
                <div className="text-center md:text-left text-slate-600 text-xs border-t border-white/5 pt-8">
                    &copy; {new Date().getFullYear()} Chalkframe AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
