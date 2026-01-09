"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X, Sparkle } from "@phosphor-icons/react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50 glass-nav rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/20">
                <Link href="/" className="flex items-center gap-2 pl-4 group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26 26"
                        height="26"
                        width="26"
                        className="w-auto h-6"
                    >
                        <defs>
                            <filter
                                id="glow-filter"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feFlood floodColor="#a78bfa" result="flood" />
                                <feComposite
                                    in="flood"
                                    in2="SourceGraphic"
                                    operator="in"
                                    result="color-masked"
                                />
                                <feGaussianBlur
                                    in="color-masked"
                                    stdDeviation="2.5"
                                    result="blurred"
                                />
                                <feMerge>
                                    <feMergeNode in="blurred" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <g transform="translate(1, 1)">
                            <rect
                                x="0.5"
                                y="0.5"
                                width="23"
                                height="23"
                                fill="#0F172A"
                                shapeRendering="crispEdges"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="23"
                                height="23"
                                fill="#6366F1"
                                fillOpacity="0.2"
                                stroke="#6366F1"
                                strokeWidth="1"
                                shapeRendering="crispEdges"
                            />
                            <rect
                                x="16"
                                y="16"
                                width="8"
                                height="8"
                                fill="#a78bfa"
                                filter="url(#glow-filter)"
                                shapeRendering="crispEdges"
                            />
                        </g>
                    </svg>
                    <span className="font-display font-semibold text-lg tracking-tight">
                        Chalkframe
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
                    <Link href="/#services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link
                        href="/proposalflow"
                        className="text-violet-300 hover:text-white transition-colors flex items-center gap-1"
                    >
                        <Sparkle weight="bold" /> New
                    </Link>
                    <Link href="/products" className="hover:text-white transition-colors">
                        Products
                    </Link>
                    <Link href="https://blog.chalkframe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Blog
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2"
                    >
                        <List className="text-xl" />
                    </button>
                    <Link
                        href="/#contact"
                        className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
                    >
                        Start Now
                    </Link>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <Link
                    href="/proposalflow"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-light text-violet-300 mobile-link"
                >
                    ProposalFlow
                </Link>
                <Link
                    href="/#services"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-light text-white mobile-link"
                >
                    Services
                </Link>
                <Link
                    href="/products"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-light text-white mobile-link"
                >
                    Products
                </Link>
                <Link
                    href="https://blog.chalkframe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                    className="text-2xl font-display font-light text-white mobile-link"
                >
                    Blog
                </Link>
                <Link
                    href="/#contact"
                    onClick={toggleMenu}
                    className="px-8 py-3 bg-violet-600 rounded-full text-white font-bold mobile-link"
                >
                    Get Started
                </Link>
                <button
                    onClick={toggleMenu}
                    className="absolute top-8 right-8 text-slate-400 hover:text-white"
                >
                    <X className="text-3xl" />
                </button>
            </div>
        </>
    );
}
