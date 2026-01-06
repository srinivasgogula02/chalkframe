import Hero from "@/components/plusminus/Hero";
import Problem from "@/components/plusminus/Problem";
import Features from "@/components/plusminus/Features";
import Focus from "@/components/plusminus/Focus";
import Footer from "@/components/plusminus/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fafafa] text-[#2d2d2d]">
            <Hero />
            <Problem />
            <Features />
            <Focus />
            <Footer />
        </main>
    );
}
