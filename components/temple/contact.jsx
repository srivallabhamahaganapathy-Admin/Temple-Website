"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", mobile: "", message: "" })
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-serif text-sm font-medium uppercase tracking-wider text-vermillion">
            Contact Us
          </h2>
          <h3 className="mb-4 font-serif text-3xl font-bold text-maroon md:text-4xl">
            தொடர்பு கொள்ள
          </h3>
          <p className="text-lg text-foreground/80">Get in Touch with the Temple</p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 rounded bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-vermillion" />
            <div className="h-1 w-8 rounded bg-gold" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-gold/30 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <MapPin className="h-5 w-5 text-maroon" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-maroon">Address</h4>
                      <p className="text-muted-foreground">
                        Arulmigu Sri vallabha mahaganapathy Temple<br />
                        Main road, Manakula vinayagar nagar, Ellaipillaichavady<br />
                        Pondicherry - 605005, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Phone className="h-5 w-5 text-maroon" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-maroon">Phone</h4>
                      <p className="text-muted-foreground">
                        +91 95973 29841<br />
                        +91 97900 09051
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Mail className="h-5 w-5 text-maroon" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-maroon">Email</h4>
                      <p className="text-muted-foreground">
                        srivallabhamahaganapathy@gmail.com<br />
                        
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20">
                      <Clock className="h-5 w-5 text-maroon" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-maroon">Office Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Sunday<br />
                        7:00 AM - 12:00 PM & 4:00 PM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden border-2 border-gold/30 shadow-lg">
              <div className="relative h-64 w-full bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591458.72916672!2d79.67356325156493!3d12.486492296222087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1106aef6fcbcab99%3A0xfeaf478031e61718!2sSri%20Vallabha%20Maha%20Ganapathi%20Alayam!5e1!3m2!1sen!2sin!4v1770227507755!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location Map"
                  className="grayscale"
                />
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-gold/30 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h4 className="mb-6 font-serif text-xl font-semibold text-maroon">
                Send us a Message | செய்தி அனுப்பு
              </h4>

              {submitted ? (
                <div className="rounded-lg bg-temple-green/10 p-6 text-center">
                  <div className="mb-4 text-4xl">🙏</div>
                  <p className="font-serif text-lg font-semibold text-temple-green">
                    Thank you for your message!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name / பெயர் <span className="text-vermillion">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="border-border focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="mobile" 
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Mobile Number / தொலைபேசி <span className="text-vermillion">*</span>
                    </label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="border-border focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message / செய்தி <span className="text-vermillion">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="border-border focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-maroon text-cream hover:bg-maroon/90"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
