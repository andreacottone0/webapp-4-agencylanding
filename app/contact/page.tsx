"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  MessageSquare,
  Users,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FormData {
  firstName: string
  lastName: string
  email: string
  companyName: string
  phoneNumber: string
  marketingBudget: string
  projectDetails: string
  agreedToTerms: boolean
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    marketingBudget: "",
    projectDetails: "",
    agreedToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          marketingBudget: "",
          projectDetails: "",
          agreedToTerms: false,
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header></Header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit border-lime-300 text-lime-300">
                  Let's Talk Growth
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Ready to <span className="text-lime-300">Transform</span> Your Business?
                </h1>
                <p className="max-w-[800px] text-gray-400 md:text-xl mx-auto">
                  Get in touch with our marketing experts and discover how we can help you achieve remarkable growth.
                  Book a free consultation or send us a message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-12 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <Alert
                    className={`${
                      submitStatus.type === "success"
                        ? "border-lime-300 bg-lime-300/10"
                        : "border-red-500 bg-red-500/10"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-4 w-4 text-lime-300" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <AlertDescription className={submitStatus.type === "success" ? "text-lime-300" : "text-red-400"}>
                      {submitStatus.message}
                    </AlertDescription>
                  </Alert>
                )}

                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageSquare className="h-5 w-5 text-lime-300 mr-2" />
                      Contact Form
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Tell us about your project and marketing goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-white">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="John"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-white">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Doe"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Your Company"
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-white">
                          Monthly Marketing Budget
                        </Label>
                        <Select
                          value={formData.marketingBudget}
                          onValueChange={(value) => handleInputChange("marketingBudget", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="under-5k" className="text-white">
                              Under $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k" className="text-white">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k" className="text-white">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k" className="text-white">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="over-50k" className="text-white">
                              Over $50,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.projectDetails}
                          onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                          placeholder="Tell us about your business, current challenges, and marketing goals..."
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                          className="border-gray-600 data-[state=checked]:bg-lime-300"
                          disabled={isSubmitting}
                        />
                        <Label htmlFor="privacy" className="text-sm text-gray-300">
                          I agree to the{" "}
                          <Link href="#" className="text-lime-300 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-lime-300 hover:underline">
                            Terms of Service
                          </Link>
                        </Label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-lime-300 hover:bg-lime-400 text-black font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Calendar Booking & Contact Info */}
              <div className="space-y-6">
                {/* Calendar Booking */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Book a Free Consultation</h2>
                  <p className="text-gray-400 mb-6">Schedule a 30-minute strategy call with our marketing experts.</p>
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Calendar className="h-5 w-5 text-lime-300 mr-2" />
                        Schedule Your Call
                      </CardTitle>
                      <CardDescription className="text-gray-400">Choose a time that works best for you</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/OzPcbo6IEftp945zpfUe"
                        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "630px" }}
                        scrolling="no"
                        id="OzPcbo6IEftp945zpfUe"
                      ></iframe>
                    </CardContent>
                  </Card>
                </div>






                {/* Contact Information */}
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Users className="h-5 w-5 text-lime-300 mr-2" />
                      Get in Touch
                    </CardTitle>
                    <CardDescription className="text-gray-400">Multiple ways to reach our team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-lime-300/20 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-400">andrea@newerainternationalconsulting.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-lime-300/20 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-400">+971544596241</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-lime-300/20 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Office</p>
                        <p className="text-gray-400">IFZA Business Park - Building A2 - Dubai Silicon Oasis - Industrial Area - Dubai </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-lime-300/20 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-lime-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Business Hours</p>
                        <p className="text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="bg-gradient-to-r from-lime-300/10 to-lime-400/10 border-lime-300/20">
                  <CardHeader>
                    <CardTitle className="text-white">Why Choose NewEraConsulting?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-lime-300 flex-shrink-0" />
                        <span className="text-gray-300">Free marketing audit worth $500</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-lime-300 flex-shrink-0" />
                        <span className="text-gray-300">Custom growth strategy in 48 hours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-lime-300 flex-shrink-0" />
                        <span className="text-gray-300">Dedicated account manager</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-lime-300 flex-shrink-0" />
                        <span className="text-gray-300">Guaranteed ROI improvement</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about our services and process
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">How quickly can we see results?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Most clients see initial improvements within 30-60 days, with significant growth typically occurring
                    within 3-6 months depending on the strategy and industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">What's included in the free consultation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    A comprehensive marketing audit, competitor analysis, custom growth strategy, and actionable
                    recommendations you can implement immediately.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Do you work with small businesses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Yes! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are
                    tailored to your specific budget and goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">What makes NewEraConsulting different?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our data-driven approach, proven track record of 300% average growth, and dedicated team of experts
                    who treat your success as our own.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}
