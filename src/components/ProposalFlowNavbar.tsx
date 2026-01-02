"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, MagicWand, CaretRight, ArrowRight } from "@phosphor-icons/react";

export default function ProposalFlowNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed w-full z-[60] bg-slate-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/proposalflow" className="flex items-center gap-3 group relative z-50">
                        <div className="w-8 h-8 border border-violet-500 bg-violet-500/20 relative group-hover:bg-violet-500/40 transition-colors flex items-center justify-center">
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-violet-400 shadow-[0_0_10px_#a78bfa]"></div>
                            <MagicWand className="text-violet-300" weight="bold" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                            ProposalFlow
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                        <Link href="#features" className="hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#roi" className="hover:text-white transition-colors">
                            ROI
                        </Link>
                        <Link href="#pricing" className="hover:text-white transition-colors">
                            Pricing
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://proposalflow.chalkframe.com/login"
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            Log In
                        </Link>
                        <Link
                            href="https://proposalflow.chalkframe.com/login?mode=signup"
                            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2 group"
                        >
                            Get Started{" "}
                            <ArrowRight
                                weight="bold"
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative p-2 text-slate-300 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X className="text-2xl" weight="bold" />
                        ) : (
                            <List className="text-2xl" weight="bold" />
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-[50] bg-slate-900 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden pt-20 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <Link
                    href="#features"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-bold text-white mobile-link"
                >
                    Features
                </Link>
                <Link
                    href="#roi"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-bold text-white mobile-link"
                >
                    ROI
                </Link>
                <Link
                    href="#pricing"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-bold text-white mobile-link"
                >
                    Pricing
                </Link>
                <hr className="w-12 border-slate-800" />
                <Link
                    href="https://proposalflow.chalkframe.com/login"
                    className="text-xl font-medium text-slate-400 mobile-link"
                >
                    Log In
                </Link>
                <Link
                    href="https://proposalflow.chalkframe.com/login?mode=signup"
                    className="px-8 py-4 bg-violet-600 text-white font-bold rounded-xl mobile-link"
                >
                    Get Started
                </Link>
            </div>
        </>
    );
}
