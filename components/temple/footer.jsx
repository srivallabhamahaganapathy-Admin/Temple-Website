import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

const quickLinks = [
  { name: "About Temple", href: "#about" },
  { name: "Sevas & Pooja", href: "#sevas" },
  { name: "Temple Timings", href: "#timings" },
  { name: "Donations", href: "#donations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-maroon text-cream">
      {/* Quote Section */}
      <div className="border-b border-gold/20 bg-maroon/95 py-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-serif text-lg italic text-gold md:text-xl">
            {"\"வக்ரதுண்ட மஹாகாய சூர்யகோடி ஸமப்ரப\""}
          </p>
          <p className="mt-2 font-serif text-base italic text-gold/80 md:text-lg">
           
          </p>
          <p className="mt-3 text-sm text-cream/70">
            O Lord with curved trunk, great body, and the brilliance of a million suns,
            <br className="hidden sm:block" />
            please remove all obstacles from my endeavors, always.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Temple Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold">
                <span className="text-xl font-bold text-maroon">ॐ</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-gold">
                  அருள்மிகு ஸ்ரீ வல்லப மகாகணபதி திருக்கோவில்
                </h3>
                <p className="text-sm text-cream/70">Arulmigu Sri Vallabha Mahaganapathy Temple</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              A sacred abode dedicated to Lord Ganesha, the remover of obstacles 
              and bestower of wisdom. Visit us in Pondicherry to seek the divine 
              blessings of Sri Vinayagar.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-cream transition-all hover:border-gold hover:bg-gold hover:text-maroon"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-gold">Contact</h4>
            <address className="space-y-3 text-sm not-italic text-cream/70">
              <p>
                Main road,  Manakula vinayagar nagar<br />
                Ellaipilaichavady, Pondicherry<br />
                605005, India
              </p>
              <p>
                Phone: +91 95973 29841<br />
                srivallabhamahaganapathy@gmail.com
              </p>
              <p>
                Daily Darshan:<br />
                7:00 AM - 12:00 PM<br />
                4:00 PM - 9:00 PM
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/20 bg-maroon/95 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
            <p className="text-xs text-cream/60">
              © {new Date().getFullYear()} Arulmigu Sri Vallabha Mahaganapathy Temple. All rights reserved.
            </p>
            <p className="text-xs text-cream/60">
              Om Sri Ganeshaya Namaha
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
