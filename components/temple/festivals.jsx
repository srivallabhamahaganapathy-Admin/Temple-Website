import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const festivals = [
  {
    name: "Vinayagar Chaturthi",
    tamilName: "விநாயகர் சதுர்த்தி",
    description: "The most auspicious day celebrating the birth of Lord Ganesha. Ten-day grand celebrations with special abhishekam, processions, and cultural programs.",
    timing: "August/September",
    highlight: true,
  },
  {
    name: "Sankatahara Chaturthi",
    tamilName: "சங்கடஹர சதுர்த்தி",
    description: "Monthly observance on the fourth day after full moon. Special poojas performed for removing obstacles and seeking blessings.",
    timing: "Monthly (4th day after Pournami)",
    highlight: false,
  },
  {
    name: "Thai Poosam",
    tamilName: "தைப்பூசம்",
    description: "Grand celebration in the Tamil month of Thai with special abhishekam and kavadi offerings by devotees.",
    timing: "January/February",
    highlight: false,
  },
  {
    name: "Panguni Uthiram",
    tamilName: "பங்குனி உத்திரம்",
    description: "Celebrated in the month of Panguni with special decorations and temple procession.",
    timing: "March/April",
    highlight: false,
  },
]

export function Festivals() {
  return (
    <section id="festivals" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            Temple Festivals
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            திருவிழாக்கள்
          </h3>
          <p className="text-lg text-foreground/80">Annual Celebrations & Special Occasions</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        {/* Main Festival Card */}
        <div className="mb-8">
          <Card className="overflow-hidden border-2 border-gold shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/temple-festival.jpg"
                  alt="Vinayagar Chaturthi grand celebrations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-gradient-to-br from-maroon to-maroon/90 p-8 text-cream">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium text-gold">Major Festival</span>
                </div>
                <h4 className="mb-2 font-serif text-2xl font-bold text-gold md:text-3xl">
                  Vinayagar Chaturthi
                </h4>
                <p className="mb-4 font-serif text-lg text-cream/90">விநாயகர் சதுர்த்தி</p>
                <p className="mb-6 leading-relaxed text-cream/80">
                  The most auspicious day celebrating the birth of Lord Ganesha. 
                  Ten-day grand celebrations with special abhishekam, processions, 
                  cultural programs, and community gatherings. Thousands of devotees 
                  visit during this divine occasion.
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-gold/20 px-4 py-2">
                  <Calendar className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-gold">August/September (Check temple calendar)</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Festivals Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {festivals.slice(1).map((festival, index) => (
            <Card 
              key={index} 
              className="border-2 border-transparent bg-card transition-all duration-300 hover:border-gold hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-vermillion" />
                  <span className="text-xs font-medium text-vermillion">{festival.timing}</span>
                </div>
                <CardTitle className="font-serif text-lg text-maroon">{festival.name}</CardTitle>
                <p className="text-sm font-medium text-vermillion">{festival.tamilName}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {festival.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
