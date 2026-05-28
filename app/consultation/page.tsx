"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, Users } from "lucide-react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function ConsultationPage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="w-fit border-lime-300 text-lime-300 mb-4">
              Free Strategy Session
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-4">
              Book Your <span className="text-lime-300">Free Consultation</span>
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl mx-auto mb-8">
              Schedule a 30-minute strategy call with our marketing experts and discover how we can help you achieve
              remarkable growth for your business.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-lime-300" />
                </div>
                <h3 className="font-semibold text-white">Free Marketing Audit</h3>
                <p className="text-sm text-gray-400 text-center">
                  Worth $500 - Complete analysis of your current marketing
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-lime-300" />
                </div>
                <h3 className="font-semibold text-white">Expert Strategy Session</h3>
                <p className="text-sm text-gray-400 text-center">Custom growth plan tailored to your business goals</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-lime-300" />
                </div>
                <h3 className="font-semibold text-white">No Commitment</h3>
                <p className="text-sm text-gray-400 text-center">
                  Free consultation with actionable insights you can use immediately
                </p>
              </div>
            </div>
          </div>

          {/* Calendly Integration */}
          <Card className="bg-gray-900 border-gray-800 max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-white flex items-center justify-center">
                <Calendar className="h-6 w-6 text-lime-300 mr-2" />
                Schedule Your Free Consultation
              </CardTitle>
              <CardDescription className="text-gray-400">
                Choose a time that works best for you - all sessions are completely free
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/OzPcbo6IEftp945zpfUe"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "630px" }}
                scrolling="no"
                id="OzPcbo6IEftp945zpfUe"
              ></iframe>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Trusted by 500+ businesses worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-lime-300">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
              <div className="text-2xl font-bold text-lime-300">300%</div>
              <div className="text-sm text-gray-400">Avg Growth</div>
              <div className="text-2xl font-bold text-lime-300">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
