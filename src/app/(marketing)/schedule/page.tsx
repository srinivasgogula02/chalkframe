
"use client";

import { useEffect } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function SchedulePage() {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        script.setAttribute("async", "true");
        head?.appendChild(script);

        return () => {
            head?.removeChild(script);
        };
    }, []);

    return (
        <main className="min-h-screen bg-slate-900 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
                >
                    <ArrowLeft weight="bold" /> Back to Home
                </Link>

                <div className="text-center mb-10">
                    <h1 className="font-display text-3xl md:text-5xl font-medium text-white mb-4">
                        Book a Call
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Schedule a 30-minute discovery call to discuss your automation needs.
                    </p>
                </div>

                <div className="glass-card p-2 rounded-2xl overflow-hidden bg-slate-800/50 border border-white/5">
                    <div
                        className="calendly-inline-widget w-full"
                        data-url="https://calendly.com/srinivasgogula/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=8b5cf6"
                        style={{ minWidth: "320px", height: "700px" }}
                    />
                </div>
            </div>
        </main>
    );
}
