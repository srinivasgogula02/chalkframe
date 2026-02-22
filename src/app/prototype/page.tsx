import { Metadata } from "next";
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
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "MVP Studio | Chalkframe",
    description: "Stop drawing pictures. Start shipping real software. Get a fully functioning, coded web application MVP live in days to test with real users and raise funding.",
};

export default function PrototypePage() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-300 selection:bg-rose-500/30 overflow-hidden font-sans pt-24 md:pt-32">
            <Navbar />

            {/* 1. Hero Section (The Reality Hook) */}
            <section className="relative px-6 pb-20 pt-10 md:pt-20 overflow-hidden">
                {/* Abstract Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-violet-600 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
                    <div className="animate-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(225,29,72,0.15)] mb-4">
                        <Robot weight="fill" className="text-rose-400" />
                        <span>The AI Boom Doesn't Wait</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Stop Drawing Pictures.<br />
                        Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-indigo-300 italic font-light">Shipping Real Apps.</span>
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed drop-shadow-md">
                            We don't build Figma designs. We build <strong className="text-white font-medium">fully functional, coded Next.js web applications</strong> connected to the internet.
                        </p>
                        <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
                            Test your idea with real users, process actual AI logic, and hand investors a live URL instead of a boring slide deck.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200 rounded-xl px-8 py-4 font-bold text-sm md:text-base transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
                        >
                            Launch Your Live MVP <ArrowRight weight="bold" />
                        </Link>
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest sm:ml-4 flex items-center gap-2">
                            <RocketLaunch weight="fill" className="text-rose-400" /> Shipped in Days
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. The FOMO Section (The AI Gold Rush) */}
            <section className="px-6 py-24 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            If you wait 6 months,<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 font-medium italic">Someone Else Will Build It.</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent mx-auto mt-8"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        {/* The Trap */}
                        <div className="glass-card bg-slate-900/80 rounded-[2rem] p-8 border-slate-700/50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 text-slate-500/10 group-hover:scale-110 transition-transform duration-500">
                                <Warning weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-slate-700 pb-2 inline-block">The Dead-End Path</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">01</span>
                                        <p className="text-slate-300">You spend <strong className="text-white">months</strong> trying to recruit a "technical cofounder" who works for free.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">02</span>
                                        <p className="text-slate-300">Or you pay an agency <strong className="text-white">₹8,00,000+</strong> and wait half a year for V1.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">03</span>
                                        <p className="text-slate-300">By the time you launch your "AI wrapper", <strong className="text-rose-400">10 competitors have already stolen your market share.</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* The Chalkframe Way - The Solution */}
                        <div className="glass-highlight bg-slate-900/40 rounded-[2rem] p-8 border-rose-500/30 hover:border-rose-500/60 transition-colors relative overflow-hidden group shadow-[0_0_40px_-15px_rgba(225,29,72,0.2)]">
                            <div className="absolute top-0 right-0 p-6 text-rose-500/10 group-hover:scale-110 transition-transform duration-500">
                                <Lightning weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-rose-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-rose-500/20 pb-2 inline-block">The Chalkframe Execution</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 mt-1 border border-rose-500/30">
                                            <Clock weight="fill" />
                                        </span>
                                        <p className="text-slate-200">We write the code. We deploy it. You get a live link (<strong className="text-white font-mono text-xs bg-black/30 px-2 py-0.5 rounded">your-app.com</strong>) in days.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 mt-1 border border-rose-500/30">
                                            <GlobeHemisphereWest weight="fill" />
                                        </span>
                                        <p className="text-slate-200">You immediately send it to real beta testers to validate your assumptions <strong className="text-white">in the real world.</strong></p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-300 mt-1 border border-rose-500/30">
                                            <HandCoins weight="fill" />
                                        </span>
                                        <p className="text-slate-200">You slide your phone across the table to an investor and let them use the app themselves.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Demystifying The "Live MVP" (What actually is it?) */}
            <section className="px-6 py-24 bg-slate-900/50 border-y border-white/5 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest mb-4">
                            What exactly are you buying?
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            The <span className="text-indigo-400 font-medium">Functional Core</span> Strategy
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Building an entire SaaS takes months. We bypass the bullshit. We physically code the ONE feature that makes your idea unique, and intelligently mock up the fluff.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-emerald-500/30">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                                <CodeBlock weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">1. The Core Engine WORKS</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                If you are building an AI cover letter generator, <strong className="text-slate-200">the AI actually generates cover letters.</strong> It connects to OpenAI/Anthropic. Real software. Real APIs. Real outputs to prove it works.
                            </p>
                        </div>

                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-violet-500/30">
                            <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 text-violet-400">
                                <Eye weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">2. The "Padding" is Mocked</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We don't waste 4 weeks coding a "Billing Settings" or "Change Password" page. Those secondary screens are built as gorgeous, interactive UI elements that look perfect but don't hit a complex database yet.
                            </p>
                        </div>

                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-blue-500/30">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                                <GlobeHemisphereWest weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">3. Hosted & Live</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                You receive a working URL deployed to the web. Anyone with a smartphone or laptop can use your core feature anywhere in the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Pricing (The Pitch) */}
            <section id="pricing" className="px-6 py-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-rose-600),_transparent_70%)] blur-[80px]" />
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">The Live MVP</h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Stop paying designers for flat images. Buy a functioning piece of software that you can put in front of users today.
                        </p>
                    </div>

                    <div className="relative flex flex-col p-10 md:p-14 rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-rose-500/40 shadow-[0_0_80px_-20px_rgba(225,29,72,0.3)] hover:border-rose-400 transition-all duration-500 z-10 w-full overflow-hidden">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                            <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-violet-600 text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(225,29,72,0.5)]">
                                <CodeBlock weight="fill" className="w-4 h-4" />
                                Real Code. Fixed Price.
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-grid opacity-10 rounded-[3rem] bg-[length:20px_20px]"></div>

                        <div className="relative z-10 text-center mb-10">
                            <h3 className="text-2xl font-display font-medium text-rose-300 mb-4">Complete Coded MVP</h3>
                            <div className="flex items-center justify-center gap-1">
                                <CurrencyInr weight="bold" className="text-white text-5xl md:text-6xl" />
                                <span className="text-6xl md:text-7xl font-display font-bold text-white tracking-tight">24,999</span>
                            </div>
                            <div className="mt-6 inline-flex px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                                Delivered via Live Web URL (React/Next.js stack)
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/30 to-transparent mb-10 relative z-10"></div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 relative z-10 mb-12">
                            {[
                                "Functional Core Engine Built",
                                "API Integration (OpenAI, etc)",
                                "Premium UI/UX Frontend Code",
                                "Secondary Screens Mocked UI",
                                "Deployed Live to Vercel/Netlify",
                                "100% Code Ownership"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white text-sm">
                                    <div className="rounded-full bg-rose-500/20 p-1 border border-rose-500/30 flex-shrink-0">
                                        <CheckCircle weight="fill" className="w-4 h-4 text-rose-400" />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* The Upsell Kicker */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900 via-indigo-900/40 to-slate-900 rounded-2xl p-6 border border-indigo-500/20 mb-10 text-center">
                            <h4 className="text-white font-medium mb-2 flex items-center justify-center gap-2">
                                <Users weight="fill" className="text-indigo-400" /> The "Validation" Guarantee
                            </h4>
                            <p className="text-slate-400 text-sm">
                                When you finish validating your MVP and want to build the remaining backend features (databases, complex auth, billing), we act as your dev team. <strong className="text-white">And we deduct this ₹24,999 from the final build cost.</strong>
                            </p>
                        </div>

                        <Link
                            href="/checkout?plan=mvp"
                            className="relative z-10 w-full py-5 px-6 rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-bold text-center text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2"
                        >
                            Start Coding My MVP <ArrowRight weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. FAQ (The "Too Good to Be True" Objections) */}
            <section className="px-6 py-24 bg-slate-900 border-t border-white/5 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white">
                            Founder <span className="text-slate-500">FAQs</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-rose-400 font-mono text-sm uppercase">01</span>
                                Wait, is this just a fake Figma design?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                No. Absolutely not. We write real React/Next.js code and host it on a live URL. Your chosen "Core Feature" will physically work. We only use visual mockups for secondary, non-essential padding pages to keep your costs at ₹24,999 instead of ₹10 Lakhs.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-rose-400 font-mono text-sm uppercase">02</span>
                                I want to build an AI app. Do you actually connect the AI?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Yes. If your idea relies on a specific AI output (like summarizing PDFs, or generating images), we will write the backend logic to ping those APIs so your users experience the actual magic.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-rose-400 font-mono text-sm uppercase">03</span>
                                Who owns the code when you're done?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                You do. 100%. We hand over the entire Github repository. You can take our code, hire your own developers, and continue building on top of it. You are never locked into using us forever.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-rose-400 font-mono text-sm uppercase">04</span>
                                Why do I need this to raise funding?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Because ideas are cheap. Everyone has an "AI Startup Idea" right now. Investors are numb to slide decks. When you walk into a pitch and hand them a live URL where they can test the software themselves, your valuation instantly skyrockets because you proved you can execute.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
