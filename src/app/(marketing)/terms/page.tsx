import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Chalkframe",
    description: "Terms of Service for Chalkframe services.",
};

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-32 text-slate-300">
            <h1 className="text-4xl font-display font-bold text-white mb-8">Terms of Service</h1>
            <div className="prose prose-invert prose-violet max-w-none">
                <p className="lead">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <h3>1. Acceptance of Terms</h3>
                <p>
                    By accessing and using this website and related services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h3>2. Use License</h3>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Chalkframe's website for personal, non-commercial transitory viewing only.
                </p>

                <h3>3. Disclaimer</h3>
                <p>
                    The materials on Chalkframe's website are provided on an 'as is' basis. Chalkframe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3>4. Limitations</h3>
                <p>
                    In no event shall Chalkframe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Chalkframe's website.
                </p>
            </div>
        </main>
    );
}
