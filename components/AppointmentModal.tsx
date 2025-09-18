'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  X,
  CheckCircle,
  Star,
  AlertCircle
} from 'lucide-react'
import { validateAppointmentForm, sanitizeInput, type AppointmentFormData } from '@/lib/security'
import { createAppointment } from '@/lib/firestore'
import { useAuth } from '@/contexts/AuthContext'
import { useToast } from '@/hooks/use-toast'

interface Doctor {
  id: number
  name: string
  specialization: string
  experience: string
  education: string
  image: string
  rating: number
  patients: number
  languages: string[]
  availability: string[]
  about: string
  achievements: string[]
}

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDoctor?: Doctor | null
}

const AppointmentModal = ({ isOpen, onClose, selectedDoctor }: AppointmentModalProps) => {
  const [activeTab, setActiveTab] = useState('appointment')
  const { user } = useAuth()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    doctor: selectedDoctor?.name || ''
  })
  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Shenthil Prabhu M",
      specialization: "Senior Gastroenterologist",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const sanitizedValue = sanitizeInput(value, name === 'message' ? 500 : 100)
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors([])

    // Validate form data
    const appointmentData: AppointmentFormData = {
      patientName: formData.name,
      patientEmail: formData.email,
      patientPhone: formData.phone,
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      message: formData.message
    }

    const validation = validateAppointmentForm(appointmentData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Create appointment in Firebase (this will also create Google Calendar event)
      await createAppointment({
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        appointmentDate: formData.date,
        appointmentTime: formData.time,
        message: formData.message,
        doctorId: user?.uid || 'guest',
        doctorName: formData.doctor,
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
        doctor: ''
      })
      
      toast({ 
        title: 'Appointment booked successfully!', 
        description: 'Your appointment has been scheduled and added to our hospital calendar. Our team will contact you soon with confirmation.' 
      })
      onClose()
    } catch (error) {
      setErrors(['Failed to book appointment. Please try again.'])
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-600 flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            Book Your Appointment
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="appointment" className="text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </TabsTrigger>
            <TabsTrigger value="doctors" className="text-sm font-medium">
              <User className="w-4 h-4 mr-2" />
              Our Doctors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appointment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Appointment Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    Appointment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Messages */}
                    {errors.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <h4 className="font-medium text-red-800">Please fix the following errors:</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                          {errors.map((error, index) => (
                            <li key={index} className="text-sm text-red-700">{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="space-y-2">
                      <label className="text-blue-600 font-medium">Select Doctor *</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                        required
                      >
                        <option value="">Choose a doctor</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.name}>
                            {doctor.name} - {doctor.specialization}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-blue-600 font-medium">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-blue-600 font-medium">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 94426 50505"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-blue-600 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-blue-600 font-medium">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-blue-600 font-medium">Preferred Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-blue-600 font-medium">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your symptoms or concerns..."
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Booking...</span>
                          </div>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Appointment
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={onClose} 
                        className="btn-outline btn-lg"
                        disabled={isSubmitting}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone Number</p>
                        <p className="text-gray-600">+91 94426 50505</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email Address</p>
                        <p className="text-gray-600">info@tiruppurgastrocare.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">Tiruppur, Tamil Nadu, India</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Working Hours</p>
                        <p className="text-gray-600">24/7 Hours Service</p> 
                        {/* <p className="text-gray-600">Mon-Sat: 8AM-8PM</p>
                        <p className="text-gray-600">Sun: 9AM-6PM</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-600 mb-2">Important Notes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Please arrive 15 minutes before your appointment</li>
                      <li>• Bring your previous medical records if any</li>
                      <li>• Fasting may be required for certain procedures</li>
                      <li>• Emergency cases are given priority</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-600">Calendar Integration</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Your appointment will be automatically added to our hospital calendar for better scheduling management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => {
                  setFormData(prev => ({ ...prev, doctor: doctor.name }))
                  setActiveTab('appointment')
                }}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialization}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-medium">{doctor.rating}</span>
                          <span className="text-xs text-gray-500">({doctor.patients}+ patients)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Experience</div>
                        <div className="text-sm font-medium text-blue-600">{doctor.experience}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default AppointmentModal
