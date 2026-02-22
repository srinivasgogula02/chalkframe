"use client";

import Link from "next/link";
import {
    Robot,
    RocketLaunch,
    TerminalWindow,
    BriefcaseMetal,
    ArrowRight,
    CurrencyInr,
    Sparkle
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "tween", ease: "circOut", duration: 0.5 } }
};

export default function ProductsClient() {
    const products = [
        {
            id: "ai",
            title: "The AI Advantage",
            description: "Stop learning AI. Just copy us. Get our private prompt library and weekly copy-paste AI workflows delivered to your inbox.",
            icon: <Robot weight="duotone" className="text-4xl text-amber-400" />,
            href: "/ai",
            price: "₹499 / mo",
            audience: "Professionals & Knowledge Workers",
            color: "from-amber-500/10 to-transparent",
            borderColor: "border-amber-500/20",
            pill: "Subscription"
        },
        {
            id: "prototype",
            title: "MVP Studio",
            description: "Stop drawing pictures. Start shipping real software. We build your functional, coded web application MVP in days.",
            icon: <RocketLaunch weight="duotone" className="text-4xl text-[#00FF41]" />,
            href: "/prototype",
            price: "₹24,999",
            audience: "Founders & Startups",
            color: "from-[#00FF41]/10 to-transparent",
            borderColor: "border-[#00FF41]/20",
            pill: "Done-For-You"
        },
        {
            id: "prompting",
            title: "10x Developer Masterclass",
            description: "Code at the speed of thought. A 1-hour live webinar teaching developers how to bypass syntax using AI.",
            icon: <TerminalWindow weight="duotone" className="text-4xl text-fuchsia-400" />,
            href: "/prompting",
            price: "₹49",
            audience: "CS Students & Developers",
            color: "from-fuchsia-500/10 to-transparent",
            borderColor: "border-fuchsia-500/20",
            pill: "Live Training"
        },
        {
            id: "build",
            title: "1:1 Architecture Session",
            description: "Turn your idea into software without writing code. A private 60-minute strategy session with a Senior Architect.",
            icon: <BriefcaseMetal weight="duotone" className="text-4xl text-blue-400" />,
            href: "/build",
            price: "₹8,999",
            audience: "Non-Technical Founders & Executives",
            color: "from-blue-500/10 to-transparent",
            borderColor: "border-blue-500/20",
            pill: "High-Ticket Consulting"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0E0E11] text-zinc-300 font-sans selection:bg-white/10 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
                {/* Core Chalkframe Ambient Glow */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm tracking-wide font-medium mb-6">
                            <Sparkle weight="fill" className="text-white" /> Chalkframe Ecosystem
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                            Products & <span className="text-zinc-500">Services.</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                            We don't just teach technology, we build it. Select the solution below that matches your current operational bottleneck.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {products.map((product) => (
                            <motion.div key={product.id} variants={fadeUp}>
                                <Link href={product.href} className="block group h-full">
                                    <div className="h-full bg-zinc-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/60 flex flex-col">

                                        {/* Hover internal gradient - matching Chalkframe glass style */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-16 h-16 rounded-2xl bg-zinc-950/50 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                                                    {product.icon}
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-300">
                                                    {product.pill}
                                                </div>
                                            </div>

                                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                                For: {product.audience}
                                            </div>

                                            <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-4 transition-colors">
                                                {product.title}
                                            </h2>

                                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                                                {product.description}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                                                <div className="flex items-center gap-1 font-mono">
                                                    <span className="text-zinc-500">Starting at</span>
                                                    <span className="text-white ml-1">{product.price}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:translate-x-1 transition-transform">
                                                    Explore <ArrowRight weight="bold" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
