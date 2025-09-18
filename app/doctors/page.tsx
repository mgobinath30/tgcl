'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Star, 
  Award, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Users,
  Shield,
  CheckCircle,
  Stethoscope,
  Heart,
  Target
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AppointmentModal from '@/components/AppointmentModal'
import LoginModal from '@/components/LoginModal'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function DoctorsPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedSpecialization, setSelectedSpecialization] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { user, isDoctor } = useAuth()

  //   const doctors = [
  //   {
  //     id: 1,
  //     name: "Dr. Shenthil Prabhu M",
  //     specialization: "Senior Gastroenterologist",
  //     experience: "15+ Years",
  //     education: "MBBS, MD (Gastroenterology)",
  //     rating: 4.9,
  //     patients: 5000,
  //     image: "/images/doctor-1.jpg",
  //     languages: ["English", "Tamil", "Hindi"],
  //     availability: ["Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
  //     about: "Dr. Shenthil Prabhu M is a highly experienced gastroenterologist with over 15 years of practice. He specializes in advanced endoscopic procedures and has treated thousands of patients with various digestive disorders.",
  //     achievements: [
  //       "Fellowship in Advanced Endoscopy",
  //       "Published 25+ Research Papers",
  //       "Best Doctor Award 2022",
  //       "Member of Indian Society of Gastroenterology"
  //     ],
  //     specializations: ["Endoscopy", "IBD", "Liver Disease", "Digestive Disorders"]
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Priya Sharma",
  //     specialization: "Consultant Gastroenterologist",
  //     experience: "12+ Years",
  //     education: "MBBS, MD (Internal Medicine), DM (Gastroenterology)",
  //     rating: 4.8,
  //     patients: 3500,
  //     image: "/images/doctor-2.jpg",
  //     languages: ["English", "Tamil", "Telugu"],
  //     availability: ["Mon-Sat: 10AM-7PM"],
  //     about: "Dr. Priya Sharma is a dedicated gastroenterologist with expertise in liver diseases and inflammatory bowel disorders. She is known for her compassionate patient care and innovative treatment approaches.",
  //     achievements: [
  //       "Specialization in Liver Diseases",
  //       "Expert in IBD Management",
  //       "Women's Health Award 2021",
  //       "International Conference Speaker"
  //     ],
  //     specializations: ["Liver Disease", "IBD", "Women's Health", "Preventive Care"]
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Arun Kumar",
  //     specialization: "Laparoscopic Surgeon",
  //     experience: "18+ Years",
  //     education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
  //     rating: 4.9,
  //     patients: 6000,
  //     image: "/images/doctor-3.jpg",
  //     languages: ["English", "Tamil", "Malayalam"],
  //     availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
  //     about: "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
  //     achievements: [
  //       "Over 3000 Successful Surgeries",
  //       "Minimally Invasive Surgery Expert",
  //       "Surgical Excellence Award 2023",
  //       "International Training Programs"
  //     ],
  //     specializations: ["Laparoscopic Surgery", "Bariatric Surgery", "Hernia Repair", "Colorectal Surgery"]
  //   }
  // ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Shenthil Prabhu M",
      specialization: "Senior Gastroenterologist",
      specializations: ["Senior Gastroenterologist"],
      experience: "15+ Years",
      education: "MBBS, MD (Gastroenterology)",
      image: "/images/doctor-1.jpg",
      rating: 4.9,
      patients: 5000,
      languages: ["English", "Tamil", "Hindi"],
      availability: ["Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
      about:
        "Dr. Shenthil Prabhu M is a highly experienced gastroenterologist with over 15 years of practice. He specializes in advanced endoscopic procedures and has treated thousands of patients with various digestive disorders.",
      achievements: [
        "Fellowship in Advanced Endoscopy",
        "Published 25+ Research Papers",
        "Best Doctor Award 2022",
        "Member of Indian Society of Gastroenterology",
      ],
    },
    {
      id: 2,
      name: "Dr. Sathiskumar",
      specialization: "Surgical Gastroenterology & Liver Transplant",
      specializations: ["Surgical Gastroenterology & Liver Transplant"],
      experience: "12+ Years",
      education:
        "MS., MCh (Surgical Gastro), Liver Transplant Surgeon, Chennai",
      image: "/images/doctor-2.jpg",
      rating: 4.8,
      patients: 3500,
      languages: ["English", "Tamil", "Telugu"],
      availability: ["Mon-Sat: 10AM-7PM"],
      about:
        "Dr. Priya Sharma is a dedicated gastroenterologist with expertise in liver diseases and inflammatory bowel disorders. She is known for her compassionate patient care and innovative treatment approaches.",
      achievements: [
        "Specialization in Liver Diseases",
        "Expert in IBD Management",
        "Women's Health Award 2021",
        "International Conference Speaker",
      ],
    },
    {
      id: 3,
      name: "Dr. Loganayaki MS., DGO",
      specialization: "Gynaecology & General Surgery",
      specializations:["Gynaecology & General Surgery"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 4,
      name: "Dr. Amrish MBBS., MDRD",
      specialization: "Radiology",
      specializations: ["Radiology"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 5,
      name: "Dr. Ramkumar MD., DM (Cardio)",
      specialization: "Cardiology",
      specializations: ["Cardiology"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 6,
      name: "Dr. Naveen Babu MBBS., MD",
      specialization: "Consulting Physician",
      specializations: ["Consulting Physician"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 7,
      name: "Dr. Bharanee Dharan MBBS., MD",
      specialization: "Consulting Physician",
      specializations: ["Consulting Physician"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 8,
      name: "Dr. Rahul MBBS., MD",
      specialization: "Consulting Physician",
      specializations: ["Consulting Physician"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 9,
      name: "Dr. Keerthana MD., (Derm)",
      specialization: "Dermatology",
      specializations: ["Dermatology"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    },
    {
      id: 10,
      name: "Dr. Manoj Kumar MD.,",
      specialization: "Pulmonology",
      specializations: ["Pulmonology"],
      experience: "18+ Years",
      education: "MBBS, MS (General Surgery), Fellowship in Laparoscopy",
      image: "/images/doctor-3.jpg",
      rating: 4.9,
      patients: 6000,
      languages: ["English", "Tamil", "Malayalam"],
      availability: ["Mon-Fri: 8AM-5PM", "Sat: 8AM-1PM"],
      about:
        "Dr. Arun Kumar is a renowned laparoscopic surgeon with extensive experience in minimally invasive procedures. He has performed over 3000 successful surgeries and is a pioneer in advanced laparoscopic techniques.",
      achievements: [
        "Over 3000 Successful Surgeries",
        "Minimally Invasive Surgery Expert",
        "Surgical Excellence Award 2023",
        "International Training Programs",
      ],
    }
  ];

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor)
    setIsAppointmentModalOpen(true)
  }

  // Get unique specializations for filter
  const allSpecializations = Array.from(
    new Set(doctors.flatMap(doctor => doctor.specializations))
  )

  // Filter doctors based on selected criteria
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialization = selectedSpecialization === 'all' || 
      doctor.specializations.includes(selectedSpecialization)
    
    const matchesExperience = selectedExperience === 'all' || 
      doctor.experience.includes(selectedExperience)
    
    const matchesSearch = searchQuery === '' || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specializations.some(spec => 
        spec.toLowerCase().includes(searchQuery.toLowerCase())
      )
    
    return matchesSpecialization && matchesExperience && matchesSearch
  })

  const stats = [
    { icon: Users, value: "5000+", label: "Patients Treated" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Emergency Care" },
    { icon: Shield, value: "98%", label: "Success Rate" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Medical Icons */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
            <Stethoscope className="w-10 h-10 text-white/60" />
          </div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white/60" />
          </div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <Award className="w-6 h-6 text-white/60" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Users className="w-4 h-4" />
                Expert Medical Team
              </motion.div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Our <span className="text-yellow-300">Expert Doctors</span>
              </h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
                Meet our team of board-certified gastroenterologists and surgeons who bring 
                years of experience and expertise to provide you with the highest quality care.
              </p>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Doctor</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Search */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search doctors by name or specialization..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-700"
                    />
                  </div>

                  {/* Specialization Filter */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={selectedSpecialization}
                      onChange={(e) => setSelectedSpecialization(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-700 appearance-none bg-white"
                    >
                      <option value="all">All Specializations</option>
                      {allSpecializations.map((spec) => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Users className="w-4 h-4" />
                    Showing {filteredDoctors.length} of {doctors.length} doctors
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="professional-card h-full overflow-hidden">
                    {/* Doctor Header with Gradient */}
                    <div className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 p-8 text-white">
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                      }}></div>
                      
                      <div className="relative text-center">
                        {/* Doctor Avatar */}
                         {/* <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                      }}
                          className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg border border-white/20"
                        >
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </motion.div> */}
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg border border-white/20"
                        >
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </motion.div>

                        {/* Doctor Info */}
                        <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                        <p className="text-white/90 font-medium mb-4">{doctor.specialization}</p>

                        {/* Rating & Experience */}
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-300 fill-current" />
                            <span className="font-semibold">{doctor.rating}</span>
                          </div>
                          <div className="w-px h-6 bg-white/30"></div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-5 h-5 text-yellow-300" />
                            <span className="font-semibold">{doctor.experience}</span>
                          </div>
                        </div>

                        {/* Patient Count */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <Users className="w-4 h-4" />
                          {doctor.patients}+ patients treated
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8 space-y-6">
                      {/* Education */}
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-semibold text-blue-800 mb-2">Education</h4>
                        <p className="text-sm text-blue-700">{doctor.education}</p>
                      </div>

                      {/* Specializations */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-600" />
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specializations.map((spec) => (
                            <Badge key={spec} className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-600" />
                          Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.languages.map((lang) => (
                            <Badge key={lang} variant="outline" className="text-xs border-green-200 text-green-700">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-600" />
                          Availability
                        </h4>
                        <div className="space-y-2">
                          {doctor.availability.map((time) => (
                            <div key={time} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {doctor.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3 pt-6 border-t border-gray-200">
                        <Button 
                          onClick={() => handleAppointmentClick(doctor)}
                          className="w-full btn-medical"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full btn-medical-outline"
                          onClick={() => {
                            if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                              window.location.href = 'tel:+919442650505'
                            } else {
                              window.open('tel:+919442650505', '_blank')
                            }
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey to Better Health?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a consultation with our expert team and take the first step towards 
                better digestive health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleAppointmentClick()}
                  className="btn-secondary btn-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-white btn-lg text-black"
                  onClick={() => {
                    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                      window.location.href = 'tel:+919876543210'
                    } else {
                      window.open('tel:+919876543210', '_blank')
                    }
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 94426 50505
                </Button>
                {isDoctor ? (
                  <Button
                    variant="outline"
                    className="btn-outline-white btn-lg text-black"
                    onClick={() => window.location.href = '/doctor-dashboard'}
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Doctor Dashboard
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="btn-outline-white btn-lg text-black"
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Doctor Login
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  )
}
