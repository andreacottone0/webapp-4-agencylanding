import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Globe,
  Megaphone,
  Search,
  Star,
  Target,
  TrendingUp,
  Linkedin,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "./components/header"
import Footer from "./components/footer"

export default function MarketingAgencyLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit border-lime-300 text-lime-300">
                    🚀 #1 Marketing Agency
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Transform your business with
                    <span className="text-lime-300"> digital marketing</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    We increase your sales by 300% through innovative, data-driven marketing strategies. Over 500
                    companies have already chosen us.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/consultation">
                    <Button size="lg" className="bg-lime-300 hover:bg-lime-400 text-black font-semibold">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
                    View Results
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <Image
                        src="/images/testimonials/client1.jpg"
                        width={40}
                        height={40}
                        alt="Client"
                        className="rounded-full border-2 border-lime-300"
                      />
                      <Image
                        src="/images/testimonials/client2.jpg"
                        width={40}
                        height={40}
                        alt="Client"
                        className="rounded-full border-2 border-lime-300"
                      />
                      <Image
                        src="/images/testimonials/client3.jpg"
                        width={40}
                        height={40}
                        alt="Client"
                        className="rounded-full border-2 border-lime-300"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-lime-300 text-lime-300" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">500+ satisfied clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center order-first lg:order-last">
                <Image
                  src="/images/hero-dashboard.jpg"
                  width={600}
                  height={500}
                  alt="Marketing Dashboard"
                  className="w-full max-w-lg lg:max-w-none aspect-video overflow-hidden rounded-xl object-cover shadow-2xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Services</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer comprehensive digital marketing solutions to grow your business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <Search className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">SEO & SEM</CardTitle>
                  <CardDescription className="text-gray-400">
                    Organic positioning and Google Ads campaigns to maximize online visibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Complete SEO audit</li>
                    <li>• On-page optimization</li>
                    <li>• Google Ads management</li>
                    <li>• Competitor analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <Megaphone className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">Social Media Marketing</CardTitle>
                  <CardDescription className="text-gray-400">
                    Social strategies to increase engagement and conversions across major channels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Content strategy</li>
                    <li>• Community management</li>
                    <li>• Social advertising</li>
                    <li>• Influencer marketing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <Globe className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">Web Design & Development</CardTitle>
                  <CardDescription className="text-gray-400">
                    Responsive websites optimized for conversions and performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Responsive design</li>
                    <li>• E-commerce</li>
                    <li>• Landing pages</li>
                    <li>• UX/UI optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">Analytics & Reporting</CardTitle>
                  <CardDescription className="text-gray-400">
                    Monitoring and detailed performance analysis to optimize results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Google Analytics 4</li>
                    <li>• Custom reports</li>
                    <li>• KPI tracking</li>
                    <li>• ROI analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <Target className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">Email Marketing</CardTitle>
                  <CardDescription className="text-gray-400">
                    Automated email campaigns to nurture leads and increase sales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Automation workflows</li>
                    <li>• Advanced segmentation</li>
                    <li>• A/B testing</li>
                    <li>• Newsletter design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-lime-300/20 transition-all bg-gray-900 border-gray-800">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-lime-300" />
                  <CardTitle className="text-white">Growth Hacking</CardTitle>
                  <CardDescription className="text-gray-400">
                    Innovative strategies to accelerate your business growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Funnel optimization</li>
                    <li>• Conversion rate optimization</li>
                    <li>• Viral marketing</li>
                    <li>• Product-market fit</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Meet Our Leadership Team</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The experts behind our successful marketing strategies
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* CEO */}
              <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 p-6 text-center hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-lime-300/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-full border-4 border-lime-300 mx-auto w-32 h-32">
                    <Image
                      src="/images/team/ceo.jpg"
                      width={128}
                      height={128}
                      alt="Alexander Mitchell - CEO"
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">Andrea C.</h3>
                  <p className="text-lime-300 font-medium mb-2">CEO & Founder</p>
                  <p className="text-sm text-gray-400 mb-4">
                    15+ years of experience in digital marketing and business growth.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTO */}
              <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 p-6 text-center hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-lime-300/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-full border-4 border-lime-300 mx-auto w-32 h-32">
                    <Image
                      src="/images/team/cto.jpg"
                      width={128}
                      height={128}
                      alt="Sophia Chen - CTO"
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">Stefano L.</h3>
                  <p className="text-lime-300 font-medium mb-2">Head Of Sales</p>
                  <p className="text-sm text-gray-400 mb-4">
                  Skilled in client relationship management, sales forecasting, and leveraging data-driven insights to maximize business opportunities.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CMO */}
              <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 p-6 text-center hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-lime-300/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-full border-4 border-lime-300 mx-auto w-32 h-32">
                    <Image
                      src="/images/team/cmo.jpg"
                      width={128}
                      height={128}
                      alt="Marcus Johnson - CMO"
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">Giorgia A.</h3>
                  <p className="text-lime-300 font-medium mb-2">CMO & Founder</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Award-winning marketer who has led campaigns for Bigoodino and more.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* COO */}
              <div className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 p-6 text-center hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-lime-300/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-full border-4 border-lime-300 mx-auto w-32 h-32">
                    <Image
                      src="/images/team/coo.jpg"
                      width={128}
                      height={128}
                      alt="Anna I. - COO"
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">Anna I.</h3>
                  <p className="text-lime-300 font-medium mb-2">COO</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Operations expert with a background in scaling high-growth marketing agencies globally.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-lime-300">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-lime-300">500+</div>
                <div className="text-sm text-gray-400">Satisfied Clients</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-lime-300">300%</div>
                <div className="text-sm text-gray-400">Average ROI Increase</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-lime-300">5+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-lime-300">24/7</div>
                <div className="text-sm text-gray-400">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Testimonials from businesses that have transformed with our help
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-lime-300 text-lime-300" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    "Thanks to NewEraConsulting, we tripled our online sales in just 6 months. Their data-driven approach is
                    incredible."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/testimonials/client1.jpg"
                      width={40}
                      height={40}
                      alt="Chiara"
                      className="rounded-full border border-lime-300"
                    />
                    <div>
                      <p className="font-semibold text-sm text-white">Chiara D'Arpa</p>
                      <p className="text-xs text-gray-400">CEO & Founder, FCA STORE SRL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-lime-300 text-lime-300" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    "The NewEraConsulting team is fantastic. They completely revamped our digital presence and the results speak
                    for themselves."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/testimonials/client2.jpg"
                      width={40}
                      height={40}
                      alt="Carolina"
                      className="rounded-full border border-lime-300"
                    />
                    <div>
                      <p className="font-semibold text-sm text-white">Carolina & Isotta</p>
                      <p className="text-xs text-gray-400"> Founder, Reveriej SRL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-lime-300 text-lime-300" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    "Incredible ROI! In one year we saw a 400% increase in qualified traffic and conversions."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/testimonials/client3.jpg"
                      width={40}
                      height={40}
                      alt="Imma"
                      className="rounded-full border border-lime-300"
                    />
                    <div>
                      <p className="font-semibold text-sm text-white">Imma e Felicia</p>
                      <p className="text-xs text-gray-400">Founder , Ciglissime SRL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-lime-300 to-lime-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Ready to Grow Your Business?
                </h2>
                <p className="max-w-[600px] text-black/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a free 30-minute consultation and discover how we can help you achieve your marketing goals.
                </p>
              </div>
              <div className="w-full max-w-md mx-auto space-y-4">
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white border-0 text-black placeholder:text-gray-500"
                  />
                  <Link href="/consultation" className="w-full sm:w-auto">
                    <Button
                      variant="secondary"
                      className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 whitespace-nowrap"
                    >
                      Get Started
                    </Button>
                  </Link>
                </form>
                <p className="text-xs text-black/70 text-center">
                  Free consultation • No commitment • Guaranteed results
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
