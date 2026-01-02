"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/myzoebkz", {
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
        <div className="glass-card p-1 rounded-2xl">
            <div className="bg-slate-900/80 rounded-xl p-8 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-slate-500 uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-slate-500 uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600"
                                placeholder="john@acme.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-slate-500 uppercase">
                            Challenge
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600"
                            placeholder="I need to automate..."
                        ></textarea>
                    </div>

                    {status === "success" && (
                        <div className="text-center text-sm text-green-400 bg-green-500/10 py-2 rounded">
                            Message received. We'll be in touch.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="text-center text-sm text-red-400 bg-red-500/10 py-2 rounded">
                            Error submitting form. Please try again.
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-display font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-violet-900/30 transition-all transform hover:scale-[1.02]"
                    >
                        Initialize Transformation
                    </button>
                </form>
            </div>
        </div>
    );
}
