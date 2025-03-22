"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface VideoHeroProps {
  dictionary: any
}

export function VideoHero({ dictionary }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays automatically when loaded
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay restrictions gracefully
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center brightness-50"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1200&width=1920"
        >
          <source src="/videos/Hero_Video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="container relative z-10 flex h-full flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="mb-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {dictionary.title}
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {dictionary.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white relative overflow-hidden group">
            <span className="relative z-10">{dictionary.bookButton}</span>
            <span className="absolute inset-0 bg-orange-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 relative overflow-hidden group"
          >
            <span className="relative z-10">{dictionary.learnMoreButton}</span>
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

