"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-24 text-center sm:px-6 lg:px-8">
            {/* Background Grid - Simple Dots */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl"
            >
                <span className="mb-4 inline-block tag bg-yellow-100 text-[#2d2d2d] font-bold rotate-[-2deg]">
                    Start Tracking Today
                </span>
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#2d2d2d] sm:text-7xl drop-shadow-sm">
                    Build Better <span className="relative inline-block">Habits<svg className="absolute -bottom-2 w-full h-3 text-blue-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 font-medium">
                    A simple, distraction-free tracker for your daily goals.
                    Stop guessing and start measuring your progress.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="https://app.plusminus.com"
                        className="btn-scribble hover:scale-105 active:scale-95 transition-transform"
                    >
                        Start for Free
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                    <button className="btn-outline hover:bg-gray-100">
                        <Play className="h-4 w-4 mr-2 inline" />
                        See How It Works
                    </button>
                </div>
            </motion.div>

            {/* Visual Mockup - Realistic Habit Cards */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 1 }}
                whileHover={{ rotate: 0, scale: 1.01 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative mt-20 w-full max-w-4xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {/* Card 1: Deep Work (Positive Deviation) */}
                    <div className="card p-6 bg-white border border-gray-200 shadow-sm relative rotate-[-1deg]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Deep Work</h3>
                            <div className="px-2 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">
                                Top 10%
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-4xl font-black tracking-tight text-gray-900">4.5</span>
                                <span className="text-sm font-medium text-gray-400 ml-1">hrs</span>
                                <div className="text-xs text-gray-400 mt-2 font-medium">Target: 4 hrs / daily</div>
                            </div>
                            <div className="px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 bg-green-50 text-green-700">
                                +0.5 <TrendingUp className="w-3 h-3" />
                            </div>
                        </div>
                        {/* Mock total progress */}
                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-black w-[75%]"></div>
                        </div>
                    </div>

                    {/* Card 2: Workout (Negative Deviation) */}
                    <div className="card p-6 bg-white border border-gray-200 shadow-sm relative rotate-[2deg] top-8 md:top-0">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-xs text-gray-500 uppercase tracking-wider">Gym Sessions</h3>
                            <div className="px-2 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                                Streak: 2
                            </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-4xl font-black tracking-tight text-gray-900">3</span>
                                <span className="text-sm font-medium text-gray-400 ml-1">days</span>
                                <div className="text-xs text-gray-400 mt-2 font-medium">Target: 4 days / weekly</div>
                            </div>
                            <div className="px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 bg-red-50 text-red-700">
                                -1 <TrendingDown className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-black w-[45%]"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
