"use client";

import { useState } from "react";

export default function BlogLaunchForm() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xnnwglqo", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
            <input type="hidden" name="product" value="Startup Blog Package" />
            <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-violet-500 transition-colors"
            />

            {status === "success" && (
                <div className="p-3 text-sm text-center text-green-400 bg-green-900/20 border border-green-500/30 rounded mb-4">
                    Thanks! We'll be in touch shortly.
                </div>
            )}
            {status === "error" && (
                <div className="p-3 text-sm text-center text-red-400 bg-red-900/20 border border-red-500/30 rounded mb-4">
                    Error submitting form.
                </div>
            )}

            <button
                type="submit"
                className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white font-display font-bold uppercase tracking-wide transition-all shadow-lg"
            >
                Start Building
            </button>
            <p className="mt-4 text-xs text-slate-500 font-mono">
                Delivery in 48-72 Hours.
            </p>
        </form>
    );
}
