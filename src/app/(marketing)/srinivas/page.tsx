import type { Metadata } from "next";
import Link from "next/link";
import {
    RocketLaunch,
    Brain,
    Code,
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
    InstagramLogo,
    EnvelopeSimple,
    Globe,
    ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "Srinivas Gogula | Founder & CEO at Chalkframe",
    description:
        "Srinivas Gogula is the Founder & CEO of Chalkframe — an AI transformation consultancy building products that automate complex business workflows.",
    alternates: {
        canonical: "https://www.chalkframe.com/srinivas",
    },
    openGraph: {
        title: "Srinivas Gogula | Founder & CEO at Chalkframe",
        description:
            "Srinivas Gogula is the Founder & CEO of Chalkframe — an AI transformation consultancy building products that automate complex business workflows.",
        url: "https://www.chalkframe.com/srinivas",
        siteName: "Chalkframe",
        locale: "en_US",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Srinivas Gogula | Founder & CEO at Chalkframe",
        description:
            "Srinivas Gogula is the Founder & CEO of Chalkframe — an AI transformation consultancy.",
    },
};

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/srinivasgogula02",
        icon: GithubLogo,
        color: "hover:text-white",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/srinivasgogula",
        icon: LinkedinLogo,
        color: "hover:text-blue-400",
    },
    {
        label: "Twitter / X",
        href: "https://twitter.com/srinimyr",
        icon: TwitterLogo,
        color: "hover:text-sky-400",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/YOUR_HANDLE",
        icon: InstagramLogo,
        color: "hover:text-pink-400",
    },
    {
        label: "Website",
        href: "https://srinivasgogula.me",
        icon: Globe,
        color: "hover:text-violet-400",
    },
    {
        label: "Email",
        href: "mailto:srinivas@chalkframe.com",
        icon: EnvelopeSimple,
        color: "hover:text-emerald-400",
    },
];

const projects = [
    {
        name: "Chalkframe",
        description:
            "An AI transformation consultancy that bridges the gap between business strategy and artificial intelligence. We build AI products, custom solutions, and GEO strategies for forward-thinking companies.",
        href: "https://www.chalkframe.com",
        icon: Brain,
        color: "text-violet-400",
        bg: "bg-violet-500/20",
    },
    {
        name: "ProposalFlow",
        description:
            "Professional proposals in under 30 seconds. Canva + ChatGPT built specifically for getting contracts signed fast — with live editing, brand brain, and 1-click PDF export.",
        href: "https://www.chalkframe.com/proposalflow",
        icon: RocketLaunch,
        color: "text-blue-400",
        bg: "bg-blue-500/20",
    },
    {
        name: "PlusMinus",
        description:
            "A habit tracker designed to help you focus on what matters. Simple, fast, and built with intention — because the best tool is the one you actually use.",
        href: "https://www.chalkframe.com/plusminus",
        icon: Code,
        color: "text-emerald-400",
        bg: "bg-emerald-500/20",
    },
];

export default function SrinivasPage() {
    return (
        <main className="relative">
            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
                <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-200 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Founder & CEO · Chalkframe
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6 text-white">
                        Hey, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 italic font-light">
                            Srinivas
                        </span>
                        .
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                        I build AI products and automation systems that help businesses move
                        faster, think smarter, and scale without friction. I founded{" "}
                        <Link
                            href="/"
                            className="text-violet-300 hover:text-violet-200 underline underline-offset-4 transition-colors"
                        >
                            Chalkframe
                        </Link>{" "}
                        to turn complex AI capabilities into tools that actually work in the
                        real world.
                    </p>

                    {/* Social links */}
                    <div className="flex flex-wrap gap-3">
                        {socialLinks.map(({ label, href, icon: Icon, color }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm font-mono transition-all ${color} hover:border-white/20 hover:bg-white/10`}
                            >
                                <Icon size={16} weight="fill" />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 px-6 bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
                        About Me
                    </h2>

                    <div className="glass-card p-8 rounded-3xl space-y-5 text-slate-300 text-lg leading-relaxed mb-16">
                        <p>
                            I&apos;m a builder at heart. My work sits at the intersection of
                            product design, engineering, and artificial intelligence — and I&apos;m
                            obsessed with turning powerful technology into things that are genuinely
                            useful for people.
                        </p>
                        <p>
                            With Chalkframe, I help businesses replace slow, manual workflows with
                            AI-powered systems that run themselves. Whether that means deploying
                            custom AI agents, building internal automation tools, or shipping a
                            complete SaaS product — I care deeply about the outcome, not just the
                            output.
                        </p>
                        <p>
                            I believe the best software is invisible: it just works, stays out of
                            your way, and quietly makes everything around it better. That belief
                            drives every product I build.
                        </p>
                    </div>

                    {/* What I'm building */}
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
                        What I&apos;m Building
                    </h2>

                    <div className="grid md:grid-cols-1 gap-6 mb-16">
                        {projects.map(({ name, description, href, icon: Icon, color, bg }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 rounded-2xl flex gap-5 items-start group hover:border-white/20 transition-all"
                            >
                                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center shrink-0 mt-0.5`}>
                                    <Icon className={`text-2xl ${color}`} weight="fill" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-display text-xl font-medium text-white">
                                            {name}
                                        </h3>
                                        <ArrowUpRight
                                            className="text-slate-500 group-hover:text-slate-300 transition-colors"
                                            size={16}
                                            weight="bold"
                                        />
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
                            Let&apos;s Build Something
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Have an idea, a workflow to automate, or just want to connect? I&apos;d
                            love to hear from you.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="mailto:srinivas@chalkframe.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-violet-900/30"
                            >
                                <EnvelopeSimple weight="bold" />
                                Say Hello
                            </a>
                            <a
                                href="https://srinivasgogula.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-colors"
                            >
                                <Globe weight="bold" />
                                My Website
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
