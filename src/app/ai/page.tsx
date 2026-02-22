import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle,
    ClockClockwise,
    Timer,
    EnvelopeSimple,
    FolderOpen,
    PlayCircle,
    Lightbulb,
    ArrowRight,
    Sparkle,
    WarningCircle,
    Lightning,
    User,
    Coffee,
    Brain
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "AI Advantage | Chalkframe",
    description: "Get the exact 5-minute AI workflows that save professionals 10+ hours a week. No coding, no tech jargon. Just copy what works.",
};

export default function AIAdvantagePage() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-300 selection:bg-violet-500/30 overflow-hidden font-sans pt-24 md:pt-32">
            <Navbar />

            {/* 1. Hero Section (The "Anti-Course" Hook) */}
            <section className="relative px-6 pb-20 pt-10 md:pt-20 overflow-hidden">
                {/* Abstract Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-emerald-600 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <div className="animate-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-4">
                        <ClockClockwise weight="bold" className="text-emerald-400" />
                        <span>Buy Back Your Time</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Don't Learn AI.<br />
                        Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-emerald-300 italic font-light">Copy What Works.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed drop-shadow-md">
                        Get the exact 5-minute workflows, prompts, and tools that save everyday professionals 10+ hours a week. <strong className="text-white font-medium">No coding, no tech jargon, just results.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200 rounded-xl px-8 py-4 font-bold text-sm md:text-base transition-colors shadow-xl shadow-white/10 flex items-center justify-center gap-2"
                        >
                            Unlock the Library <ArrowRight weight="bold" />
                        </Link>
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest sm:ml-4 flex items-center gap-2">
                            <User weight="fill" className="text-violet-400" /> Join 3,400+ Non-Technical Pros
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. The Problem vs. The Solution (Relatable Professional Pain) */}
            <section className="px-6 py-24 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            The <span className="text-rose-400 font-medium italic">Hard</span> Way vs. The <span className="text-emerald-400 font-medium italic">Smart</span> Way
                        </h2>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        {/* Before AI - Pain Point */}
                        <div className="glass-card bg-slate-900/80 rounded-3xl p-8 border-rose-500/10 hover:border-rose-500/30 transition-colors relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 text-rose-500/10 group-hover:scale-110 transition-transform duration-500">
                                <WarningCircle weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-rose-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-rose-500/20 pb-2 inline-block">The "Overworked" Trap</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mt-1 mt-0">01</span>
                                        <p className="text-slate-300">Staring at a blank screen for 45 minutes trying to write a single difficult email.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mt-1 mt-0">02</span>
                                        <p className="text-slate-300">Taking costly 6-week "Coding for AI" courses that you never actually finish or use.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mt-1 mt-0">03</span>
                                        <p className="text-slate-300">Feeling guilty at 6 PM because your to-do list is exactly as long as it was at 9 AM.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* After AI - The Aspiration */}
                        <div className="glass-highlight bg-slate-900/40 rounded-3xl p-8 border-emerald-500/30 hover:border-emerald-500/60 transition-colors relative overflow-hidden group shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]">
                            <div className="absolute top-0 right-0 p-6 text-emerald-500/10 group-hover:scale-110 transition-transform duration-500">
                                <Lightning weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-emerald-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-emerald-500/20 pb-2 inline-block">The "AI Advantage"</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 mt-1 border border-emerald-500/30">
                                            <CheckCircle weight="fill" />
                                        </span>
                                        <p className="text-slate-200">Copy-pasting a template that drafts perfect project updates in <strong className="text-white">12 seconds</strong>.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 mt-1 border border-emerald-500/30">
                                            <CheckCircle weight="fill" />
                                        </span>
                                        <p className="text-slate-200">Watching 5-minute screen-shares of new workflows and immediately applying them.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 mt-1 border border-emerald-500/30">
                                            <CheckCircle weight="fill" />
                                        </span>
                                        <p className="text-slate-200">Logging off at 3 PM looking like a genius to your entire team.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Deliverables (The "Anti-Course" Subscription) */}
            <section className="px-6 py-24 bg-slate-900/50 border-y border-white/5 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest mb-4">
                            Inside the Subscription
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            Everything You Need. <span className="text-indigo-400 font-medium">Zero Fluff.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            We believe courses take too long. Instead, we give you a constantly updating library of "plug-and-play" intelligence designed for immediate ROI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-violet-500/30">
                            <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 text-violet-400">
                                <EnvelopeSimple weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">1. The 'Copy-Paste' Newsletter</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Every Tuesday at 8 AM, we send you one highly tactical, tested AI workflow. No news, no generic theory. Just the exact prompts and steps to automate a miserable task.
                            </p>
                            <div className="text-xs font-mono text-violet-400 bg-violet-500/10 inline-block px-3 py-1 rounded-full">Takes 3 mins to read, saves 3 hours of work</div>
                        </div>

                        {/* Feature 2 */}
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-emerald-500/30">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                                <FolderOpen weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">2. The Prompt Library</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                A structured database of fill-in-the-blank prompt templates categorized by profession (Marketing, HR, Sales, Ops). Just copy, edit the brackets, and paste into ChatGPT or Claude.
                            </p>
                            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 inline-block px-3 py-1 rounded-full">Updated monthly with new templates</div>
                        </div>

                        {/* Feature 3 */}
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-blue-500/30">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                <PlayCircle weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">3. 'Aha!' Mini-Workshops</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                No boring lectures. We record high-quality, 5-to-15 minute screen shares showing exactly how to build a specific automation or use a new tool. Watch it, mimic it, and move on.
                            </p>
                            <div className="text-xs font-mono text-blue-400 bg-blue-500/10 inline-block px-3 py-1 rounded-full">100% actionable screen-shares</div>
                        </div>

                        {/* Feature 4 */}
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-rose-500/30">
                            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 text-rose-400">
                                <Lightbulb weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">4. Tool Distillation</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                There are 10,000+ AI tools launching every month. Most are garbage. We test them all, filter the noise, and only recommend the 2 or 3 that actually help professionals.
                            </p>
                            <div className="text-xs font-mono text-rose-400 bg-rose-500/10 inline-block px-3 py-1 rounded-full">Skip the hype-cycle garbage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof / Role-Based ROI */}
            <section className="px-6 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Marketing Persona */}
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 mb-4">
                                <Sparkle weight="fill" />
                            </div>
                            <div className="text-sm font-mono text-violet-400 uppercase tracking-widest mb-2">Marketers</div>
                            <p className="text-slate-300 text-sm italic">"I wrote a month of structured social content and internal newsletters in 14 minutes using the Content Engine template."</p>
                        </div>
                        {/* HR Persona */}
                        <div className="flex flex-col items-center text-center p-6 border-y md:border-y-0 md:border-x border-white/10">
                            <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 mb-4">
                                <Brain weight="fill" />
                            </div>
                            <div className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-2">HR & Managers</div>
                            <p className="text-slate-300 text-sm italic">"Drafted 5 personalized, constructive performance reviews perfectly in 10 minutes instead of agonizing over them all weekend."</p>
                        </div>
                        {/* Sales Persona */}
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 mb-4">
                                <Timer weight="fill" />
                            </div>
                            <div className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-2">Sales & BD</div>
                            <p className="text-slate-300 text-sm italic">"I now use the Prospect Analyzer prompt to research backgrounds and draft hyper-personalized outreach instantly."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Pricing (Value Anchoring & Impulse Buy) */}
            <section id="pricing" className="px-6 py-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-violet-600),_transparent_70%)] blur-[80px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">Invest Once. Benefit Forever.</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            No expensive courses. No hidden fees. Just an ongoing intelligence feed for less than a coffee.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                        {/* Monthly Plan (The Starter) */}
                        <div className="glass-card flex flex-col p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                            <div className="mb-8">
                                <h3 className="text-xl font-medium text-slate-300 mb-2">Monthly Sprinter</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-white tracking-tight">₹99</span>
                                    <span className="text-slate-500 font-mono text-sm uppercase">/ month</span>
                                </div>
                                <p className="mt-4 text-slate-400 text-sm">Dip your toes in. Cancel anytime if it doesn't immediately save you 5 hours.</p>
                            </div>

                            <div className="h-[1px] w-full bg-white/5 mb-8"></div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {[
                                    "The Weekly Action Newsletter",
                                    "Access to standard Prompt Library",
                                    "Basic workflow mini-workshops",
                                    "Cancel Anytime"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                        <CheckCircle weight="bold" className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/checkout?plan=monthly"
                                className="w-full py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-center transition-colors shadow-none"
                            >
                                Start Monthly
                            </Link>
                        </div>

                        {/* Yearly Plan (The Anchor / No-Brainer) */}
                        <div className="relative flex flex-col p-10 rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-violet-500/40 shadow-[0_0_50px_-15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_80px_-20px_rgba(99,102,241,0.6)] hover:border-violet-400 transition-all duration-500 scale-100 md:scale-105 z-10 h-[calc(100%+2rem)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-violet-900/50">
                                    <Coffee weight="fill" className="w-4 h-4" />
                                    "Less Than Coffee" Value
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-grid opacity-10 rounded-[2.5rem] bg-[length:20px_20px]"></div>

                            <div className="relative z-10 mb-8">
                                <h3 className="text-xl font-medium text-violet-300 mb-2">Annual Professional</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-bold text-white tracking-tight">₹249</span>
                                    <span className="text-violet-300/50 font-mono text-sm uppercase">/ year</span>
                                </div>
                                {/* The psychological framing / savings math */}
                                <div className="mt-3 inline-flex px-2.5 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                    Saves ₹939 / year (79% off)
                                </div>
                                <p className="mt-4 text-slate-300 text-sm leading-relaxed">Set it and forget it. Stay ahead of the AI curve for the entire year without thinking about it.</p>
                            </div>

                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8 relative z-10"></div>

                            <ul className="flex-1 space-y-4 mb-8 relative z-10">
                                {[
                                    "Everything in Monthly, plus:",
                                    "Full Premium Prompt Library",
                                    "V.I.P Direct Email Support",
                                    "Access to 1-on-1 workflow reviews",
                                    "Downloadable Notion Templates",
                                    "Lifetime access to future tools"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white text-sm">
                                        <div className="rounded-full bg-violet-500/20 p-1 mt-0.5 border border-violet-500/30 flex-shrink-0">
                                            <CheckCircle weight="fill" className="w-4 h-4 text-violet-400" />
                                        </div>
                                        {i === 0 ? <strong className="text-violet-200">{feature}</strong> : <span>{feature}</span>}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/checkout?plan=annual"
                                className="relative z-10 w-full py-5 px-6 rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-bold text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2"
                            >
                                Claim Annual Value <ArrowRight weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ (Anti-Course Risk Reversal) */}
            <section className="px-6 py-24 bg-slate-900 border-t border-white/5 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white">
                            Frequently Asked <span className="text-slate-500">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-emerald-400 font-mono text-sm uppercase">01</span>
                                I'm terrible with technology. Is this for me?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Yes. If you know how to copy text and send an email, you are qualified. We intentionally ignore complex coding and technical frameworks to focus on simple, native AI tools that anyone can use directly in their browser.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-emerald-400 font-mono text-sm uppercase">02</span>
                                Is this a course?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                No. We believe traditional video courses take too long. You are buying a subscription to an "intelligence feed" and an "action library". You get quick, bite-sized newsletters, templates, and 5-minute screen recordings designed for immediate use, not long-term study.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-emerald-400 font-mono text-sm uppercase">03</span>
                                Will this apply to my industry?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Our library is categorized for general knowledge work: Marketing, HR, Administration, Sales, Customer Support, and Management. If you use a computer to write words or analyze data, you will save hours every week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
