"use client"

import { useEffect, useState } from "react"
import { Building2, Hammer, Wrench, HardHat } from "lucide-react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [showLoading, setShowLoading] = useState(true)

  const loadingSteps = [
    "Preparing blueprints...",
    "Loading materials...",
    "Setting up construction site...",
    "Assembling team...",
    "Starting construction...",
  ]

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded")

    if (alreadyLoaded) {
      setShowLoading(false)
      return
    } else {
      sessionStorage.setItem("alreadyLoaded", "true")
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.6
      })
    }, 128)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length)
    }, 1000)

    const timeout = setTimeout(() => {
      setShowLoading(false)
    }, 8000)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
      clearTimeout(timeout)
    }
  }, [])

  if (!showLoading) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Faint Site Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-500/30 to-transparent" />
        <div className="absolute bottom-8 left-1/4 w-2 h-20 bg-orange-400/50 animate-pulse" />
        <div className="absolute bottom-8 left-1/2 w-2 h-16 bg-orange-400/50 animate-pulse delay-500" />
        <div className="absolute bottom-8 right-1/4 w-2 h-24 bg-orange-400/50 animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="text-center text-white relative z-10 max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
            <Building2 className="h-16 w-16 text-orange-500 mx-auto animate-bounce" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
          BuildCraft
        </h1>
        <p className="text-gray-300 mb-8">Building Your Dreams Into Reality</p>

        {/* Tools Animation */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce delay-100">
            <Hammer className="h-6 w-6 text-orange-400" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce delay-300">
            <Wrench className="h-6 w-6 text-blue-400" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce delay-500">
            <HardHat className="h-6 w-6 text-yellow-400" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/30">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-300 mt-2">
            <span>0%</span>
            <span className="font-semibold text-orange-400">{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Current Step */}
        <p className="text-lg text-gray-200 animate-pulse mb-8">
          {loadingSteps[currentStep]}
        </p>

        {/* Construction Track */}
        <div className="relative h-20 mb-6">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/30 rounded-full" />

          {/* Crane Ball */}
          <div
            className="absolute bottom-1 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${(progress / 100) * 280}px)` }}
          >
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
          </div>

          {/* Building Blocks (Left) */}
          <div className="absolute bottom-2 left-4 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 bg-gradient-to-t from-orange-600 to-orange-400 transition-all duration-500 ${
                  progress > i * 20 ? "opacity-100 scale-100" : "opacity-30 scale-75"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              />
            ))}
          </div>

          {/* Building Structure (Right) */}
          <div className="absolute bottom-2 right-4 flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-700 ${
                  progress > 60 + i * 10 ? "opacity-100" : "opacity-30"
                }`}
                style={{
                  height: `${12 + i * 4}px`,
                  transitionDelay: `${i * 300}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Fun Messages */}
        <div className="mt-6 text-sm text-gray-400 animate-pulse">
          <p>
            {progress < 25 && "Gathering the best materials..."}
            {progress >= 25 && progress < 50 && "Assembling our expert team..."}
            {progress >= 50 && progress < 75 && "Preparing construction plans..."}
            {progress >= 75 && progress < 95 && "Almost ready to build..."}
            {progress >= 95 && "Welcome to BuildCraft!"}
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
