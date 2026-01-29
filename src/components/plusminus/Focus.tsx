"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Pencil } from "lucide-react";

export default function Focus() {
    return (
        <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-t-2 border-[#2d2d2d] border-dashed">
            {/* Paper Texture Background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl">
                            Focus on what matters. <br />
                            <span className="text-gray-500 italic font-normal">Zero distractions.</span>
                        </h2>
                        <div className="mt-10 space-y-8 text-base leading-7 text-gray-700">
                            <div className="flex gap-4 items-start card p-4 bg-yellow-50 rotate-1">
                                <Zap className="h-6 w-6 shrink-0 text-[#2d2d2d] mt-1" />
                                <div>
                                    <h3 className="inline font-bold text-[#2d2d2d]">Lightning Fast. </h3>
                                    Log your day in seconds, not minutes.
                                </div>
                            </div>
                            <div className="flex gap-4 items-start card p-4 bg-blue-50 -rotate-1">
                                <Layout className="h-6 w-6 shrink-0 text-[#2d2d2d] mt-1" />
                                <div>
                                    <h3 className="inline font-bold text-[#2d2d2d]">Clean Interface. </h3>
                                    No clutter. Just you and your goals.
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual - Simple List / Pencil */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center mb-10 lg:mb-0"
                    >
                        <div className="w-full max-w-md card bg-white p-8 rotate-2 shadow-lg border-2 border-[#2d2d2d]">
                            <div className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-4 mb-4">
                                <Pencil className="h-5 w-5 text-[#2d2d2d]" />
                                <span className="text-xl font-bold text-[#2d2d2d]">Today's Focus</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border-2 border-[#2d2d2d] flex items-center justify-center"><div className="w-3 h-3 bg-[#2d2d2d]" /></div>
                                    <span className="text-lg text-gray-400 line-through decoration-2">Morning Run</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border-2 border-[#2d2d2d] flex items-center justify-center"><div className="w-3 h-3 bg-[#2d2d2d]" /></div>
                                    <span className="text-lg text-gray-400 line-through decoration-2">Read 20 pages</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded border-2 border-[#2d2d2d]"></div>
                                    <span className="text-lg font-bold text-[#2d2d2d]">Write Journal</span>
                                </div>
                                <div className="flex items-center gap-3 opacity-50">
                                    <div className="w-5 h-5 rounded border-2 border-[#2d2d2d]"></div>
                                    <span className="text-lg text-[#2d2d2d]">Meditation</span>
                                </div>
                            </div>
                        </div>

                        {/* Sticker */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-300 rounded-full flex items-center justify-center text-[#2d2d2d] font-bold text-sm -rotate-12 border-2 border-[#2d2d2d] shadow-sm z-10">
                            You got this!
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
