import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Chalkframe",
        "url": "https://www.chalkframe.com",
        "logo": "https://www.chalkframe.com/logo.png",
        "description": "AI Transformation Consultancy bridging the gap between business strategy and AI",
        "sameAs": [
            "https://twitter.com/chalkframe"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "url": "https://www.chalkframe.com/#contact"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Chalkframe",
        "url": "https://www.chalkframe.com",
        "description": "AI Transformation Consultancy",
        "publisher": {
            "@type": "Organization",
            "name": "Chalkframe"
        }
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
        </>
    );
}
