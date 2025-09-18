'use client'

import { motion } from 'framer-motion'
import { Camera, Microscope, Eye } from 'lucide-react'

export default function ScanCenterSlide() {
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
