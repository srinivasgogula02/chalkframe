import type { Metadata } from 'next'
import BuildClient from './BuildClient'

export const metadata: Metadata = {
    title: '1:1 Architecture Session | Chalkframe',
    description: 'Turn Your Idea Into Software Without Writing Code. A private 1:1 architecture session for non-technical founders.',
}

export default function BuildPage() {
    return <BuildClient />
}
