"use client";

import { useState } from "react";
import { Lightning, PlayCircle, X } from "@phosphor-icons/react";

export default function ProposalFlowHeroActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const videoId = "0A-shgXN3-g";

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
                <a
                    href="https://proposalflow.chalkframe.com/login"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl transition-all hover:bg-slate-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <Lightning weight="bold" />
                    Build Proposal Free
                </a>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer"
                >
                    <PlayCircle
                        weight="fill"
                        className="text-slate-400 group-hover:text-violet-400 transition-colors"
                    />
                    Watch the 30s Demo
                </button>
            </div>

            {/* Video Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ease-in-out ${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                ></div>
                <div
                    className={`relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform transition-transform duration-300 ease-in-out ${isModalOpen ? "scale-100" : "scale-95"
                        }`}
                >
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 hover:bg-slate-800 text-white transition-colors"
                    >
                        <X weight="bold" className="text-lg" />
                    </button>
                    {isModalOpen && (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </>
    );
}
