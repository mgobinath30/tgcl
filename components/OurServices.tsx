'use client'

import { motion } from "framer-motion";
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Bone, 
  Baby, 
  Shield, 
  Activity,
  Users,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Enhanced icons with better visual appeal
const icons = {
  cardiac: Heart,
  gastrosciences: Stethoscope,
  neurosaince: Brain,
  orthopaedics: Bone,
  paediatric: Baby,
  liver: Shield,
  renal: Activity,
  gynaecology: Users,
  dentistry: Award,
};

const specialties = [
  { 
    title: "Gastroenterology", 
    desc: "Advanced digestive health care with cutting-edge endoscopic procedures", 
    icon: icons.gastrosciences,
    features: ["Endoscopy", "Colonoscopy", "ERCP", "Liver Biopsy"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Laparoscopic Surgery", 
    desc: "Minimally invasive surgical procedures for faster recovery", 
    icon: icons.cardiac,
    features: ["Gallbladder", "Hernia", "Appendectomy", "Colon Surgery"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  { 
    title: "Liver Care", 
    desc: "Comprehensive liver health and advanced treatment options", 
    icon: icons.liver,
    features: ["Hepatitis Treatment", "Liver Biopsy", "Fibroscan", "Transplant Care"],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  { 
    title: "Emergency Care", 
    desc: "24/7 emergency services with rapid response team", 
    icon: icons.renal,
    features: ["Trauma Care", "Acute Abdomen", "GI Bleeding", "Critical Care"],
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  },
  { 
    title: "Diagnostic Services", 
    desc: "State-of-the-art imaging and diagnostic facilities", 
    icon: icons.neurosaince,
    features: ["CT Scan", "MRI", "Ultrasound", "Lab Services"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  { 
    title: "Consultation Services", 
    desc: "Expert medical consultations across multiple specialties", 
    icon: icons.gynaecology,
    features: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
];

const stats = [
  { number: "5000+", label: "Successful Procedures" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Emergency Care" },
  { number: "98%", label: "Patient Satisfaction" }
];

export default function SpecialtiesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009FC2' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
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
            <Award className="w-4 h-4" />
            Clinical Excellence
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            An Ecosystem for <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Clinical Excellence</span>
        </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience world-class healthcare at our specialized centers of medical innovation. Our advanced facilities offer unmatched expertise in gastroenterology and laparoscopic surgery, setting new standards in clinical excellence and patient care.
          </p>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
              transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {specialties.map((item, i) => (
          <motion.div
            key={item.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 + index * 0.05 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

        {/* Bottom CTA Section */}
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
                Ready to Experience Excellence in Healthcare?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Book your consultation today and discover why thousands trust us with their health
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </div>
            </div>
          </div>
      </motion.div>
      </div>
    </section>
  );
}
