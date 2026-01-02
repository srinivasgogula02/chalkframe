"use client";

import { LockKey, MagicWand, CheckCircle } from "@phosphor-icons/react";

export default function ProposalPreviewCard() {
    return (
        <div className="relative max-w-5xl mx-auto px-2 md:px-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 shadow-2xl bg-slate-950">
                {/* Browser Bar */}
                <div className="h-8 md:h-10 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 gap-2 backdrop-blur-md">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-700"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="mx-auto px-3 py-1 bg-slate-950/50 rounded-md text-[10px] text-slate-500 font-mono flex items-center gap-2 border border-slate-800/50 max-w-[150px] md:max-w-none truncate">
                        <LockKey weight="bold" className="text-slate-600" /> proposalflow
                    </div>
                </div>

                {/* Browser Content */}
                <div className="bg-slate-950 h-auto md:aspect-[16/9] flex relative overflow-hidden rounded-b-xl">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-slate-800 bg-slate-900/30 p-6 hidden md:flex flex-col backdrop-blur-sm z-10">
                        <div className="flex items-center gap-2 mb-8 opacity-70">
                            <div className="w-6 h-6 border border-slate-600 bg-slate-600/20 relative flex items-center justify-center">
                                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-slate-500 shadow-sm"></div>
                                <MagicWand weight="bold" className="text-slate-300 text-xs" />
                            </div>
                            <span className="font-display font-bold text-sm tracking-wide uppercase text-slate-400">
                                ProposalFlow
                            </span>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl rounded-tl-none shadow-sm mb-4">
                            <div className="flex gap-2 items-center mb-2">
                                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
                                <span className="text-[10px] text-violet-300 uppercase font-bold">
                                    AI Processing
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-violet-500 w-2/3 rounded-full animate-shimmer bg-gradient-to-r from-violet-500 via-white to-violet-500 bg-[length:200%_100%]"></div>
                            </div>
                        </div>
                        <div className="space-y-2 mt-4">
                            <div className="h-2 w-full bg-slate-800 rounded opacity-50"></div>
                            <div className="h-2 w-3/4 bg-slate-800 rounded opacity-50"></div>
                            <div className="h-2 w-4/5 bg-slate-800 rounded opacity-50"></div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-[#0F172A] p-4 md:p-8 flex justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>

                        <div className="w-full md:w-[85%] bg-white h-auto md:h-[140%] shadow-2xl rounded-sm p-4 md:p-10 scale-100 md:scale-95 origin-top relative z-10 transition-transform md:hover:scale-[0.96] duration-500">
                            <div className="flex justify-between border-b border-slate-100 pb-4 md:pb-6 mb-6 md:mb-8">
                                <div className="flex gap-3 items-center">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-display font-bold text-lg md:text-xl">
                                        A
                                    </div>
                                    <div>
                                        <div className="h-2.5 md:h-3 w-24 md:w-32 bg-slate-900 rounded-sm mb-1.5"></div>
                                        <div className="h-2 w-16 md:w-20 bg-slate-400 rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-block px-2 md:px-3 py-1 bg-green-100 text-green-700 text-[10px] md:text-xs font-bold rounded-full mb-2">
                                        DRAFT
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-6 md:h-8 w-3/4 bg-slate-800 rounded-sm mb-6"></div>
                                <div className="h-2 md:h-2.5 w-full bg-slate-200 rounded-sm"></div>
                                <div className="h-2 md:h-2.5 w-full bg-slate-200 rounded-sm"></div>
                                <div className="h-2 md:h-2.5 w-full bg-slate-200 rounded-sm"></div>
                                <div className="h-2 md:h-2.5 w-2/3 bg-slate-200 rounded-sm"></div>
                            </div>
                            <div className="mt-8 md:mt-10 border border-slate-200 rounded-lg overflow-hidden mb-2 md:mb-0">
                                <div className="h-8 md:h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4">
                                    <div className="h-2 w-24 bg-slate-300 rounded-sm"></div>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="flex justify-between">
                                        <div className="h-2 w-24 md:w-32 bg-slate-200 rounded-sm"></div>
                                        <div className="h-2 w-12 md:w-16 bg-slate-800 rounded-sm"></div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="h-2 w-20 md:w-24 bg-slate-200 rounded-sm"></div>
                                        <div className="h-2 w-12 md:w-16 bg-slate-800 rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
                                    <span className="text-xs font-bold">TOTAL</span>
                                    <span className="text-sm font-bold">$12,500.00</span>
                                </div>
                            </div>

                            {/* Floating Notification */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-violet-500 rounded-full rounded-tl-none transform -translate-y-12 translate-x-12 shadow-xl border-2 border-white z-20 animate-float">
                                <div className="absolute left-full top-0 ml-2 bg-violet-500 text-white text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap">
                                    Tyrell is typing...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
