import { Badge } from "@/components/ui/badge"
import Footer from "@/app/components/footer"
import Link from "next/link"
import Header from "@/app/components/header"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <main className="flex-1 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="container px-4 md:px-6 space-y-8 max-w-4xl">
          <Badge variant="outline" className="border-lime-300 text-lime-300 w-fit">Terms of Service</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms and Conditions of Use
          </h1>

          <section className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
            These Terms of Service (“Terms”) govern your access to and use of the website and services provided by New Era International FZCO. By accessing or using our website or services, you acknowledge and agree to comply with these Terms.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">1. Use of Services</h2>
              <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. Any misuse, unauthorized access, or abuse of our platform is strictly prohibited and may result in suspension or termination of your access.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">2. Intellectual Property</h2>
              <p>
              All materials on this website, including but not limited to text, graphics, logos, and trademarks, are the intellectual property of New Era International FZCO and are protected by applicable laws. You may not reproduce, distribute, or use any content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">3. Limitation of Liability</h2>
              <p>
              New Era International FZCO shall not be held liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services or website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">4. Termination</h2>
              <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without notice, if we determine that you have violated these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">5. Changes to Terms</h2>
              <p>
              We may update or modify these Terms from time to time. Continued use of our website or services after such changes constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">6. Contact</h2>
              <p>
              For any questions or concerns regarding these Terms, you may contact us at: <span className="text-lime-300">andrea@newerainternationalconsulting.com</span>. </p>
              <p> Business Address:  </p>
              <p>  New Era International FZCO  </p>

                IFZA Business Park – Building A2
                Dubai Silicon Oasis – Industrial Area
              <p>   Dubai, UAE  </p>

              <p>   Business License Number: 23224  
              
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
