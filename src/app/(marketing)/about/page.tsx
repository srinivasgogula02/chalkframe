import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Rocket, Users, Target } from "@phosphor-icons/react/dist/ssr";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "About Us | Chalkframe",
    description: "Learn about Chalkframe's mission to bridge the gap between business strategy and AI. Discover our approach to AI transformation and workflow automation.",
    keywords: [
        "About Chalkframe",
        "AI Consultancy Company",
        "AI Transformation Team",
        "Workflow Automation Experts",
        "AI Solutions Provider"
    ],
    alternates: {
        canonical: "https://www.chalkframe.com/about",
    },
};

const breadcrumbItems = [
    { name: "Home", url: "https://www.chalkframe.com" },
    { name: "About", url: "https://www.chalkframe.com/about" }
];

export default function AboutPage() {
    return (
        <main className="relative">
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-200 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
                        <Brain weight="fill" /> About Us
                    </div>

                    <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-6 text-white">
                        Building the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 italic font-light">
                            Frame
                        </span>{" "}
                        Around Your Vision
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
                        Chalkframe is an AI transformation consultancy that bridges the gap between business strategy and artificial intelligence. We don't just adapt to AI—we build your frame around it.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
                        Our Philosophy
                    </h2>

                    <div className="glass-card p-8 rounded-3xl mb-12">
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            <strong className="text-white">Chalk</strong> is the human idea—fluid, creative, and adaptable. It represents your vision, your strategy, and your unique business challenges.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            <strong className="text-white">Frame</strong> is the automation—rigid, scalable, and reliable. It's the AI-powered structure that lets your genius scale infinitely without losing its essence.
                        </p>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
                        What We Do
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        <div className="glass-card p-6 rounded-2xl">
                            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Rocket className="text-2xl text-violet-400" weight="fill" />
                            </div>
                            <h3 className="font-display text-xl font-medium text-white mb-2">
                                AI Products
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We build packaged AI solutions like ProposalFlow and PlusMinus that solve specific business problems with zero overhead.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Target className="text-2xl text-blue-400" weight="fill" />
                            </div>
                            <h3 className="font-display text-xl font-medium text-white mb-2">
                                Custom Solutions
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Bespoke AI models, workflow automation, and internal tools built specifically for your data and processes.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="text-2xl text-green-400" weight="fill" />
                            </div>
                            <h3 className="font-display text-xl font-medium text-white mb-2">
                                AI Transformation
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Strategic consulting to integrate AI into your business operations, from planning to implementation.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                                <Users className="text-2xl text-purple-400" weight="fill" />
                            </div>
                            <h3 className="font-display text-xl font-medium text-white mb-2">
                                Generative Engine Optimization (GEO)
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Data-driven content strategies and automated page generation to dominate search rankings.
                            </p>
                        </div>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
                        Why Choose Chalkframe?
                    </h2>

                    <div className="space-y-6 mb-16">
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="font-display text-lg font-medium text-white mb-2">
                                No Vendor Lock-in
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                We build solutions you own. No monthly subscriptions, no proprietary platforms you can't escape from.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="font-display text-lg font-medium text-white mb-2">
                                Results-Driven
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                We focus on measurable outcomes: time saved, revenue generated, processes automated. No fluff, just results.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="font-display text-lg font-medium text-white mb-2">
                                Privacy First
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Your data stays yours. We build secure, private solutions that respect your business confidentiality.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
                            Ready to Build Your Frame?
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how AI can transform your business operations and scale your vision.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-violet-900/30"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
