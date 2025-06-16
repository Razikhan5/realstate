import { Users, Award, Clock, Shield, Target, Heart } from "lucide-react"
import { Button } from "@/app/components/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-orange-50/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                About BuildCraft
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Building Excellence for
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  15+ Years
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                With over 15 years of experience in the construction industry, BuildCraft has established itself as a
                trusted partner for residential and commercial construction projects across the region.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our team of skilled professionals is committed to delivering exceptional quality, innovative solutions,
                and outstanding customer service on every project we undertake. We believe in building not just
                structures, but lasting relationships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full w-full sm:w-auto">
                Our Story
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-full w-full sm:w-auto"
              >
                Meet Our Team
              </Button>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-lg">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-4 sm:p-6 md:p-8">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="About BuildCraft"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl w-64 max-w-[90%]">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">Award Winning</div>
                    <div className="text-xs sm:text-sm text-slate-600">Construction Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Users,
              title: "Expert Team",
              description: "Skilled professionals with years of experience and dedication to excellence",
              color: "from-blue-500 to-blue-600",
              bgColor: "bg-blue-50",
            },
            {
              icon: Shield,
              title: "Quality Assurance",
              description: "Commitment to excellence with rigorous quality checks and safety standards",
              color: "from-green-500 to-green-600",
              bgColor: "bg-green-50",
            },
            {
              icon: Clock,
              title: "On-Time Delivery",
              description: "Projects delivered on schedule with efficient project management and planning",
              color: "from-purple-500 to-purple-600",
              bgColor: "bg-purple-50",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`${value.bgColor} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <value.icon className={`h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Target className="h-6 w-6 sm:h-8 sm:w-8" />
              <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed opacity-90">
              To deliver exceptional construction services that exceed client expectations while maintaining the highest
              standards of quality, safety, and professionalism in every project we undertake.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8" />
              <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed opacity-90">
              To be the leading construction company in the region, known for innovation, reliability, and building
              lasting relationships with our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
