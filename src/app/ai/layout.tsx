import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chalkframe AI | Stop Learning, Start Copying',
    description: 'A library of copy-paste prompts and 5-minute videos that save you 10 hours a week. Built for normal people, not programmers.',
}

// This custom layout strips the global Navbar and Footer to create a focused marketing funnel.
export default function AILayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#030508] text-zinc-300 min-h-screen font-sans selection:bg-zinc-800 selection:text-white">
            {children}
        </div>
    )
}
