"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Problem() {
    return (
        <section className="bg-white py-24 sm:py-32 border-t-2 border-[#2d2d2d] border-dashed">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl">
                        Messy vs Clear
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 font-medium">
                        Stop relying on motivation. <span className="underline decoration-wavy decoration-yellow-400">plusMinus</span> builds consistency.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 relative">

                    {/* Connecting Arrow (Mental Model) */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <svg width="100" height="40" viewBox="0 0 100 40" className="text-[#2d2d2d]">
                            <path d="M0 20 Q 50 0 90 15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    {/* Chaos / Old Way */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -1 }}
                        whileInView={{ opacity: 1, rotate: -1 }}
                        viewport={{ once: true }}
                        className="card p-8 bg-[#fff0f0] border-red-200"
                    >
                        <div className="absolute -top-4 -right-4 bg-white border-2 border-[#2d2d2d] rounded-full p-2 shadow-sm rotate-12">
                            <X className="h-8 w-8 text-red-500" />
                        </div>
                        <h3 className="mb-6 text-2xl font-bold text-[#2d2d2d] border-b-2 border-red-200 pb-2 inline-block">The Chaos</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 opacity-70">
                                <span className="text-red-400 text-xl font-bold">1.</span>
                                <span className="line-through decoration-red-400">Vague "New Year's Resolutions"</span>
                            </li>
                            <li className="flex items-start gap-4 opacity-70">
                                <span className="text-red-400 text-xl font-bold">2.</span>
                                <span className="line-through decoration-red-400">Scattered notes app</span>
                            </li>
                            <li className="flex items-start gap-4 opacity-70">
                                <span className="text-red-400 text-xl font-bold">3.</span>
                                <span className="line-through decoration-red-400">No accountability loop</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Order / plusMinus Way */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        className="card p-8 bg-[#f0fff4] border-green-200"
                    >
                        <div className="absolute -top-4 -right-4 bg-white border-2 border-[#2d2d2d] rounded-full p-2 shadow-sm rotate-[-12deg]">
                            <Check className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="mb-6 text-2xl font-bold text-[#2d2d2d] border-b-2 border-green-200 pb-2 inline-block">The Easy Way</h3>
                        <ul className="space-y-4">
                            <li className="goal-item border-green-200">
                                <input type="checkbox" checked readOnly className="goal-checkbox" />
                                <span className="font-bold">Clear daily list</span>
                            </li>
                            <li className="goal-item border-green-200">
                                <input type="checkbox" checked readOnly className="goal-checkbox" />
                                <span className="font-bold">Progress heatmaps</span>
                            </li>
                            <li className="goal-item border-green-200">
                                <input type="checkbox" checked readOnly className="goal-checkbox" />
                                <span className="font-bold">Motivation that lasts</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
