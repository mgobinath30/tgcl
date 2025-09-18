'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react'

interface ContactSectionProps {
  onAppointmentClick?: (doctor?: any) => void
}

const ContactSection = ({ onAppointmentClick }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 94426 50505",
      action: "Call Now",
      color: "bg-blue-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@tiruppurgastrocare.com",
      action: "Send Email",
      color: "bg-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Tiruppur, Tamil Nadu, India",
      action: "Get Directions",
      color: "bg-emerald-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "24/7 Hours Service",
      action: "Book Appointment",
      color: "bg-amber-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or need to schedule an appointment?
            Our team is here to help you with all your digestive health concerns.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Panel - Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-card group hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-blue-600">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-gray-600">{info.details}</p>
                    <Button 
                      className="btn-primary"
                      onClick={() => {
                        if (info.title === "Working Hours") {
                          onAppointmentClick?.()
                        } else if (info.title === "Phone Number") {
                          if (typeof window !== 'undefined' && navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                            window.location.href = 'tel:+919876543210'
                          } else {
                            window.open('tel:+919876543210', '_blank')
                          }
                        } else if (info.title === "Email Address") {
                          window.open('mailto:info@tiruppurgastrocare.com', '_blank')
                        } else if (info.title === "Location") {
                          window.open('https://www.google.com/maps/dir//TIRUPPUR+GASTROCARE+%26+LAPAROSCOPIC+CENTER+154,+Dharapuram+Road+near+Usha+Theater,+opposite+to+HDFC+BANK,+Elango+Layout+Tiruppur,+Pudhukkadu,+Tamil+Nadu+641604/@11.0962364,77.3562595,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba907b6d09df3bd:0x65bab1058b16d6bd!2m2!1d77.3562595!2d11.0962364?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D', '_blank')
                        }
                      }}
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="contact-card h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg">
                  <Send className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-blue-600 font-medium">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-blue-600 font-medium">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-blue-600 font-medium">Message *</label>
                    <textarea
                      placeholder="Please describe your inquiry or concern..."
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none resize-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button className="flex-1 btn-primary btn-lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-outline btn-lg"
                      onClick={() => onAppointmentClick?.()}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <h3 className="text-2xl font-bold mb-2">Visit Our Location</h3>
            <p className="opacity-90">Find us easily in the heart of Tiruppur</p>
          </div>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.229896132765!2d77.3562595!3d11.096236399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b6d09df3bd%3A0x65bab1058b16d6bd!2sTIRUPPUR%20GASTROCARE%20%26%20LAPAROSCOPIC%20CENTER!5e0!3m2!1sen!2sin!4v1756816266928!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tiruppur Gastrocare Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection


