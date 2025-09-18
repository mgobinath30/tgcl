'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Award, 
  Users, 
  Shield, 
  Target, 
  Eye,
  Calendar,
  Phone,
  MapPin,
  Mail,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'
import AwardsModal from '@/components/AwardsModal'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [selectedAward, setSelectedAward] = useState<any>(null)

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor)
    setIsAppointmentModalOpen(true)
  }

  const handleAwardClick = (award: any) => {
    setSelectedAward(award)
    setIsAwardsModalOpen(true)
  }

  const coreValues = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make is centered around our patients' well-being and comfort."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest standards of safety and hygiene in all our procedures."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our medical practice and patient care."
    },
    {
      icon: Users,
      title: "Compassionate Team",
      description: "Our team of healthcare professionals is dedicated to providing compassionate care."
    }
  ]

  const achievements = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Patient Rating" },
    { icon: CheckCircle, value: "100%", label: "Success Rate" }
  ]

  const teamMembers = [
    {
      name: "Dr. Shenthil Prabhu M",
      position: "Senior Gastroenterologist",
      experience: "20+ years",
      image: "/images/doctor-1.jpg"
    },
    {
      name: "Dr. Sathiskumar",
      position: "Surgical Gastroenterology & Liver Transplantation",
      experience: "15+ years",
      image: "/images/doctor-2.jpg"
    },
    {
      name: "Dr. Loganayaki MS., DGO",
      position: "Gynaecology & General Surgery",
      experience: "18+ years",
      image: "/images/doctor-3.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-600 hover:bg-blue-100">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading Gastroenterology Care in{' '}
              <span className="text-gradient">Tiruppur</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, we have been at the forefront of digestive health care, 
              providing advanced medical solutions with compassion and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleAppointmentClick()}
                className="btn-primary btn-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="btn-outline btn-lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = 'tel:+919876543210'
                  }
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide world-class gastroenterology care with cutting-edge technology, 
                ensuring every patient receives personalized treatment in a compassionate environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Advanced diagnostic and treatment procedures</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Experienced team of medical professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Patient-centered approach to healthcare</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Eye className="w-6 h-6 mr-3" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 leading-relaxed">
                    To be the most trusted and preferred gastroenterology center in Tamil Nadu, 
                    known for excellence in patient care, innovation in medical procedures, 
                    and commitment to community health.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-sm opacity-90">Patients Treated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure the highest quality of care for our patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and patient satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hospital Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading medical organizations and institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Incredible Book Of Records",
                year: "",
                organization: "Incredible Book Of Records",
                description: "World's Successful Surgery of an Heaviest Abdominal Tumour",
                icon: Award,
                image: './images/book.png'
              },
              {
                title: "Excellence in Endoscopy",
                year: "2023",
                organization: "Gastroenterology Society of India",
                description: "Awarded for advanced endoscopic procedures and innovative treatment approaches.",
                icon: Star
              },
              {
                title: "Patient Safety Excellence",
                year: "2022",
                organization: "National Accreditation Board for Hospitals",
                description: "Recognized for maintaining the highest standards of patient safety and care.",
                icon: Shield
              },
              {
                title: "Innovation in Laparoscopic Surgery",
                year: "2022",
                organization: "Indian Association of Gastrointestinal Endo-Surgeons",
                description: "Awarded for pioneering work in minimally invasive surgical techniques.",
                icon: Target
              },
              {
                title: "Community Health Leadership",
                year: "2021",
                organization: "Tamil Nadu Health Department",
                description: "Recognized for outstanding contribution to community health and wellness.",
                icon: Users
              },
              {
                title: "Digital Health Excellence",
                year: "2021",
                organization: "Healthcare Innovation Awards",
                description: "Awarded for implementing cutting-edge digital health solutions.",
                icon: Eye
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => handleAwardClick(award)}>
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <award.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {award.organization}
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {award.year}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.description}
                    </p>
                    <div className="mt-4 text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view details →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced healthcare professionals is dedicated to providing you with the best care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.experience} Experience</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey to Better Health?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book your appointment today and experience world-class gastroenterology care 
              with our expert team of medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleAppointmentClick()}
                className="bg-white text-blue-600 hover:bg-gray-100 btn-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="btn-outline btn-lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = 'tel:+919876543210'
                  }
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
      
      <AwardsModal
        isOpen={isAwardsModalOpen}
        onClose={() => setIsAwardsModalOpen(false)}
        award={selectedAward}
      />
    </div>
  )
}
