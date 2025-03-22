"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { SmileIcon as Tooth, Stethoscope, Smile, Users } from "lucide-react"
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

export function ServicesOverview({ dictionary }: { dictionary: any }) {
  // Get the expanded descriptions from the services dictionary if available
  const getExpandedDescription = (index: number) => {
    // Try to get expanded descriptions from the services section
    if (dictionary.services && dictionary.services[index] && dictionary.services[index].expandedDescription) {
      return dictionary.services[index].expandedDescription
    }

    // If not available in the services section, try to get from the main services dictionary
    if (dictionary.items && dictionary.items[index] && dictionary.items[index].expandedDescription) {
      return dictionary.items[index].expandedDescription
    }

    // Fallback to the regular description if no expanded description is available
    return dictionary.services[index].description
  }

  const services = [
    {
      icon: <Tooth className="h-10 w-10 text-orange-500" />,
      title: dictionary.services[0].title,
      description: dictionary.services[0].description,
      expandedDescription: getExpandedDescription(0),
      href: "/services/implants",
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-orange-500" />,
      title: dictionary.services[1].title,
      description: dictionary.services[1].description,
      expandedDescription: getExpandedDescription(1),
      href: "/services/cosmetic",
    },
    {
      icon: <Smile className="h-10 w-10 text-orange-500" />,
      title: dictionary.services[2].title,
      description: dictionary.services[2].description,
      expandedDescription: getExpandedDescription(2),
      href: "/services/general",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: dictionary.services[3].title,
      description: dictionary.services[3].description,
      expandedDescription: getExpandedDescription(3),
      href: "/services/children",
    },
  ]

  return (
    <section className="container py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">{dictionary.title}</h2>
        <p className="mt-4 text-lg text-gray-400">{dictionary.subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: any }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Card className="h-full transition-colors hover:border-orange-500/50 bg-gray-900 border-gray-800 overflow-hidden">
        <CardHeader>
          <motion.div className="mb-2" whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}>
            {service.icon}
          </motion.div>
          <CardTitle className="group-hover:text-orange-500 transition-colors">{service.title}</CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-gray-400">{service.description}</p>
        </CardContent>

        <CardFooter>
          <Button
            variant="link"
            className="px-0 text-orange-500 hover:text-orange-400 group"
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
            <DialogTitle className="text-xl text-orange-500">{service.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-300 mt-2">{service.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-gray-300 whitespace-pre-line">{service.expandedDescription}</div>
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

