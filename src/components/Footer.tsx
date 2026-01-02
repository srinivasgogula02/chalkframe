import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm relative z-10 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-display font-bold text-slate-300 uppercase tracking-widest text-lg">
                    Chalkframe
                </div>
                <div className="flex gap-6 font-medium">
                    <Link href="#" className="hover:text-white transition-colors">
                        Privacy
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Terms
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                </div>
                <div className="font-mono text-xs opacity-50">
                    &copy; {new Date().getFullYear()} Chalkframe.
                </div>
            </div>
        </footer>
    );
}
