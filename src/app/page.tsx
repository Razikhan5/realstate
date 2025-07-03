"use client"

import { useState } from "react"
import { Building2, Phone, Menu, X } from "lucide-react"
import { Button } from "@/app/components/components/ui/button"
import Link from "next/link"
import { Hero } from "@/app/components/hero"
import { Services } from "@/app/components/services"
import About from "@/app/components/about"
import { Projects } from "@/app/components/projects"
import { Testimonials } from "@/app/components/testimonials"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"
import { Certifications } from "./components/certifications"

import { ProcessTimeline } from "./components/process-timeline"
import { DesignReality } from "./components/design-reality"


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50 shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className=" p-2 rounded-xl">
               <img src="logo.jpeg" alt="logo" className="h-16 w-20 text-white rounded-xl"/>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                QAIM KHANI ASSOCIATES
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "services", "projects", "about", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium capitalize"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Contact & Button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+92 03333243332</span>
              </div>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Quote
              </Button>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4">
              {["home", "services", "projects", "about", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium capitalize"
                >
                  {link}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+92 03333243332</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-2 rounded-full shadow-lg">
                Get Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Services />
      < ProcessTimeline />
      <DesignReality />
       <Certifications />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
