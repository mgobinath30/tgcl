'use client'

import { motion } from 'framer-motion'
import { Bed, Heart, Shield, Users } from 'lucide-react'

export default function PatientRoomsSlide() {
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
