"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Building2, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const donations = [
  {
    id: 1,
    title: "Annadanam",
    tamilTitle: "அன்னதானம்",
    description: "Support the sacred tradition of feeding devotees. Your contribution provides prasadam to hundreds of visitors daily.",
    icon: Heart,
    suggestedAmounts: ["₹1,001", "₹2,001", "₹5,001", "₹11,001"],
  },
  {
    id: 2,
    title: "Temple Maintenance",
    tamilTitle: "கோவில் பராமரிப்பு",
    description: "Help maintain the sanctity and beauty of our ancient temple. Funds go towards repairs, cleaning, and upkeep.",
    icon: Building2,
    suggestedAmounts: ["₹501", "₹1,001", "₹2,501", "₹5,001"],
  },
  {
    id: 3,
    title: "Festival Seva",
    tamilTitle: "திருவிழா சேவை",
    description: "Sponsor festival celebrations and decorations. Contribute to Vinayagar Chaturthi and other auspicious events.",
    icon: PartyPopper,
    suggestedAmounts: ["₹1,001", "₹5,001", "₹11,001", "₹21,001"],
  },
]

export function Donations() {
  const [selectedDonation, setSelectedDonation] = useState(null)

  return (
    <section id="donations" className="bg-maroon py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-gold">
            Support the Temple
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-cream md:text-4xl">
            நன்கொடை வழங்குங்கள்
          </h3>
          <p className="text-lg text-cream/80">Make a Donation</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-gold" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        {/* Donation Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {donations.map((donation) => {
            const IconComponent = donation.icon
            return (
              <Card 
                key={donation.id} 
                className="group border-2 border-gold/30 bg-cream transition-all duration-300 hover:border-gold hover:shadow-xl"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20 transition-transform group-hover:scale-110">
                    <IconComponent className="h-10 w-10 text-maroon" />
                  </div>
                  <CardTitle className="font-serif text-xl text-maroon">{donation.title}</CardTitle>
                  <p className="text-sm font-medium text-vermillion">{donation.tamilTitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm leading-relaxed text-muted-foreground">
                    {donation.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {donation.suggestedAmounts.slice(0, 2).map((amount) => (
                      <span 
                        key={amount} 
                        className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-maroon"
                      >
                        {amount}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gold text-maroon hover:bg-gold/90"
                    onClick={() => setSelectedDonation(donation)}
                  >
                    Donate Now
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Tax Benefit Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-cream/70">
            All donations are eligible for tax benefits under Section 80G of the Income Tax Act.
          </p>
        </div>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={!!selectedDonation} onOpenChange={() => setSelectedDonation(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-xl text-maroon">
              {selectedDonation?.title}
            </DialogTitle>
            <DialogDescription className="text-center">
              {selectedDonation?.tamilTitle}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-lg border-2 border-gold">
              <Image
                src="/images/qr-placeholder.jpg"
                alt="Donation QR Code"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Scan QR to make your donation
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedDonation?.suggestedAmounts.map((amount) => (
                <span 
                  key={amount} 
                  className="rounded-full bg-gold/20 px-4 py-2 text-sm font-medium text-maroon"
                >
                  {amount}
                </span>
              ))}
            </div>
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
