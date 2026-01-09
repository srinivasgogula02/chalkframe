import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5 text-slate-500 text-sm relative z-10 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="font-display font-bold text-slate-300 uppercase tracking-widest text-lg mb-4">
                            Chalkframe
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            AI Transformation Consultancy bridging the gap between business strategy and AI.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-slate-300 mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/proposalflow" className="hover:text-white transition-colors">
                                    ProposalFlow
                                </Link>
                            </li>
                            <li>
                                <Link href="/plusminus" className="hover:text-white transition-colors">
                                    PlusMinus
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-white transition-colors">
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-slate-300 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="https://blog.chalkframe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Social */}
                    <div>
                        <h3 className="font-semibold text-slate-300 mb-4">Legal</h3>
                        <ul className="space-y-2 mb-6">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                        <h3 className="font-semibold text-slate-300 mb-4">Social</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://www.linkedin.com/company/chalk-frame" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/chalkframe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <div className="font-mono text-xs opacity-50">
                        &copy; {new Date().getFullYear()} Chalkframe. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
