import { Badge } from "@/components/ui/badge"
import Footer from "@/app/components/footer"
import Link from "next/link"
import Header from "@/app/components/header"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />

            <main className="flex-1 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
                <div className="container px-4 md:px-6 space-y-8 max-w-4xl">
                    <Badge variant="outline" className="border-lime-300 text-lime-300 w-fit">Privacy Policy</Badge>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        How We Protect Your Privacy
                    </h1>

                    <section className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>
                            At <strong>New Era International FZCO</strong>, we are committed to protecting your personal data and privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website or services.
                        </p>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Personal details (name, email, phone number) when you contact us or fill forms</li>
                                <li>Marketing preferences and services of interest</li>
                                <li>Analytics data including IP address, browser type, and device info</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>To respond to inquiries and provide consultations</li>
                                <li>To send marketing and promotional materials (with your consent)</li>
                                <li>To improve our services and optimize website performance</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">3. Sharing and Disclosure</h2>
                            <p>
                                We do not sell your personal data. We may share data with trusted service providers only for operational purposes (e.g., analytics, hosting), under strict confidentiality agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">4. Your Rights</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Access, correct, or delete your personal data</li>
                                <li>Withdraw consent at any time</li>
                                <li>Request data portability or restriction of processing</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">5. Cookies</h2>
                            <p>
                                We use cookies to enhance your experience and analyze traffic. You can manage preferences via your browser settings or visit our{' '}
                                <Link href="/cookiepolicy" className="text-lime-300 hover:underline">Cookie Policy</Link>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">6. Data Security</h2>
                            <p>
                                Your data is stored on secure servers with encryption and access controls. We implement measures to protect against unauthorized access or disclosure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white mb-2">7. Contact Us</h2>
                            <p>
                                For any privacy-related questions, you can contact us at{' '}
                                <span className="text-lime-300">team@groowth.ai</span>.
                            </p>
                            <p className="mt-4 text-gray-400 text-sm">
                                New Era International FZCO<br />
                                IFZA Business Park – Building A2<br />
                                Dubai Silicon Oasis – Industrial Area<br />
                                Dubai, UAE<br />
                                Business License Number: 23224
                            </p>
                        </div>

                        <p className="text-xs text-gray-500">
                            Last updated: July 25, 2025
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}