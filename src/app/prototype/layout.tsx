import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ship In Days | Chalkframe MVP Studio',
    description: 'Stop drawing pictures. Start shipping real software. Get a fully functioning, coded web application MVP live in days.',
}

// This custom layout strips the global Navbar and Footer to create a focused marketing funnel.
export default function PrototypeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-[#00FF41]/30">
            {children}
        </div>
    )
}
