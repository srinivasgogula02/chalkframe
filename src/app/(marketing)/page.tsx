import Image from "next/image";
import Link from "next/link";
import {
  Sparkle,
  ArrowRight,
  Brain,
  CursorClick,
  PaintBrushBroad,
  ChartBar,
  RocketLaunch,
  ArrowUpRight,
  Gear,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-start md:justify-center items-center px-6 pt-32 md:pt-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhK0rCLsQqUiQIyksUesn8YmqGHLUyn302-3BR_2ub7hTOHY6sqbjcqPG7CCD8NT2F6wx8vky_bTTYUzga8IIIm5pWp4_icdJ7HfC5DJofy9g6dZUBW3VZb-40jzZwM61u8KzL-GMI7G14B1C3SDXnvAEIoJK9j0552kbFmWrwFmXhvllLIpiNP5w2PM-E"
            alt="Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto mt-10 md:mt-0">
          <div className="animate-float mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-200 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            AI Transformation Consultancy
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter mb-8 text-white drop-shadow-2xl">
            Solving Your Most
            <br />
            Complex{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 italic font-light">
              Challenges.
            </span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Chalkframe bridges the gap between manual workflows and automated
            engines of growth. Don't just adapt to AI—build your frame around
            it.
          </p>
          <div className="w-full max-w-lg mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-2 pr-2 shadow-2xl">
              <div className="flex-grow text-left px-4 text-slate-300 font-mono text-sm">
                <span className="text-violet-400">root@chalkframe:~$</span>{" "}
                automate my workflow...
              </div>
              <Link
                href="#contact"
                className="bg-white text-slate-900 hover:bg-slate-200 rounded-xl px-6 py-3 font-bold text-sm transition-colors shadow-lg flex items-center gap-2"
              >
                Let's Build <ArrowRight weight="bold" />
              </Link>
            </div>
          </div>
          <div className="mt-20 opacity-60 hover:opacity-100 transition-all duration-700">
            <p className="text-xs font-mono text-slate-300 uppercase tracking-widest mb-6 drop-shadow">
              Trusted by forward thinking companies
            </p>
            <div className="flex justify-center items-center gap-8">
              <a href="https://elevatebox.in" target="_blank">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuaj_jIxHSabRg_VR2iE5C67X8knA2jE_Oukvzw90QNSabgBEl2AkhMm68cQdVWQSYhqKel0SAKe-VpwyuBXL4yBdw6UeEvNKHcJtCM4ahutvr126UzPjIK6AzXNRzVuzntUZDUtoQWECz_MPnI_rR27-RNyW9IZNfKd1Z8kRX7LFyMCU83jHa5b8HmY4/s320/Gemini_Generated_Image_nzgr55nzgr55nzgr-removebg-preview.png"
                  alt="Elevatebox"
                  className="h-8 brightness-0 invert"
                />
              </a>
              <a href="https://nuest.co.in" target="_blank">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEjWR-Z4cSo5skEpMY7q1Bzu7t8V2NrAXGqs0vi60tBYA0-5ziSebSexoeiWAWiFqjANeekstIOR_c7VuuUrdhIgQZfkAnPqae9TdotWOeWZBU0afzd50wCUUTFh_gghOyy_J7_WlhWfVe6Uu28GRUBOBNcypImPa3KIKtFB2YNwrKXdB1vhgV5dxJlv2R8"
                  alt="Partner"
                  className="h-10 brightness-0 invert"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ProposalFlow Section */}
      <section
        id="proposalflow"
        className="relative z-10 py-16 md:py-24 px-6 bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-900 overflow-hidden"
      >
        <div className="absolute right-[-20%] top-[20%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass-highlight rounded-[2rem] p-6 md:p-16 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-widest">
                  <RocketLaunch weight="fill" /> New Launch
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight">
                  ProposalFlow
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Professional proposals in under 30 seconds. It's like{" "}
                  <span className="text-white font-semibold">
                    Canva + ChatGPT
                  </span>
                  , but specifically built for getting contracts signed fast.
                </p>
                <p className="text-slate-400 text-sm">
                  Replace Microsoft Word with an intelligent engine that brands,
                  formats, and writes persuasive content for you.
                </p>

                <div className="pt-4">
                  <a
                    href="https://chalkframe.com/proposalflow"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-violet-100 rounded-full px-6 py-3 md:px-8 md:py-4 font-bold transition-all transform hover:scale-105 shadow-lg shadow-violet-500/20 text-sm md:text-base"
                  >
                    Try ProposalFlow <ArrowUpRight weight="bold" />
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 border border-white/5 p-5 rounded-2xl hover:bg-slate-800 transition-colors">
                    <div className="text-violet-400 mb-3 text-2xl">
                      <Brain weight="duotone" />
                    </div>
                    <h4 className="font-display text-white font-medium mb-1">
                      Two "Brain" Modes
                    </h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Choose <span className="text-white">Fast Mode</span> for
                      speed or <span className="text-white">Reasoning Mode</span>{" "}
                      for deep persuasion.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 border border-white/5 p-5 rounded-2xl hover:bg-slate-800 transition-colors">
                    <div className="text-blue-400 mb-3 text-2xl">
                      <CursorClick weight="duotone" />
                    </div>
                    <h4 className="font-display text-white font-medium mb-1">
                      Live Editor
                    </h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      No forms. Click and edit the final document directly.
                      WYSIWYG simplicity.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 border border-white/5 p-5 rounded-2xl hover:bg-slate-800 transition-colors">
                    <div className="text-pink-400 mb-3 text-2xl">
                      <PaintBrushBroad weight="duotone" />
                    </div>
                    <h4 className="font-display text-white font-medium mb-1">
                      Brand Brain
                    </h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Upload assets once. AI auto-brands every proposal
                      instantly.
                    </p>
                  </div>
                  <div className="bg-slate-800/50 border border-white/5 p-5 rounded-2xl hover:bg-slate-800 transition-colors">
                    <div className="text-green-400 mb-3 text-2xl">
                      <ChartBar weight="duotone" />
                    </div>
                    <h4 className="font-display text-white font-medium mb-1">
                      Smart Tables
                    </h4>
                    <p className="text-xs text-slate-400 leading-normal">
                      Auto-generated Pricing tables and ROI charts. 1-Click PDF
                      export.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 py-24 px-6 bg-slate-900 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-light mb-4">
              The <span className="text-violet-400">Architecture</span>
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] group-hover:bg-violet-500/20 transition-all duration-500"></div>
              <h3 className="font-display text-3xl text-white mb-4 relative z-10">
                The Chalk & The Frame
              </h3>
              <p className="text-slate-400 text-lg relative z-10 max-w-md">
                <strong className="text-white">Chalk</strong> is the human Idea—fluid and creative. <br />
                <strong className="text-white">Frame</strong> is the automation—rigid and scalable. <br />
                We build the structure that lets your genius scale infinitely.
              </p>
            </div>

            <div className="md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-violet-500/30 transition-all">
              <div>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  <Gear className="text-2xl" weight="duotone" />
                </div>
                <h3 className="font-display text-2xl text-white mb-2">
                  Internal Automation
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Connect legacy systems with modern AI agents. Remove the "boring"
                  from your daily operations.
                </p>
              </div>
              <div className="w-full h-32 bg-slate-800/50 rounded-xl mt-4 border border-white/5 relative overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-2 bg-slate-700 rounded-full"></div>
                <div className="absolute top-8 left-4 w-1/2 h-2 bg-slate-700 rounded-full"></div>
                <div className="absolute bottom-[-20px] right-[-20px] text-violet-500/20">
                  <Gear className="text-9xl" weight="fill" />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 group hover:bg-white/5 transition-all">
              <Brain className="text-4xl text-violet-400 mb-4" weight="duotone" />
              <h3 className="font-display text-xl text-white mb-2">
                Custom AI Solutions
              </h3>
              <p className="text-slate-400 text-sm">
                Bespoke models built for your data. Chatbots, predictive engines,
                and analysis tools.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 group hover:bg-white/5 transition-all">
              <TrendUp className="text-4xl text-green-400 mb-4" weight="duotone" />
              <h3 className="font-display text-xl text-white mb-2">
                Programmatic SEO
              </h3>
              <p className="text-slate-400 text-sm">
                Dominate rankings with data-driven content strategies and
                automated page generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              24/7
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              System Uptime
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              10x
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Efficiency
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              100%
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Privacy
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              0
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Vendor Lock-in
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-slate-900">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
              Ready to Build?
            </h2>
            <p className="text-slate-400">
              Tell us about your manual workflows.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <ProductBanner />
    </main>
  );
}
