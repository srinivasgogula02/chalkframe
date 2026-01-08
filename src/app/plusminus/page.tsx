import Hero from "@/components/plusminus/Hero";
import Problem from "@/components/plusminus/Problem";
import Features from "@/components/plusminus/Features";
import Focus from "@/components/plusminus/Focus";
import Footer from "@/components/plusminus/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fafafa] text-[#2d2d2d]">
            {/* Header with PlusMinus name */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h1 className="text-2xl font-bold text-[#2d2d2d]">
                        PlusMinus
                    </h1>
                </div>
            </header>

            {/* Add padding to account for fixed header */}
            <div className="pt-16">
                <Hero />
                <Problem />
                <Features />
                <Focus />
                <Footer />
            </div>
        </main>
    );
}
