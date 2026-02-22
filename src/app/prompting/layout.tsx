import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '10x Developer Masterclass | Bypass Code with AI',
    description: 'Learn how to build full-stack applications without typing a single line of code. Become a 10x developer by mastering Prompt Engineering.',
}

// This custom layout strips the global Navbar and Footer to create a focused marketing funnel.
export default function PromptingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#050505] text-[#00FF41] min-h-screen font-mono selection:bg-[#00FF41] selection:text-black">
            {children}
        </div>
    )
}
