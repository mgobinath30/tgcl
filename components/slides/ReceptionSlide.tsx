'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Heart, Phone } from 'lucide-react'

export default function ReceptionSlide() {
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
