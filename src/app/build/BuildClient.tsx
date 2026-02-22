"use client";

import Link from "next/link";
import {
    BriefcaseMetal,
    MapTrifold,
    Crosshair,
    ShieldCheck,
    ArrowRight,
    CurrencyInr,
    ChatCircle,
    Clock,
    Graph,
    Database
} from "@phosphor-icons/react";
import { motion, Variants } from "framer-motion";

// Clean, executive variants
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
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 70, damping: 20 } }
};

export default function BuildClient() {
    return (
        <main className="min-h-screen bg-[#0B1121] text-slate-300 overflow-hidden font-sans relative">

            {/* 1. Executive Hero Section */}
            <motion.section
                className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-16 pb-20 z-10"
            >
                {/* Subtle, premium background grid/glow */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2563EB]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm tracking-wide font-medium">
                        <BriefcaseMetal weight="fill" /> Senior Architecture Strategy
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white tracking-tight leading-[1.1]">
                        Turn Your Idea Into Software <br className="hidden md:block" />
                        <span className="text-blue-500 font-light">Without Writing Code.</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="max-w-3xl mx-auto pt-6 border-t border-slate-800 space-y-6">
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                            A private 1:1 strategy session for founders. Walk in with an idea. Walk out with the exact blueprint, tools, and executable plan to build it yourself in weeks.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#apply"
                            className="group relative inline-flex items-center justify-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-lg font-medium text-lg lg:text-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all w-full sm:w-auto overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <span className="relative z-10 flex items-center gap-2">Secure Your 1:1 Session <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <p className="text-sm text-slate-500 flex items-center justify-center gap-2 w-full sm:w-auto">
                            <ShieldCheck weight="fill" className="text-blue-500 text-lg" /> 100% Refundable Guarantee
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2. The Contrast (The "Expensive Mistake" Framing) */}
            <section className="py-24 px-6 bg-[#070b14] border-y border-slate-800/50 relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">You don't have a tech problem. <br /><span className="text-slate-500 font-light">You have an architecture problem.</span></h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            90% of non-technical founders waste ₹10 Lakh+ hiring the wrong agency to build the wrong MVP. We stop that from happening.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* The Wrong Way */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 hover:bg-slate-900/80 transition-colors"
                        >
                            <div className="text-slate-500 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold">X</span>
                                <span className="uppercase tracking-widest text-xs font-semibold">The Guessing Game</span>
                            </div>
                            <ul className="space-y-6 text-slate-400">
                                <li className="flex gap-4">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <p>Paying a dev shop thousands of dollars on Day 1 without defining your exact database schema first.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <p>Spending 6 months learning to code React just to build a simple CRUD application.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-red-500 mt-1">✗</span>
                                    <p>Launching a brittle "no-code" app that crashes the second you get 100 concurrent users.</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* The Right Way (Our Session) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-blue-900/10 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                            <div className="text-blue-400 mb-6 flex items-center gap-3 relative z-10">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-sm font-bold">✓</span>
                                <span className="uppercase tracking-widest text-xs font-semibold">The Architect Blueprint</span>
                            </div>
                            <ul className="space-y-6 text-slate-300 relative z-10">
                                <li className="flex gap-4">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <p>We map your user flow into a robust, scalable technical architecture in real-time on our call.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <p>We dictate the exact modern stack (e.g., Supabase + Next.js via Cursor) you must use to build it yourself.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-blue-500 mt-1">✓</span>
                                    <p>You leave with absolute clarity, ready to build a production-grade app using AI at 10x speed.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. The Itinerary (Justifying the Value) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">The 60-Minute Masterplan.</h2>
                        <p className="text-slate-400 text-lg">
                            Here is exactly what we will execute during our private session.
                        </p>
                    </motion.div>

                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">

                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-[#0B1121] text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 z-10">
                                <ChatCircle weight="fill" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                                <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-1">Minutes 0-15</div>
                                <h3 className="font-display text-xl text-white font-medium mb-2">Scope & Decomposition</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    You blindly pitch us your idea. We rip it apart and strip it down to the "Core Functional MVP." We define exactly what needs to be built, and what is just expensive fluff.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-[#0B1121] text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 z-10">
                                <Database weight="fill" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                                <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-1">Minutes 15-40</div>
                                <h3 className="font-display text-xl text-white font-medium mb-2">Architecture & Data Mapping</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We design your backend. We map out the exact database schema, user authentication logic, and third-party API integrations (OpenAI, Stripe, etc.) required to make it function.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-[#0B1121] text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 z-10">
                                <MapTrifold weight="fill" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded border border-slate-800 group-hover:border-slate-700 transition-colors">
                                <div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-1">Minutes 40-60</div>
                                <h3 className="font-display text-xl text-white font-medium mb-2">The Execution Playbook</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    We define your exact stack (e.g., Cursor, v0, Supabase). We provide you with the overarching "Super Prompts" you will feed into the AI to ensure it writes production-ready code with zero errors.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. The High-Ticket CTA (Authoritative Pricing) */}
            <section id="apply" className="py-24 px-4 sm:px-6 relative z-10 border-t border-slate-800 bg-[#060913]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="bg-white rounded-3xl p-8 md:p-16 text-center text-slate-900 shadow-2xl relative overflow-hidden"
                    >
                        {/* Subtle internal gradient to make the white feel highly premium */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-8">
                                <Crosshair weight="fill" className="text-3xl" />
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Secure Your Strategy Session</h2>
                            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                                Stop guessing. Invest one hour with a Senior Architect and save 6 months of development hell.
                            </p>

                            <div className="flex items-center justify-center gap-1 mb-10">
                                <CurrencyInr weight="bold" className="text-4xl text-slate-400" />
                                <span className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">8,999</span>
                            </div>

                            <Link
                                href="/checkout?plan=build-consultation"
                                className="inline-block w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-lg font-medium text-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            >
                                Book Your 1:1 Session
                            </Link>

                            <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2 text-slate-700 font-medium">
                                    <ShieldCheck weight="fill" className="text-blue-600 text-xl" />
                                    The "Absolute Clarity" Guarantee
                                </div>
                                <p className="text-sm text-slate-500 max-w-md mx-auto">
                                    If you do not leave the call with a crystal clear, actionable blueprint to build your application, we will refund the ₹8,999 immediately. Zero risk.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Minimal Corporate Footer */}
            <footer className="py-12 px-6 border-t border-slate-900 text-center font-sans text-sm text-slate-600 font-light">
                <p>© {new Date().getFullYear()} Chalkframe Systems. Architecting the future.</p>
            </footer>
        </main>
    );
}
