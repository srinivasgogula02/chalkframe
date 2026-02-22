import type { Metadata } from 'next'
import PromptingClient from './PromptingClient'

export const metadata: Metadata = {
    title: '10x Developer Masterclass | Bypass Syntax with AI',
    description: 'Learn how to build full-stack applications without typing a single line of code. Become a 10x developer by mastering Prompt Engineering.',
}

export default function PromptingPage() {
    return <PromptingClient />
}
