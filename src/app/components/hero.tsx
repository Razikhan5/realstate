"use client"

import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  PhoneCall,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/app/components/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
      
      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex gap-3 animate-float">
          {/* WhatsApp */}
          <a
            href="https://wa.me/923160404905"
            target="_blank"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+923160404905"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Float Animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium uppercase tracking-wider">15+ Years of Excellence</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  Building Your
                  <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Dreams
                  </span>
                  Into Reality
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl">
                  Professional construction services with over 15 years of experience. We deliver quality, reliability,
                  and excellence in every project from residential homes to commercial buildings.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                      <link rel="stylesheet" href="https://wa.me/923160404905" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="text-sm text-slate-300">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <span className="text-sm text-slate-300">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-orange-400/30 shadow-2xl">
                <Image
                  src="/6m.png"
                  alt="Construction Site"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-slate-600">Projects Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Stats Section - Compact Version */}
<section className="py-8 sm:py-10 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center text-white">
      {[
        { number: "500+", label: "Projects Completed", icon: "🏗️" },
        { number: "20+", label: "Years Experience", icon: "⭐" },
        { number: "50+", label: "Expert Workers", icon: "👷" },
        { number: "100%", label: "Client Satisfaction", icon: "❤️" },
      ].map((stat, index) => (
        <div
          key={index}
          className="group hover:transform hover:scale-105 transition-all duration-300"
        >
          <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
          <div className="text-2xl sm:text-4xl font-bold mb-1 group-hover:text-yellow-300 transition-colors duration-300">
            {stat.number}
          </div>
          <div className="text-sm sm:text-base opacity-90 font-medium">{stat.label}</div>
        </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
