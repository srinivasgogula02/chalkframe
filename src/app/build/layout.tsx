import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '1:1 Architecture Session | Chalkframe',
    description: 'Turn Your Idea Into Software Without Writing Code. A private 1:1 architecture session for non-technical founders.',
}

// This custom layout strips the global Navbar and Footer to create a focused, premium B2B funnel.
export default function BuildLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#0B1121] text-slate-300 min-h-screen font-sans selection:bg-[#2563EB]/30 selection:text-white">
            {children}
        </div>
    )
}
