import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/app/components/components/ui/button"
import { Card, CardContent } from "@/app/components/components/ui/card"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us today for a free consultation and quote. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We're here to help bring your construction dreams to life. Reach out to us through any of the following
                channels, and our team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+92 03333243332",
                  subtitle: "Mon-Fri 8AM-6PM",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "qkassociate@gmail.com",
                  subtitle: "We'll respond within 24 hours",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  content: "123 Construction Ave",
                  subtitle: "pakistan, karachi, north nazimabad nera by abbasi hospital",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday - saturday 8AM - 6PM",
                  subtitle: "Saturday: 9AM - 4PM",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-r ${contact.color} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <contact.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{contact.title}</div>
                    <div className="text-slate-300 font-medium">{contact.content}</div>
                    <div className="text-sm text-slate-400">{contact.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 text-red-400">Emergency Services</h4>
              <p className="text-slate-300 mb-3">24/7 emergency construction services available</p>
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full">
                Call Emergency Line
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="qkassociate@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+92 03333243332"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20">
                    <option value="" className="bg-slate-800">Select project type</option>
                    <option value="residential" className="bg-slate-800">Residential Construction</option>
                    <option value="commercial" className="bg-slate-800">Commercial Building</option>
                    <option value="renovation" className="bg-slate-800">Renovation & Remodeling</option>
                    <option value="consultation" className="bg-slate-800">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20">
                    <option value="" className="bg-slate-800">Select budget range</option>
                    <option value="under-50k" className="bg-slate-800">Under $50,000</option>
                    <option value="50k-100k" className="bg-slate-800">$50,000 - $100,000</option>
                    <option value="100k-500k" className="bg-slate-800">$100,000 - $500,000</option>
                    <option value="over-500k" className="bg-slate-800">Over $500,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-orange-600 bg-white/10 border-white/20 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-slate-300">
                    I'd like to receive updates about BuildCraft services and projects
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 rounded-xl text-lg font-medium transform hover:scale-105 transition-all duration-300">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-400">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full">
              Call Now: +92 03333243332
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full"
            >
              Schedule Video Call
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full">
              Live Chat Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
