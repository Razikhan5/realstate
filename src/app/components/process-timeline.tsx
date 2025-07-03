"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/app/components/components/ui/card"
import { Button } from "@/app/components/components/ui/button"
import {
  Lightbulb,
  ClipboardList,
  Ruler,
  Hammer,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  FileText,
  Truck,
  Home,
} from "lucide-react"
import Image from "next/image"

export function ProcessTimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Initial Consultation",
      description:
        "We start by understanding your vision, requirements, and budget. Our experts will discuss your ideas and provide initial feedback.",
      color: "from-blue-500 to-cyan-500",
      image: "/1b.png",
      details: [
        "Free consultation with our experts",
        "Understanding your vision and needs",
        "Initial budget discussion",
        "Site visit and assessment",
      ],
    },
    {
      icon: ClipboardList,
      title: "Planning & Design",
      description:
        "Our architects and designers create detailed plans and 3D visualizations of your project, incorporating your feedback at every stage.",
      color: "from-purple-500 to-pink-500",
      image: "/2b.webp",
      details: [
        "Architectural drawings and blueprints",
        "3D visualizations and renderings",
        "Material selection assistance",
        "Design revisions and refinement",
      ],
    },
    {
      icon: FileText,
      title: "Proposal & Contract",
      description:
        "We provide a detailed proposal with transparent pricing, timeline, and scope of work. Once approved, we formalize the agreement.",
      color: "from-orange-500 to-red-500",
      image: "/3b.webp",
      details: [
        "Detailed cost breakdown",
        "Project timeline and milestones",
        "Material specifications",
        "Payment schedule and terms",
      ],
    },
    {
      icon: Ruler,
      title: "Permits & Approvals",
      description:
        "Our team handles all necessary permits and regulatory approvals, ensuring your project complies with local building codes.",
      color: "from-green-500 to-emerald-500",
      image: "/4b.webp",
      details: [
        "Building permit applications",
        "Zoning compliance verification",
        "Environmental assessments if required",
        "Regulatory approval management",
      ],
    },
    {
      icon: Truck,
      title: "Material Procurement",
      description:
        "We source high-quality materials from trusted suppliers, ensuring everything is ready before construction begins.",
      color: "from-yellow-500 to-amber-500",
      image: "/6b.avif",
      details: [
        "Quality material sourcing",
        "Cost-effective procurement",
        "Delivery scheduling and logistics",
        "On-site material management",
      ],
    },
    {
      icon: Hammer,
      title: "Construction",
      description:
        "Our skilled craftsmen bring your project to life, with regular updates and site visits to keep you informed of progress.",
      color: "from-indigo-500 to-blue-500",
      image: "/5b.png",
      details: [
        "Professional construction team",
        "Regular progress updates",
        "Quality control inspections",
        "Safety protocols and compliance",
      ],
    },
    {
      icon: CheckCircle,
      title: "Final Inspection",
      description:
        "We conduct thorough quality checks and inspections to ensure everything meets our high standards and your expectations.",
      color: "from-teal-500 to-cyan-500",
      image: "/7b.webp",
      details: [
        "Comprehensive quality assurance",
        "Building code compliance verification",
        "Systems and functionality testing",
        "Client walkthrough and feedback",
      ],
    },
    {
      icon: Home,
      title: "Project Delivery",
      description:
        "We hand over your completed project, provide all necessary documentation, and ensure you're completely satisfied.",
      color: "from-rose-500 to-pink-500",
      image: "/7b.png",
      details: [
        "Final project handover",
        "Warranty documentation",
        "Maintenance guidelines",
        "Post-completion support",
      ],
    },
  ]

  const scrollToStep = (index: number) => {
    setActiveStep(index)
    if (timelineRef.current) {
      const scrollPosition = index * 100
      timelineRef.current.scrollLeft = scrollPosition
    }
  }

  const nextStep = () => {
    if (activeStep < processSteps.length - 1) {
      scrollToStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      scrollToStep(activeStep - 1)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg mb-4">
            <Clock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
            Our Construction Process
          </h2>
          <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
            A transparent, step-by-step approach to bringing your construction project to life
          </p>
        </div>

        {/* Timeline Steps */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
          <div ref={timelineRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className={`flex-shrink-0 snap-start cursor-pointer transition-all duration-300 ${index === activeStep ? "scale-100" : "scale-95 opacity-70"}`} onClick={() => scrollToStep(index)}>
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} ${index === activeStep ? "ring-4 ring-orange-500 ring-offset-4" : ""}`}>
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div className="text-center mt-2 text-sm font-medium">
                    <span className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 inline-flex items-center justify-center mb-1">{index + 1}</span>
                    <div className={`${index === activeStep ? "text-orange-600 font-bold" : "text-gray-600"}`}>
                      {step.title}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="h-1 bg-gray-200 rounded-full w-full mt-2 mb-8 relative">
            <div className="absolute h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500" style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Step Details */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: "500ms" }}>
          <div className="order-2 lg:order-1">
            <div className={`bg-gradient-to-br ${processSteps[activeStep].color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
              {(() => {
                const ActiveIcon = processSteps[activeStep].icon
                return <ActiveIcon className="h-8 w-8" />
              })()}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-3">{activeStep + 1}</span>
              {processSteps[activeStep].title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">{processSteps[activeStep].description}</p>

            <div className="space-y-4 mb-8">
              {processSteps[activeStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-orange-100 rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" className={`border-orange-200 text-orange-600 hover:bg-orange-50 ${activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={prevStep} disabled={activeStep === 0}>
                Previous Step
              </Button>
              <Button className={`bg-orange-500 hover:bg-orange-600 text-white ${activeStep === processSteps.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={nextStep} disabled={activeStep === processSteps.length - 1}>
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                <div className="relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={processSteps[activeStep].image || "/placeholder.svg"}
                    alt={processSteps[activeStep].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[80%]">
                  <div className="text-sm font-semibold text-orange-600 mb-1">Step {activeStep + 1}</div>
                  <div className="text-lg font-bold text-gray-900">{processSteps[activeStep].title}</div>
                </div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {processSteps.map((_, index) => (
                <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeStep ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"}`} onClick={() => scrollToStep(index)} aria-label={`Go to step ${index + 1}`}></button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-xl">
            <CardContent className="p-4 sm:p-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm p-3 rounded-full mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Construction Journey?</h3>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Our proven process ensures your project is completed on time, within budget, and exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More About Our Process
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
