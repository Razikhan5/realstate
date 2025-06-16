import { Button } from "@/app/components/components/ui/button"
import { Card } from "@/app/components/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-100 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent successful construction projects that showcase our expertise and
            commitment to excellence
          </p>
        </div>

        {/* Image-Only Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { image: "/a1.png", status: "Completed" },
            { image: "/a2.png", status: "In Progress" },
            { image: "/a3.png", status: "Completed" },
            { image: "/a4.png", status: "Completed" },
            { image: "/a5.png", status: "Planning" },
            { image: "/a6.avif", status: "Completed" },
          ].map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 border-0 bg-white group"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Optional Status Badge */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.status}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
