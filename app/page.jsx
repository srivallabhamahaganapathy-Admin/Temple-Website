import { Header } from "@/components/temple/header"
import { Hero } from "@/components/temple/hero"
import { About } from "@/components/temple/about"
import { Sevas } from "@/components/temple/sevas"
import { Timings } from "@/components/temple/timings"
import { Donations } from "@/components/temple/donations"
import { Gallery } from "@/components/temple/gallery"
import { Festivals } from "@/components/temple/festivals"
import { Contact } from "@/components/temple/contact"
import { Footer } from "@/components/temple/footer"

export default function VinayagarTemplePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Sevas />
        <Timings />
        <Donations />
        <Gallery />
        <Festivals />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
