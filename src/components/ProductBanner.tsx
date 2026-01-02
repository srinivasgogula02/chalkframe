"use client";

import { useState } from "react";
import Link from "next/link";
import { X, FileText, ArrowRight } from "@phosphor-icons/react";

export default function ProductBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            id="product-banner"
            className="fixed bottom-6 right-6 z-50 w-full max-w-xs transition-all duration-500 transform translate-y-0"
        >
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 shadow-2xl relative bg-slate-900/60 border border-violet-500/30">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-2 -right-2 bg-slate-800 text-slate-400 hover:text-white rounded-full p-1 border border-white/10"
                >
                    <X className="text-xs" weight="bold" />
                </button>
                <div className="bg-violet-500/20 p-2.5 rounded-lg text-violet-400 animate-pulse-slow">
                    <FileText className="text-xl" weight="fill" />
                </div>
                <div>
                    <h4 className="font-display font-bold text-white text-sm">
                        New Tool Launched
                    </h4>
                    <Link
                        href="/proposalflow"
                        target="_blank"
                        className="text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-colors mt-0.5"
                    >
                        ProposalFlow AI <ArrowRight className="text-xs" weight="bold" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
