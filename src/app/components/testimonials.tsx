"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/app/components/components/ui/card"
import { Button } from "@/app/components/components/ui/button"
import Image from "next/image"

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who have experienced our exceptional
            service.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-6 md:p-12 text-white mb-12 md:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Quote className="h-20 w-20 md:h-32 md:w-32" />
          </div>
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3 items-center relative z-10">
            <div className="lg:col-span-2">
              <div className="flex mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 md:h-6 md:w-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-4 md:mb-6">
                "BuildCraft exceeded all our expectations. Their attention to detail, professionalism, and commitment
                to quality is unmatched. Our new headquarters is absolutely stunning!"
              </blockquote>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Client"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-bold text-lg">KELECTRIC</div>
                  <div className="text-orange-200">CEO, QAIM KHANI</div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-5xl md:text-6xl font-bold mb-1">4.9</div>
              <div className="text-orange-200">Average Rating</div>
              <div className="text-sm text-orange-200 mt-1">Based on 150+ reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            
            {
              name: "Robert Wilson",
              role: "Restaurant Owner",
              company: "Wilson's Bistro",
              content:
                "The renovation of our restaurant was flawless. BuildCraft understood our vision and delivered beyond expectations.",
              rating: 5,
              image: "/placeholder.svg?height=50&width=50",
              bgColor: "from-red-50 to-red-100",
              accentColor: "text-red-600",
            },
            {
              name: "Lisa Thompson",
              role: "Hotel Manager",
              company: "Grand Plaza Hotel",
              content:
                "Professional, reliable, and exceptional quality. Our hotel renovation was completed with minimal disruption to operations.",
              rating: 5,
              image: "/placeholder.svg?height=50&width=50",
              bgColor: "from-indigo-50 to-indigo-100",
              accentColor: "text-indigo-600",
            },
            {
              name: "David Rodriguez",
              role: "Facility Manager",
              company: "Metro Shopping Center",
              content:
                "BuildCraft's project management skills are exceptional. They kept us informed every step of the way.",
              rating: 5,
              image: "/placeholder.svg?height=50&width=50",
              bgColor: "from-orange-50 to-orange-100",
              accentColor: "text-orange-600",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${testimonial.bgColor} border-0 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className={`text-sm ${testimonial.accentColor} font-medium`}>{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "150+", label: "Happy Clients", color: "text-blue-600" },
            { number: "4.9/5", label: "Average Rating", color: "text-green-600" },
            { number: "98%", label: "Project Success Rate", color: "text-purple-600" },
            { number: "24/7", label: "Customer Support", color: "text-orange-600" },
          ].map((stat, index) => (
            <div key={index} className="group transition-transform duration-300 transform hover:scale-105">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Join Our Satisfied Clients</h3>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Experience the BuildCraft difference and see why our clients recommend us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-full"
              >
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
