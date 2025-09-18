'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplashAnimation from '@/components/SplashAnimation'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import DoctorsSection from '@/components/DoctorsSection'
import BlogSection from '@/components/BlogSection'
import GoogleReviewsSection from '@/components/GoogleReviewsSection'
import Footer from '@/components/Footer'
import AppointmentModal from '@/components/AppointmentModal'
import InsurancePartners from '@/components/InsurancePartners'
import PromotionBanner from '@/components/PromotionBanner'

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isPromotionBannerOpen, setIsPromotionBannerOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor)
    setIsAppointmentModalOpen(true)
  }

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  // Show promotion banner after splash animation completes
  useEffect(() => {
    if (!showSplash) {
      const timer = setTimeout(() => {
        setIsPromotionBannerOpen(true)
      }, 2000) // Show after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [showSplash])

  if (showSplash) {
    return <SplashAnimation onComplete={handleSplashComplete} />
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background"
      >
        <Navigation />
        
        <main className="pt-0">
          <HeroSection onAppointmentClick={handleAppointmentClick} />
          <ServicesSection />
          <InsurancePartners />
          <GoogleReviewsSection />
          <DoctorsSection onAppointmentClick={handleAppointmentClick} />
          <BlogSection />
          {/* <ContactSection onAppointmentClick={handleAppointmentClick} /> */}
        </main>

        <Footer />

        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
          selectedDoctor={selectedDoctor}
        />

        <PromotionBanner
          isOpen={isPromotionBannerOpen}
          onClose={() => setIsPromotionBannerOpen(false)}
        />
      </motion.div>
    </AnimatePresence>
  )
}
