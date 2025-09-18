'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  Star,
  Users,
  Award,
  Shield,
  Heart,
  Activity,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

interface HeroSectionProps {
  onAppointmentClick?: (doctor?: any) => void
}

const HeroSection = ({ onAppointmentClick }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const slides = [
    {
    title: "Modern Gastro & Laparoscopy Center",
    subtitle: "World-class facilities for advanced care.",
    image: "/images/building-with-wood.png",
    gradient: "linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.55))"
  },
    {
    title: "Led by Expert Specialists",
    subtitle: "Trusted care under our chief gastroenterologist.",
    image: "/images/cheif.png",
    gradient: "linear-gradient(rgba(6,182,212,0.55), rgba(14,116,144,0.55))"
  },
    {
    title: "Advanced Scanning Center",
    subtitle: "High-precision imaging for accurate diagnosis.",
    image: "/images/scan.JPG",
  },
  {
    title: "State-of-the-Art Operation Theater",
    subtitle: "Modern surgical suites for safe procedures.",
    image: "/images/operation.JPG",
  },
  {
    title: "Cutting-Edge Medical Equipment",
    subtitle: "Technology that ensures better outcomes.",
    image: "/images/cuting-edge.JPG",
  },
  {
    title: "Patient-Centric Wards",
    subtitle: "Spacious, hygienic, and fully equipped rooms.",
    image: "/images/ward.JPG",
  },
  {
    title: "24/7 Pharmacy Support",
    subtitle: "All essential medicines under one roof.",
    image: "/images/pharmacy.JPG",
  },
  {
    title: "Round-the-Clock Care",
    subtitle: "Emergency & critical support anytime.",
    image: "/images/24care.JPG",
  }
  ]

  useEffect(() => {
    if (!isClient) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length, isClient])

  const trustIndicators = [
    { 
      icon: Users, 
      text: "5000+ Patients", 
      value: "5000+",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      icon: Award, 
      text: "15+ Years Experience", 
      value: "15+",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    { 
      icon: Star, 
      text: "4.9 Rating", 
      value: "4.9",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    { 
      icon: Shield, 
      text: "100% Safe", 
      value: "100%",
      color: "text-green-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`
            }}
          >
            <div className="w-4 h-4 bg-blue-200 rounded-full opacity-30" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Leading Gastroenterology Center
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Advanced
              <br />
              <span className="text-gradient">Digestive Health</span>
              <br />
              Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Experience world-class gastroenterology care with our expert team of specialists. 
              State-of-the-art technology meets compassionate care for your digestive health.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                onClick={() => onAppointmentClick?.()}
                className="btn-primary btn-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="btn-outline btn-lg"
                onClick={() => {
                  if (typeof window !== 'undefined' && navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                    window.location.href = 'tel:+919876543210'
                  } else {
                    window.open('tel:+919876543210', '_blank')
                  }
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-12 h-12 ${indicator.bgColor} rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <indicator.icon className={`w-6 h-6 ${indicator.iconColor}`} />
                  </div>
                  <div className={`text-2xl font-bold ${indicator.color}`}>{indicator.value}</div>
                  <div className="text-sm text-gray-600">{indicator.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center bg-center bg-cover"
                  style={{
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[currentSlide].image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="text-center text-white p-8">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <Activity className="w-10 h-10" />
                      </div>
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl font-bold mb-4"
                    >
                      {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-lg opacity-90"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6"
            >
              <Card className="w-48 bg-white/90 backdrop-blur-sm shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">24/7 Care</div>
                      <div className="text-sm text-gray-600">Emergency Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6"
            >
              <Card className="w-48 bg-white/90 backdrop-blur-sm shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Tiruppur</div>
                      <div className="text-sm text-gray-600">Central Location</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
