import { Badge } from "@/components/ui/badge"
import Footer from "@/app/components/footer"
import Link from "next/link"
import Header from "@/app/components/header"

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <main className="flex-1 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="container px-4 md:px-6 space-y-8 max-w-4xl">
          <Badge variant="outline" className="border-lime-300 text-lime-300 w-fit">Cookie Policy</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Use Cookies
          </h1>

          <section className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              This Cookie Policy explains how <strong>New Era International FZCO</strong> uses cookies and similar technologies to recognize you when you visit our website and enhance your experience.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device that collect information about your browsing behavior to improve functionality and personalize your experience.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">2. How We Use Cookies</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To deliver relevant advertising and marketing messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">3. Managing Cookies</h2>
              <p>
                You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain website features.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">4. Third-Party Cookies</h2>
              <p>
                We may use third-party cookies for analytics and advertising purposes, such as Google Analytics and Facebook Pixel. These cookies are governed by the privacy policies of the respective providers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">5. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy occasionally to reflect changes in our practices or legal requirements. Updated policies will be posted here with the revised date.
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
