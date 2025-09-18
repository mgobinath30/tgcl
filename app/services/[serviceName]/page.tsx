'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AppointmentModal from '@/components/AppointmentModal'
import Sitemap from '@/components/Sitemap'
import { 
  ArrowLeft, 
  Phone, 
  Calendar, 
  Clock, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  ExternalLink
} from 'lucide-react'

// Service data - in a real app, this would come from a database
const servicesData = {
  'jaundice-adult': {
    id: 1,
    title: "Jaundice (Adult)",
    description: "Compassionate expert care tailored to treating jaundice by diagnosing root causes and offering medications, ERCP, PTC, or surgery as needed.",
    icon: "LiverIcon",
    features: [
      "Accurate diagnosis via blood tests, ultrasound, CT scans",
      "Personalized treatment plans",
      "Medications (e.g., antibiotics, ursodeoxycholic acid)",
      "ERCP and PTC for bile duct issues",
      "Minimally invasive or open surgery when required",
      "24/7 support and follow-up care",
    ],
    duration: "Varies per case",
    price: "₹––– (consult hospital)",
    color: "bg-yellow-500",
    overview: "Jaundice in adults is a condition where the skin, whites of the eyes, and mucous membranes turn yellow due to high levels of bilirubin in the blood. Our expert team provides comprehensive diagnosis and treatment for all types of adult jaundice.",
    procedure: "Our treatment process begins with a thorough evaluation including blood tests, imaging studies, and specialized tests to determine the underlying cause. Treatment may include medication, endoscopic procedures, or surgery depending on the specific condition.",
    preparation: "Patients should fast for 8-12 hours before certain tests. Bring all current medications and medical records. Wear comfortable clothing and arrange for transportation after procedures.",
    recovery: "Recovery time varies based on the treatment approach. Most patients can resume normal activities within a few days to weeks. Follow-up appointments are scheduled to monitor progress.",
    faq: [
      {
        question: "What causes jaundice in adults?",
        answer: "Jaundice can be caused by liver disease, bile duct obstruction, blood disorders, or certain medications. Our team will identify the specific cause through comprehensive testing."
      },
      {
        question: "Is jaundice treatment painful?",
        answer: "Most treatments are minimally invasive and cause minimal discomfort. We use advanced techniques and pain management to ensure patient comfort throughout the process."
      },
      {
        question: "How long does treatment take?",
        answer: "Treatment duration varies based on the underlying cause. Some cases resolve quickly with medication, while others may require more extensive procedures."
      },
      {
        question: "What should I expect during recovery?",
        answer: "Recovery depends on the treatment approach. Most patients experience improvement within days to weeks, with full recovery typically within 4-6 weeks."
      }
    ]
  },
  'gallbladder-gallstone-treatment': {
    id: 2,
    title: "Gall Bladder – Gallstone Treatment",
    description: "Comprehensive treatment for gallstones using medication or laparoscopic/open surgery, with focus on fast recovery and minimally invasive care.",
    icon: "GallbladderIcon",
    features: [
      "Medication to dissolve cholesterol-based stones",
      "Laparoscopic gallbladder removal (cholecystectomy)",
      "Open surgery when necessary",
      "Rapid recovery with minimal scarring",
      "Lifestyle guidance to prevent recurrence",
    ],
    duration: "1–3 days",
    price: "₹––– (consult hospital)",
    color: "bg-green-500",
    overview: "Gallstones are hardened deposits that form in the gallbladder. Our advanced treatment options include both medical and surgical approaches to effectively manage gallstone-related conditions.",
    procedure: "We offer comprehensive gallstone treatment including medication therapy for small stones and laparoscopic surgery for larger stones or symptomatic cases. Our minimally invasive approach ensures faster recovery.",
    preparation: "Patients should avoid eating or drinking for 8 hours before surgery. Stop certain medications as advised by your doctor. Arrange for someone to drive you home after the procedure.",
    recovery: "Most patients recover within 1-2 weeks after laparoscopic surgery. You can usually return to normal activities within a few days, with full recovery expected within 2-4 weeks.",
    faq: [
      {
        question: "What are the symptoms of gallstones?",
        answer: "Common symptoms include severe abdominal pain, nausea, vomiting, fever, and jaundice. Pain typically occurs in the upper right abdomen and may radiate to the back or shoulder."
      },
      {
        question: "Can gallstones be treated without surgery?",
        answer: "Small cholesterol stones may be treated with medication, but surgical removal is often the most effective long-term solution for symptomatic gallstones."
      },
      {
        question: "Is laparoscopic surgery safe?",
        answer: "Yes, laparoscopic gallbladder removal is a safe and commonly performed procedure with a high success rate and minimal complications."
      },
      {
        question: "Will I need to change my diet after surgery?",
        answer: "Most patients can return to a normal diet after recovery. We provide dietary guidance to help prevent future gallstone formation."
      }
    ]
  },
  'endoscopy': {
    id: 8,
    title: "Endoscopy",
    description: "Minimally invasive endoscopic procedures—including upper GI, colonoscopy, ERCP, EUS—for accurate diagnosis and treatment of digestive conditions.",
    icon: "EndoscopyIcon",
    features: [
      "Upper endoscopy (EGD), colonoscopy",
      "ERCP for bile/pancreatic duct issues",
      "Endoscopic ultrasound (EUS)",
      "Detection and treatment of GI bleeding, strictures, tumors, polyps",
    ],
    duration: "30–60 minutes",
    price: "₹––– (consult hospital)",
    color: "bg-sky-500",
    overview: "Endoscopy is a minimally invasive procedure that allows our specialists to examine and treat conditions in the digestive tract using advanced imaging technology.",
    procedure: "The procedure involves inserting a thin, flexible tube with a camera through the mouth or rectum to examine the digestive tract. We can also perform treatments during the same procedure.",
    preparation: "Patients need to fast for 8-12 hours before upper endoscopy and follow a special diet before colonoscopy. We provide detailed preparation instructions based on the specific procedure.",
    recovery: "Most patients can resume normal activities the same day. You may experience mild discomfort or bloating, which typically resolves within a few hours.",
    faq: [
      {
        question: "Is endoscopy painful?",
        answer: "Endoscopy is generally not painful. We use sedation to ensure patient comfort throughout the procedure."
      },
      {
        question: "How long does the procedure take?",
        answer: "Most endoscopic procedures take 30-60 minutes, depending on the complexity and whether treatment is performed."
      },
      {
        question: "What are the risks of endoscopy?",
        answer: "Endoscopy is very safe with minimal risks. Our experienced team takes all necessary precautions to ensure patient safety."
      },
      {
        question: "When will I get the results?",
        answer: "Preliminary results are often available immediately. Detailed biopsy results typically take 3-5 business days."
      }
    ]
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { serviceName } = params as { serviceName: string }
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSticky, setIsSticky] = useState(false)

  const service = servicesData[serviceName as keyof typeof servicesData]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor)
    setIsAppointmentModalOpen(true)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The requested service could not be found.</p>
            <Button onClick={() => router.push('/services')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Back Button */}
              <Button variant="outline" onClick={() => router.back()} className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>

              {/* Service Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Shield className="w-8 h-8" />
                      </div>
                      <Badge className="bg-green-500/20 text-green-100 border border-green-400/30">
                        Available
                      </Badge>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">
                      {service.title}
                    </h1>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Service Overview & Features Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-blue-600" />
                      Service Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">{service.overview}</p>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        What's Included
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Procedure Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800">Procedure Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{service.procedure}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Preparation & Recovery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        Preparation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm leading-relaxed">{service.preparation}</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Award className="w-5 h-5 text-green-500" />
                        Recovery
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm leading-relaxed">{service.recovery}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.faq.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-gray-800">{item.question}</span>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </button>
                          {expandedFaq === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-4"
                            >
                              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sitemap Section */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Sitemap />
              </motion.div> */}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className={`${isSticky ? 'sticky top-20' : ''} space-y-4`}>
                {/* Quick Appointment CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="shadow-lg border-2 border-blue-200">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <CardTitle className="text-lg font-bold">Book Appointment</CardTitle>
                      <p className="text-blue-100 text-sm">Schedule your consultation for {service.title}</p>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                      <Button 
                        onClick={() => handleAppointmentClick()}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                        onClick={() => {
                          if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                            window.location.href = 'tel:+919442650505'
                          } else {
                            window.open('tel:+919442650505', '_blank')
                          }
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Service Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-800">Service Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold text-gray-800 text-sm">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Shield className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="text-xs text-gray-500">Starting Price</p>
                          <p className="font-semibold text-gray-800 text-sm">{service.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-800">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Phone className="w-4 h-4 text-blue-500" />
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="font-semibold text-gray-800 text-sm">+91 94426 50505</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <Mail className="w-4 h-4 text-cyan-500" />
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="font-semibold text-gray-800 text-sm">info@tiruppurgastrocare.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <MapPin className="w-4 h-4 text-purple-500" />
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-semibold text-gray-800 text-sm">Tiruppur, Tamil Nadu</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
    </div>
  )
}
