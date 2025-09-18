'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface Slide {
  id: string
  title: string
  content: React.ReactNode
  duration?: number
}

interface SliderProps {
  slides: Slide[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showControls?: boolean
  showProgress?: boolean
  className?: string
  onSlideChange?: (index: number) => void
}

export default function Slider({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showProgress = true,
  className = "",
  onSlideChange
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, autoPlay, autoPlayInterval, nextSlide])

  // Progress bar
  useEffect(() => {
    if (isPlaying && autoPlay) {
      setProgress(0)
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (100 / (autoPlayInterval / 100))
          if (newProgress >= 100) {
            return 0
          }
          return newProgress
        })
      }, 100)
    } else {
      if (progressRef.current) {
        clearInterval(progressRef.current)
        progressRef.current = null
      }
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current)
      }
    }
  }, [isPlaying, autoPlay, autoPlayInterval])

  // Notify parent of slide changes
  useEffect(() => {
    onSlideChange?.(currentIndex)
  }, [currentIndex, onSlideChange])

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main slider container */}
      <div className="relative h-full overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {slides[currentIndex]?.content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {showControls && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {showProgress && autoPlay && (
        <div className="w-full h-1 bg-gray-200 mt-4">
          <motion.div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      )}

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center text-sm text-gray-500 mt-2">
        {currentIndex + 1} of {slides.length}
      </div>
    </div>
  )
}
