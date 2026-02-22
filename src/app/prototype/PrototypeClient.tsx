"use client";

import Link from "next/link";
import {
    RocketLaunch,
    Lightbulb,
    HandCoins,
    Users,
    Eye,
    CursorClick,
    CodeBlock,
    ArrowRight,
    CurrencyInr,
    Lightning,
    Clock,
    Warning,
    CheckCircle,
    Robot,
    GlobeHemisphereWest
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

// Animation Variants
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

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
};

const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

export default function PrototypeClient() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0A0F1C] text-slate-300 selection:bg-rose-500/30 overflow-hidden font-sans pt-24 md:pt-32 relative">
            <Navbar />

            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
            </div>

            {/* 1. Hero Section (The Reality Hook) */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative px-6 pb-24 pt-10 md:pt-20 overflow-hidden z-10"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-30 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-rose-600),_transparent_70%)] blur-[100px] mix-blend-screen" />
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-6xl mx-auto text-center space-y-8"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(225,29,72,0.2)] mb-4">
                        <Robot weight="fill" className="text-rose-400 drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                        <span>The AI Boom Doesn't Wait</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-semibold text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Stop Drawing Pictures.<br />
                        Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 italic font-light drop-shadow-[0_0_30px_rgba(225,29,72,0.4)]">Shipping Apps.</span>
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="max-w-3xl mx-auto space-y-6 pt-4">
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed drop-shadow-md">
                            We don't build Figma designs. We build <strong className="text-white font-medium">fully functional, coded web applications</strong> connected to the internet.
                        </p>
                        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                            Test your idea with real users, process actual AI logic, and hand investors a live URL instead of a boring slide deck.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="#pricing"
                            className="group relative w-full sm:w-auto bg-white text-slate-900 rounded-2xl px-10 py-5 font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">Launch Your Live MVP <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <p className="text-sm font-mono text-slate-500 uppercase tracking-widest sm:ml-4 flex items-center gap-2">
                            <RocketLaunch weight="fill" className="text-rose-500 text-xl animate-pulse" /> Shipped in Days
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* 2. The FOMO Section (The AI Gold Rush) */}
            <section className="px-6 py-32 relative z-10 bg-slate-900/40 backdrop-blur-3xl border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6">
                            If you wait 6 months,<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400 font-medium italic drop-shadow-lg">Someone Else Will Build It.</span>
                        </h2>
                        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mx-auto"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8 lg:gap-16"
                    >
                        {/* The Trap */}
                        <motion.div variants={scaleUp} className="glass-card bg-[#0F1423]/90 rounded-[2.5rem] p-10 border-slate-700/50 relative overflow-hidden group shadow-2xl">
                            <div className="absolute -top-10 -right-10 p-6 text-slate-500/5 group-hover:scale-110 transition-transform duration-700 rotate-12">
                                <Warning weight="fill" size={200} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-8 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                                    The Dead-End Path
                                </div>
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700 font-mono text-sm">01</span>
                                        <p className="text-slate-300 text-lg leading-relaxed pt-1">You spend <strong className="text-white">months</strong> trying to recruit a "technical cofounder" who works for free.</p>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700 font-mono text-sm">02</span>
                                        <p className="text-slate-300 text-lg leading-relaxed pt-1">Or you pay an agency <strong className="text-white">₹8,00,000+</strong> and wait half a year for V1.</p>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-rose-950 flex items-center justify-center text-rose-400 border border-rose-900 font-mono text-sm shadow-[0_0_15px_rgba(225,29,72,0.2)]">03</span>
                                        <p className="text-slate-300 text-lg leading-relaxed pt-1">By the time you launch your "AI wrapper", <strong className="text-rose-400 font-medium">10 competitors have already stolen your market share.</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* The Chalkframe Way - The Solution */}
                        <motion.div variants={scaleUp} className="glass-highlight bg-gradient-to-br from-[#1A1025] to-[#0A0F1C] rounded-[2.5rem] p-10 border-rose-500/30 hover:border-rose-500/60 transition-colors relative overflow-hidden group shadow-[0_0_50px_-15px_rgba(225,29,72,0.3)]">
                            <div className="absolute -top-10 -right-10 p-6 text-rose-500/10 group-hover:scale-110 transition-transform duration-700 -rotate-12">
                                <Lightning weight="fill" size={200} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-rose-400 text-sm font-mono uppercase tracking-widest mb-8 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                                    The Chalkframe Execution
                                </div>
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 flex items-center justify-center text-rose-300 border border-rose-500/30 shadow-[0_0_15px_rgba(225,29,72,0.15)] group-hover:scale-110 transition-transform">
                                            <Clock weight="fill" className="text-2xl" />
                                        </span>
                                        <p className="text-slate-200 text-lg leading-relaxed pt-2">We write the code. We deploy it. You get a live link (<strong className="text-white font-mono text-xs bg-black/40 px-2 py-1 rounded-md border border-white/10 uppercase tracking-widest text-indigo-300">your-app.com</strong>) in days.</p>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 flex items-center justify-center text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.15)] group-hover:scale-110 transition-transform">
                                            <GlobeHemisphereWest weight="fill" className="text-2xl" />
                                        </span>
                                        <p className="text-slate-200 text-lg leading-relaxed pt-2">You immediately send it to real beta testers to validate your assumptions <strong className="text-white">in the real world.</strong></p>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:scale-110 transition-transform">
                                            <HandCoins weight="fill" className="text-2xl" />
                                        </span>
                                        <p className="text-slate-200 text-lg leading-relaxed pt-2">You slide your phone across the table to an investor and let them <strong className="text-white">feel the magic themselves.</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Demystifying The "Live MVP" (What actually is it?) */}
            <section className="px-6 py-32 relative z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-slate-800),_transparent_60%)]" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="mb-20 text-center flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
                            What exactly are you buying?
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold drop-shadow-md">Functional Core</span> Strategy
                        </h2>
                        <p className="text-slate-400 max-w-3xl text-xl leading-relaxed">
                            Building an entire SaaS takes months. We bypass the bullshit. We physically code the ONE feature that makes your idea unique, and intelligently mock up the fluff.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="glass-card rounded-[2.5rem] p-10 group bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300 hover:border-emerald-500/40 shadow-xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                <CodeBlock weight="duotone" className="text-4xl drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-semibold mb-4 tracking-tight">1. The Core Engine WORKS</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                If you are building an AI cover letter generator, <strong className="text-emerald-300">the AI actually generates cover letters.</strong> It connects to OpenAI/Anthropic. Real software. Real APIs. Real outputs to prove it works.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="glass-card rounded-[2.5rem] p-10 group bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300 hover:border-violet-500/40 shadow-xl hover:shadow-[0_20px_40px_rgba(139,92,246,0.1)]">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 rounded-2xl flex items-center justify-center mb-8 text-violet-400 border border-violet-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                                <Eye weight="duotone" className="text-4xl drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-semibold mb-4 tracking-tight">2. The "Padding" is Mocked</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                We don't waste 4 weeks coding a "Billing Settings" or "Change Password" page. Those secondary screens are built as gorgeous, interactive UI elements that look perfect but don't hit a complex database yet.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="glass-card rounded-[2.5rem] p-10 group bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300 hover:border-blue-500/40 shadow-xl hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                <GlobeHemisphereWest weight="duotone" className="text-4xl drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-semibold mb-4 tracking-tight">3. Hosted & Live</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                You receive a working URL deployed to the web. Anyone with a smartphone or laptop can use your core feature anywhere in the world. Start gathering data on day one.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Pricing (The Pitch) */}
            <section id="pricing" className="px-6 py-32 relative z-10 bg-[#060913] border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-rose-600),_transparent_60%)] blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight">The Live <span className="text-rose-500">MVP</span></h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
                            Stop paying designers for flat images. Buy a functioning piece of software that you can put in front of users today.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleUp}
                        className="relative flex flex-col p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-slate-900 to-[#0A0F1C] border shadow-2xl z-10 w-full overflow-hidden group"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute -inset-[2px] rounded-[3rem] bg-gradient-to-br from-rose-500 via-violet-500 to-indigo-500 opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10 animate-border-spin"></div>
                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-900 to-[#101524] z-[-5]"></div>

                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                            <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-violet-600 text-white text-sm font-bold uppercase tracking-widest shadow-[0_0_40px_rgba(225,29,72,0.6)]">
                                <CodeBlock weight="fill" className="w-5 h-5 animate-pulse" />
                                Real Code. Fixed Price.
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-grid opacity-10 rounded-[3rem] bg-[length:30px_30px]"></div>

                        <div className="relative z-10 text-center mb-12 mt-4">
                            <h3 className="text-3xl font-display font-medium text-rose-300 mb-6 drop-shadow-md">Complete Coded Application</h3>
                            <div className="flex items-center justify-center gap-1">
                                <CurrencyInr weight="bold" className="text-white text-6xl md:text-7xl" />
                                <span className="text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">24,999</span>
                            </div>
                            <div className="mt-8 inline-flex px-6 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm md:text-base backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
                                Delivered via Live Web URL (Next.js Stack)
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/40 to-transparent mb-12 relative z-10"></div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-16">
                            {[
                                "Functional Core Engine Built",
                                "API Integration (OpenAI, etc)",
                                "Premium UI/UX Frontend Code",
                                "Secondary Screens Mocked UI",
                                "Deployed Live to Vercel",
                                "100% Code Ownership"
                            ].map((feature, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    key={i}
                                    className="flex items-center gap-4 text-white text-base md:text-lg"
                                >
                                    <div className="rounded-full bg-rose-500/20 p-1.5 border border-rose-500/30 flex-shrink-0 shadow-[0_0_10px_rgba(225,29,72,0.3)]">
                                        <CheckCircle weight="fill" className="w-5 h-5 text-rose-400" />
                                    </div>
                                    <span className="font-light">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* The Upsell Kicker */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-10 bg-gradient-to-r from-[#0F1423] via-indigo-900/40 to-[#0F1423] rounded-3xl p-8 border border-indigo-500/30 mb-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                            <h4 className="text-xl text-white font-medium mb-4 flex items-center justify-center gap-3">
                                <Users weight="fill" className="text-indigo-400 text-2xl" /> The "Validation" Guarantee
                            </h4>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                When you finish validating your MVP and want to build the complex backend features, we act as your dev team. <strong className="text-white bg-indigo-500/20 px-2 py-1 rounded">And we deduct this ₹24,999 from the final build cost.</strong>
                            </p>
                        </motion.div>

                        <Link
                            href="/checkout?plan=mvp"
                            className="group relative z-10 w-full py-6 px-8 rounded-2xl bg-white text-slate-900 font-bold text-center text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">Start Coding My MVP <ArrowRight weight="bold" className="group-hover:translate-x-2 transition-transform" /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 5. FAQ (The "Too Good to Be True" Objections) */}
            <section className="px-6 py-32 bg-[#0A0F1C] relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6">
                            Founder <span className="text-slate-500 font-medium">FAQs</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-slate-700 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        {[
                            {
                                q: "Wait, is this just a fake Figma design?",
                                a: "No. Absolutely not. We write real React/Next.js code and host it on a live URL. Your chosen \"Core Feature\" will physically work. We only use visual mockups for secondary, non-essential padding pages to keep your costs at ₹24,999 instead of ₹10 Lakhs."
                            },
                            {
                                q: "I want to build an AI app. Do you actually connect the AI?",
                                a: "Yes. If your idea relies on a specific AI output (like summarizing PDFs, or generating images), we will write the backend logic to ping those APIs directly so your users experience the actual magic."
                            },
                            {
                                q: "Who owns the code when you're done?",
                                a: "You do. 100%. We hand over the entire Github repository. You can take our code, hire your own developers, and continue building on top of it. You are never locked into using us forever."
                            },
                            {
                                q: "Why do I need this to raise funding?",
                                a: "Because ideas are cheap. Everyone has an \"AI Startup Idea\" right now. Investors are numb to slide decks. When you walk into a pitch and hand them a live URL where they can test the software themselves, your valuation instantly skyrockets because you proved you can execute."
                            }
                        ].map((faq, i) => (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                                key={i}
                                className="glass-card rounded-[2rem] p-8 md:p-10 bg-slate-900/60 border-slate-700/50 transition-all cursor-default shadow-lg"
                            >
                                <h4 className="text-xl md:text-2xl font-medium text-white mb-4 flex items-start gap-4">
                                    <span className="text-rose-500 font-mono text-base uppercase bg-rose-500/10 px-3 py-1 rounded-lg border border-rose-500/20 flex-shrink-0 mt-1">0{i + 1}</span>
                                    <span className="leading-tight">{faq.q}</span>
                                </h4>
                                <p className="text-slate-400 text-lg leading-relaxed pl-16">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
