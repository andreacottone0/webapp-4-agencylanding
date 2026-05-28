import Link from "next/link"
import { Mail, Phone, MapPin, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-gray-800 bg-gray-900">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-lime-300" />
              <span className="ml-2 text-lg font-bold text-white">NewEraConsulting</span>
            </div>
            <p className="text-sm text-gray-400">The digital marketing agency that transforms your business.</p>
            <div className="pt-2 space-y-1">
              <p className="text-xs text-gray-500">New Era International Fzco</p>
              <p className="text-xs text-gray-500">IFZA Business Park - Building A2 - Dubai Silicon Oasis - Industrial Area - Dubai</p>
              <p className="text-xs text-gray-500">Dubai, UAE</p>
              <p className="text-xs text-gray-500">Business License: 23224</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-lime-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-lime-300 mt-0.5 shrink-0" />
                andrea@newerainternationalconsulting.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-lime-300 shrink-0" />
                +971 544596241
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-lime-300 mt-0.5 shrink-0" />
                IFZA Business Park - Building A2 - Dubai Silicon Oasis - Industrial Area - Dubai
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© 2025 New Era International Fzco. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacypolicy" className="text-xs text-gray-500 hover:text-lime-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/termsofservice" className="text-xs text-gray-500 hover:text-lime-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookiepolicy" className="text-xs text-gray-500 hover:text-lime-300 transition-colors">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
