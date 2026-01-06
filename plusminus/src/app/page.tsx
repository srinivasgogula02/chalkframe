import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";

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
