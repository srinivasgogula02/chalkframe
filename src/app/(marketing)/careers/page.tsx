import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "Careers | Multidisciplinary Designer - Chalkframe",
    description:
        "Join Chalkframe as a Multidisciplinary Designer. Blend UI, Motion, and 3D to visualize the future of AI.",
    alternates: {
        canonical: "/careers",
    },
};

export default function CareersPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Grid Layer */}
            <div className="fixed inset-0 bg-grid opacity-[0.15] pointer-events-none z-0"></div>
            <div className="fixed top-20 right-0 w-96 h-96 bg-violet-900 rounded-full blur-[120px] opacity-20 pointer-events-none z-0 animate-glow"></div>
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-violet-600 rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

            {/* Job Hero Section */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono mb-8 tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                        Now Hiring
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-6 tracking-tight">
                        Multidisciplinary Designer
                    </h1>

                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        (UI + Motion + 3D)
                    </p>
                </div>
            </section>

            {/* Content & Form Grid */}
            <section className="relative z-10 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Job Details */}
                    <div className="space-y-12 order-2 lg:order-1">
                        <div className="glass-card p-8 rounded-sm space-y-6 text-slate-300">
                            <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3">
                                We’re Hiring a Multidisciplinary Designer!
                            </h3>

                            <p className="text-lg text-violet-400 font-medium">
                                (UI + Motion + 3D)
                            </p>

                            <div>
                                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                    Skills & Tools Needed:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                                        <span>
                                            <strong className="text-white">Figma</strong> – UI/UX &
                                            Component Library
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                                        <span>
                                            <strong className="text-white">
                                                After Effects + Lottie/Bodymovin
                                            </strong>{" "}
                                            – Motion & Micro-animations
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                                        <span>
                                            <strong className="text-white">
                                                Blender / Cinema4D
                                            </strong>{" "}
                                            – 3D Modeling (glTF/GLB)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                                        <span>
                                            <strong className="text-white">Interactive 3D</strong>{" "}
                                            (Three.js / Spline)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2"></div>
                                        <span>
                                            Strong visual sense & smooth organic animations
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Application Form */}
                    <div id="apply" className="relative order-1 lg:order-2">
                        <div className="sticky top-28">
                            <div className="glass-card p-8 border-t-4 border-t-violet-600 shadow-2xl shadow-black/50 text-center">
                                <h2 className="font-display text-2xl font-bold mb-4">
                                    Ready to Apply?
                                </h2>
                                <p className="text-slate-400 text-sm mb-8">
                                    We use Google Forms to collect applications. Click the button
                                    below to start.
                                </p>

                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSczZxwfDNerO3Cv01iStBsPnSVXYrZtlmN9VhXs1vjZO0_dqQ/viewform?usp=header"
                                    target="_blank"
                                    className="block w-full py-4 bg-violet-600 hover:bg-violet-500 text-white font-display font-bold uppercase tracking-wide transition-all shadow-lg shadow-violet-900/20 rounded-sm flex items-center justify-center gap-2 group"
                                >
                                    Open Application Form{" "}
                                    <ArrowRight
                                        className="group-hover:translate-x-1 transition-transform"
                                        weight="bold"
                                    />
                                </Link>

                                <p className="text-[10px] text-slate-500 pt-4">
                                    Link opens in a new tab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
