import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Chalk Frame | Free Business Problem Solve",
    description: "I’ll personally help one business solve a real business problem for free.",
};

export default function BusinessReviewPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-violet-500 selection:text-white">
            <div className="max-w-[880px] mx-auto px-5 py-12 pt-32 pb-32">

                {/* Hero */}
                <h1 className="font-display text-4xl md:text-[44px] leading-[1.2] mb-5 max-w-[720px] text-white">
                    I’ll personally solve one real business problem for free.
                </h1>

                <p className="text-lg text-slate-300 max-w-[760px] mb-5 leading-relaxed">
                    I’m opening one focused engagement to deeply understand a business and fix the most painful bottleneck slowing it down.
                </p>

                <p className="text-lg text-slate-500 max-w-[760px] leading-relaxed">
                    This is normally paid consulting and system implementation.
                    For one business, it will be done entirely free.
                </p>

                {/* Card: Why */}
                <div className="glass-card p-8 rounded-[18px] mt-9 border border-slate-800">
                    <p className="text-white font-semibold mb-4 text-lg">Why I’m doing this</p>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Most businesses don’t struggle because of lack of effort.
                        They struggle because operations are messy, manual, and fragmented.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        I want to take one business, go deep, build real systems, and document a real transformation.
                    </p>
                </div>

                {/* What you get */}
                <h2 className="font-display text-2xl md:text-[26px] mt-16 mb-4 text-white">What you get for free</h2>
                <ul className="pl-5 list-disc marker:text-slate-500 space-y-2.5">
                    {[
                        "Deep workflow and operations analysis",
                        "Clear diagnosis of the root problem",
                        "Custom solution architecture",
                        "AI agents or automation systems",
                        "Implementation and deployment",
                        "Post-build guidance and documentation"
                    ].map((item, i) => (
                        <li key={i} className="text-[17px] text-slate-300">{item}</li>
                    ))}
                </ul>

                {/* Who this is for */}
                <h2 className="font-display text-2xl md:text-[26px] mt-16 mb-4 text-white">Who this is for</h2>
                <ul className="pl-5 list-disc marker:text-slate-500 space-y-2.5">
                    {[
                        "Businesses with active customers or revenue",
                        "Founders overwhelmed with manual work",
                        "Teams stuck doing repetitive tasks",
                        "Companies ready to change systems"
                    ].map((item, i) => (
                        <li key={i} className="text-[17px] text-slate-300">{item}</li>
                    ))}
                </ul>

                {/* Center CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#apply"
                        className="bg-white text-slate-900 px-9 py-4.5 rounded-xl text-lg font-bold hover:bg-slate-200 transition-colors inline-block"
                    >
                        Check if your business qualifies
                    </a>
                    <p className="mt-3 text-sm text-slate-500">Takes under 2 minutes. Reviewed personally.</p>
                </div>

                {/* Application Form */}
                <div id="apply" className="bg-white p-8 md:p-10 rounded-[18px] mt-32 border border-slate-200 shadow-xl">
                    <h2 className="font-display text-2xl md:text-[26px] mb-8 text-slate-900">Business problem review</h2>

                    <div className="w-full">
                        <iframe
                            data-tally-src="https://tally.so/embed/5BZeMo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="799"
                            frameBorder="0"
                            title="Business review"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>

            </div>

            {/* Tally Script */}
            <Script id="tally-embed" strategy="lazyOnload">
                {`
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        `}
            </Script>
        </div>
    );
}
