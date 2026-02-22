"use client";

import Link from "next/link";
import {
    RocketLaunch,
    HandCoins,
    CurrencyInr,
    Lightning,
    Clock,
    Warning,
    CheckSquareOffset,
    ArrowsInLineHorizontal,
    ArrowsOutLineVertical,
    CodeBlock,
    ArrowRight
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

// Aggressive brutalist variants
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        }
    }
};

const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "tween", ease: "circOut", duration: 0.4 } }
};

const slideRight: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function PrototypeClient() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden font-sans relative">

            {/* 1. Brutalist Hero */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-10 z-10 border-b-2 border-white/10"
            >
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 w-full max-w-7xl mx-auto space-y-8"
                >
                    <motion.div variants={slideRight} className="inline-flex items-center gap-2 px-3 py-1 border-l-4 border-[#00FF41] bg-[#00FF41]/10 text-white font-mono uppercase tracking-[0.2em] text-xs">
                        <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></span>
                        Speed to Market Protocol
                    </motion.div>

                    <motion.h1 variants={popIn} className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-black text-white tracking-tighter leading-[0.85] uppercase">
                        Stop Drawing<br />
                        <span className="text-zinc-600">Pictures.</span><br />
                        Start <span className="text-[#00FF41]">Shipping.</span>
                    </motion.h1>

                    <motion.div variants={popIn} className="max-w-2xl space-y-6 pt-8 border-l-2 border-zinc-800 pl-6">
                        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-snug">
                            We don't build Figma designs. We build <strong className="text-white font-bold bg-[#00FF41]/10 px-1">fully functional, coded web applications</strong>.
                        </p>
                        <p className="text-lg text-zinc-500 font-mono text-sm leading-relaxed">
                            Test your idea with real users. Process actual API logic. Hand investors a live URL instead of a boring slide deck.
                        </p>
                    </motion.div>

                    <motion.div variants={slideRight} className="pt-12">
                        <Link
                            href="#pricing"
                            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-6 font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-[#00FF41] transition-colors duration-300"
                        >
                            Launch Live MVP <ArrowRight weight="bold" className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Vertical decorative lines */}
                <div className="hidden lg:block absolute left-10 top-0 bottom-0 w-[1px] bg-white/10"></div>
                <div className="hidden lg:block absolute right-10 top-0 bottom-0 w-[1px] bg-white/10"></div>
            </motion.section>

            {/* 2. Brutalist Contrast (The AI Gold Rush) */}
            <section className="relative z-10 bg-black">
                <div className="grid lg:grid-cols-2 min-h-screen">

                    {/* THE TRAP - Dark Side */}
                    <div className="p-10 md:p-20 border-b lg:border-b-0 lg:border-r border-zinc-900 bg-[#050505] flex flex-col justify-center">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="max-w-xl"
                        >
                            <motion.div variants={popIn} className="text-zinc-600 mb-8"><Warning weight="bold" size={80} /></motion.div>
                            <motion.h2 variants={popIn} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-none">
                                The Dead-End<br /><span className="text-red-500">Path</span>
                            </motion.h2>
                            <motion.p variants={popIn} className="text-xl text-zinc-400 font-light mb-12">
                                If you wait 6 months trying to recruit a free co-founder, someone else <strong className="text-white">will</strong> build your idea. The AI boom doesn't wait.
                            </motion.p>

                            <div className="space-y-8 font-mono text-sm text-zinc-500">
                                <motion.div variants={slideRight} className="flex gap-4 border-l border-zinc-800 pl-4 py-2">
                                    <span className="text-red-500">01_</span>
                                    <div>You pay an agency ₹8,00,000+</div>
                                </motion.div>
                                <motion.div variants={slideRight} className="flex gap-4 border-l border-zinc-800 pl-4 py-2">
                                    <span className="text-red-500">02_</span>
                                    <div>You wait half a year for V1.</div>
                                </motion.div>
                                <motion.div variants={slideRight} className="flex gap-4 border-l border-zinc-800 pl-4 py-2">
                                    <span className="text-red-500">03_</span>
                                    <div>10 competitors steal your market share while you wait to launch.</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* THE SOLUTION - Light/Neon Side */}
                    <div className="p-10 md:p-20 bg-zinc-950 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF41]/5 blur-[150px] pointer-events-none"></div>
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="max-w-xl relative z-10"
                        >
                            <motion.div variants={popIn} className="text-[#00FF41] mb-8"><Lightning weight="bold" size={80} /></motion.div>
                            <motion.h2 variants={popIn} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-none">
                                The Chalkframe<br /><span className="text-[#00FF41]">Execution</span>
                            </motion.h2>
                            <motion.p variants={popIn} className="text-xl text-zinc-300 font-light mb-12">
                                We write the code. We deploy it. You get a live link (<span className="bg-[#00FF41] text-black font-mono text-sm px-1 font-bold">your-app.com</span>) in days.
                            </motion.p>

                            <div className="space-y-8 font-mono text-sm text-zinc-400">
                                <motion.div variants={slideRight} className="flex items-start gap-4 border-l border-[#00FF41]/30 pl-4 py-2">
                                    <Clock weight="fill" className="text-[#00FF41] text-xl shrink-0" />
                                    <div>Deployed to the web in days, not months.</div>
                                </motion.div>
                                <motion.div variants={slideRight} className="flex items-start gap-4 border-l border-[#00FF41]/30 pl-4 py-2">
                                    <ArrowsInLineHorizontal weight="fill" className="text-[#00FF41] text-xl shrink-0" />
                                    <div>Beta testers validate assumptions in the real world immediately.</div>
                                </motion.div>
                                <motion.div variants={slideRight} className="flex items-start gap-4 border-l border-[#00FF41]/30 pl-4 py-2">
                                    <HandCoins weight="fill" className="text-[#00FF41] text-xl shrink-0" />
                                    <div className="text-white font-bold">Slide your phone across the table to an investor and let them feel the magic themselves.</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. The "Functional Core" (What actually is it?) */}
            <section className="py-32 px-6 border-t border-zinc-900 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={popIn}
                        className="mb-20 max-w-4xl"
                    >
                        <h2 className="text-2xl font-mono text-zinc-500 uppercase tracking-widest mb-4">Architecture</h2>
                        <h3 className="font-display text-5xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter mix-blend-difference">
                            The Functional Core Strategy
                        </h3>
                        <p className="mt-8 text-2xl text-zinc-400 font-light max-w-2xl border-l-2 border-zinc-800 pl-6">
                            We bypass the BS. We physically code the ONE feature that makes your idea unique, and intelligently mock up the fluff.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-900 border border-zinc-900">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-black p-10 lg:p-14 hover:bg-[#050505] transition-colors"
                        >
                            <CodeBlock weight="fill" className="text-5xl text-white mb-6" />
                            <h4 className="font-display font-black text-2xl uppercase tracking-tighter mb-4">1. Core Engine Works</h4>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">
                                If you are building an AI app, the AI actually generates results. It connects to OpenAI/Anthropic. Real software. Real APIs. Real outputs.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-black p-10 lg:p-14 hover:bg-[#050505] transition-colors"
                        >
                            <ArrowsOutLineVertical weight="fill" className="text-5xl text-white mb-6" />
                            <h4 className="font-display font-black text-2xl uppercase tracking-tighter mb-4">2. Padding is Mocked</h4>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">
                                We don't waste 4 weeks coding a "Billing Settings" page. Secondary screens are gorgeous, interactive UI elements that look perfect but don't hit a complex database yet.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black p-10 lg:p-14 hover:bg-[#050505] transition-colors"
                        >
                            <RocketLaunch weight="fill" className="text-5xl text-white mb-6" />
                            <h4 className="font-display font-black text-2xl uppercase tracking-tighter mb-4">3. Hosted & Live</h4>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">
                                You receive a working URL deployed to the web. Anyone with a smartphone or laptop can use your core feature anywhere in the world. Start gathering data on day one.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Pricing (The Pitch) */}
            <section id="pricing" className="py-32 px-6 border-y border-zinc-900 bg-[#020202] relative overflow-hidden">
                {/* Massive background typography */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-zinc-900/30 select-none pointer-events-none tracking-tighter whitespace-nowrap z-0">
                    PRICING
                </div>

                <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-0">

                    {/* Left: The Price */}
                    <div className="flex-1 bg-white text-black p-12 md:p-20 flex flex-col justify-center">
                        <div className="inline-flex max-w-fit items-center gap-2 px-3 py-1 bg-black text-white font-mono uppercase tracking-[0.2em] text-xs mb-8">
                            Fixed Price.
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Coded MVP</h2>
                        <div className="flex items-start">
                            <CurrencyInr weight="bold" className="text-4xl mt-2 md:mt-4" />
                            <span className="text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-none">24,999</span>
                        </div>
                        <p className="mt-8 font-mono text-sm text-zinc-500 uppercase">Delivered via Live Web URL (Next.js Stack)</p>

                        <Link
                            href="/checkout?plan=mvp"
                            className="mt-12 group relative w-full bg-black text-[#00FF41] py-6 px-8 font-black text-center text-xl uppercase tracking-widest hover:bg-[#00FF41] hover:text-black transition-colors flex items-center justify-between"
                        >
                            <span>Initialize</span>
                            <ArrowRight weight="bold" className="text-2xl group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Right: The Deliverables */}
                    <div className="flex-1 bg-zinc-950 border border-zinc-900 p-12 md:p-16 flex flex-col justify-center">

                        <div className="space-y-6">
                            {[
                                "Functional Core Engine Built",
                                "API Integration (OpenAI, etc)",
                                "Premium UI/UX Frontend Code",
                                "Secondary Screens Mocked UI",
                                "Deployed Live to Vercel",
                                "100% Code Ownership"
                            ].map((feature, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    key={i}
                                    className="flex items-center gap-4 text-white font-mono text-sm"
                                >
                                    <CheckSquareOffset weight="bold" className="text-[#00FF41] text-xl" />
                                    <span className="uppercase tracking-wide">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Upsell Kicker */}
                        <div className="mt-16 pt-8 border-t border-zinc-800">
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-3">Validation Guarantee</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                When you want to build complex backend features later, we act as your dev team. <span className="text-[#00FF41]">We deduct this ₹24,999 from the final build cost.</span>
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* 5. Brutalist FAQ */}
            <section className="py-32 px-6 bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <h2 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                            Objections.
                        </h2>
                    </div>

                    <div className="space-y-0 border-y border-zinc-800">
                        {[
                            {
                                q: "Is this a fake Figma design?",
                                a: "No. We write real React/Next.js code and host it on a live URL. Your chosen 'Core Feature' will physically work."
                            },
                            {
                                q: "Do you actually connect the AI?",
                                a: "Yes. If your idea relies on a specific AI output, we will write the backend logic to ping those APIs directly."
                            },
                            {
                                q: "Who owns the code?",
                                a: "You do. 100%. We hand over the entire Github repository. You are never locked into using us forever."
                            },
                            {
                                q: "Why do I need this to raise funding?",
                                a: "Ideas are cheap. Investors are numb to slide decks. When you hand them a live URL where they can test the software themselves, your valuation skyrockets because you proved you can execute."
                            }
                        ].map((faq, i) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                key={i}
                                className="py-12 border-b border-zinc-800 last:border-b-0 group hover:pl-6 transition-all duration-300"
                            >
                                <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase flex gap-4">
                                    <span className="text-zinc-700">0{i + 1}_</span>
                                    {faq.q}
                                </h4>
                                <p className="text-zinc-400 text-lg leading-relaxed font-light pl-12 max-w-2xl">
                                    {faq.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-10 px-6 bg-black border-t border-zinc-900 text-center font-mono text-xs text-zinc-600 uppercase tracking-widest">
                © {new Date().getFullYear()} Chalkframe MVP Studio. All Rights Reserved.
            </footer>
        </main>
    );
}
