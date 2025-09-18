'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Slider from '@/components/Slider'
import { 
  ReceptionSlide, 
  ConsultationSlide, 
  OperationTheaterSlide, 
  ScanCenterSlide, 
  PatientRoomsSlide 
} from '@/components/slides'
import { 
  Building2, 
  Stethoscope, 
  Scissors, 
  Microscope, 
  Bed, 
  Pill, 
  ChevronRight
} from 'lucide-react'

interface InfrastructureSection {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  content: React.ReactNode
}

const infrastructureSections: InfrastructureSection[] = [
  {
    id: 'reception',
    title: 'Reception Area',
    description: 'Your first point of contact with our warm and welcoming team',
    icon: Building2,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 hover:bg-emerald-100',
    content: <ReceptionSlide />
  },
  {
    id: 'consultation',
    title: 'Consultation Rooms',
    description: 'Private, comfortable spaces for thorough medical consultations',
    icon: Stethoscope,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    content: <ConsultationSlide />
  },
  {
    id: 'operation-theater',
    title: 'Operation Theater',
    description: 'State-of-the-art surgical suites with advanced technology',
    icon: Scissors,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 hover:bg-slate-100',
    content: <OperationTheaterSlide />
  },
  {
    id: 'scan-center',
    title: 'Scan Center',
    description: 'Advanced diagnostic imaging and scanning facilities',
    icon: Microscope,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
    content: <ScanCenterSlide />
  },
  {
    id: 'patient-rooms',
    title: 'Patient Rooms',
    description: 'Comfortable and well-equipped patient accommodation',
    icon: Bed,
    color: 'text-green-600',
    bgColor: 'bg-green-50 hover:bg-green-100',
    content: <PatientRoomsSlide />
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Well-stocked pharmacy with essential medications',
    icon: Pill,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100',
    content: (
      <div className="text-white text-center max-w-5xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
          Pharmacy
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Well-stocked pharmacy with essential medications
        </p>
      </div>
    ),
  }
]

export default function InfrastructurePage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true)

  useEffect(() => {
    if (!isAutoAdvancing) return

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % infrastructureSections.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoAdvancing])

  const handleSectionClick = (index: number) => {
    setActiveSection(index)
    setIsAutoAdvancing(false)
  }

  const handleSliderChange = (index: number) => {
    setActiveSection(index)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-6 relative">
            {/* Top Navigation Bar with Facilities Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-between mb-12"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Hospital Infrastructure</h1>
              </div>
              
              {/* Facilities Button - Inline */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => {
                  const facilitiesSection = document.getElementById('facilities-section');
                  if (facilitiesSection) {
                    facilitiesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building2 className="w-4 h-4" />
                View Facilities
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Main Content */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                State-of-the-Art Facilities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
              >
                Explore our advanced medical facilities designed for exceptional patient care and clinical excellence
              </motion.p>
            </div>
          </div>
        </div>

        <div id="facilities-section" className="container mx-auto px-6 py-8">
          {/* Infrastructure Section Titles - Inline at Top */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {infrastructureSections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleSectionClick(index)}
                  className={`p-4 rounded-xl transition-all duration-300 text-center ${
                    activeSection === index
                      ? `${section.bgColor} ${section.color} shadow-lg transform scale-105`
                      : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={activeSection === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-2"
                  >
                    <section.icon
                      className={`w-6 h-6 mx-auto ${activeSection === index ? section.color : 'text-gray-500'}`}
                    />
                  </motion.div>
                  <h4 className="font-semibold text-sm">{section.title}</h4>
                </motion.button>
              ))}
            </div>
            
            {/* Auto-advance toggle */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-4 py-2">
                <span className="text-sm font-medium text-gray-700">Auto-advance</span>
                <button
                  onClick={() => setIsAutoAdvancing(!isAutoAdvancing)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAutoAdvancing ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAutoAdvancing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Main content area - Full Width */}
          <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
                  <Slider
                    slides={infrastructureSections.map(section => ({
                      id: section.id,
                      title: section.title,
                      content: section.content,
                      duration: 8000
                    }))}
                    autoPlay={isAutoAdvancing}
                    autoPlayInterval={8000}
                    showControls={true}
                    showProgress={true}
                    className="h-full"
                    onSlideChange={handleSliderChange}
                  />
                </div>
              </div>

              {/* Section Info */}
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${infrastructureSections[activeSection].bgColor}`}>
                    {/* <infrastructureSections[activeSection].icon
                      className={`w-5 h-5 ${infrastructureSections[activeSection].color}`}
                    /> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {infrastructureSections[activeSection].title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {infrastructureSections[activeSection].description}
                </p>
              </motion.div>
          </div>
          </div>
      </main>
    </>
  )
}
