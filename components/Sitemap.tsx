'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ChevronDown, 
  ChevronUp, 
  Home, 
  Users, 
  Stethoscope, 
  Phone, 
  MapPin,
  Building2,
  Calendar,
  FileText,
  ExternalLink
} from 'lucide-react'

interface SitemapSection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  links: {
    title: string
    href: string
    description?: string
  }[]
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { title: "Home", href: "/", description: "Welcome to Tiruppur Gastrocare" },
      { title: "About Us", href: "/about", description: "Learn about our hospital and team" },
      { title: "Contact", href: "/contact", description: "Get in touch with us" },
      { title: "Infrastructure", href: "/infrastructure", description: "Explore our facilities" },
      { title: "Hospital Tour", href: "/hospital-tour", description: "Virtual tour of our hospital" }
    ]
  },
  {
    title: "Services",
    icon: Stethoscope,
    links: [
      { title: "All Services", href: "/services", description: "Complete list of our medical services" },
      { title: "Jaundice Treatment", href: "/services/jaundice-adult", description: "Adult jaundice care and treatment" },
      { title: "Gallstone Treatment", href: "/services/gallbladder-gallstone-treatment", description: "Gallbladder and gallstone surgery" },
      { title: "Endoscopy", href: "/services/endoscopy", description: "Diagnostic and therapeutic endoscopy" },
      { title: "Laparoscopic Surgery", href: "/services/laparoscopic-robotic-surgery", description: "Minimally invasive surgical procedures" },
      { title: "Cancer Care", href: "/services/digestive-cancer-care", description: "Comprehensive cancer treatment" },
      { title: "Transplant Services", href: "/services/multi-organ-transplant", description: "Organ transplant services" }
    ]
  },
  {
    title: "Specialties",
    icon: Users,
    links: [
      { title: "Gastroenterology", href: "/services/medical-gastroenterology", description: "Digestive health specialists" },
      { title: "Hepatology", href: "/services/liver-pancreas-care", description: "Liver and pancreas care" },
      { title: "Urology", href: "/services/urology", description: "Urinary and male reproductive health" },
      { title: "Nephrology", href: "/services/nephrology", description: "Kidney care and treatment" },
      { title: "Cardiology", href: "/services/cardiology", description: "Heart health and care" },
      { title: "Gynecology", href: "/services/obstetrics-gynaecology", description: "Women's health services" }
    ]
  },
  {
    title: "Patient Care",
    icon: Calendar,
    links: [
      { title: "Book Appointment", href: "/contact", description: "Schedule your consultation" },
      { title: "Emergency Care", href: "/contact", description: "24/7 emergency services" },
      { title: "Patient Portal", href: "/contact", description: "Access your medical records" },
      { title: "Insurance", href: "/contact", description: "Insurance and billing information" },
      { title: "Patient Education", href: "/blog", description: "Health information and resources" }
    ]
  },
  {
    title: "Resources",
    icon: FileText,
    links: [
      { title: "Blog", href: "/blog", description: "Health articles and news" },
      { title: "Health Tips", href: "/blog", description: "Preventive care and wellness" },
      { title: "Patient Stories", href: "/blog", description: "Success stories and testimonials" },
      { title: "Research", href: "/blog", description: "Medical research and innovations" },
      { title: "Downloads", href: "/contact", description: "Forms and documents" }
    ]
  },
  {
    title: "Contact & Location",
    icon: MapPin,
    links: [
      { title: "Our Location", href: "/contact", description: "Find us in Tiruppur" },
      { title: "Phone Numbers", href: "tel:+919442650505", description: "+91 94426 50505" },
      { title: "Email Us", href: "mailto:info@tiruppurgastrocare.com", description: "info@tiruppurgastrocare.com" },
      { title: "Working Hours", href: "/contact", description: "24/7 Emergency, Mon-Sat: 8AM-8PM" },
      { title: "Directions", href: "https://maps.google.com", description: "Get directions to our hospital" }
    ]
  }
]

export default function Sitemap() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0, 1]))

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          Site Map
        </CardTitle>
        <p className="text-gray-600">Navigate through all pages and sections of our website</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sitemapData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-800">{section.title}</span>
                </div>
                {expandedSections.has(sectionIndex) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.has(sectionIndex) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.href}
                          className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: linkIndex * 0.05 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                {link.title}
                              </h4>
                              {link.description && (
                                <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                              )}
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-3">Website Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Specialties</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
