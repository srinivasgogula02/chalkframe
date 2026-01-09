import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
            <nav aria-label="Breadcrumb" className="py-4">
                <ol className="flex items-center gap-2 text-sm text-slate-400">
                    {items.map((item, index) => (
                        <li key={item.url} className="flex items-center gap-2">
                            {index > 0 && (
                                <span className="text-slate-600">/</span>
                            )}
                            {index === items.length - 1 ? (
                                <span className="text-slate-300 font-medium">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.url}
                                    className="hover:text-violet-400 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
