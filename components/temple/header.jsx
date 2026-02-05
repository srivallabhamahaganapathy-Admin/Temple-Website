"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Temple" },
  { href: "#sevas", label: "Sevas" },
  { href: "#timings", label: "Timings" },
  { href: "#donations", label: "Donations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-maroon shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold md:h-12 md:w-12">
              <span className="text-lg font-bold text-maroon md:text-xl">ஓம்</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-sm font-bold text-gold md:text-base">
                அருள்மிகு ஸ்ரீ வல்லப மகாகணபதி திருக்கோவில் 
              </h1>
              <p className="text-xs text-cream/80 md:text-sm">Arulmigu Sri Vallabha Mahaganapathy Temple</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-gold/20 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-cream hover:bg-gold/20 hover:text-gold lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-gold/20 bg-maroon lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-4 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-gold/20 hover:text-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
