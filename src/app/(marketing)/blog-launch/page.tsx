import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Image as ImageIcon,
    LockKey,
    XCircle,
    Browsers,
    Gear,
    CheckCircle,
    PaintBrush,
    Cloud,
    RocketLaunch,
    Check,
} from "@phosphor-icons/react/dist/ssr";
import BlogLaunchForm from "@/components/BlogLaunchForm";

export const metadata: Metadata = {
    title: "The Forever Blog | Chalkframe Products",
    description:
        "Get a fully customized startup blog that matches your brand. $99 one-time fee. $0/month hosting forever.",
    alternates: {
        canonical: "/blog-launch",
    },
};

export default function BlogLaunchPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-grid opacity-[0.15] pointer-events-none z-0"></div>

            {/* Hero Section */}
            <section className="relative z-10 pt-40 pb-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-400 text-xs font-mono mb-8 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                        Product Launch
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight mb-6 text-white">
                        Custom-Branded Blog
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-500">
                            With Zero Hosting Fees
                        </span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        A fully customized startup blog that matches your brand perfectly.{" "}
                        <br />
                        <span className="text-white font-bold">Hosted for free, forever.</span>
                    </p>
                    <div className="flex justify-center gap-4 mb-16">
                        <Link
                            href="#pricing"
                            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-display font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] rounded"
                        >
                            Get My Blog for $99
                        </Link>
                    </div>

                    {/* VISUAL: Browser Mockup (Dark Mode) */}
                    <div className="relative max-w-4xl mx-auto perspective-1000 group animate-float">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-gold-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

                        {/* Browser Frame */}
                        <div className="relative rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden text-left">
                            {/* Toolbar */}
                            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <div className="ml-4 flex-1 max-w-md bg-slate-900 h-6 rounded-md border border-slate-700 flex items-center px-3 text-[10px] text-slate-500 font-mono justify-between">
                                    <span>blog.yourstartup.com</span>
                                    <LockKey className="text-green-400" weight="fill" />
                                </div>
                            </div>

                            {/* Content Preview */}
                            <div className="p-8 bg-slate-900 grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    {/* Fake Post Title */}
                                    <div className="h-8 w-3/4 bg-slate-800 rounded animate-pulse"></div>
                                    {/* Fake Meta */}
                                    <div className="flex gap-3">
                                        <div className="h-4 w-20 bg-slate-800/50 rounded"></div>
                                        <div className="h-4 w-20 bg-slate-800/50 rounded"></div>
                                    </div>
                                    {/* Fake Image Placeholder */}
                                    <div className="h-48 w-full bg-slate-800 rounded border border-slate-700 flex flex-col items-center justify-center text-slate-600 gap-2">
                                        <ImageIcon className="text-3xl" />
                                        <span className="text-xs font-mono">
                                            Featured Image matches your brand style
                                        </span>
                                    </div>
                                    {/* Fake Text Lines */}
                                    <div className="space-y-3">
                                        <div className="h-3 w-full bg-slate-800/30 rounded"></div>
                                        <div className="h-3 w-full bg-slate-800/30 rounded"></div>
                                        <div className="h-3 w-5/6 bg-slate-800/30 rounded"></div>
                                        <div className="h-3 w-full bg-slate-800/30 rounded"></div>
                                    </div>
                                </div>

                                {/* Fake Sidebar */}
                                <div className="hidden md:block space-y-6 border-l border-slate-800 pl-8">
                                    <div className="h-32 w-full bg-slate-800/50 rounded p-4 border border-slate-700/50">
                                        <div className="h-3 w-1/2 bg-slate-700 rounded mb-4"></div>
                                        <div className="h-8 w-full bg-violet-600/20 border border-violet-500/30 rounded flex items-center justify-center text-violet-400 text-xs font-bold">
                                            YOUR CTA HERE
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-1/3 bg-slate-800 rounded mb-2"></div>
                                        <div className="h-16 w-full bg-slate-800/30 rounded"></div>
                                        <div className="h-16 w-full bg-slate-800/30 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 font-mono">
                        ONE-TIME PAYMENT • NO MONTHLY FEES
                    </p>
                </div>
            </section>

            {/* The Psychology / Problem */}
            <section className="relative z-10 py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                            Content is an Asset.
                            <br />
                            Hosting fees are a Liability.
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Every startup founder knows they need a blog. It's how you build
                            authority, capture long-tail SEO traffic, and tell your story.
                        </p>
                        <p className="text-slate-300 mb-6">
                            <strong>But the options suck:</strong>
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <XCircle className="text-red-400 mt-1" weight="fill" />
                                <span>
                                    <strong>WordPress:</strong> Constant security updates, slow
                                    servers, and $10-30/mo hosting fees.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <XCircle className="text-red-400 mt-1" weight="fill" />
                                <span>
                                    <strong>Webflow/Ghost:</strong> Beautiful, but expensive
                                    ($200+/year) just to host text.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <XCircle className="text-red-400 mt-1" weight="fill" />
                                <span>
                                    <strong>Medium/Substack:</strong> You don't own the domain,
                                    and it doesn't match your brand.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="glass-card p-8 relative">
                        <div className="text-center mb-6">
                            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                                5-Year Cost of Ownership
                            </div>
                            <div className="flex items-end justify-center gap-2">
                                <span className="text-5xl font-display font-bold text-white">
                                    $0
                                </span>
                                <span className="text-slate-400 mb-2 decoration-red-500 line-through">
                                    vs $1,200+
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full w-full bg-red-500/50"
                                    style={{ width: "100%" }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-400 font-mono">
                                <span>Competitors (Hosting + SSL + Plugins)</span>
                            </div>

                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden mt-6">
                                <div
                                    className="h-full w-px bg-green-400"
                                    style={{ width: "1%" }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-green-400 font-mono">
                                <span>Chalkframe (One-time Setup)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="relative z-10 py-24 bg-slate-800/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl font-bold mb-4 text-white">
                            The "Infrastructure Hack"
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            We utilize Google's enterprise-grade infrastructure (Blogger) as a
                            headless CMS, wrapped in a custom-coded skin that mimics your
                            startup's design language.
                        </p>
                    </div>

                    {/* VISUAL: Architecture Diagram */}
                    <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-3 group-hover:border-white/20 transition-colors shadow-xl">
                                <Browsers
                                    className="text-3xl text-slate-400 group-hover:text-white transition-colors"
                                    weight="fill"
                                />
                            </div>
                            <div className="text-xs font-mono text-slate-500 uppercase">
                                Your Main Site
                            </div>
                        </div>

                        <div className="h-8 w-0.5 md:w-16 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-slate-700 to-violet-500"></div>

                        <div className="flex flex-col items-center text-center relative group">
                            <div className="absolute -inset-2 bg-violet-500/20 blur-xl rounded-full group-hover:bg-violet-500/30 transition-all"></div>
                            <div className="relative w-24 h-24 rounded-2xl bg-slate-900 border border-violet-500 flex flex-col items-center justify-center mb-3 shadow-2xl shadow-violet-900/20">
                                <Gear
                                    className="text-3xl text-violet-400 animate-spin-slow"
                                    weight="fill"
                                />
                                <span className="text-[10px] font-bold text-violet-200 mt-1">
                                    Google Engine
                                </span>
                            </div>
                            <div className="text-xs font-mono text-violet-400 uppercase font-bold">
                                Chalkframe Setup
                            </div>
                        </div>

                        <div className="h-8 w-0.5 md:w-16 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-violet-500 to-green-400"></div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-green-500/30 flex items-center justify-center mb-3 group-hover:border-green-400/50 transition-colors shadow-xl">
                                <CheckCircle
                                    className="text-3xl text-green-400"
                                    weight="fill"
                                />
                            </div>
                            <div className="text-xs font-mono text-green-500 uppercase">
                                blog.yoursite.com
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border border-slate-700 bg-slate-900/50 rounded">
                            <div className="w-10 h-10 bg-violet-900/30 text-violet-400 flex items-center justify-center mb-4 rounded">
                                <PaintBrush className="text-xl" weight="fill" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">
                                1. Brand Matching
                            </h3>
                            <p className="text-sm text-slate-400">
                                We inspect your main site's CSS. We replicate your fonts, colors,
                                navbar, and footer so the blog looks exactly like your main
                                product.
                            </p>
                        </div>
                        <div className="p-6 border border-slate-700 bg-slate-900/50 rounded">
                            <div className="w-10 h-10 bg-violet-900/30 text-violet-400 flex items-center justify-center mb-4 rounded">
                                <Cloud className="text-xl" weight="fill" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">
                                2. Google Infrastructure
                            </h3>
                            <p className="text-sm text-slate-400">
                                We set it up on Blogger. Why? It's free, has 100% uptime,
                                unlimited bandwidth, and Google security. It never crashes.
                            </p>
                        </div>
                        <div className="p-6 border border-slate-700 bg-slate-900/50 rounded">
                            <div className="w-10 h-10 bg-violet-900/30 text-violet-400 flex items-center justify-center mb-4 rounded">
                                <RocketLaunch className="text-xl" weight="fill" />
                            </div>
                            <h3 className="font-bold text-white text-lg mb-2">
                                3. The Handover
                            </h3>
                            <p className="text-sm text-slate-400">
                                We connect your custom domain (e.g., blog.yoursite.com),
                                configure SEO settings, and hand you the keys. You own it 100%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section id="pricing" className="relative z-10 py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto glass-card p-12 border-t-4 border-violet-500 relative overflow-hidden rounded-xl">
                    {/* Glow effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/10 blur-3xl pointer-events-none"></div>

                    <h2 className="font-display text-4xl font-bold text-white mb-2">
                        Launch Your Growth Engine
                    </h2>
                    <div className="flex items-baseline justify-center gap-2 mb-6">
                        <span className="text-6xl font-display font-bold text-white">
                            $99
                        </span>
                        <span className="text-slate-400 font-mono uppercase">
                            / One-Time
                        </span>
                    </div>

                    <ul className="text-left max-w-sm mx-auto space-y-3 mb-10 text-slate-300">
                        <li className="flex gap-3">
                            <Check className="text-violet-500" weight="fill" /> Custom "Brand-Match"
                            Template
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-violet-500" weight="fill" /> Custom Domain Setup
                            (blog.yoursite.com)
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-violet-500" weight="fill" /> Mobile Responsive
                            Design
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-violet-500" weight="fill" /> SEO Meta Tags
                            Configuration
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-violet-500" weight="fill" />{" "}
                            <strong>$0 Monthly Hosting Forever</strong>
                        </li>
                    </ul>

                    <BlogLaunchForm />
                </div>
            </section>
        </main>
    );
}
