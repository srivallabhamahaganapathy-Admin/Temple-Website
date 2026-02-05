import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="./images/vinayagar-hero.jpg"
          alt="Lord Vinayagar - Ganesha deity at Arulmigu Sri Vinayagar Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/50 to-maroon/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:min-h-[700px] md:py-32">
        {/* Om Symbol */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-gold/20 md:h-20 md:w-20">
          <span className="text-3xl font-bold text-gold md:text-4xl">ॐ</span>
        </div>

        {/* Tamil Title */}
        <h1 className="mb-2 font-serif text-2xl font-bold text-gold drop-shadow-lg md:text-4xl lg:text-5xl">
          அருள்மிகு ஸ்ரீ வல்லப மகாகணபதி திருக்கோவில்
        </h1>

        {/* English Title */}
        <h2 className="mb-6 text-xl font-semibold text-cream md:text-2xl lg:text-3xl">
          Arulmigu Sri Vallabha Mahaganapathy Temple – Pondicherry
        </h2>

        {/* Subtitle */}
        <p className="mb-8 max-w-2xl text-base text-cream/90 md:text-lg lg:text-xl">
          Om Gam Ganapathaye Namah | ஓம் கம் கணபதயே நமஹ
        </p>

        {/* Decorative Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-16 bg-gold/50 md:w-24" />
          <div className="h-2 w-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gold/50 md:w-24" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gold px-8 text-base font-semibold text-maroon hover:bg-gold/90"
            asChild
          >
            <a href="#sevas">Book Seva</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold bg-transparent px-8 text-base font-semibold text-gold hover:bg-gold/20"
            asChild
          >
            <a href="#donations">Donate Now</a>
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            className="fill-cream"
          />
        </svg>
      </div>
    </section>
  )
}
