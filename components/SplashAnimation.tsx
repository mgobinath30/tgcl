'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Stethoscope, Shield, Activity } from 'lucide-react'
import Logo from './Logo'

interface SplashAnimationProps {
  onComplete: () => void
}

const SplashAnimation = ({ onComplete }: SplashAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1)
      } else {
        setIsVisible(false)
        setTimeout(() => {
          onComplete()
        }, 2000)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  const steps = [
    { icon: Heart, text: "Caring for Your Health", color: "text-red-500" },
    { icon: Stethoscope, text: "Expert Medical Care", color: "text-blue-500" },
    { icon: Shield, text: "Advanced Technology", color: "text-green-500" },
    { icon: Activity, text: "Leading Gastroenterology Center", color: "text-cyan-500" }
  ]

  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="from-blue-600 to-cyan-500 flex items-center justify-center mx-auto">
                {/* <span className="text-3xl font-bold text-white">TG</span> */}
                 <Logo width="220" />
              </div> 
             
            </motion.div> 

            {/* Main Text */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Tiruppur Gastrocare
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 mb-12"
            >
              & Laparoscopic Centre
            </motion.p>

            {/* Animated Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: index <= currentStep ? 0 : -50, 
                    opacity: index <= currentStep ? 1 : 0 
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center justify-center space-x-3 ${
                    index === currentStep ? 'scale-110' : 'scale-100'
                  } transition-transform duration-300`}
                >
                  <motion.div
                    animate={index === currentStep ? { 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.6, repeat: index === currentStep ? Infinity : 0, repeatDelay: 1 }}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </motion.div>
                  <span className={`text-lg font-medium ${step.color}`}>
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-8 overflow-hidden"
            >
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </motion.div>

            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    opacity: 0 
                  }}
                  animate={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute"
                >
                  <Heart className="w-6 h-6 text-blue-200" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashAnimation
