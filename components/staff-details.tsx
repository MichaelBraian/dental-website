"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StaffCard3D } from "@/components/staff-card-3d"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface StaffMember {
  name: string
  role: string
  image: string
  bio: string
  expandedBio?: string
  education?: string[]
  specialties?: string[]
}

interface StaffDetailsProps {
  title?: string
  subtitle?: string
  members: StaffMember[]
  locale: string
}

export function StaffDetails({ title, subtitle, members, locale }: StaffDetailsProps) {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openMemberDetails = (member: StaffMember) => {
    setSelectedMember(member)
    setIsDialogOpen(true)
  }

  return (
    <section className="container py-16">
      {(title || subtitle) && (
        <div className="mb-12">
          {title && <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>}
          {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <StaffCard3D key={index} member={member} index={index} onClick={openMemberDetails} />
        ))}
      </div>

      {selectedMember && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl text-orange-500">{selectedMember.name}</DialogTitle>
              <DialogDescription className="text-base text-gray-300 mt-2">{selectedMember.role}</DialogDescription>
            </DialogHeader>

            <div className="mt-4 text-gray-300 whitespace-pre-line">
              {selectedMember.expandedBio || selectedMember.bio}
            </div>

            {selectedMember.education && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white mb-2">{locale === "sv" ? "Utbildning" : "Education"}</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {selectedMember.education.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedMember.specialties && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  {locale === "sv" ? "Specialiteter" : "Specialties"}
                </h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {selectedMember.specialties.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <DialogFooter className="mt-6">
              <Button
                variant="default"
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsDialogOpen(false)}
              >
                {locale === "sv" ? "Stäng" : "Close"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

