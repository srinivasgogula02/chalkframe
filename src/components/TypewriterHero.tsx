"use client";

import { useState, useEffect } from "react";
import { Sparkle, ArrowRight } from "@phosphor-icons/react";

export default function TypewriterHero() {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    const phrases = [
        "SEO Retainer for Tech Corp...",
        "Mobile App Development Proposal...",
        "Social Media Strategy Q1...",
        "Enterprise Consulting Agreement...",
    ];

    useEffect(() => {
        const handleType = () => {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                setText(currentPhrase.substring(0, text.length - 1));
                setSpeed(50);
            } else {
                setText(currentPhrase.substring(0, text.length + 1));
                setSpeed(100);
            }

            if (!isDeleting && text === currentPhrase) {
                setIsDeleting(true);
                setSpeed(2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
                setSpeed(500);
            }
        };

        const timer = setTimeout(handleType, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, speed, phraseIndex, phrases]);

    const handleRedirect = () => {
        window.location.href = "https://proposalflow.chalkframe.com/login";
    };

    return (
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 relative z-20 px-2 md:px-0">
            <div className="glass-card p-3 md:p-2 md:pl-4 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-0 border border-violet-500/30 shadow-[0_0_40px_rgba(99,102,241,0.1)] focus-within:border-violet-500/60 focus-within:shadow-[0_0_50px_rgba(99,102,241,0.25)] transition-all">
                <div className="flex items-center flex-1 gap-3 px-2 md:px-0" onClick={handleRedirect}>
                    <Sparkle className="text-violet-400 text-xl animate-pulse hidden md:block" weight="fill" />
                    <input
                        type="text"
                        readOnly
                        className="bg-transparent w-full outline-none text-slate-200 placeholder-slate-500 text-base md:text-lg font-medium py-2 md:py-0 text-center md:text-left cursor-default"
                        value={text}
                        placeholder=""
                    />
                    <span className="w-0.5 h-6 bg-violet-400 animate-pulse hidden md:block mr-4"></span>
                </div>
                <button
                    onClick={handleRedirect}
                    className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-900/30 hover:shadow-violet-600/50 md:ml-4 shrink-0 w-full md:w-auto"
                >
                    Generate <ArrowRight weight="bold" />
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-center text-slate-500 text-[10px] md:text-sm mt-4 font-mono tracking-tight">
                <span>#SEO_Retainer</span>{" "}
                <span className="text-slate-700 hidden md:inline">•</span>
                <span>#App_Development</span>{" "}
                <span className="text-slate-700 hidden md:inline">•</span>
                <span>#Consulting</span>
            </div>
        </div>
    );
}
