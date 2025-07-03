"use client"

import { Card, CardContent } from "@/app/components/components/ui/card"
import { Button } from "@/app/components/components/ui/button"
import { Eye, Maximize2, Play, ArrowRight, Building2, Palette, Camera } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function DesignReality() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [viewMode, setViewMode] = useState<"design" | "reality" | "compare">("compare")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Luxury Villa Complex",
      location: "MULTAN",
      category: "Residential",
      designImage: "/3d1.png",
      realityImages: [
        "/s1.png",
      ],
      description: "Traditional Middle Eastern architecture with modern amenities",
      details: {
        area: "1 KANAL BENGLO MULTAN",
        duration: "3 months",
        units: "1 Villas",
        status: "Completed",
      },
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Modern Office Complex",
      location: "Business Bay, Dubai",
      category: "Commercial",
      designImage: "/3d2.png",
      realityImages: [
        "/s2.png",
        
      ],
      description: "Contemporary office spaces with sustainable design elements",
      details: {
        area: "50,000 sq ft",
        duration: "24 months",
        floors: "15 Floors",
        status: "Completed",
      },
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Hospital Renovation",
      location: "karachi, bahriya international hospital",
      category: "Renovation",
      designImage: "/3d3.png",
      realityImages: [
        "/s3.png",
      ],
      description: "Complete renovation of existing hospital with modern facilities",
      details: {
        area: "80,000 sq ft",
        duration: "12 months",
        status: "Completed",
      },
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Residential Apartments",
      location: "Marina District, Dubai",
      category: "Residential",
      designImage: "/3d4.png",
      realityImages: [
        "/s4.png",
      ],
      description: "High-rise residential complex with panoramic city views",
      details: {
        area: "200,000 sq ft",
        duration: "30 months",
        units: "200 Units",
        status: "Completed",
      },
      color: "from-green-500 to-emerald-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="design-reality"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-12 w-12 text-orange-500 mr-4" />
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Design to Reality
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our 3D designs transform into stunning real-world constructions
          </p>
        </div>

        {/* View Mode Toggle */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex space-x-1">
            {[
              { mode: "design" as const, label: "3D Design", icon: Palette },
              { mode: "reality" as const, label: "Site Photos", icon: Camera },
              { mode: "compare" as const, label: "Compare", icon: Eye },
            ].map(({ mode, label, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${viewMode === mode ? "bg-orange-500 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-full transition-all duration-300 ${activeProject === index ? `bg-gradient-to-r ${project.color} text-white shadow-lg scale-105` : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Display */}
        <div className="max-w-7xl mx-auto">
          {viewMode === "compare" && (
            <div
              className={`grid lg:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* 3D Design */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-500">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    3D Design
                  </div>
                  <Image
                    src={projects[activeProject].designImage || "/placeholder.svg"}
                    alt={`${projects[activeProject].title} - 3D Design`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(projects[activeProject].designImage)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                      <Maximize2 className="h-4 w-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Conceptual Design</h3>
                  <p className="text-gray-300">3D visualization and architectural planning phase</p>
                </CardContent>
              </Card>

              {/* Site Reality */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-500">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Site Pictures
                  </div>
                  <Image
                    src={projects[activeProject].realityImages[0] || "/placeholder.svg"}
                    alt={`${projects[activeProject].title} - Reality`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(projects[activeProject].realityImages[0])}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-0">
                      <Play className="h-4 w-4 mr-2" />
                      View Gallery
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Completed Project</h3>
                  <p className="text-gray-300">Final construction result and site photographs</p>
                </CardContent>
              </Card>
            </div>
          )}

          {viewMode === "design" && (
            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <div className="relative">
                  <Image
                    src={projects[activeProject].designImage || "/placeholder.svg"}
                    alt={`${projects[activeProject].title} - 3D Design`}
                    width={1200}
                    height={600}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">
                    3D Design Visualization
                  </div>
                </div>
              </Card>
            </div>
          )}

          {viewMode === "reality" && (
            <div
              className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {projects[activeProject].realityImages.map((image, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${projects[activeProject].title} - Site Photo ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Site Photo {index + 1}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Project Details */}
          <Card
            className={`mt-12 bg-gradient-to-br ${projects[activeProject].color} border-0 shadow-2xl transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm opacity-80 mb-2">{projects[activeProject].category}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
                  <p className="text-lg opacity-90 mb-4">{projects[activeProject].location}</p>
                  <p className="text-white/80 leading-relaxed">{projects[activeProject].description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(projects[activeProject].details).map(([key, value]) => (
                    <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Full Size View"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Want to See Your Project Come to Life?</h3>
          <p className="text-gray-300 mb-6">
            Let us create stunning 3D visualizations and bring your vision to reality
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 hover:scale-105 transition-all duration-300 group">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
