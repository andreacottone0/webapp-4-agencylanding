import Link from "next/link"
import { Mail, Phone, MapPin, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-lime-300" />
          <span className="ml-2 text-xl font-bold text-white">Groowth</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Home
          </Link>
          {/* <Link href="#team" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Team
          </Link> */}
          {/* <Link href="/results" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Results
          </Link> */}
          <Link href="/contact" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/consultation" className="hidden md:block">
          <Button className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold">Free Consultation</Button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden">
          <Button variant="ghost" size="sm" className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>
  )
}
