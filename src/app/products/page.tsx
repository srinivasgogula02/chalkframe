import type { Metadata } from 'next'
import ProductsClient from './client'

export const metadata: Metadata = {
    title: 'Chalkframe Products & Services',
    description: 'Explore Chalkframe\'s suite of AI tools, rapid prototyping services, and executive consulting.',
}

export default function ProductsPage() {
    return <ProductsClient />
}
