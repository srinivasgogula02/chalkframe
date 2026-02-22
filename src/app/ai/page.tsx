"use client";

import Link from "next/link";
import {
    PlayCircle,
    FolderOpen,
    EnvelopeSimple,
    Clock,
    ArrowRight,
    CheckCircle,
    Copy
} from "@phosphor-icons/react";
import { motion, Variants } from "framer-motion";

// Ultra-smooth, elegant variants for the "Apple-esque" feel
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const fadeScale: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

export default function AIClient() {
    return (
        <main className="min-h-screen bg-[#030508] text-zinc-300 overflow-hidden font-sans relative selection:bg-white/20">

            {/* Absolute Ambient Glows - Very subtle, luxury feel */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 w-[800px] h-[400px] bg-zinc-800/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* 1. The Hero Section (Supreme Simplicity) */}
            <motion.section
                className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 z-10"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-10"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm tracking-wide backdrop-blur-md">
                        Built for everyday professionals.
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-display font-light text-white tracking-tighter leading-[0.9]">
                        Don't Learn AI.<br />
                        <span className="text-zinc-500 font-normal">Just Copy Us.</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="max-w-2xl mx-auto space-y-6 pt-4">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                            We give you a library of <strong className="text-white font-medium">copy-paste prompts</strong> and 5-minute screen recordings that literally do your job for you.
                        </p>
                        <p className="text-base text-zinc-500 font-light max-w-lg mx-auto">
                            No coding required. No technical jargon. Just results. Save 10 hours a week by letting AI write your emails, analyze your spreadsheets, and draft your proposals.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#pricing"
                            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-500 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">Get Your 10 Hours Back <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <p className="text-sm text-zinc-500 flex items-center gap-2">
                            <Clock weight="fill" className="text-zinc-400" /> Takes 5 mins to setup
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2. The "3 Deliverables" Section (Visualized Simply) */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-center mb-24"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                            What you actually get.
                        </h2>
                        <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">
                            Everything you need to automate your work, delivered in painfully simple formats.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {/* Deliverable 1 */}
                        <motion.div variants={fadeScale} className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 hover:bg-white/[0.04] transition-colors duration-500 group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Copy weight="duotone" className="text-3xl text-zinc-300" />
                            </div>
                            <h3 className="text-3xl font-display font-light text-white mb-4 tracking-tight">The Prompt Library</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                A searchable database of exact phrases. Find what you need to do (e.g., "Write a polite rejection email"), copy the text, and paste it into ChatGPT. Pre-tested to guarantee perfect results.
                            </p>
                        </motion.div>

                        {/* Deliverable 2 */}
                        <motion.div variants={fadeScale} className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 hover:bg-white/[0.04] transition-colors duration-500 group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <PlayCircle weight="duotone" className="text-3xl text-zinc-300" />
                            </div>
                            <h3 className="text-3xl font-display font-light text-white mb-4 tracking-tight">5-Minute Videos</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                No 4-hour courses. Watch over our shoulder as we record 5-minute videos showing you exactly where to click to automate tasks like summarizing meetings or organizing spreadsheets.
                            </p>
                        </motion.div>

                        {/* Deliverable 3 */}
                        <motion.div variants={fadeScale} className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 hover:bg-white/[0.04] transition-colors duration-500 group">
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <EnvelopeSimple weight="duotone" className="text-3xl text-zinc-300" />
                            </div>
                            <h3 className="text-3xl font-display font-light text-white mb-4 tracking-tight">The 3-Min Newsletter</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Once a week, we email you exactly one new tool or prompt that is proven to save time. It takes 3 minutes to read. No fluff, no tech news you don't care about. Just pure utility.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Pricing (The No-Brainer Offer) */}
            <section id="pricing" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">Cost vs. Time.</h2>
                        <p className="text-zinc-500 text-xl font-light">
                            For less than the cost of a Netflix subscription, buy back your weekends.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeScale}
                        className="bg-white/[0.01] border border-white/[0.05] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group"
                    >
                        {/* Subtle internal glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-display font-light text-zinc-400 mb-8">Full Access</h3>

                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-3xl md:text-4xl text-zinc-500 font-light">₹</span>
                                <span className="text-8xl md:text-[8rem] font-display font-light text-white tracking-tighter leading-none">499</span>
                            </div>
                            <div className="text-zinc-500 uppercase tracking-widest text-sm mb-12">per month</div>

                            <div className="flex flex-col items-center gap-5 mb-16 max-w-md mx-auto">
                                {[
                                    "Access to the Copy-Paste Prompt Library",
                                    "All 5-Minute Screen Recording Tutorials",
                                    "The Weekly Utility Newsletter",
                                    "Cancel easily anytime in one click"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-zinc-300 text-lg font-light">
                                        <CheckCircle weight="fill" className="text-zinc-500 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/checkout?plan=ai-monthly"
                                className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-full font-medium text-xl hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-12 px-6 border-t border-white/[0.05] text-center font-sans text-sm text-zinc-600 font-light">
                <p className="mb-4">You don't need to be a programmer to use AI.</p>
                <p>© {new Date().getFullYear()} Chalkframe AI. All Rights Reserved.</p>
            </footer>
        </main>
    );
}
