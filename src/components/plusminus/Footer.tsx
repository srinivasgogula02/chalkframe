import Link from "next/link";
import { Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#fafafa] border-t-2 border-[#2d2d2d] border-dashed">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <Link href="https://twitter.com" className="text-[#2d2d2d] hover:text-gray-600 transition-colors btn-outline rounded-full p-2">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                    </Link>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <div className="flex items-center justify-center gap-6 md:justify-start mb-4">
                        <Link href="https://app.plusminus.com" className="text-lg font-bold text-[#2d2d2d] hover:underline decoration-wavy">
                            plusMinus
                        </Link>
                        <Link href="https://app.plusminus.com/login" className="text-sm font-medium text-gray-600 hover:text-[#2d2d2d]">
                            Login
                        </Link>
                    </div>
                    <p className="text-center text-xs leading-5 text-gray-500 md:text-left font-sans">
                        &copy; 2026 plusMinus. Designed for humans.
                    </p>
                </div>
            </div>
        </footer>
    );
}
