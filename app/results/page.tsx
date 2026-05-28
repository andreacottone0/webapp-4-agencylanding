import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, ArrowRight, TrendingUp, BarChart3, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <TrendingUp className="h-8 w-8 text-lime-300" />
          <span className="ml-2 text-xl font-bold text-white">NewEraConsulting</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/#services" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Services
          </Link>
          <Link href="/#team" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Team
          </Link>
          <Link href="/results" className="text-sm font-medium text-lime-300 border-b-2 border-lime-300 pb-1">
            Results
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-lime-300 transition-colors text-gray-300">
            Contact
          </Link>
        </nav>
        <Link href="/consultation">
          <Button className="ml-4 bg-lime-300 hover:bg-lime-400 text-black font-semibold">Free Consultation</Button>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit border-lime-300 text-lime-300">
                  Real Client Results
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  See Our <span className="text-lime-300">Success Stories</span>
                </h1>
                <p className="max-w-[800px] text-gray-400 md:text-xl mx-auto">
                  Watch how we've helped businesses like yours achieve remarkable growth through data-driven marketing
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 bg-black">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="videos" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Client Results</h2>
                <TabsList className="bg-gray-900">
                  <TabsTrigger
                    value="videos"
                    className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                  >
                    All Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="timeline"
                    className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Timeline
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Videos Tab */}
              <TabsContent value="videos" className="mt-0">
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex items-center justify-between mb-8">
                    <TabsList className="bg-gray-900">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger
                        value="ecommerce"
                        className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                      >
                        E-commerce
                      </TabsTrigger>
                      <TabsTrigger
                        value="saas"
                        className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                      >
                        SaaS
                      </TabsTrigger>
                      <TabsTrigger
                        value="local"
                        className="data-[state=active]:bg-lime-300 data-[state=active]:text-black"
                      >
                        Local Business
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Video Cards */}
                      <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                        <div className="relative aspect-video group cursor-pointer">
                          <Image
                            src="/placeholder.svg?height=300&width=500"
                            width={500}
                            height={300}
                            alt="TechGear Results"
                            className="object-cover w-full"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-lime-300/20 border-lime-300"
                            >
                              <Play className="h-6 w-6 text-lime-300" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-white">TechGear: 300% Revenue Growth</CardTitle>
                          <CardDescription className="text-gray-400">
                            E-commerce | SEO & Paid Advertising
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-300">
                            How we helped TechGear increase their online revenue by 300% in just 6 months through
                            strategic SEO and targeted paid advertising campaigns.
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center border-t border-gray-800 pt-4">
                          <div className="flex items-center">
                            <BarChart3 className="h-4 w-4 text-lime-300 mr-2" />
                            <span className="text-xs text-gray-400">300% Growth</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-lime-300 hover:text-lime-400 hover:bg-transparent p-0"
                          >
                            Watch Case Study <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>

                      {/* Additional video cards... */}
                      <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                        <div className="relative aspect-video group cursor-pointer">
                          <Image
                            src="/placeholder.svg?height=300&width=500"
                            width={500}
                            height={300}
                            alt="CloudSoft Results"
                            className="object-cover w-full"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-lime-300/20 border-lime-300"
                            >
                              <Play className="h-6 w-6 text-lime-300" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-white">CloudSoft: 10x Lead Generation</CardTitle>
                          <CardDescription className="text-gray-400">
                            SaaS | Content Marketing & Social Media
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-300">
                            CloudSoft's journey from 50 to 500+ qualified leads per month through our comprehensive
                            content strategy and social media campaigns.
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center border-t border-gray-800 pt-4">
                          <div className="flex items-center">
                            <BarChart3 className="h-4 w-4 text-lime-300 mr-2" />
                            <span className="text-xs text-gray-400">10x More Leads</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-lime-300 hover:text-lime-400 hover:bg-transparent p-0"
                          >
                            Watch Case Study <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-lime-300/20 transition-all">
                        <div className="relative aspect-video group cursor-pointer">
                          <Image
                            src="/placeholder.svg?height=300&width=500"
                            width={500}
                            height={300}
                            alt="Urban Bistro Results"
                            className="object-cover w-full"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-lime-300/20 border-lime-300"
                            >
                              <Play className="h-6 w-6 text-lime-300" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-white">Urban Bistro: 200% Foot Traffic Increase</CardTitle>
                          <CardDescription className="text-gray-400">
                            Local Business | Local SEO & Google Business
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-300">
                            How our local SEO strategy and Google Business optimization helped Urban Bistro double their
                            foot traffic and increase reservations.
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center border-t border-gray-800 pt-4">
                          <div className="flex items-center">
                            <BarChart3 className="h-4 w-4 text-lime-300 mr-2" />
                            <span className="text-xs text-gray-400">200% More Traffic</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-lime-300 hover:text-lime-400 hover:bg-transparent p-0"
                          >
                            Watch Case Study <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="mt-0">
                <div className="max-w-4xl mx-auto px-4">
                  {/* Client Selection */}
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">TechGear Success Journey</h3>
                    <p className="text-gray-400">Follow the complete transformation timeline</p>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime-300/30"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {/* Month 1 */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-lime-300 rounded-full border-4 border-black"></div>
                        <div className="ml-16 flex-1">
                          <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-white">Initial Audit & Strategy</CardTitle>
                                <Badge variant="outline" className="border-lime-300 text-lime-300">
                                  Month 1
                                </Badge>
                              </div>
                              <CardDescription className="text-gray-400">January 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-white mb-2">What We Did:</h4>
                                  <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• Complete SEO audit</li>
                                    <li>• Competitor analysis</li>
                                    <li>• Keyword research</li>
                                    <li>• Strategy development</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Organic Traffic</span>
                                      <span className="text-sm text-lime-300">Baseline: 2,500/month</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Revenue</span>
                                      <span className="text-sm text-lime-300">$15,000/month</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Month 2-3 */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-lime-300 rounded-full border-4 border-black"></div>
                        <div className="ml-16 flex-1">
                          <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-white">Implementation Phase</CardTitle>
                                <Badge variant="outline" className="border-lime-300 text-lime-300">
                                  Month 2-3
                                </Badge>
                              </div>
                              <CardDescription className="text-gray-400">February - March 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-white mb-2">What We Did:</h4>
                                  <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• On-page SEO optimization</li>
                                    <li>• Content creation strategy</li>
                                    <li>• Google Ads setup</li>
                                    <li>• Technical SEO fixes</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Organic Traffic</span>
                                      <span className="text-sm text-lime-300">+45% (3,625/month)</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Revenue</span>
                                      <span className="text-sm text-lime-300">+30% ($19,500/month)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 relative aspect-video group cursor-pointer">
                                <Image
                                  src="/placeholder.svg?height=200&width=400"
                                  width={400}
                                  height={200}
                                  alt="Month 2-3 Results"
                                  className="object-cover w-full rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-lime-300/20 border-lime-300"
                                  >
                                    <Play className="h-5 w-5 text-lime-300" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Month 4-5 */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-lime-300 rounded-full border-4 border-black"></div>
                        <div className="ml-16 flex-1">
                          <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-white">Optimization & Scaling</CardTitle>
                                <Badge variant="outline" className="border-lime-300 text-lime-300">
                                  Month 4-5
                                </Badge>
                              </div>
                              <CardDescription className="text-gray-400">April - May 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-white mb-2">What We Did:</h4>
                                  <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• Advanced keyword targeting</li>
                                    <li>• Conversion rate optimization</li>
                                    <li>• Email marketing campaigns</li>
                                    <li>• Social media integration</li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Organic Traffic</span>
                                      <span className="text-sm text-lime-300">+120% (5,500/month)</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-300">Revenue</span>
                                      <span className="text-sm text-lime-300">+180% ($27,000/month)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Month 6 - Final Results */}
                      <div className="relative flex items-start">
                        <div className="absolute left-6 w-4 h-4 bg-lime-300 rounded-full border-4 border-black flex items-center justify-center">
                          <CheckCircle className="h-2 w-2 text-black" />
                        </div>
                        <div className="ml-16 flex-1">
                          <Card className="bg-gradient-to-r from-lime-300/10 to-lime-400/10 border-lime-300">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-white">Final Results Achieved</CardTitle>
                                <Badge className="bg-lime-300 text-black">Month 6</Badge>
                              </div>
                              <CardDescription className="text-gray-400">June 2024</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold text-white mb-3">Final Achievements:</h4>
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                      <span className="text-white font-medium">Organic Traffic</span>
                                      <span className="text-lime-300 font-bold text-lg">+300%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                      <span className="text-white font-medium">Monthly Revenue</span>
                                      <span className="text-lime-300 font-bold text-lg">$45,000</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                      <span className="text-white font-medium">Conversion Rate</span>
                                      <span className="text-lime-300 font-bold text-lg">+150%</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative aspect-video group cursor-pointer">
                                    <Image
                                      src="/placeholder.svg?height=200&width=400"
                                      width={400}
                                      height={200}
                                      alt="Final Results Video"
                                      className="object-cover w-full rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full bg-lime-300/20 border-lime-300"
                                      >
                                        <Play className="h-6 w-6 text-lime-300" />
                                      </Button>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-300 mt-2 text-center">
                                    Watch the complete success story
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Navigation */}
                  <div className="mt-12 text-center">
                    <h4 className="text-lg font-semibold text-white mb-4">View Other Client Timelines</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-lime-300 hover:text-lime-300"
                      >
                        CloudSoft Journey
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-lime-300 hover:text-lime-300"
                      >
                        Urban Bistro Timeline
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-lime-300 hover:text-lime-300"
                      >
                        StyleHub Evolution
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-lime-300 to-lime-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
                  Ready to Be Our Next Success Story?
                </h2>
                <p className="max-w-[600px] text-black/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a free consultation and discover how we can help you achieve similar results for your business.
                </p>
              </div>
              <Link href="/consultation">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900">
        <div className="container flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-lime-300" />
              <span className="ml-2 text-lg font-bold text-white">NewEraConsulting</span>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <p className="text-xs text-gray-500">NewEraConsulting Marketing Solutions, Inc.</p>
              <p className="text-xs text-gray-500">123 Marketing Street, Suite 500, New York, NY 10001</p>
              <p className="text-xs text-gray-500">Business License: #MKT-12345-NY</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-500 text-center">
              © 2024 NewEraConsulting Marketing Solutions, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
