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
    CheckCircle
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Prototype Studio | Chalkframe",
    description: "Turn your napkin sketch into a stunning, clickable prototype. Pitch investors and raise funding without spending ₹10 Lakhs on a dev team.",
};

export default function PrototypePage() {
    return (
        <main className="min-h-screen bg-slate-900 text-slate-300 selection:bg-amber-500/30 overflow-hidden font-sans pt-24 md:pt-32">
            <Navbar />

            {/* 1. Hero Section (The Pitch Hook) */}
            <section className="relative px-6 pb-20 pt-10 md:pt-20 overflow-hidden">
                {/* Abstract Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <div className="animate-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)] mb-4">
                        <Lightbulb weight="fill" className="text-amber-400" />
                        <span>For Non-Technical Visionaries</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Stop Explaining Your Idea.<br />
                        Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300 italic font-light">Showing It.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed drop-shadow-md">
                        We turn your napkin sketch into a stunning, clickable prototype. Pitch investors, raise funding, and test with real users—<strong className="text-white font-medium">without spending ₹10 Lakhs on a dev agency.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link
                            href="#pricing"
                            className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-200 rounded-xl px-8 py-4 font-bold text-sm md:text-base transition-colors shadow-xl shadow-white/10 flex items-center justify-center gap-2"
                        >
                            View The Prototype Package <ArrowRight weight="bold" />
                        </Link>
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest sm:ml-4 flex items-center gap-2">
                            <RocketLaunch weight="fill" className="text-rose-400" /> Delivered in Days
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. The Founder's Dilemma (Contrast Section) */}
            <section className="px-6 py-24 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            The <span className="text-white font-medium italic">Old Way</span> vs. The <span className="text-amber-400 font-medium italic">Smart Way</span>
                        </h2>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                        {/* The Old Way - Pain Point */}
                        <div className="glass-card bg-slate-900/80 rounded-[2rem] p-8 border-slate-700/50 relative overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
                            <div className="absolute top-0 right-0 p-6 text-slate-500/10 group-hover:scale-110 transition-transform duration-500">
                                <Warning weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-slate-700 pb-2 inline-block">Traditional Agencies</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">01</span>
                                        <p className="text-slate-300">They quote you <strong className="text-white">₹8,00,000+</strong> before writing a single line of code.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">02</span>
                                        <p className="text-slate-300">You wait <strong className="text-white">4 to 6 months</strong> just to see the first version.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mt-1 mt-0">03</span>
                                        <p className="text-slate-300">You finally launch, only to realize the market wanted something completely different.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* The Smart Way - The Solution */}
                        <div className="glass-highlight bg-slate-900/40 rounded-[2rem] p-8 border-amber-500/30 hover:border-amber-500/60 transition-colors relative overflow-hidden group shadow-[0_0_40px_-15px_rgba(245,158,11,0.2)]">
                            <div className="absolute top-0 right-0 p-6 text-amber-500/10 group-hover:scale-110 transition-transform duration-500">
                                <Lightning weight="fill" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-amber-400 text-sm font-mono uppercase tracking-widest mb-6 border-b border-amber-500/20 pb-2 inline-block">The Chalkframe Prototype</div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 mt-1 border border-amber-500/30">
                                            <Clock weight="fill" />
                                        </span>
                                        <p className="text-slate-200">You get a stunning, clickable product in your hands in <strong className="text-white">days, not months</strong>.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 mt-1 border border-amber-500/30">
                                            <HandCoins weight="fill" />
                                        </span>
                                        <p className="text-slate-200">You use it to pitch investors, raise capital, and secure pre-orders <strong className="text-white">risk-free</strong>.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 mt-1 border border-amber-500/30">
                                            <CodeBlock weight="fill" />
                                        </span>
                                        <p className="text-slate-200">Once funded, we use the exact prototype to build your full, coded application.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Demystifying The Prototype (What actually is it?) */}
            <section className="px-6 py-24 bg-slate-900/50 border-y border-white/5 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest mb-4">
                            What You Get
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
                            What exactly is a <span className="text-rose-400 font-medium">Prototype?</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg">
                            Even a 15-year-old could understand it. It's the ultimate "Smoke and Mirrors" tool used by top startups to raise millions before they even have a database.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-amber-500/30">
                            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 text-amber-400">
                                <Eye weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">1. It Looks Real</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We design every single screen exactly how your final app will look. Buttons, menus, dashboards, and animations. To the untrained eye, it is a fully finished software product.
                            </p>
                        </div>

                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-rose-500/30">
                            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-6 text-rose-400">
                                <CursorClick weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">2. It Feels Real</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                You can open it on your phone or laptop. You can click buttons, navigate between pages, and demonstrate user flows during a pitch. It reacts exactly like a real app.
                            </p>
                        </div>

                        <div className="glass-card rounded-[2rem] p-8 group hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 hover:border-violet-500/30">
                            <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 text-violet-400">
                                <CodeBlock weight="duotone" className="text-3xl" />
                            </div>
                            <h3 className="font-display text-2xl text-white font-medium mb-3">3. It Isn't Coded</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                *(Yet).* There is no messy backend or heavy databases holding it back. It is pure visual interaction designed at lightning speed to wow stakeholders and secure that crucial initial funding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Pricing (The Pitch) */}
            <section id="pricing" className="px-6 py-24 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-amber-600),_transparent_70%)] blur-[80px]" />
                </div>

                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">The Pitch Weapon</h2>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">
                            Design agencies charge easily over ₹1,00,000 for flat, boring concept art. We build interactive pitch weapons.
                        </p>
                    </div>

                    <div className="relative flex flex-col p-10 md:p-14 rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500/40 shadow-[0_0_80px_-20px_rgba(245,158,11,0.3)] hover:border-amber-400 transition-all duration-500 z-10 w-full overflow-hidden">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                            <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                                <RocketLaunch weight="fill" className="w-4 h-4" />
                                Fixed Price. No Surprises.
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-grid opacity-10 rounded-[3rem] bg-[length:20px_20px]"></div>

                        <div className="relative z-10 text-center mb-10">
                            <h3 className="text-2xl font-display font-medium text-amber-300 mb-4">Complete Prototype Build</h3>
                            <div className="flex items-center justify-center gap-1">
                                <CurrencyInr weight="bold" className="text-white text-5xl md:text-6xl" />
                                <span className="text-6xl md:text-7xl font-display font-bold text-white tracking-tight">24,999</span>
                            </div>
                            <div className="mt-6 inline-flex px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm">
                                Delivered via Interactive Figma Link & Mobile App Viewer
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-10 relative z-10"></div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 relative z-10 mb-12">
                            {[
                                "Discovery & User Flow Mapping",
                                "High-Fidelity UI Design",
                                "Clickable Interactivity & Animations",
                                "Mobile & Desktop Views",
                                "Pitch Deck Assets Export",
                                "2 Revisions included"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white text-sm">
                                    <div className="rounded-full bg-amber-500/20 p-1 border border-amber-500/30 flex-shrink-0">
                                        <CheckCircle weight="fill" className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* The Upsell Kicker */}
                        <div className="relative z-10 bg-gradient-to-r from-slate-900 via-rose-900/40 to-slate-900 rounded-2xl p-6 border border-rose-500/20 mb-10 text-center">
                            <h4 className="text-white font-medium mb-2 flex items-center justify-center gap-2">
                                <Users weight="fill" className="text-rose-400" /> The "Validation" Guarantee
                            </h4>
                            <p className="text-slate-400 text-sm">
                                When your prototype successfully raises funding or validates your idea, we act as your dev team to build the fully-coded live application. <strong className="text-white">And we credit the ₹24,999 prototype cost toward your final build.</strong>
                            </p>
                        </div>

                        <Link
                            href="/checkout?plan=prototype"
                            className="relative z-10 w-full py-5 px-6 rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-bold text-center text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2"
                        >
                            Initialize Your Blueprint <ArrowRight weight="bold" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. FAQ (Overcoming Fear) */}
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
                                <span className="text-amber-400 font-mono text-sm uppercase">01</span>
                                I only have a vague idea. Is that enough?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Yes. Part of the ₹24,999 package includes a Discovery phase where we sit down and map out the exact user flow with you. We help you figure out what screens are actually necessary to prove your concept to an investor.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-amber-400 font-mono text-sm uppercase">02</span>
                                Do I own the designs?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                100%. Upon completion, you get full ownership of the Figma source files. You can take them to any other dev agency you choose, though we'd love to build the final product for you.
                            </p>
                        </div>

                        <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors group cursor-default">
                            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-3">
                                <span className="text-amber-400 font-mono text-sm uppercase">03</span>
                                Will investors actually care about a prototype?
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-8">
                                Investors receive hundreds of boring slide decks every week from people saying "I have an idea". Actually handing them a phone with a gorgeous, clickable prototype instantly puts you in the top 1% of founders. It proves execution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
