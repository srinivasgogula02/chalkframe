"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Trophy, Globe } from "lucide-react";

const features = [
    {
        title: "Daily Habits",
        description: "One clear list to focus on today. Win the day.",
        icon: CheckCircle,
        color: "bg-blue-100",
    },
    {
        title: "Values",
        description: "Write down your principles. Stick to them.",
        icon: BookOpen,
        color: "bg-purple-100",
    },
    {
        title: "History",
        description: "See your progress over time. Celebrate wins.",
        icon: Trophy,
        color: "bg-yellow-100",
    },
    {
        title: "Public Profile",
        description: "Share your journey. Prove your work.",
        icon: Globe,
        color: "bg-green-100",
    },
];

export default function Features() {
    return (
        <section className="bg-[#fafafa] py-24 sm:py-32 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#2d2d2d] rounded-full opacity-10 animate-bounce" style={{ animationDuration: "3s" }}></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl bg-white inline-block px-4 py-2 border-2 border-[#2d2d2d] rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Everything you need.
                    </h2>
                    <p className="mt-8 text-xl leading-8 text-gray-600">
                        A complete operating system for your personal growth.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`card p-6 ${feature.color}`}
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-[#2d2d2d] shadow-sm">
                                    <feature.icon className="h-6 w-6 text-[#2d2d2d]" aria-hidden="true" />
                                </div>
                                <div className="flex flex-auto flex-col text-base leading-7">
                                    <h3 className="font-bold text-xl text-[#2d2d2d]">{feature.title}</h3>
                                    <p className="mt-2 flex-auto text-gray-700">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
