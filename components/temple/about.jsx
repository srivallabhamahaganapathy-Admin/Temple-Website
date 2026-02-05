import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            About Our Temple
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            கோவிலின் வரலாறு
          </h3>
          <p className="text-lg text-foreground/80">Temple History & Significance</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="../public/temple-exterior.jpg"
                alt="Arulmigu Sri Vinayagar Temple exterior view with traditional gopuram"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border-2 border-gold/30" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="rounded-lg border-l-4 border-gold bg-card p-6 shadow-md">
              <h4 className="mb-3 font-serif text-xl font-semibold text-maroon">
                திருக்கோவிலின் சிறப்பு
              </h4>
              <p className="leading-relaxed text-foreground/80">
                Arulmigu Sri Vinayagar Temple, located in the heart of Pondicherry, is a sacred 
                abode dedicated to Lord Ganesha – the remover of obstacles and the bestower of 
                wisdom and prosperity. This ancient temple has been a beacon of spiritual 
                enlightenment for devotees for over a century.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-vermillion bg-card p-6 shadow-md">
              <h4 className="mb-3 font-serif text-xl font-semibold text-maroon">
                வரலாற்று முக்கியத்துவம்
              </h4>
              <p className="leading-relaxed text-foreground/80">
                The temple architecture follows the traditional Dravidian style, featuring 
                intricate carvings and a magnificent gopuram. The presiding deity, Sri Vinayagar, 
                is believed to grant the wishes of sincere devotees who worship with pure hearts.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-temple-green bg-card p-6 shadow-md">
              <h4 className="mb-3 font-serif text-xl font-semibold text-maroon">
                தினசரி வழிபாடு
              </h4>
              <p className="leading-relaxed text-foreground/80">
                Daily rituals include Suprabhatam, Abhishekam, Archana, and Deeparadhana. 
                Special poojas are conducted during Vinayagar Chaturthi, Sankatahara Chaturthi, 
                and other auspicious occasions, drawing thousands of devotees from across 
                Tamil Nadu and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
