"use client";

import {
  Award,
  Clock,
  CheckCircle,
  Wrench,
  Home,
  Building,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/components/ui/card";
import { Button } from "@/app/components/components/ui/button";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
};

const imageOverlayVariant = {
  hidden: { opacity: 0 },
  hover: {
    opacity: 1,
    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
    transition: { duration: 0.4 },
  },
};

// Define the services array before using it
const services = [
  {
    icon: Home,
    image: "/d1.webp",
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential projects built to perfection with attention to every detail",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: Building,
    image: "/d2.avif",
    title: "Commercial Buildings",
    description: "Office buildings, retail spaces, and commercial construction projects that meet industry standards",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: Award,
    image: "/d3.avif",
    title: "Renovation & Remodeling",
    description: "Transform your existing space with our expert renovation services and modern design solutions",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: Clock,
    image: "/d4.avif",
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and quality execution of every phase",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    icon: CheckCircle,
    image: "/d5.jpg",
    title: "Quality Assurance",
    description: "Rigorous quality checks and compliance with all safety standards and building regulations",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    icon: Wrench,
    image: "/d6.jpg",
    title: "Maintenance Services",
    description: "Ongoing maintenance and repair services to keep your property in excellent condition",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From residential homes to commercial buildings, we provide
            comprehensive construction solutions with unmatched quality and
            expertise
          </p>
        </motion.div>

        {/* Animated Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover="hover"
              custom={index}
            >
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg h-full flex flex-col group overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Animated Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[300px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      variants={imageOverlayVariant}
                      className="absolute inset-0 rounded-t-xl"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    {/* Icon with rotation effect */}
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`${service.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}
                    >
                      <service.icon className={`h-5 w-5 ${service.textColor}`} />
                    </motion.div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Animated Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto"
                    >
                      <Button
                        variant="outline"
                        className={`bg-gradient-to-r ${service.color} text-white border-0 hover:shadow-lg transition-all duration-300 text-xs w-full`}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pulsing CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 pointer-events-none"
          />
          <h3 className="text-2xl font-bold mb-2 relative z-10">
            Ready to Start Your Dream Project?
          </h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto relative z-10">
            Get a free consultation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-full">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Call Now: +92 03333243332
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}