"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

const galleryImages = [
  {
    src: "./images/vinayagar-hero.jpg",
    alt: "Lord Vinayagar deity adorned with flowers and ornaments",
    title: "Sri Vinayagar",
  },
  {
    src: "./images/temple-exterior.jpg",
    alt: "Temple exterior view with traditional gopuram architecture",
    title: "Temple Gopuram",
  },
  {
    src: "./images/temple-festival.jpg",
    alt: "Vinayagar Chaturthi festival celebrations with decorated idol",
    title: "Festival Celebrations",
  },
  {
    src: "./images/temple-pooja.jpg",
    alt: "Abhishekam pooja ceremony in progress",
    title: "Abhishekam Pooja",
  },
  {
    src: "./images/gallery-1.jpg",
    alt: "Traditional brass temple lamps illuminated",
    title: "Temple Lamps",
  },
  {
    src: "./images/gallery-2.jpg",
    alt: "Fresh flower offerings and garlands",
    title: "Flower Offerings",
  },
  {
    src: "./images/gallery-3.jpg",
    alt: "Temple bells at the entrance",
    title: "Temple Bells",
  },
  {
    src: "./images/gallery-4.jpg",
    alt: "Traditional kolam rangoli patterns at temple entrance",
    title: "Temple Kolam",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            Photo Gallery
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            படத்தொகுப்பு
          </h3>
          <p className="text-lg text-foreground/80">Glimpses of Divine Beauty</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
              type="button"
              aria-label={`View ${image.title}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-center font-serif text-sm font-semibold text-cream">
                  {image.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-maroon/80 text-cream transition-colors hover:bg-maroon"
            type="button"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-maroon/80 p-4">
                <p className="text-center font-serif text-lg font-semibold text-cream">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
