"use client";

import { Award, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/app/components/components/ui/card";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "ISO 9001:2015 Quality Management",
      issuer: "International Organization for Standardization",
      date: "2024",
      description: "Quality management systems certification ensuring consistent service delivery",
      image: "/c1.jpg",
      category: "Quality",
    },
    {
      title: "OSHA Safety Certification",
      issuer: "Occupational Safety and Health Administration",
      date: "2024",
      description: "Workplace safety and health standards compliance certification",
      image: "/c2.jpg",
      category: "Safety",
    },
    {
      title: "LEED Green Building Certification",
      issuer: "U.S. Green Building Council",
      date: "2023",
      description: "Leadership in Energy and Environmental Design certification",
      image: "/c3.jpg",
      category: "Environmental",
    },
    {
      title: "Construction Industry License",
      issuer: "State Construction Board",
      date: "2023",
      description: "Official license to operate construction business in the state",
      image: "/c4.jpg",
      category: "License",
    },
    {
      title: "Project Management Professional",
      issuer: "Project Management Institute",
      date: "2023",
      description: "Professional certification in project management methodologies",
      image: "/c5.jpg",
      category: "Management",

      
    },
     {
      title: "Project Management Professional",
      issuer: "Project Management Institute",
      date: "2023",
      description: "Professional certification in project management methodologies",
      image: "/c6.jpg",
      category: "Management",

      
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Quality":
      case "Environmental":
      case "Management":
        return CheckCircle;
      case "Safety":
      case "License":
        return Award;
      default:
        return Award;
    }
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-orange-500 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Our Certifications</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain the highest industry standards through continuous certification and professional development.
          </p>
        </div>

        {/* Grid layout instead of horizontal scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const Icon = getCategoryIcon(cert.category);
            return (
              <Card
                key={index}
                className={`bg-white border rounded-xl shadow-lg transition-all duration-500 transform hover:scale-[1.03] h-full ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Larger image section */}
                <div className="relative h-[350px] w-full bg-gray-50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Expanded content section */}
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-orange-500 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-3">
                    <p className="text-gray-700">{cert.description}</p>
                    <p className="font-medium">{cert.issuer}</p>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}