"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Building2,
  LayoutGrid,
  Stethoscope,
  Pill,
  Quote,
  MapPin,
  Phone,
  Clock,
  Star,
  Users,
  Heart,
  Shield,
  Award,
  Activity,
  Zap,
  Camera,
  Bed,
  Microscope,
  Scissors,
  Brain,
  Eye,
  ArrowRight,
  CheckCircle,
  Calendar,
  Mail,
  Globe,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react"

type Slide = {
  id: string
  content: JSX.Element
  ariaLabel: string
  bg?: JSX.Element
  duration: number
  title: string
}

// Customizable durations for each slide (in milliseconds)
const SLIDE_DURATIONS = {
  welcome: 6000,
  infrastructure: 8000,
  reception: 7000,
  consultation: 7000,
  operationTheater: 8000,
  scanCenter: 7000,
  waitingArea: 6000,
  patientRooms: 7000,
  pharmacy: 6000,
  gastroConsults: 8000,
  endoscopy: 8000,
  laparoscopic: 8000,
  ercp: 7000,
  colonoscopy: 7000,
  surgeon: 9000,
  reviews: 8000,
  healthTips: 6000,
  contact: 7000,
}

export default function HospitalTourPage() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const slides: Slide[] = useMemo(
    () => [
      {
        id: "welcome",
        title: "Welcome",
        duration: SLIDE_DURATIONS.welcome,
        ariaLabel: "Welcome slide with hospital name and tagline",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 w-full h-full">
              {/* <iframe
                src="/videos/aaa.mp4"
                title="Hospital Background Video"
                className="w-full h-full object-cover gobi"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              /> */}
              <video
                src="/videos/bbb.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                style={{ border: "none" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-emerald-900/30" />

            {/* Parallax Background Layer */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-emerald-500/15"
            />

            {/* Logo Color Palette - Corner circles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/25 to-emerald-500/25 border-2 border-blue-400/40 shadow-lg shadow-blue-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/25 to-blue-500/25 border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/20"
            />

            {/* Logo Color Half circles */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-0 w-40 h-20 bg-gradient-to-r from-blue-500/20 to-transparent rounded-r-full border-r-2 border-blue-400/30"
            />

            <motion.div
              animate={{
                x: [0, -20, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-1/4 right-0 w-40 h-20 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-l-full border-l-2 border-emerald-400/30"
            />

            {/* Animated floating medical icons with parallax */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 text-white/20"
              style={{ transform: "translateZ(0)" }}
            >
              <Stethoscope className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-32 right-16 text-white/15"
              style={{ transform: "translateZ(0)" }}
            >
              <Heart className="h-12 w-12" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-32 left-20 text-white/10"
              style={{ transform: "translateZ(0)" }}
            >
              <Building2 className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-20 right-24 text-white/12"
              style={{ transform: "translateZ(0)" }}
            >
              <Shield className="h-14 w-14" />
            </motion.div>

            {/* Animated particles with parallax depth */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  x: [0, Math.cos(i) * 30, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 4 === 0
                    ? "bg-blue-400/40"
                    : i % 4 === 1
                    ? "bg-emerald-400/40"
                    : i % 4 === 2
                    ? "bg-cyan-400/40"
                    : "bg-white/40"
                }`}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${60 + (i % 3) * 10}%`,
                  transform: `translateZ(${i * 2}px)`,
                }}
              />
            ))}

            {/* Parallax grid overlay */}
            <motion.div
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.02, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
                transform: "translateZ(0)",
              }}
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center text-center">
            <div className="space-y-8 px-6 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 text-white backdrop-blur border border-white/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Building2 className="h-6 w-6" />
                </motion.div>
                <span className="text-lg tracking-wide font-medium">
                  Virtual Hospital Tour
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  TIRUPPUR GASTROCARE
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-white/95"
                >
                  & LAPAROSCOPIC CENTER
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
              >
                Healing with Precision in Gastro & Laparoscopic Care
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap items-center justify-center gap-6 mt-8"
              >
                {[
                  {
                    icon: Award,
                    text: "32+ Years Experience",
                    color: "text-yellow-400",
                  },
                  {
                    icon: Users,
                    text: "211+ Specialist Doctors",
                    color: "text-blue-400",
                  },
                  {
                    icon: Shield,
                    text: "Advanced Technology",
                    color: "text-emerald-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    className="flex items-center gap-3 text-white/90 bg-white/10 px-4 py-2 rounded-full backdrop-blur border border-white/20"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className={item.color}
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated statistics counters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="grid grid-cols-3 gap-8 mt-12"
              >
                {[
                  {
                    number: 32,
                    suffix: "+",
                    label: "Years Experience",
                    icon: Award,
                  },
                  {
                    number: 211,
                    suffix: "+",
                    label: "Specialist Doctors",
                    icon: Users,
                  },
                  {
                    number: 1000,
                    suffix: "+",
                    label: "Successful Surgeries",
                    icon: Heart,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2"
                    >
                      <AnimatedCounter
                        value={stat.number}
                        suffix={stat.suffix}
                      />
                    </motion.div>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ),
      },
      {
        id: "infrastructure",
        title: "Infrastructure Highlights",
        duration: SLIDE_DURATIONS.infrastructure,
        ariaLabel: "Infrastructure highlights showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 w-full h-full">
              {/* <iframe
                src="/videos/aaa.mp4"
                title="Infrastructure Background Video"
                className="w-full h-full object-cover"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              /> */}
              <video
                src="/videos/ccc.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                style={{ border: "none" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-slate-900/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20" />

            {/* Parallax Background Layer */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-slate-500/15 via-transparent to-blue-500/15"
            />

            {/* Logo Color Palette - Corner circles */}
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-6 right-6 w-36 h-36 rounded-full bg-gradient-to-br from-slate-500/25 to-blue-500/25 border-2 border-slate-400/40 shadow-lg shadow-slate-500/20"
            />

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
                delay: 3,
              }}
              className="absolute bottom-6 left-6 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/25 to-slate-500/25 border-2 border-blue-400/40 shadow-lg shadow-blue-500/20"
            />

            {/* Logo Color Half circles */}
            <motion.div
              animate={{
                x: [0, 25, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-0 w-44 h-22 bg-gradient-to-r from-slate-500/20 to-transparent rounded-r-full border-r-2 border-slate-400/30"
            />

            <motion.div
              animate={{
                x: [0, -25, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
              className="absolute bottom-1/3 right-0 w-44 h-22 bg-gradient-to-l from-blue-500/20 to-transparent rounded-l-full border-l-2 border-blue-400/30"
            />

            {/* Animated infrastructure icons with parallax */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-16 left-12 text-white/25"
              style={{ transform: "translateZ(0)" }}
            >
              <Building2 className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-24 right-20 text-white/20"
              style={{ transform: "translateZ(0)" }}
            >
              <Zap className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-28 left-16 text-white/15"
              style={{ transform: "translateZ(0)" }}
            >
              <Shield className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-20 right-16 text-white/18"
              style={{ transform: "translateZ(0)" }}
            >
              <Heart className="h-16 w-16" />
            </motion.div>

            {/* Floating particles with different colors */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -120, 0],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                  x: [0, Math.sin(i) * 50, 0],
                }}
                transition={{
                  duration: 5 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 4 === 0
                    ? "bg-cyan-400/40"
                    : i % 4 === 1
                    ? "bg-blue-400/40"
                    : i % 4 === 2
                    ? "bg-emerald-400/40"
                    : "bg-white/40"
                }`}
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${70 + (i % 3) * 8}%`,
                  transform: `translateZ(${i * 2}px)`,
                }}
              />
            ))}

            {/* Parallax grid overlay */}
            <motion.div
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.02, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
                transform: "translateZ(0)",
              }}
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <NestedCarousel
              ariaLabel="Infrastructure highlights carousel"
              items={[
                {
                  key: "modern-facility",
                  node: (
                    <InfrastructureCard
                      title="Modern Facility"
                      subtitle="State-of-the-art infrastructure"
                      icon={<Building2 className="h-12 w-12 text-cyan-300" />}
                      features={[
                        "Advanced Equipment",
                        "Clean Environment",
                        "Modern Design",
                      ]}
                    />
                  ),
                },
                {
                  key: "technology",
                  node: (
                    <InfrastructureCard
                      title="Advanced Technology"
                      subtitle="Cutting-edge medical equipment"
                      icon={<Zap className="h-12 w-12 text-cyan-300" />}
                      features={[
                        "Digital Systems",
                        "Precision Tools",
                        "Latest Technology",
                      ]}
                    />
                  ),
                },
                {
                  key: "safety",
                  node: (
                    <InfrastructureCard
                      title="Safety Standards"
                      subtitle="Highest safety protocols"
                      icon={<Shield className="h-12 w-12 text-cyan-300" />}
                      features={[
                        "Infection Control",
                        "Emergency Systems",
                        "Quality Assurance",
                      ]}
                    />
                  ),
                },
                {
                  key: "comfort",
                  node: (
                    <InfrastructureCard
                      title="Patient Comfort"
                      subtitle="Comfortable healing environment"
                      icon={<Heart className="h-12 w-12 text-cyan-300" />}
                      features={[
                        "Comfortable Spaces",
                        "Patient Care",
                        "Healing Environment",
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        ),
      },
      {
        id: "reception",
        title: "Reception Area",
        duration: SLIDE_DURATIONS.reception,
        ariaLabel: "Reception area showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 w-full h-full">
              {/* <iframe
                src="/videos/aaa.mp4"
                title="Reception Background Video"
                className="w-full h-full object-cover"
                style={{ border: 'none' }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              /> */}
              <video
                src="/videos/aaa.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                style={{ border: "none" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-blue-900/50 to-black/70" />

            {/* Parallax Background Layer */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-blue-500/15"
            />

            {/* Logo Color Palette - Corner circles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/25 to-blue-500/25 border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/25 to-emerald-500/25 border-2 border-blue-400/40 shadow-lg shadow-blue-500/20"
            />

            {/* Logo Color Half circles */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-0 w-40 h-20 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-r-full border-r-2 border-emerald-400/30"
            />

            <motion.div
              animate={{
                x: [0, -20, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-1/4 right-0 w-40 h-20 bg-gradient-to-l from-blue-500/20 to-transparent rounded-l-full border-l-2 border-blue-400/30"
            />

            {/* Animated reception icons */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-16 text-white/25"
            >
              <Users className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-32 right-20 text-white/20"
            >
              <Heart className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-24 left-20 text-white/15"
            >
              <Clock className="h-20 w-20" />
            </motion.div>

            {/* Floating welcome elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                className="absolute w-4 h-4 bg-emerald-400/60 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${60 + (i % 2) * 15}%`,
                }}
              />
            ))}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ReceptionSlide />
          </div>
        ),
      },
      {
        id: "consultation",
        title: "Consultation Rooms",
        duration: SLIDE_DURATIONS.consultation,
        ariaLabel: "Consultation rooms showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1920&auto=format&fit=crop"
              alt="Consultation room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/50 to-black/70" />

            {/* Animated consultation icons */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 12, -12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-14 text-white/25"
            >
              <Stethoscope className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -8, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-28 right-18 text-white/20"
            >
              <Eye className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 12, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-26 left-16 text-white/15"
            >
              <Brain className="h-18 w-18" />
            </motion.div>

            {/* Floating medical particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.3, 1, 0.3],
                  x: [0, Math.cos(i) * 60, 0],
                }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0
                    ? "bg-blue-400/50"
                    : i % 3 === 1
                    ? "bg-cyan-400/50"
                    : "bg-white/50"
                }`}
                style={{
                  left: `${8 + i * 9}%`,
                  top: `${65 + (i % 3) * 10}%`,
                }}
              />
            ))}

            {/* Animated medical grid */}
            <motion.div
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ConsultationSlide />
          </div>
        ),
      },
      {
        id: "operationTheater",
        title: "Operation Theater",
        duration: SLIDE_DURATIONS.operationTheater,
        ariaLabel: "Operation theater showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop"
              alt="Operation theater"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/60 to-black/80" />

            {/* Animated surgical icons */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-18 left-12 text-white/25"
            >
              <Scissors className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-26 right-16 text-white/20"
            >
              <Shield className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -35, 0],
                x: [0, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-24 left-18 text-white/15"
            >
              <Activity className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 30, 0],
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
              className="absolute bottom-20 right-20 text-white/18"
            >
              <Heart className="h-16 w-16" />
            </motion.div>

            {/* Floating surgical particles */}
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -120, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.2, 1, 0.2],
                  x: [0, Math.sin(i) * 70, 0],
                }}
                transition={{
                  duration: 6 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 4 === 0
                    ? "bg-slate-400/60"
                    : i % 4 === 1
                    ? "bg-blue-400/60"
                    : i % 4 === 2
                    ? "bg-cyan-400/60"
                    : "bg-white/60"
                }`}
                style={{
                  left: `${6 + i * 7}%`,
                  top: `${68 + (i % 4) * 8}%`,
                }}
              />
            ))}

            {/* Animated surgical grid */}
            <motion.div
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "35px 35px",
              }}
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <OperationTheaterSlide />
          </div>
        ),
      },
      {
        id: "scanCenter",
        title: "Scan Center",
        duration: SLIDE_DURATIONS.scanCenter,
        ariaLabel: "Scan center showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
              alt="Scan center"
              fill
              className="object-cover"
            /> */}
            <video
              src="/videos/ccc.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-blue-900/50 to-black/70" />

            {/* Animated scanning icons */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-14 text-white/25"
            >
              <Camera className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-28 right-18 text-white/20"
            >
              <Microscope className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 12, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-26 left-16 text-white/15"
            >
              <Eye className="h-20 w-20" />
            </motion.div>

            {/* Floating scan particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -110, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.3, 1, 0.3],
                  x: [0, Math.cos(i) * 65, 0],
                }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0
                    ? "bg-cyan-400/60"
                    : i % 3 === 1
                    ? "bg-blue-400/60"
                    : "bg-white/60"
                }`}
                style={{
                  left: `${7 + i * 8}%`,
                  top: `${66 + (i % 3) * 12}%`,
                }}
              />
            ))}

            {/* Animated scan grid */}
            <motion.div
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6,182,212,0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6,182,212,0.2) 1px, transparent 1px)
                `,
                backgroundSize: "45px 45px",
              }}
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ScanCenterSlide />
          </div>
        ),
      },
      {
        id: "waitingArea",
        title: "Patient Waiting Area",
        duration: SLIDE_DURATIONS.waitingArea,
        ariaLabel: "Patient waiting area showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba0ef08?q=80&w=1920&auto=format&fit=crop"
              alt="Waiting area"
              fill
              className="object-cover"
            /> */}
            <video
              src="/videos/ddd.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-blue-900/50 to-black/70" />

            {/* Animated waiting area icons */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-16 text-white/25"
            >
              <Bed className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-32 right-20 text-white/20"
            >
              <Heart className="h-16 w-16" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-24 left-20 text-white/15"
            >
              <Users className="h-20 w-20" />
            </motion.div>

            {/* Ring animations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-96 h-96 border border-emerald-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-80 h-80 border border-blue-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-64 h-64 border border-cyan-400/20 rounded-full" />
            </motion.div>

            {/* Floating comfort elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
                className="absolute w-4 h-4 bg-emerald-400/60 rounded-full"
                style={{
                  left: `${12 + i * 11}%`,
                  top: `${62 + (i % 2) * 15}%`,
                }}
              />
            ))}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <WaitingAreaSlide />
          </div>
        ),
      },
      {
        id: "patientRooms",
        title: "Patient Rooms",
        duration: SLIDE_DURATIONS.patientRooms,
        ariaLabel: "Patient rooms showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop"
              alt="Patient room"
              fill
              className="object-cover"
            /> */}
                        <video
              src="/videos/eee.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/50 to-black/70" />

            {/* Animated patient room icons */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-14 text-white/25"
            >
              <Bed className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-28 right-18 text-white/20"
            >
              <Heart className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 12, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-26 left-16 text-white/15"
            >
              <Shield className="h-20 w-20" />
            </motion.div>

            {/* Ring animations */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-96 h-96 border border-blue-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-80 h-80 border border-slate-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-64 h-64 border border-cyan-400/20 rounded-full" />
            </motion.div>

            {/* Floating healing elements */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -90, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.4, 1, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0
                    ? "bg-blue-400/60"
                    : i % 3 === 1
                    ? "bg-slate-400/60"
                    : "bg-cyan-400/60"
                }`}
                style={{
                  left: `${8 + i * 9}%`,
                  top: `${64 + (i % 3) * 12}%`,
                }}
              />
            ))}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <PatientRoomsSlide />
          </div>
        ),
      },
      {
        id: "pharmacy",
        title: "Pharmacy",
        duration: SLIDE_DURATIONS.pharmacy,
        ariaLabel: "Pharmacy showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1920&auto=format&fit=crop"
              alt="Pharmacy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-emerald-900/50 to-black/70" />

            {/* Animated pharmacy icons */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-16 text-white/25"
            >
              <Microscope className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-28 right-20 text-white/20"
            >
              <Heart className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-24 left-20 text-white/15"
            >
              <Shield className="h-20 w-20" />
            </motion.div>

            {/* Ring animations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-96 h-96 border border-green-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-80 h-80 border border-emerald-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-64 h-64 border border-lime-400/20 rounded-full" />
            </motion.div>

            {/* Floating medicine elements */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 4 === 0
                    ? "bg-green-400/60"
                    : i % 4 === 1
                    ? "bg-emerald-400/60"
                    : i % 4 === 2
                    ? "bg-lime-400/60"
                    : "bg-white/60"
                }`}
                style={{
                  left: `${6 + i * 8}%`,
                  top: `${66 + (i % 4) * 8}%`,
                }}
              />
            ))}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <PharmacySlide />
          </div>
        ),
      },
      {
        id: "gastroConsults",
        title: "Gastro Consultations",
        duration: SLIDE_DURATIONS.gastroConsults,
        ariaLabel: "Gastro consultations showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1920&auto=format&fit=crop"
              alt="Gastro consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-900/50 to-black/70" />

            {/* Animated gastro icons */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 12, -12, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-14 text-white/25"
            >
              <Stethoscope className="h-20 w-20" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-28 right-18 text-white/20"
            >
              <Eye className="h-18 w-18" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 12, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-26 left-16 text-white/15"
            >
              <Heart className="h-20 w-20" />
            </motion.div>

            {/* Ring animations */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-96 h-96 border border-purple-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-80 h-80 border border-indigo-400/20 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-64 h-64 border border-violet-400/20 rounded-full" />
            </motion.div>

            {/* Floating gastro elements */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -90, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0
                    ? "bg-purple-400/60"
                    : i % 3 === 1
                    ? "bg-indigo-400/60"
                    : "bg-violet-400/60"
                }`}
                style={{
                  left: `${8 + i * 9}%`,
                  top: `${65 + (i % 3) * 10}%`,
                }}
              />
            ))}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <GastroConsultsSlide />
          </div>
        ),
      },
      {
        id: "endoscopy",
        title: "Advanced Endoscopy",
        duration: SLIDE_DURATIONS.endoscopy,
        ariaLabel: "Advanced endoscopy showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
              alt="Endoscopy procedure"
              fill
              className="object-cover"
            /> */}
             <video
              src="/videos/fff.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-blue-900/50 to-black/70" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <EndoscopySlide />
          </div>
        ),
      },
      {
        id: "laparoscopic",
        title: "Laparoscopic Surgeries",
        duration: SLIDE_DURATIONS.laparoscopic,
        ariaLabel: "Laparoscopic surgeries showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            {/* <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1920&auto=format&fit=crop"
              alt="Laparoscopic surgery"
              fill
              className="object-cover"
            /> */}
                         <video
              src="/videos/ggg.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-900/60 to-black/80" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <LaparoscopicSlide />
          </div>
        ),
      },
      {
        id: "ercp",
        title: "ERCP Procedures",
        duration: SLIDE_DURATIONS.ercp,
        ariaLabel: "ERCP procedures showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
              alt="ERCP procedure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/50 to-black/70" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ERCPSlide />
          </div>
        ),
      },
      {
        id: "colonoscopy",
        title: "Colonoscopy",
        duration: SLIDE_DURATIONS.colonoscopy,
        ariaLabel: "Colonoscopy procedures showcase",
        bg: (
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1920&auto=format&fit=crop"
              alt="Colonoscopy procedure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-blue-900/50 to-black/70" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ColonoscopySlide />
          </div>
        ),
      },
      {
        id: "surgeon",
        title: "Meet Our Lead Surgeon",
        duration: SLIDE_DURATIONS.surgeon,
        ariaLabel: "Lead surgeon profile",
        bg: (
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black" />
            <Image
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1600&auto=format&fit=clip"
              alt="Doctor silhouette"
              fill
              className="object-contain object-right opacity-20"
            />
          </div>
        ),
        content: (
          <div className="flex h-full items-center">
            <SurgeonSlide />
          </div>
        ),
      },
      {
        id: "reviews",
        title: "Patient Reviews",
        duration: SLIDE_DURATIONS.reviews,
        ariaLabel: "Patient reviews and testimonials",
        bg: (
          <div className="absolute inset-0 -z-10">
                         <video
              src="/videos/hhh.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70  to-black" />
            {/* via-blue-950 */}
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ReviewsSlide />
          </div>
        ),
      },
      {
        id: "healthTips",
        title: "Health Tips",
        duration: SLIDE_DURATIONS.healthTips,
        ariaLabel: "Health and wellness tips",
        bg: (
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-cyan-900 to-blue-950" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <HealthTipsSlide />
          </div>
        ),
      },
      {
        id: "contact",
        title: "Contact Us",
        duration: SLIDE_DURATIONS.contact,
        ariaLabel: "Contact information and location",
        bg: (
          <div className="absolute inset-0 -z-10">
                                     <video
              src="/videos/iii.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: "none" }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900/70 to-blue-950" />
          </div>
        ),
        content: (
          <div className="flex h-full items-center justify-center">
            <ContactSlide />
          </div>
        ),
      },
    ],
    []
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  // Timer functionality
  useEffect(() => {
    if (!isPlaying) return
    
    const currentSlide = slides[current]
    if (!currentSlide) return
    
    setTimeRemaining(currentSlide.duration)
    
    // Clear existing timers
      if (intervalRef.current) clearInterval(intervalRef.current)
    if (timerRef.current) clearInterval(timerRef.current)
    
    // Set up slide timer
    intervalRef.current = setTimeout(next, currentSlide.duration)
    
    // Set up countdown timer
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1000) {
          return 0
        }
        return prev - 1000
      })
    }, 1000)
    
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, current, next, slides])

  const pause = useCallback(() => setIsPlaying(false), [])
  const play = useCallback(() => setIsPlaying(true), [])

  // Fullscreen functionality
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen?.()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.error('Fullscreen error:', error)
    }
  }, [])

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Mouse hover controls - Enhanced for better UX
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    
    let hideTimeout: NodeJS.Timeout | null = null
    
    const onEnter = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
      }
      setShowControls(true)
      if (!isFullscreen) setIsPlaying(false)
    }
    
    const onLeave = () => {
      // Delay hiding controls for better UX
      hideTimeout = setTimeout(() => {
        setShowControls(false)
        if (!isFullscreen) setIsPlaying(true)
      }, 1000) // 1 second delay before hiding
    }
    
    const onMove = () => {
      if (!showControls) {
        setShowControls(true)
        if (!isFullscreen) setIsPlaying(false)
      }
      // Reset hide timeout on mouse movement
      if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = setTimeout(() => {
          setShowControls(false)
          if (!isFullscreen) setIsPlaying(true)
        }, 2000) // 2 seconds delay after movement stops
      }
    }
    
    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)
    el.addEventListener("mousemove", onMove)
    
    return () => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
      el.removeEventListener("mousemove", onMove)
      if (hideTimeout) clearTimeout(hideTimeout)
    }
  }, [isFullscreen, showControls])

  // Format time for display
  const formatTime = (ms: number) => {
    const seconds = Math.ceil(ms / 1000)
    return `${seconds}s`
  }

  return (
    <>
      <Navigation />
      <main className="relative h-[calc(100dvh-4rem)] md:h-[calc(100dvh-3rem)] w-full overflow-hidden" aria-roledescription="carousel" aria-label="Hospital Tour">
        <div ref={containerRef} className="relative h-full w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={slide.ariaLabel}
            aria-hidden={index !== current}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            {slide.bg}
            <div className="absolute inset-0">
              {slide.content}
            </div>
          </section>
        ))}

          {/* Top Controls - Show on hover or always in fullscreen */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: showControls || isFullscreen ? 1 : 0,
              y: showControls || isFullscreen ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 z-10"
          >
            <div className="pointer-events-auto flex items-center gap-3">
            <button
              aria-label="Previous slide"
              onClick={prev}
                className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              onClick={() => setIsPlaying((p) => !p)}
                className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition-all duration-200 shadow-lg"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
                className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

            <div className="pointer-events-auto flex items-center gap-4 text-white/90">
              {/* Timer Display */}
              <div className="flex items-center gap-2 bg-white/15 px-3 py-2 rounded-full backdrop-blur border border-white/20">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{formatTime(timeRemaining)}</span>
              </div>
              
              {/* Fullscreen Toggle */}
            <button
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                onClick={toggleFullscreen}
                className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition-all duration-200 shadow-lg"
            >
              {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
            </button>
              
              {/* Audio Toggle */}
              <button
                aria-label={isMuted ? "Unmute" : "Mute"}
                onClick={() => setIsMuted(!isMuted)}
                className="rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30 transition-all duration-200 shadow-lg"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              
              {/* Auto Play Indicator */}
              <div className="flex items-center gap-2 bg-white/15 px-3 py-2 rounded-full backdrop-blur border border-white/20">
                <span className="text-xs font-medium">Auto</span>
            <div className={`h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-400" : "bg-yellow-400"}`} />
          </div>
        </div>
          </motion.div>

          {/* Slide Title */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: showControls || isFullscreen ? 1 : 0,
              y: showControls || isFullscreen ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="bg-white/15 px-6 py-3 rounded-full backdrop-blur border border-white/20">
              <h2 className="text-white font-semibold text-lg">{slides[current]?.title}</h2>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 to-emerald-400"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((slides[current]?.duration - timeRemaining) / slides[current]?.duration) * 100}%` 
              }}
              transition={{ duration: 0.1 }}
            />
        </div>

          {/* Bottom Controls - Dots */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: showControls || isFullscreen ? 1 : 0,
              y: showControls || isFullscreen ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10"
          >
          {slides.map((_, i) => (
            <button
              key={i}
                aria-label={`Go to slide ${i + 1}: ${slides[i]?.title}`}
              onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-white shadow-lg" : "w-3 bg-white/50 hover:bg-white/80 hover:w-4"
              }`}
            />
          ))}
          </motion.div>

          {/* Slide Counter */}
          <motion.div 
            initial={false}
            animate={{ 
              opacity: showControls || isFullscreen ? 1 : 0,
              y: showControls || isFullscreen ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 right-6 z-10"
          >
            <div className="bg-white/15 px-4 py-2 rounded-full backdrop-blur border border-white/20">
              <span className="text-white text-sm font-medium">
                {current + 1} / {slides.length}
              </span>
        </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}


type NestedItem = { key: string; node: JSX.Element }

function NestedCarousel({ items, ariaLabel }: { items: NestedItem[]; ariaLabel: string }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const ref = useRef<NodeJS.Timeout | null>(null)

  const next = useCallback(() => setIndex((p) => (p + 1) % items.length), [items.length])
  const prev = useCallback(() => setIndex((p) => (p - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!playing) return
    ref.current = setInterval(next, 4000)
    return () => {
      if (ref.current) clearInterval(ref.current)
    }
  }, [playing, next])

  return (
    <div className="relative w-full max-w-6xl px-6" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="relative h-[65vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[index].key}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            {items[index].node}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Previous" onClick={prev} className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying((p) => !p)} className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-all duration-200 shadow-lg">{playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}</button>
          <button aria-label="Next" onClick={next} className="rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button key={i} aria-label={`Go to ${i + 1}`} onClick={() => setIndex(i)} className={`h-3 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-white shadow-lg" : "w-3 bg-white/50 hover:bg-white/80 hover:w-4"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = value / 50
      const timer2 = setInterval(() => {
        setCount(prev => {
          if (prev >= value) {
            clearInterval(timer2)
            return value
          }
          return Math.min(prev + increment, value)
        })
      }, 50)
      
      return () => clearInterval(timer2)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [value])
  
  return <span>{Math.floor(count)}{suffix}</span>
}

// Background Video Slider Component
function BackgroundVideoSlider({ 
  videos, 
  textOverlay, 
  colorScheme 
}: { 
  videos: string[], 
  textOverlay: string, 
  colorScheme: { primary: string, secondary: string, accent: string }
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 8000) // Change video every 8 seconds
    
    return () => clearInterval(interval)
  }, [videos.length])
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Current Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* <iframe
          src="/videos/aaa.mp4"
          title={`Background Video ${currentVideoIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        /> */}
        <video
              src="/videos/aaa.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              style={{ border: 'none' }}
            >
              Your browser does not support the video tag.
            </video>
      </div>
      
      {/* Video Overlay with Color Scheme */}
      <div className={`absolute inset-0 bg-gradient-to-b from-${colorScheme.primary}-900/70 via-${colorScheme.secondary}-900/60 to-black/80`} />
      <div className={`absolute inset-0 bg-gradient-to-r from-${colorScheme.accent}-900/20 via-transparent to-${colorScheme.primary}-900/20`} />
      
      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-4xl md:text-6xl font-bold bg-gradient-to-r from-${colorScheme.primary}-300 to-${colorScheme.secondary}-300 bg-clip-text text-transparent mb-6`}
          >
            {textOverlay}
          </motion.h2>
          
          {/* Video Indicator Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-2 mt-8"
          >
            {videos.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: index === currentVideoIndex ? 1.2 : 1,
                  opacity: index === currentVideoIndex ? 1 : 0.5
                }}
                transition={{ duration: 0.3 }}
                className={`w-3 h-3 rounded-full bg-${colorScheme.accent}-400`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Infrastructure Card Component
function InfrastructureCard({ title, subtitle, icon, features }: { 
  title: string; 
  subtitle: string; 
  icon: JSX.Element; 
  features: string[] 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.9 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center space-y-6 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 border border-white/30 backdrop-blur shadow-xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
        {icon}
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-white/90 text-xl md:text-2xl">{subtitle}</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 px-4 py-3 rounded-xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.span 
              className="text-white font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {feature}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

// Reception Slide Component
function ReceptionSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent"
        >
          Reception Area
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Your first point of contact with our warm and welcoming team
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {[
          { icon: Users, title: "Friendly Staff", desc: "Professional & caring reception team", color: "text-emerald-300" },
          { icon: Clock, title: "Quick Check-in", desc: "Efficient appointment management", color: "text-blue-300" },
          { icon: Heart, title: "Comfortable Space", desc: "Relaxing waiting environment", color: "text-pink-300" },
          { icon: Phone, title: "24/7 Support", desc: "Always available for assistance", color: "text-cyan-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-4`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated welcome message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Welcome to Our Healthcare Family
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Consultation Slide Component
function ConsultationSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
        >
          Consultation Rooms
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Private, comfortable spaces for thorough medical consultations
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {[
          { icon: Stethoscope, title: "Expert Consultation", desc: "Comprehensive medical evaluation", color: "text-blue-300" },
          { icon: Eye, title: "Detailed Examination", desc: "Thorough physical assessment", color: "text-cyan-300" },
          { icon: Brain, title: "Personalized Care", desc: "Tailored treatment plans", color: "text-purple-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-6`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated consultation process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Expert Medical Consultation & Care
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Operation Theater Slide Component
function OperationTheaterSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent"
        >
          Operation Theater
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          State-of-the-art surgical suites with advanced technology
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {[
          { icon: Scissors, title: "Advanced Equipment", desc: "Latest surgical technology and instruments", color: "text-slate-300" },
          { icon: Shield, title: "Sterile Environment", desc: "Highest standards of infection control", color: "text-blue-300" },
          { icon: Activity, title: "Minimally Invasive", desc: "Laparoscopic and robotic procedures", color: "text-cyan-300" },
          { icon: Heart, title: "Patient Safety", desc: "Comprehensive monitoring systems", color: "text-pink-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-4`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated surgical excellence message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-slate-500/20 to-blue-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Surgical Excellence & Patient Safety
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Scan Center Slide Component
function ScanCenterSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"
        >
          Scan Center
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Advanced imaging technology for accurate diagnosis
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {[
          { icon: Camera, title: "CT Scan", desc: "High-resolution imaging", color: "text-cyan-300" },
          { icon: Microscope, title: "MRI", desc: "Detailed soft tissue imaging", color: "text-blue-300" },
          { icon: Eye, title: "Ultrasound", desc: "Real-time imaging", color: "text-purple-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-6`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated imaging excellence message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Advanced Imaging & Accurate Diagnosis
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Waiting Area Slide Component
function WaitingAreaSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent"
        >
          Patient Waiting Area
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Comfortable and relaxing environment for patients and families
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {[
          { icon: Bed, title: "Comfortable Seating", desc: "Ergonomic chairs and sofas", color: "text-emerald-300" },
          { icon: Heart, title: "Calming Environment", desc: "Peaceful atmosphere", color: "text-pink-300" },
          { icon: Users, title: "Family Friendly", desc: "Space for accompanying family", color: "text-blue-300" },
          { icon: Clock, title: "Minimal Wait Time", desc: "Efficient scheduling", color: "text-cyan-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-4`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated comfort message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Comfort & Care for Every Patient
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Patient Rooms Slide Component
function PatientRoomsSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-slate-300 bg-clip-text text-transparent"
        >
          Patient Rooms
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Clean, comfortable rooms designed for healing and recovery
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {[
          { icon: Bed, title: "Comfortable Beds", desc: "Adjustable hospital beds", color: "text-blue-300" },
          { icon: Heart, title: "Healing Environment", desc: "Calm and peaceful atmosphere", color: "text-pink-300" },
          { icon: Shield, title: "Clean & Sterile", desc: "Highest hygiene standards", color: "text-slate-300" },
          { icon: Users, title: "Family Support", desc: "Space for family members", color: "text-cyan-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-4`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated healing message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-blue-500/20 to-slate-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Healing Environment & Patient Comfort
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Pharmacy Slide Component
function PharmacySlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent"
        >
          Pharmacy
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Comprehensive medication management and pharmaceutical care
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {[
          { icon: Microscope, title: "Quality Control", desc: "Rigorous quality testing", color: "text-green-300" },
          { icon: Heart, title: "Patient Care", desc: "Personalized medication counseling", color: "text-pink-300" },
          { icon: Shield, title: "Safety First", desc: "Medication safety protocols", color: "text-emerald-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-6`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated pharmaceutical excellence message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Pharmaceutical Excellence & Patient Safety
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Gastro Consults Slide Component
function GastroConsultsSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
        >
          Gastro Consultations
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Expert gastroenterology consultations and digestive health care
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {[
          { icon: Stethoscope, title: "Expert Diagnosis", desc: "Comprehensive GI evaluation", color: "text-purple-300" },
          { icon: Brain, title: "Treatment Planning", desc: "Personalized care plans", color: "text-indigo-300" },
          { icon: Heart, title: "Patient Education", desc: "Understanding your condition", color: "text-violet-300" },
          { icon: CheckCircle, title: "Follow-up Care", desc: "Ongoing monitoring", color: "text-purple-300" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              rotateY: 5
            }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <motion.div 
              className={`${item.color} mb-4`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <item.icon className="h-8 w-8" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated gastro excellence message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur"
        >
          <span className="text-white font-semibold text-lg">
            Gastroenterology Excellence & Digestive Health
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Endoscopy Slide Component
function EndoscopySlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Advanced Endoscopy
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          High-precision diagnostic and therapeutic procedures
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: <Eye className="h-8 w-8" />, title: "Upper GI Endoscopy", desc: "Esophagus, stomach examination" },
          { icon: <Microscope className="h-8 w-8" />, title: "Colonoscopy", desc: "Colon screening & treatment" },
          { icon: <Zap className="h-8 w-8" />, title: "ERCP", desc: "Biliary & pancreatic procedures" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-cyan-300 mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
    </div>
    </motion.div>
  )
}

// Laparoscopic Slide Component
function LaparoscopicSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">
          Laparoscopic Surgeries
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Minimally invasive procedures for faster recovery
        </p>
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {[
          { icon: <Scissors className="h-8 w-8" />, title: "Minimal Incisions", desc: "Smaller surgical cuts" },
          { icon: <Heart className="h-8 w-8" />, title: "Faster Recovery", desc: "Reduced healing time" },
          { icon: <Shield className="h-8 w-8" />, title: "Less Pain", desc: "Reduced post-operative pain" },
          { icon: <Activity className="h-8 w-8" />, title: "Precision Surgery", desc: "Advanced robotic assistance" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-slate-300 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ERCP Slide Component
function ERCPSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          ERCP Procedures
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Advanced biliary and pancreatic duct therapy
        </p>
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: <Eye className="h-8 w-8" />, title: "Bile Duct Treatment", desc: "Gallstone removal & stenting" },
          { icon: <Microscope className="h-8 w-8" />, title: "Pancreatic Care", desc: "Pancreatic duct procedures" },
          { icon: <Zap className="h-8 w-8" />, title: "Advanced Techniques", desc: "Latest ERCP technology" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-blue-300 mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Colonoscopy Slide Component
function ColonoscopySlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-5xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
          Colonoscopy
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Comprehensive colon screening and polyp removal
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: <Eye className="h-8 w-8" />, title: "Colon Screening", desc: "Early cancer detection" },
          { icon: <Scissors className="h-8 w-8" />, title: "Polyp Removal", desc: "Minimally invasive treatment" },
          { icon: <Heart className="h-8 w-8" />, title: "Preventive Care", desc: "Regular monitoring" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-emerald-300 mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-white/80 text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Surgeon Slide Component
function SurgeonSlide() {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="relative h-80 md:h-96 order-2 md:order-1"
      >
        <Image
          src="https://images.unsplash.com/photo-1609838462706-3c4b5b3c8cde?q=80&w=1200&auto=format&fit=clip"
          alt="Dr. M. Shenthil Prabhu"
          fill
          className="rounded-3xl object-cover shadow-2xl"
          priority={false}
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="order-1 md:order-2 text-white space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Meet Our Lead Surgeon
          </h3>
          <p className="text-2xl md:text-3xl font-semibold text-white">Dr. M. Shenthil Prabhu</p>
          <p className="text-white/90 text-xl md:text-2xl">Surgical Gastroenterologist & Laparoscopic Specialist</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Advanced Laparoscopy",
            "Endoscopic Therapy", 
            "Complex GI Surgery",
            "Minimally Invasive Procedures",
          ].map((specialty, index) => (
            <motion.div
              key={specialty}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="rounded-2xl bg-white/10 px-4 py-3 border border-white/20 backdrop-blur"
            >
              <span className="text-white font-medium">{specialty}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 pt-4"
        >
          <Award className="h-6 w-6 text-yellow-400" />
          <span className="text-white/90">32+ Years of Experience</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Reviews Slide Component
function ReviewsSlide() {
  const reviews = [
    {
      text: "Excellent service and care. The doctors are very knowledgeable and the staff is friendly. Highly recommend this hospital.",
      author: "Rajesh Kumar",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      text: "Dr. Shenthil Prabhu is an amazing surgeon. The laparoscopic procedure was smooth and recovery was quick. Thank you!",
      author: "Priya Sharma", 
      rating: 5,
      date: "1 month ago"
    },
    {
      text: "Clean facility, professional staff, and excellent medical care. The endoscopy procedure was comfortable and painless.",
      author: "Suresh Patel",
      rating: 5,
      date: "3 weeks ago"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-6xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
          Patient Reviews
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          What our patients say about their experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {reviews.map((review, index) => (
          <motion.div
            key={review.author}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
              "{review.text}"
            </blockquote>
            <div className="text-center">
              <p className="text-white font-semibold">{review.author}</p>
              <p className="text-white/70 text-sm">{review.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Health Tips Slide Component
function HealthTipsSlide() {
  const tips = [
    {
      title: "Stay Hydrated",
      description: "Drink 8-10 glasses of water daily to aid digestion and maintain gut health",
      icon: <Heart className="h-8 w-8" />
    },
    {
      title: "Eat Fiber-Rich Foods",
      description: "Include fruits, vegetables, and whole grains to support digestive health",
      icon: <Activity className="h-8 w-8" />
    },
    {
      title: "Regular Exercise",
      description: "Physical activity helps maintain healthy digestion and overall wellness",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Manage Stress",
      description: "Stress can affect your digestive system - practice relaxation techniques",
      icon: <Heart className="h-8 w-8" />
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-6xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
          Health Tips
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Simple lifestyle changes for better digestive health
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300"
          >
            <div className="text-emerald-300 mb-6">{tip.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{tip.title}</h3>
            <p className="text-white/80 text-lg leading-relaxed">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Contact Slide Component
function ContactSlide() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-white text-center max-w-4xl mx-auto space-y-8"
    >
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto">
          Get in touch with us for appointments and inquiries
        </p>
      </div>
      
      <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur mt-12">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6 text-cyan-300" />
            <span className="text-white text-lg">
              154, Dharapuram Main Road, Near Usha Theater, Tiruppur – 641605
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="tel:08734912691" 
              className="inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 border border-white/20 hover:bg-white/25 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              <span className="text-white font-medium">08734912691</span>
            </a>
            
            <a 
              href="mailto:info@gastroclinic.com" 
              className="inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 border border-white/20 hover:bg-white/25 transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="text-white font-medium">info@gastroclinic.com</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-6">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-200">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
