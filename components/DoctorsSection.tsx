'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  User, 
  Star, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Heart,
  MessageCircle,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'

interface Award {
  id: string
  title: string
  year: string
  organization: string
  image: string
  description: string
}

interface Doctor {
  id: number
  name: string
  specialization: string
  experience: string
  education: string
  rating: number
  patients: number
  image: string
  languages: string[]
  availability: string[]
  about: string
  achievements: string[]
  specialties: string[]
  awards: Award[]
  availableTimes: string[]
  contactInfo: {
    phone: string
    email: string
    location: string
  }
}

interface DoctorsSectionProps {
  onAppointmentClick?: (doctor?: any) => void
}

const DoctorsSection = ({ onAppointmentClick }: DoctorsSectionProps) => {
  const [hoveredDoctor, setHoveredDoctor] = useState<number | null>(null)
  const [selectedAward, setSelectedAward] = useState<Award | null>(null)
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0)
  const [currentAwardDoctorId, setCurrentAwardDoctorId] = useState<number | null>(null)
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false)

  const doctors: Doctor[] = [
    { 
      id: 1,
      name: "Dr. Shenthil Prabhu M",
      specialization: "Senior Gastroenterologist",
      experience: "15+ Years",
      education: "MBBS, MD (Gastroenterology)",
      rating: 4.9,
      patients: 5000,
      image: "/images/doctor-1.jpg",
      languages: ["English", "Tamil", "Hindi"],
      availability: ["Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
      about: "Dr. Shenthil Prabhu M is a highly experienced gastroenterologist with over 15 years of practice. He specializes in advanced endoscopic procedures and has treated thousands of patients with various digestive disorders. His expertise includes colonoscopy, gastroscopy, and therapeutic endoscopy.",
      achievements: [
        "Fellowship in Advanced Endoscopy",
        "Published 25+ Research Papers",
        "Best Doctor Award 2022",
        "Member of Indian Society of Gastroenterology"
      ],
      specialties: [
        "Advanced Endoscopy",
        "Colonoscopy & Gastroscopy",
        "Therapeutic Endoscopy",
        "Digestive Disorders",
        "Inflammatory Bowel Disease"
      ],
      awards: [
        {
          id: "1",
          title: "Best Gastroenterologist Award",
          year: "2023",
          organization: "Indian Medical Association",
          image: "/images/award-1.jpg",
          description: "Recognized for excellence in gastroenterology and patient care"
        },
        {
          id: "2",
          title: "Advanced Endoscopy Excellence",
          year: "2022",
          organization: "Gastroenterology Society of India",
          image: "/images/award-2.jpg",
          description: "Awarded for outstanding contributions to advanced endoscopic procedures"
        },
        {
          id: "3",
          title: "Patient Care Excellence",
          year: "2021",
          organization: "Tamil Nadu Medical Council",
          image: "/images/award-3.jpg",
          description: "Recognized for exceptional patient care and treatment outcomes"
        }
      ],
      availableTimes: [
        "9:00 AM - 10:00 AM",
        "10:30 AM - 11:30 AM",
        "2:00 PM - 3:00 PM",
        "3:30 PM - 4:30 PM",
        "5:00 PM - 6:00 PM"
      ],
      contactInfo: {
        phone: "+91 94426 50505",
        email: "dr.rajesh@tiruppurgastrocare.com",
        location: "Tiruppur, Tamil Nadu"
      }
    },
    {
      id: 2,
      name: "Dr. Sathiskumar",
      specialization: "Surgical Gastroenterology & Liver Transplantation",
      experience: "12+ Years",
      education: "MBBS, MD (Internal Medicine), DM (Gastroenterology)",
      rating: 4.8,
      patients: 3500,
      image: "/images/doctor-2.jpg",
      languages: ["English", "Tamil", "Telugu"],
      availability: ["Mon-Sat: 10AM-7PM"],
      about: "Dr. Sathiskumar is a dedicated gastroenterologist with expertise in liver diseases and inflammatory bowel disorders. She is known for her compassionate patient care and innovative treatment approaches. She has successfully treated numerous complex cases.",
      achievements: [
        "Specialization in Liver Diseases",
        "Expert in IBD Management",
        "Women's Health Award 2021",
        "International Conference Speaker"
      ],
      specialties: [
        "Liver Diseases",
        "Inflammatory Bowel Disease",
        "Hepatitis Treatment",
        "Women's Digestive Health",
        "Nutritional Counseling"
      ],
      awards: [
        {
          id: "4",
          title: "Women's Health Excellence Award",
          year: "2023",
          organization: "Women's Health Foundation",
          image: "/images/award-4.jpg",
          description: "Recognized for outstanding contributions to women's digestive health"
        },
        {
          id: "5",
          title: "IBD Specialist Recognition",
          year: "2022",
          organization: "Crohn's & Colitis Foundation",
          image: "/images/award-5.jpg",
          description: "Awarded for expertise in inflammatory bowel disease management"
        }
      ],
      availableTimes: [
        "10:00 AM - 11:00 AM",
        "11:30 AM - 12:30 PM",
        "2:30 PM - 3:30 PM",
        "4:00 PM - 5:00 PM",
        "5:30 PM - 6:30 PM"
      ],
      contactInfo: {
        phone: "+91 98765 43211",
        email: "dr.priya@tiruppurgastrocare.com",
        location: "Tiruppur, Tamil Nadu"
      }
    },
    {
      id: 3,
      name: "Dr. Loganayaki MS., DGO",
      specialization: "Gynaecology & General Surgery",
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      rating: 4.9,
      patients: 6000,
      image: "/images/doctor-3.jpg",
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about: "Dr. Loganayaki MS., DGO is a renowned Gynaecology & General Surgery with extensive experience in minimally invasive procedures. she has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques. His expertise includes gallbladder surgery, hernia repair, and appendectomy.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs"
      ],
      specialties: [
        "Laparoscopic Surgery",
        "Gallbladder Surgery",
        "Hernia Repair",
        "Appendectomy",
        "Minimally Invasive Procedures"
      ],
      awards: [
        {
          id: "6",
          title: "Surgical Excellence Award",
          year: "2023",
          organization: "Indian Association of Gastrointestinal Endo-Surgeons",
          image: "/images/award-6.jpg",
          description: "Recognized for excellence in laparoscopic surgical procedures"
        },
        {
          id: "7",
          title: "Minimally Invasive Surgery Pioneer",
          year: "2022",
          organization: "International Society of Laparoscopic Surgery",
          image: "/images/award-7.jpg",
          description: "Awarded for pioneering work in minimally invasive surgical techniques"
        },
        {
          id: "8",
          title: "Best Surgeon Award",
          year: "2021",
          organization: "Tamil Nadu Surgical Society",
          image: "/images/award-8.jpg",
          description: "Recognized for outstanding surgical skills and patient outcomes"
        }
      ],
      availableTimes: [
        "8:00 AM - 9:00 AM",
        "9:30 AM - 10:30 AM",
        "11:00 AM - 12:00 PM",
        "2:00 PM - 3:00 PM",
        "3:30 PM - 4:30 PM"
      ],
      contactInfo: {
        phone: "+91 98765 43212",
        email: "dr.arun@tiruppurgastrocare.com",
        location: "Tiruppur, Tamil Nadu"
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of board-certified gastroenterologists and surgeons bring years of experience 
            and expertise to provide you with the highest quality digestive health care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card 
                className="doctor-card group hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                onMouseEnter={() => setHoveredDoctor(doctor.id)}
                onMouseLeave={() => setHoveredDoctor(null)}
              >
                <CardHeader className="text-center pb-4">
                  {/* Doctor Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg"
                  >
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>

                  {/* Doctor Info */}
                  <CardTitle className="text-lg font-semibold text-blue-600 mb-2">
                    {doctor.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{doctor.specialization}</p>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-sm text-gray-500">({doctor.patients}+ patients)</span>
                  </div>

                  {/* Experience Badge */}
                  <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
                    <Award className="w-4 h-4 mr-1" />
                    {doctor.experience} Experience
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{doctor.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{doctor.experience} Experience</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-900">Languages:</h5>
                    <div className="flex flex-wrap gap-1">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-900">Availability:</h5>
                    <div className="space-y-1">
                      {doctor.availability.map((time) => (
                        <p key={time} className="text-sm text-gray-600">{time}</p>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Higher z-index to stay above hover overlay */}
                  <div className="space-y-3 relative z-10">
                    <Button 
                      onClick={() => onAppointmentClick?.(doctor)}
                      className="w-full btn-primary"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book with Dr. {doctor.name.split(' ')[1]}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full btn-outline"
                      onClick={() => {
                        if (typeof window !== 'undefined' && navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                          window.location.href = 'tel:+919876543210'
                        } else {
                          window.open('tel:+919876543210', '_blank')
                        }
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Overlay with Tabbed Information - Lower z-index */}
                <AnimatePresence>
                  {hoveredDoctor === doctor.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg p-6 overflow-y-auto z-0"
                      onMouseEnter={() => setHoveredDoctor(doctor.id)}
                      onMouseLeave={() => setHoveredDoctor(null)}
                    >
                      <div className="h-full">
                        <Tabs defaultValue="overview" className="h-full">
                          <TabsList className="grid w-full grid-cols-5 mb-4">
                            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                            <TabsTrigger value="experience" className="text-xs">Experience</TabsTrigger>
                            <TabsTrigger value="specialties" className="text-xs">Specialties</TabsTrigger>
                            <TabsTrigger value="awards" className="text-xs">Awards</TabsTrigger>
                            <TabsTrigger value="contact" className="text-xs">Contact</TabsTrigger>
                          </TabsList>

                          <TabsContent value="overview" className="space-y-4">
                            <h3 className="font-semibold text-blue-600">About Dr. {doctor.name.split(' ')[1]}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{doctor.about}</p>
                            <div className="space-y-2">
                              <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {doctor.achievements.map((achievement, idx) => (
                                  <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                                    <Award className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="experience" className="space-y-4">
                            <h3 className="font-semibold text-blue-600">Professional Experience</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <Briefcase className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{doctor.experience} Experience</p>
                                  <p className="text-sm text-gray-600">{doctor.specialization}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                  <GraduationCap className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Education</p>
                                  <p className="text-sm text-gray-600">{doctor.education}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <Users className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">Patients Treated</p>
                                  <p className="text-sm text-gray-600">{doctor.patients}+ patients</p>
                                </div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="specialties" className="space-y-4">
                            <h3 className="font-semibold text-blue-600">Medical Specialties</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {doctor.specialties.map((specialty, idx) => (
                                <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                                  <Heart className="w-4 h-4 text-red-500" />
                                  <span className="text-sm text-gray-700">{specialty}</span>
                                </div>
                              ))}
                            </div>
                          </TabsContent>

                          <TabsContent value="awards" className="space-y-4">
                            <h3 className="font-semibold text-blue-600">Awards & Recognition</h3>
                            
                            {/* Awards Slider */}
                            <div className="space-y-4">
                              <div className="relative">
                                <div className="flex space-x-2 overflow-x-auto pb-2">
                                  {doctor.awards.map((award, index) => (
                                    <div
                                      key={award.id}
                                      className="flex-shrink-0 w-32 cursor-pointer"
                                      onClick={() => {
                                        setSelectedAward(award)
                                        setCurrentAwardIndex(index)
                                        setCurrentAwardDoctorId(doctor.id)
                                        setIsAwardModalOpen(true)
                                      }}
                                    >
                                      <div className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors">
                                        <div className="w-full h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center mb-2">
                                          <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="text-xs font-medium text-gray-900 truncate">{award.title}</h4>
                                        <p className="text-xs text-gray-600">{award.year}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Award Information */}
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-900">Recent Awards:</h4>
                                <div className="space-y-2">
                                  {doctor.awards.slice(0, 2).map((award) => (
                                    <div key={award.id} className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
                                      <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <p className="text-sm font-medium text-gray-900">{award.title}</p>
                                        <p className="text-xs text-gray-600">{award.organization} - {award.year}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Available Times */}
                            <div className="space-y-2">
                              <h4 className="font-medium text-gray-900 flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                Available Times
                              </h4>
                              <div className="grid grid-cols-1 gap-1">
                                {doctor.availableTimes.map((time, idx) => (
                                  <div key={idx} className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-700">{time}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="contact" className="space-y-4">
                            <h3 className="font-semibold text-blue-600">Contact Information</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <Phone className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Phone</p>
                                  <p className="text-sm text-gray-600">{doctor.contactInfo.phone}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                  <Mail className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Email</p>
                                  <p className="text-sm text-gray-600">{doctor.contactInfo.email}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <MapPin className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Location</p>
                                  <p className="text-sm text-gray-600">{doctor.contactInfo.location}</p>
                                </div>
                              </div>
                            </div>
                            {/* <Button 
                              onClick={() => onAppointmentClick?.(doctor)}
                              className="w-full btn-primary mt-4"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Book Appointment
                            </Button> */}
                          </TabsContent>
                        </Tabs>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey to Better Health?</h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a consultation with our expert team and take the first step towards 
              better digestive health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onAppointmentClick?.()}
                className="btn-secondary btn-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="btn-outline-white btn-lg text-black"
                onClick={() => {
                  if (typeof window !== 'undefined' && navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                    window.location.href = 'tel:+919876543210'
                  } else {
                    window.open('tel:+919876543210', '_blank')
                  }
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 94426 50505
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Award Preview Modal */}
      <AnimatePresence>
        {isAwardModalOpen && selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsAwardModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Award Details</h2>
                  <button
                    onClick={() => setIsAwardModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Award Image */}
                <div className="mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Award className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Award Information */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedAward.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {selectedAward.year}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {selectedAward.organization}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedAward.description}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentDoctor = doctors.find(d => d.id === currentAwardDoctorId)
                      if (currentDoctor) {
                        const currentIndex = currentDoctor.awards.findIndex(a => a.id === selectedAward.id)
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentDoctor.awards.length - 1
                        setSelectedAward(currentDoctor.awards[prevIndex])
                        setCurrentAwardIndex(prevIndex)
                      }
                    }}
                    disabled={doctors.find(d => d.id === currentAwardDoctorId)?.awards.length === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex space-x-2">
                    {doctors.find(d => d.id === currentAwardDoctorId)?.awards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const currentDoctor = doctors.find(d => d.id === currentAwardDoctorId)
                          if (currentDoctor) {
                            setSelectedAward(currentDoctor.awards[index])
                            setCurrentAwardIndex(index)
                          }
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentAwardIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => {
                      const currentDoctor = doctors.find(d => d.id === currentAwardDoctorId)
                      if (currentDoctor) {
                        const currentIndex = currentDoctor.awards.findIndex(a => a.id === selectedAward.id)
                        const nextIndex = currentIndex < currentDoctor.awards.length - 1 ? currentIndex + 1 : 0
                        setSelectedAward(currentDoctor.awards[nextIndex])
                        setCurrentAwardIndex(nextIndex)
                      }
                    }}
                    disabled={doctors.find(d => d.id === currentAwardDoctorId)?.awards.length === 1}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DoctorsSection
