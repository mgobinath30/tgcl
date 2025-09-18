'use client'

import { motion } from "framer-motion";
import { Shield, Building2, Heart, Award, Users, Star, Phone } from "lucide-react";
import Link from 'next/link'
import { Button } from "./ui/button";

// Professional insurance providers and partners data
const insuranceProviders = [
  { 
    name: "Star Health", 
    logo: "⭐", 
    type: "Health Insurance",
    description: "Leading health insurance provider",
    color: "from-blue-500 to-blue-600"
  },
  { 
    name: "HDFC ERGO", 
    logo: "🛡️", 
    type: "General Insurance",
    description: "Comprehensive insurance solutions",
    color: "from-green-500 to-green-600"
  },
  { 
    name: "ICICI Lombard", 
    logo: "💼", 
    type: "Health Insurance",
    description: "Trusted insurance partner",
    color: "from-purple-500 to-purple-600"
  },
  { 
    name: "Bajaj Allianz", 
    logo: "🏢", 
    type: "General Insurance",
    description: "Global insurance expertise",
    color: "from-orange-500 to-orange-600"
  },
  { 
    name: "New India Assurance", 
    logo: "🇮🇳", 
    type: "Public Sector",
    description: "Government-backed insurance",
    color: "from-red-500 to-red-600"
  },
  { 
    name: "Oriental Insurance", 
    logo: "🌅", 
    type: "Public Sector",
    description: "Reliable public insurance",
    color: "from-cyan-500 to-cyan-600"
  },
  { 
    name: "United India", 
    logo: "🤝", 
    type: "Public Sector",
    description: "United for your health",
    color: "from-indigo-500 to-indigo-600"
  },
  { 
    name: "National Insurance", 
    logo: "🏛️", 
    type: "Public Sector",
    description: "National insurance coverage",
    color: "from-teal-500 to-teal-600"
  },
];

const partners = [
  { 
    name: "Apollo Hospitals", 
    logo: "🏥", 
    type: "Healthcare Partner",
    description: "Leading healthcare network",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Fortis Healthcare", 
    logo: "💊", 
    type: "Healthcare Partner",
    description: "Advanced medical care",
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Max Healthcare", 
    logo: "🏥", 
    type: "Healthcare Partner",
    description: "Comprehensive healthcare",
    color: "from-purple-500 to-violet-500"
  },
  { 
    name: "Manipal Hospitals", 
    logo: "🎓", 
    type: "Healthcare Partner",
    description: "Academic excellence",
    color: "from-orange-500 to-amber-500"
  },
  { 
    name: "Narayana Health", 
    logo: "❤️", 
    type: "Healthcare Partner",
    description: "Affordable quality care",
    color: "from-red-500 to-pink-500"
  },
  { 
    name: "Medanta", 
    logo: "🏥", 
    type: "Healthcare Partner",
    description: "Medanta excellence",
    color: "from-indigo-500 to-blue-500"
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Cashless Treatment",
    description: "Direct billing with major insurance providers"
  },
  {
    icon: Building2,
    title: "Network Hospital",
    description: "Part of extensive healthcare network"
  },
  {
    icon: Heart,
    title: "Emergency Coverage",
    description: "24/7 emergency care coverage"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Certified by leading healthcare standards"
  }
];

export default function InsurancePartners() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009FC2' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            Insurance & Partners
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insurance Providers & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work with leading insurance providers and healthcare partners to ensure you receive the best care with maximum coverage and convenience.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Insurance Providers Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Insurance Providers
          </h3>
          
          {/* Auto-scrolling logos */}
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex animate-scroll space-x-8">
              {/* First set of logos */}
              {insuranceProviders.map((provider, index) => (
                <motion.div
                  key={`${provider.name}-1`}
                  className="flex-shrink-0 group cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-w-[240px] border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                        {provider.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                          {provider.name}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {provider.type}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {provider.description}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {insuranceProviders.map((provider, index) => (
                <motion.div
                  key={`${provider.name}-2`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 min-w-[240px] border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${provider.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                        {provider.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                          {provider.name}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {provider.type}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {provider.description}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Healthcare Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Healthcare Partners
          </h3>
          
          {/* Auto-scrolling logos */}
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex animate-scroll-reverse space-x-8">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-1`}
                  className="flex-shrink-0 group cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 min-w-[240px] border border-blue-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                        {partner.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg group-hover:text-cyan-600 transition-colors">
                          {partner.name}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {partner.type}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {partner.description}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-2`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 min-w-[240px] border border-blue-200 hover:border-cyan-300 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                        {partner.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg group-hover:text-cyan-600 transition-colors">
                          {partner.name}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {partner.type}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {partner.description}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help with Insurance?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Our team can help you understand your coverage and process claims efficiently
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='./contact'>
                              Check Coverage
                            </Link>
                </motion.button>
                <motion.button
                  className="border-2 border-white flex text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} onClick={() => {
                    if (
                      navigator.userAgent.match(
                        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
                      )
                    ) {
                      window.location.href = "tel:+919876543210";
                    } else {
                      window.open("tel:+919876543210", "_blank");
                    }
                  }}
                >
  
                  <Phone className="w-5 h-5 mr-2" /> +91 94426 50505
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
