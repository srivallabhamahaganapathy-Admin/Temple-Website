import { Clock, Sun, Moon, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const regularTimings = [
  { event: "Temple Opens", time: "5:30 AM", icon: Sun },
  { event: "Suprabhatam", time: "6:00 AM", icon: Star },
  { event: "Morning Abhishekam", time: "6:30 AM", icon: Clock },
  { event: "Morning Darshan", time: "7:00 AM - 12:00 PM", icon: Sun },
  { event: "Temple Closes (Afternoon)", time: "12:00 PM", icon: Clock },
  { event: "Temple Reopens", time: "4:00 PM", icon: Sun },
  { event: "Evening Pooja", time: "6:00 PM", icon: Moon },
  { event: "Evening Darshan", time: "4:00 PM - 9:00 PM", icon: Moon },
  { event: "Temple Closes", time: "9:00 PM", icon: Moon },
]

const specialTimings = [
  { festival: "Vinayagar Chaturthi", timing: "4:00 AM - 11:00 PM" },
  { festival: "Sankatahara Chaturthi", timing: "7:00 PM - 10:00 PM" },
  { festival: "Ragu Kaala Durgai Poojai", timing: "10:30 AM - 12:00 PM" },
  { festival: "Pournami (Full Moon)", timing: "5:30 AM - 10:00 PM" },
]

export function Timings() {
  return (
    <section id="timings" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            Temple Timings
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            தரிசன நேரம்
          </h3>
          <p className="text-lg text-foreground/80">Darshan & Pooja Schedule</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Regular Timings */}
          <Card className="border-2 border-gold/30 shadow-lg">
            <CardHeader className="bg-maroon text-center">
              <CardTitle className="flex items-center justify-center gap-2 font-serif text-xl text-gold">
                <Clock className="h-5 w-5" />
                Daily Schedule | தினசரி நேரம்
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <tbody>
                  {regularTimings.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <tr
                        key={index}
                        className={`border-b border-border last:border-0 ${
                          index % 2 === 0 ? "bg-card" : "bg-muted"
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <IconComponent className="h-4 w-4 text-vermillion" />
                            <span className="font-medium text-foreground">{item.event}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-maroon">
                          {item.time}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Special Festival Timings */}
          <Card className="border-2 border-gold/30 shadow-lg">
            <CardHeader className="bg-vermillion text-center">
              <CardTitle className="flex items-center justify-center gap-2 font-serif text-xl text-cream">
                <Star className="h-5 w-5" />
                Festival Timings | திருவிழா நேரம்
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <tbody>
                  {specialTimings.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-border last:border-0 ${
                        index % 2 === 0 ? "bg-card" : "bg-muted"
                      }`}
                    >
                      <td className="px-4 py-4">
                        <span className="font-medium text-foreground">{item.festival}</span>
                      </td>
                      <td className="px-4 py-4 text-right font-semibold text-maroon">
                        {item.timing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
            <div className="bg-gold/10 px-4 py-4">
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-semibold text-vermillion">Note:</span> Timings may vary 
                during special occasions. Please contact the temple office for confirmation.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
