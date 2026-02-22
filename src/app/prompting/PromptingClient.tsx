"use client";

import Link from "next/link";
import {
    TerminalWindow,
    Warning,
    CodeBlock,
    ArrowRight,
    Database,
    LockKeyOpen,
    CurrencyInr,
    BugBeetle,
    TrendUp
} from "@phosphor-icons/react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

// Aggressive matrix/hacker variants
const terminalStagger: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
};

const glitchIn: Variants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "tween", ease: "circOut", duration: 0.3 } }
};

export default function PromptingClient() {
    // 7-Day Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set target date to 7 days from now
        const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-[#050505] text-zinc-400 overflow-hidden font-mono relative">

            {/* Absolute Ambient Matrix Effects */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00FF41]/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* 0. Top Scarcity Bar */}
            <div className="w-full flex justify-center bg-[#00FF41] p-2 relative z-50">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-black text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-center w-full">
                    <div className="flex items-center">
                        <span className="animate-pulse mr-1 sm:mr-2">●</span>
                        <span className="hidden md:inline">LIVE MASTERCLASS REGISTRATION CLOSES IN:</span>
                        <span className="md:hidden">CLOSES IN:</span>
                    </div>
                    <div className="bg-black px-2 py-0.5 text-[#00FF41] rounded-sm whitespace-nowrap">
                        {timeLeft.days}d : {timeLeft.hours.toString().padStart(2, '0')}h : {timeLeft.minutes.toString().padStart(2, '0')}m : {timeLeft.seconds.toString().padStart(2, '0')}s
                    </div>
                </div>
            </div>

            {/* 1. The Hacker Hero */}
            <motion.section
                className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-10 pb-20 z-10 border-b border-[#00FF41]/20"
            >
                {/* CRT Scanline overlay effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-50 opacity-20 hidden md:block"></div>

                <motion.div
                    variants={terminalStagger}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 w-full max-w-5xl mx-auto space-y-10"
                >
                    <motion.div variants={glitchIn} className="inline-flex items-center gap-2 border border-[#00FF41]/50 bg-[#00FF41]/5 px-3 py-1 text-[#00FF41] text-xs uppercase tracking-[0.2em]">
                        <TerminalWindow weight="bold" /> root@chalkframe:~$ ./execute_webinar.sh
                    </motion.div>

                    <motion.h1 variants={glitchIn} className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-[1.1] uppercase">
                        Code At The <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#008F11]">Speed of Thought.</span>
                    </motion.h1>

                    <motion.div variants={glitchIn} className="max-w-3xl space-y-6 pt-6 border-l-2 border-[#00FF41]/30 pl-6">
                        <p className="text-xl md:text-2xl text-zinc-300">
                            A 1-hour live masterclass for developers and CS students. Stop wasting 4 hours debugging CSS syntax.
                        </p>
                        <p className="text-lg text-zinc-500 max-w-2xl">
                            Learn how to build full-stack React/Node applications <strong className="text-white bg-white/10 px-1">without typing a single line of code</strong>. Become a 10x Developer by mastering Senior-Level Prompt Engineering.
                        </p>
                    </motion.div>

                    <motion.div variants={glitchIn} className="pt-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                        <Link
                            href="#pricing"
                            className="group relative inline-flex items-center justify-center gap-4 bg-[#00FF41] text-black px-8 py-5 font-bold text-lg sm:text-xl uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 bg-[#00FF41]/50 blur-xl group-hover:opacity-0 transition-opacity"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">Bypass Syntax <ArrowRight weight="bold" className="group-hover:translate-x-2 transition-transform" /></span>
                        </Link>
                        <p className="text-xs sm:text-sm text-[#00FF41]/70 uppercase tracking-widest flex items-center justify-center gap-2 text-center w-full sm:w-auto">
                            <LockKeyOpen weight="fill" className="shrink-0" /> Access unlocks syntax override
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2. The Trap Contrast (Why You Are Losing) */}
            <section className="relative z-10 border-b border-[#00FF41]/20">
                <div className="grid lg:grid-cols-2">

                    {/* THE OLD DEV */}
                    <div className="p-8 md:p-16 lg:p-24 bg-[#0A0A0A] border-b lg:border-b-0 lg:border-r border-[#00FF41]/20 flex flex-col justify-center">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={terminalStagger}
                            className="max-w-lg"
                        >
                            <motion.div variants={glitchIn} className="text-red-500 mb-6"><Warning weight="bold" size={60} /></motion.div>
                            <motion.h2 variants={glitchIn} className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white mb-8 border-l-4 border-red-500 pl-4">
                                The Legacy Path: <span className="text-red-500 block">Obsolete</span>
                            </motion.h2>

                            <div className="space-y-6 text-sm text-zinc-500 uppercase tracking-wide">
                                <motion.div variants={glitchIn} className="flex gap-4 items-start">
                                    <span className="text-red-500 opacity-50">[ERROR]</span>
                                    <div>You spend 6 hours on StackOverflow trying to fix a single React hook dependency array block.</div>
                                </motion.div>
                                <motion.div variants={glitchIn} className="flex gap-4 items-start">
                                    <span className="text-red-500 opacity-50">[ERROR]</span>
                                    <div>You focus on memorizing Tailwind classes instead of understanding architectural patterns.</div>
                                </motion.div>
                                <motion.div variants={glitchIn} className="flex gap-4 items-start">
                                    <span className="text-red-500 opacity-50">[FATAL]</span>
                                    <div>By the time you finish coding a simple auth flow, an AI-enabled developer has already shipped the entire MVP.</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* THE AI DEV */}
                    <div className="p-8 md:p-16 lg:p-24 bg-[#030805] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#00FF41]/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none group-hover:bg-[#00FF41]/10 transition-colors"></div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={terminalStagger}
                            className="max-w-lg relative z-10"
                        >
                            <motion.div variants={glitchIn} className="text-[#00FF41] mb-6"><CodeBlock weight="bold" size={60} /></motion.div>
                            <motion.h2 variants={glitchIn} className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white mb-8 border-l-4 border-[#00FF41] pl-4">
                                The Prompt Path: <span className="text-[#00FF41] block">10x Speed</span>
                            </motion.h2>

                            <div className="space-y-6 text-sm text-zinc-400 uppercase tracking-wide">
                                <motion.div variants={glitchIn} className="flex items-start gap-4">
                                    <span className="text-[#00FF41]">[SUCCESS]</span>
                                    <div className="text-white">You write one single English prompt describing the application state. Vercel v0 / Cursor builds it in 5 seconds.</div>
                                </motion.div>
                                <motion.div variants={glitchIn} className="flex items-start gap-4">
                                    <span className="text-[#00FF41]">[SUCCESS]</span>
                                    <div>You focus exclusively on high-level architecture, business logic, and deploying live to production.</div>
                                </motion.div>
                                <motion.div variants={glitchIn} className="flex items-start gap-4">
                                    <span className="text-[#00FF41]">[SUCCESS]</span>
                                    <div>You launch 10 full-stack projects in the time it takes your classmates to finish one.</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Pricing (The FOMO Setup) */}
            <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={glitchIn}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">System Access.</h2>
                        <p className="text-zinc-500 text-sm md:text-lg uppercase tracking-widest px-4">
                            Initialize checkout. Override manual coding.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">

                        {/* TICKET A: Webinar Only (The Decoy) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-zinc-800 bg-[#0A0A0A] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-zinc-500 uppercase tracking-widest text-xs mb-6">Tier 1 // Basic Access</div>
                                <h3 className="text-3xl font-bold text-white mb-6 uppercase">Webinar Pass</h3>

                                <div className="flex items-center gap-1 mb-10">
                                    <CurrencyInr weight="bold" className="text-3xl text-zinc-400" />
                                    <span className="text-6xl font-black text-white leading-none">49</span>
                                </div>

                                <ul className="space-y-4 text-sm text-zinc-400 uppercase tracking-wide mb-12">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#00FF41]">+</span> 1-Hour Live Zoom Masterclass
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#00FF41]">+</span> Live Q&A session at the end
                                    </li>
                                    <li className="flex items-start gap-3 text-red-500/50 line-through">
                                        <span className="text-red-500">-</span> No access to Prompt Database
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href="/checkout?plan=prompting-webinar-only"
                                className="w-full bg-zinc-800 text-zinc-300 py-4 font-bold text-center uppercase tracking-widest hover:bg-zinc-700 transition-colors"
                            >
                                Initialize Tier 1
                            </Link>
                        </motion.div>

                        {/* TICKET B: The Upsell (The Real Offer) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="border-2 border-[#00FF41] bg-[#020803] p-6 sm:p-8 md:p-10 flex flex-col justify-between relative shadow-[0_0_30px_rgba(0,255,65,0.1)] md:shadow-[0_0_50px_rgba(0,255,65,0.1)] mt-8 md:mt-0"
                        >
                            {/* Glowing UI badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FF41] text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 sm:px-4 whitespace-nowrap">
                                Root Access // Recommended
                            </div>

                            <div className="relative z-10">
                                <div className="text-[#00FF41]/70 uppercase tracking-widest text-[10px] sm:text-xs mb-4 sm:mb-6 flex items-center gap-2">
                                    <Database weight="fill" className="shrink-0" /> Tier 2 // Lifetime Access
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 uppercase">The 10x Dev Bundle</h3>

                                <div className="flex items-center gap-1 mb-2 sm:mb-4">
                                    <CurrencyInr weight="bold" className="text-2xl sm:text-3xl text-[#00FF41]" />
                                    <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">99</span>
                                </div>
                                <div className="text-[#00FF41]/80 text-[10px] sm:text-xs uppercase tracking-widest mb-8 sm:mb-10 border-b border-[#00FF41]/20 pb-4">
                                    Less than a cup of coffee.
                                </div>

                                <ul className="space-y-4 text-xs sm:text-sm text-zinc-300 uppercase tracking-wide mb-10 sm:mb-12">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#00FF41]">+</span> 1-Hour Live Zoom Masterclass
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#00FF41]">+</span> Live Q&A session at the end
                                    </li>
                                    <li className="flex items-start gap-3 text-white font-bold bg-[#00FF41]/10 p-2 border-l-2 border-[#00FF41] -ml-2">
                                        <Database weight="fill" className="text-[#00FF41] shrink-0 text-xl" />
                                        LIFETIME Access to the Developer Prompt Database (100+ Production Prompts)
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href="/checkout?plan=prompting-webinar-bundle"
                                className="w-full bg-[#00FF41] text-black py-5 font-black text-center text-lg uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.6)]"
                            >
                                Initialize Tier 2
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Minimal Hacker Footer */}
            <footer className="py-8 px-6 border-t border-zinc-900 text-center text-xs text-zinc-700 uppercase tracking-widest">
                <p>Warning: Refusal to adapt may result in career obsolescence. // End of file.</p>
                <p className="mt-2">© {new Date().getFullYear()} Chalkframe Systems.</p>
            </footer>
        </main>
    );
}
