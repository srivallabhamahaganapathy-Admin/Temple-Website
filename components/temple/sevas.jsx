"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const sevas = [
  {
    id: 1,
    name: "Abhishekam",
    tamilName: "அபிஷேகம்",
    description: "Sacred bathing ritual of the deity with milk, honey, sandalwood paste, and holy water.",
    amount: "₹501",
    icon: "🪔",
  },
  {
    id: 2,
    name: "Archana",
    tamilName: "அர்ச்சனை",
    description: "Offering of flowers and chanting of 108 names of Lord Vinayagar.",
    amount: "₹101",
    icon: "🌸",
  },
  {
    id: 3,
    name: "Special Pooja",
    tamilName: "சிறப்பு பூஜை",
    description: "Elaborate pooja with full rituals, prasadam, and special darshan for devotees.",
    amount: "₹1001",
    icon: "🙏",
  },
  {
    id: 4,
    name: "Ganapathi Homam",
    tamilName: "கணபதி ஹோமம்",
    description: "Sacred fire ritual invoking blessings of Lord Ganesha for success and prosperity.",
    amount: "₹2501",
    icon: "🔥",
  },
  {
    id: 5,
    name: "Modak Offering",
    tamilName: "மோதகம் படையல்",
    description: "Offering of 21 Modaks (sweet dumplings), Lord Ganesha's favorite delicacy.",
    amount: "₹251",
    icon: "🍡",
  },
  {
    id: 6,
    name: "Sankatahara Chaturthi Pooja",
    tamilName: "சங்கடஹர சதுர்த்தி பூஜை",
    description: "Monthly special pooja performed on Chaturthi day for removing obstacles.",
    amount: "₹351",
    icon: "🌙",
  },
]

export function Sevas() {
  const [selectedSeva, setSelectedSeva] = useState(null)

  return (
    <section id="sevas" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            Seva & Pooja Booking
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            சேவைகள் மற்றும் பூஜைகள்
          </h3>
          <p className="text-lg text-foreground/80">Book your devotional services online</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        {/* Seva Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sevas.map((seva) => (
            <Card 
              key={seva.id} 
              className="group border-2 border-transparent bg-card transition-all duration-300 hover:border-gold hover:shadow-lg"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl transition-transform group-hover:scale-110">
                  {seva.icon}
                </div>
                <CardTitle className="font-serif text-xl text-maroon">{seva.name}</CardTitle>
                <p className="text-sm font-medium text-vermillion">{seva.tamilName}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm leading-relaxed text-muted-foreground">
                  {seva.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <p className="text-center text-2xl font-bold text-maroon">{seva.amount}</p>
                <Button 
                  className="w-full bg-maroon text-cream hover:bg-maroon/90"
                  onClick={() => setSelectedSeva(seva)}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={!!selectedSeva} onOpenChange={() => setSelectedSeva(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-xl text-maroon">
              {selectedSeva?.name} - {selectedSeva?.tamilName}
            </DialogTitle>
            <DialogDescription className="text-center">
              Amount: <span className="font-bold text-maroon">{selectedSeva?.amount}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-lg border-2 border-gold">
              <Image
                src="/images/qr-placeholder.jpg"
                alt="Payment QR Code"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Scan QR to proceed with booking
            </p>
            <div className="rounded-lg bg-vermillion/10 px-4 py-2">
              <p className="text-center text-xs font-medium text-vermillion">
                This is a demo payment QR (Demo Only)
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
