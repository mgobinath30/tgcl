'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  Microscope, 
  Heart, 
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AppointmentModal from '@/components/AppointmentModal'
import { useState } from 'react'

export default function ServicesPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor)
    setIsAppointmentModalOpen(true)
  }

  // const services = [
  //   {
  //     id: 1,
  //     title: "General Gastroenterology",
  //     description: "Comprehensive digestive health care for all types of gastrointestinal disorders.",
  //     icon: Stethoscope,
  //     features: [
  //       "Acid reflux and GERD treatment",
  //       "Irritable bowel syndrome (IBS)",
  //       "Inflammatory bowel disease (IBD)",
  //       "Celiac disease management",
  //       "Digestive disorder diagnosis"
  //     ],
  //     duration: "30-60 minutes",
  //     price: "₹1,500 - ₹3,000",
  //     color: "bg-blue-500"
  //   },
  //   {
  //     id: 2,
  //     title: "Advanced Endoscopy",
  //     description: "State-of-the-art endoscopic procedures for precise diagnosis and treatment.",
  //     icon: Microscope,
  //     features: [
  //       "Upper endoscopy (EGD)",
  //       "Colonoscopy",
  //       "ERCP procedures",
  //       "Capsule endoscopy",
  //       "Endoscopic ultrasound"
  //     ],
  //     duration: "1-2 hours",
  //     price: "₹5,000 - ₹15,000",
  //     color: "bg-cyan-500"
  //   },
  //   {
  //     id: 3,
  //     title: "Liver Disease Treatment",
  //     description: "Specialized care for liver diseases and disorders with advanced treatment options.",
  //     icon: Heart,
  //     features: [
  //       "Hepatitis treatment",
  //       "Liver cirrhosis management",
  //       "Fatty liver disease",
  //       "Liver function tests",
  //       "Liver biopsy procedures"
  //     ],
  //     duration: "45-90 minutes",
  //     price: "₹2,500 - ₹8,000",
  //     color: "bg-emerald-500"
  //   },
  //   {
  //     id: 4,
  //     title: "Laparoscopic Surgery",
  //     description: "Minimally invasive surgical procedures for various digestive conditions.",
  //     icon: Shield,
  //     features: [
  //       "Gallbladder surgery",
  //       "Appendectomy",
  //       "Hernia repair",
  //       "Bariatric surgery",
  //       "Colorectal surgery"
  //     ],
  //     duration: "2-4 hours",
  //     price: "₹25,000 - ₹75,000",
  //     color: "bg-purple-500"
  //   }
  // ]

  const services = [
    {
      id: 1,
      title: "Jaundice (Adult)",
      description:
        "Compassionate expert care tailored to treating jaundice by diagnosing root causes and offering medications, ERCP, PTC, or surgery as needed.",
      icon: "LiverIcon",
      features: [
        "Accurate diagnosis via blood tests, ultrasound, CT scans",
        "Personalized treatment plans",
        "Medications (e.g., antibiotics, ursodeoxycholic acid)",
        "ERCP and PTC for bile duct issues",
        "Minimally invasive or open surgery when required",
        "24/7 support and follow-up care",
      ],
      duration: "Varies per case",
      price: "₹––– (consult hospital)",
      color: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Gall Bladder – Gallstone Treatment",
      description:
        "Comprehensive treatment for gallstones using medication or laparoscopic/open surgery, with focus on fast recovery and minimally invasive care.",
      icon: "GallbladderIcon",
      features: [
        "Medication to dissolve cholesterol-based stones",
        "Laparoscopic gallbladder removal (cholecystectomy)",
        "Open surgery when necessary",
        "Rapid recovery with minimal scarring",
        "Lifestyle guidance to prevent recurrence",
      ],
      duration: "1–3 days",
      price: "₹––– (consult hospital)",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Hepatocellular Jaundice",
      description:
        "Specialized treatment of jaundice caused by liver cell (hepatocyte) dysfunction from conditions like hepatitis, cirrhosis, or fatty liver.",
      icon: "HepatologyIcon",
      features: [
        "Diagnostic tools: LFTs, imaging, liver biopsy",
        "Medication for hepatitis or inflammation",
        "Lifestyle modification guidance",
        "Liver transplant in advanced cases",
        "24/7 patient-centric care",
      ],
      duration: "Case-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-red-500",
    },
    {
      id: 4,
      title: "Hemolytic Jaundice",
      description:
        "Expert diagnosis and management of jaundice due to red blood cell destruction using tailored therapies including transfusions and immunosuppressants.",
      icon: "BloodIcon",
      features: [
        "Diagnostic tests: blood work, Coombs test, LFTs, imaging",
        "Treatment of underlying causes (e.g., malaria, autoimmune)",
        "Corticosteroids or immunosuppressants for immune-mediated cases",
        "Blood transfusions as needed",
        "Comprehensive, multidisciplinary approach",
      ],
      duration: "Based on severity",
      price: "₹––– (consult hospital)",
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Neonatal Jaundice",
      description:
        "Safe and effective jaundice treatment for newborns using phototherapy, bilirubin monitoring, and expert neonatal care.",
      icon: "BabyIcon",
      features: [
        "Diagnosis via bilirubin measurement (transcutaneous or blood)",
        "Phototherapy (conventional or fiberoptic)",
        "Exchange transfusion in severe cases",
        "Hydration and feeding support",
        "Parental education and family-centered care",
      ],
      duration: "Typically days to 1–2 weeks",
      price: "₹––– (consult hospital)",
      color: "bg-blue-300",
    },
    {
      id: 6,
      title: "HPB Surgery",
      description:
        "Advanced surgery for liver, pancreas, gallbladder, and bile duct diseases using minimally invasive and open techniques tailored to condition severity.",
      icon: "SurgeryIcon",
      features: [
        "Treatment of liver, pancreatic, gallbladder, and bile duct diseases",
        "Minimally invasive (laparoscopic) and open surgery options",
        "Precise diagnostics and treatment planning",
        "Skilled surgical and multidisciplinary teams",
      ],
      duration: "Procedure-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-purple-500",
    },
    {
      id: 7,
      title: "Digestive Cancer Care",
      description:
        "Holistic care for cancers of the digestive tract—esophagus, stomach, intestines, liver, pancreas, biliary tract—with diagnostics, surgery, and supportive therapy.",
      icon: "CancerIcon",
      features: [
        "Diagnostic tools: endoscopy, CT/MRI, biopsy",
        "Treatment: surgery, chemotherapy, radiation, targeted therapy",
        "Supportive care: pain management, nutrition, counseling",
        "Multidisciplinary cancer care team",
      ],
      duration: "Multi-stage care",
      price: "₹––– (consult hospital)",
      color: "bg-red-600",
    },
    {
      id: 8,
      title: "Endoscopy",
      description:
        "Minimally invasive endoscopic procedures—including upper GI, colonoscopy, ERCP, EUS—for accurate diagnosis and treatment of digestive conditions.",
      icon: "EndoscopyIcon",
      features: [
        "Upper endoscopy (EGD), colonoscopy",
        "ERCP for bile/pancreatic duct issues",
        "Endoscopic ultrasound (EUS)",
        "Detection and treatment of GI bleeding, strictures, tumors, polyps",
      ],
      duration: "30–60 minutes",
      price: "₹––– (consult hospital)",
      color: "bg-sky-500",
    },
    {
      id: 9,
      title: "Laparoscopic / Robotic Surgery",
      description:
        "State-of-the-art minimally invasive surgical solutions—laparoscopic and robotic—for gallbladder, hernia, bariatric, colorectal, urologic, and gynecologic procedures.",
      icon: "RobotIcon",
      features: [
        "Minimally invasive for faster recovery and less pain",
        "Procedures: gallbladder removal, hernia repair, appendectomy",
        "Bariatric (weight loss), colorectal, gynecologic, urologic surgeries",
      ],
      duration: "Procedure-specific",
      price: "₹––– (consult hospital)",
      color: "bg-green-700",
    },
    {
      id: 10,
      title: "Urology",
      description:
        "Expert management of urinary and male reproductive health, including kidney stone removal, prostate treatments, and reconstructive or robotic-assisted surgeries.",
      icon: "UrologyIcon",
      features: [
        "Shockwave lithotripsy and minimally invasive kidney stone removal",
        "Prostate therapies including HoLEP and robotic-assisted surgery",
        "Cystoscopy, urodynamics, and advanced diagnostics",
        "Bladder cancer TURBT and incontinence treatments",
        "Innovations such as gene and stem cell therapies",
      ],
      duration: "Procedure-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-blue-600",
    },
    {
      id: 11,
      title: "Kidney Stone Treatment",
      description:
        "Advanced, personalized management of kidney stones—from 3D CT diagnostic imaging to minimally invasive removal techniques and rapid recovery protocols.",
      icon: "StoneIcon",
      features: [
        "3D CT scans and precise diagnostics",
        "Laser lithotripsy and shockwave treatments",
        "Personalized treatment plans based on stone type",
        "Minimally invasive techniques for fast recovery",
        "24/7 emergency urology support",
      ],
      duration: "Outpatient or short stay",
      price: "₹––– (consult hospital)",
      color: "bg-yellow-600",
    },
    {
      id: 12,
      title: "Hernia Care",
      description:
        "Top-tier hernia management—from minimally invasive laparoscopic or robotic-assisted surgery to traditional open repair—all tailored with expert pre- and post-op care.",
      icon: "HerniaIcon",
      features: [
        "Laparoscopic and open hernia repair",
        "Robotic-assisted surgery for precision",
        "Epigastric and inguinal hernia treatment",
        "Mesh reinforcement and tension-free techniques",
        "Comprehensive surgical planning and recovery support",
      ],
      duration: "Procedure-specific",
      price: "₹––– (consult hospital)",
      color: "bg-green-600",
    },
    {
      id: 13,
      title: "Upper Gastrointestinal Surgery",
      description:
        "Surgical solutions for upper GI conditions—reflux (e.g., Nissen fundoplication), hiatal hernia repair, and bariatric surgery for related GI issues.",
      icon: "UpperGIIcon",
      features: [
        "Anti-reflux surgery (Nissen fundoplication, LINX)",
        "Hiatal hernia repair",
        "Gastric bypass and sleeve gastrectomy options",
        "Restoration of GI function",
      ],
      duration: "Procedure-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-purple-400",
    },
    {
      id: 14,
      title: "Esophagogastric Surgery",
      description:
        "Specialized surgical care for esophageal and stomach conditions, including tumors, strictures, and reflux complications—utilizing precision techniques tailored to patient needs.",
      icon: "EsophagoIcon",
      features: [
        "Anti-reflux and esophageal structural repair",
        "Treatment of esophageal tumors and strictures",
        "Minimally invasive gastric surgery",
        "Comprehensive post-op rehabilitation",
      ],
      duration: "Procedure-based",
      price: "₹––– (consult hospital)",
      color: "bg-red-400",
    },
    {
      id: 15,
      title: "Digestive Cancer Care",
      description:
        "Comprehensive treatment for digestive cancers—including diagnosis, surgery, chemo/radiotherapy, and supportive care—to ensure safety and comfort throughout recovery.",
      icon: "DigestiveCancerIcon",
      features: [
        "Diagnostics: imaging, biopsy, endoscopy",
        "Cancer surgeries tailored to digestive tract",
        "Chemo, radiation, and targeted treatments",
        "Support: nutrition, pain management, counseling",
      ],
      duration: "Multi-phase care",
      price: "₹––– (consult hospital)",
      color: "bg-red-600",
    },
    {
      id: 16,
      title: "Stomach Cancer Treatment",
      description:
        "Focused treatment strategies for stomach cancer, combining precise diagnostics with effective surgical and oncology support to ensure optimal outcomes.",
      icon: "StomachCancerIcon",
      features: [
        "Diagnostic imaging and biopsy",
        "Specialized gastric surgery",
        "Chemo and supportive care",
        "Personalized treatment planning",
      ],
      duration: "Multi-phase care",
      price: "₹––– (consult hospital)",
      color: "bg-maroon-500",
    },
    {
      id: 17,
      title: "Medical Gastroenterology",
      description:
        "Comprehensive care in gastroenterology—from diagnosis to treatment and maintenance—using advanced technologies like high-definition endoscopy and minimally invasive techniques.",
      icon: "Stethoscope",
      features: [
        "Trusted expertise in GI health",
        "Precise diagnostics",
        "Advanced treatments",
        "Personalized care and 24/7 assistance",
      ],
      duration: "30–60 minutes",
      price: "₹––– (consult hospital)",
      color: "bg-blue-500",
    },
    {
      id: 18,
      title: "Anesthesiology",
      description:
        "Expert anesthesiology services designed to ensure safety, comfort, and optimal outcomes for all surgical and procedural interventions.",
      icon: "AnesthesiaIcon",
      features: [
        "Trusted anesthesiology expertise",
        "Precise perioperative diagnostics",
        "Advanced patient monitoring",
        "Quality care delivery",
        "24/7 availability",
      ],
      duration: "Procedure-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-gray-700",
    },
    {
      id: 19,
      title: "Diabetes Care",
      description:
        "Personalized diabetes management by expert clinicians focused on precision diagnostics and ongoing support to improve health and quality of life.",
      icon: "GlucoseIcon",
      features: [
        "Individualized treatment plans",
        "Advanced diagnostics",
        "Multidisciplinary support",
      ],
      duration: "Consultation-based",
      price: "₹––– (consult hospital)",
      color: "bg-red-500",
    },
    {
      id: 20,
      title: "Endogynecology (Endometriosis Treatment)",
      description:
        "Specialized care in endogynecology, including precise diagnostics and advanced treatment of endometriosis with surgical safety and patient comfort prioritized.",
      icon: "EndoGynIcon",
      features: [
        "Expert diagnostics",
        "Minimally invasive surgical interventions",
        "Comprehensive patient care",
      ],
      duration: "Procedure-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-pink-400",
    },
    {
      id: 21,
      title: "Colorectal Surgery",
      description:
        "Expert surgical management of colorectal conditions with emphasis on safety, comfort, and advanced techniques to ensure optimal outcomes.",
      icon: "ColorectalIcon",
      features: [
        "Trusted surgical expertise",
        "Precise diagnostics",
        "Advanced colorectal treatments",
        "Comprehensive care and 24/7 assistance",
      ],
      duration: "Procedure-based",
      price: "₹––– (consult hospital)",
      color: "bg-purple-500",
    },
    {
      id: 22,
      title: "Liver & Pancreas Care",
      description:
        "Comprehensive management of liver and pancreatic disorders—including cirrhosis, cancers, hepatitis, and pancreatitis—offered with diagnostic, surgical, and long-term treatment options.",
      icon: "LiverPancreasIcon",
      features: [
        "Diagnosis of liver and pancreatic diseases",
        "Pancreatic and liver surgeries",
        "Minimally invasive procedures",
        "Medical management for acute and chronic cases",
      ],
      duration: "Condition-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-teal-600",
    },
    {
      id: 23,
      title: "Cardiology",
      description:
        "Comprehensive heart care addressing the risks posed by obesity, diabetes, cholesterol, sleep apnea, age, and gender—focused on prevention and treatment.",
      icon: "HeartIcon",
      features: [
        "Management of heart disease risk factors",
        "Diagnostic and preventive cardiology",
        "Personalized heart health planning",
      ],
      duration: "Consultation-based",
      price: "₹––– (consult hospital)",
      color: "bg-red-600",
    },
    {
      id: 24,
      title: "Kidney Transplant",
      description:
        "Expert kidney transplant services, tailored even for diabetic patients, with comprehensive pre-operative evaluation, surgical precision, and post-transplant care.",
      icon: "KidneyTransplantIcon",
      features: [
        "Safe transplantation for diabetic patients",
        "Detailed pre-surgical planning",
        "Post-operative follow-up and management",
      ],
      duration: "Extended inpatient stay",
      price: "₹––– (consult hospital)",
      color: "bg-indigo-500",
    },
    {
      id: 25,
      title: "Obstetrics & Gynaecology",
      description:
        "Comprehensive women’s care covering prenatal, childbirth, reproductive health, fertility, menstrual and menopause management through advanced medical technology.",
      icon: "OBGynIcon",
      features: [
        "Prenatal and childbirth care",
        "Reproductive and menstrual health treatment",
        "Menopause and fertility management",
      ],
      duration: "Consultation-dependent",
      price: "₹––– (consult hospital)",
      color: "bg-pink-600",
    },
    {
      id: 26,
      title: "In Vitro Fertilization (IVF)",
      description:
        "Compassionate fertility support through individualized IVF care programs (diagnosis to procedure), tailored to your needs.",
      icon: "IVFIcon",
      features: [
        "Fertility consultations and diagnostics",
        "IVF procedures",
        "Personalized treatment planning",
      ],
      duration: "Multi-cycle care",
      price: "₹––– (consult hospital)",
      color: "bg-yellow-500",
    },
  ];

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
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive gastroenterology care with state-of-the-art technology and 
                experienced specialists. We provide a full range of digestive health services.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="service-card group hover:shadow-xl transition-all duration-500 h-full">
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          {/* <service.icon className="w-8 h-8" /> */}
                        </div>
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-200">
                          Available
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-blue-600 mb-3">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-semibold text-gray-900">{service.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Starting Price</div>
                          <div className="font-semibold text-gray-900">{service.price}</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={() => window.location.href = `/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="flex-1 btn-primary"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                        <Button
                          onClick={() => handleAppointmentClick()}
                          className="btn-outline"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section  */}
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
                Ready to Start Your Treatment?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a consultation with our expert team and take the first step 
                towards better digestive health.
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
    </div>
  )
}

