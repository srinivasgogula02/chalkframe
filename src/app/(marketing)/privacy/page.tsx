import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Chalkframe",
    description: "Privacy Policy for Chalkframe services.",
};

export default function PrivacyPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-32 text-slate-300">
            <h1 className="text-4xl font-display font-bold text-white mb-8">Privacy Policy</h1>
            <div className="prose prose-invert prose-violet max-w-none">
                <p className="lead">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <h3>1. Information Collection</h3>
                <p>
                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
                </p>

                <h3>2. Use of Information</h3>
                <p>
                    We use the information we collect to provider, maintain, and improve our services, to develop new ones, and to protect Chalkframe and our users.
                </p>

                <h3>3. Information Sharing</h3>
                <p>
                    We do not share your personal information with companies, organizations, or individuals outside of Chalkframe except in the following cases: with your consent, for external processing, or for legal reasons.
                </p>

                <h3>4. Security</h3>
                <p>
                    We work hard to protect Chalkframe and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
                </p>
            </div>
        </main>
    );
}
