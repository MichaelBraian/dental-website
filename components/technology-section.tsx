"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Cpu, Scan, Camera, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function TechnologySection({ dictionary }: { dictionary: any }) {
  const technologies = [
    {
      icon: <Scan className="h-10 w-10 text-orange-500" />,
      title: dictionary.items[0].title,
      description: dictionary.items[0].description,
      expandedDescription: dictionary.items[0].expandedDescription,
    },
    {
      icon: <Camera className="h-10 w-10 text-orange-500" />,
      title: dictionary.items[1].title,
      description: dictionary.items[1].description,
      expandedDescription: dictionary.items[1].expandedDescription,
    },
    {
      icon: <Cpu className="h-10 w-10 text-orange-500" />,
      title: dictionary.items[2].title,
      description: dictionary.items[2].description,
      expandedDescription: dictionary.items[2].expandedDescription,
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-orange-500" />,
      title: dictionary.items[3].title,
      description: dictionary.items[3].description,
      expandedDescription: dictionary.items[3].expandedDescription,
    },
  ]

  return (
    <section className="container py-12 bg-gray-900">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">{dictionary.title}</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">{dictionary.subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    </section>
  )
}

function TechCard({ tech }: { tech: any }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="h-full transition-colors hover:border-orange-500/50 bg-gray-800 border-gray-700 overflow-hidden">
        <CardHeader>
          <motion.div className="mb-2" whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
            {tech.icon}
          </motion.div>
          <CardTitle className="group-hover:text-orange-500 transition-colors text-white">{tech.title}</CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-gray-300">{tech.description}</p>
        </CardContent>

        <CardFooter>
          <Button
            variant="ghost"
            className="px-0 text-orange-500 hover:text-orange-400 group w-full justify-center"
            onClick={() => setIsDialogOpen(true)}
          >
            <span>Read More</span>
            <span className="inline-block ml-1">↓</span>
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-orange-500">{tech.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-300 mt-2">{tech.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-gray-300 whitespace-pre-line">{tech.expandedDescription}</div>
          <DialogFooter className="mt-6">
            <Button
              variant="default"
              className="w-full bg-orange-500 hover:bg-orange-600"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

