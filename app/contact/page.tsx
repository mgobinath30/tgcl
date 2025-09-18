"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  MessageSquare,
  Navigation,
  Stethoscope,
  Heart,
  Activity,
  Star,
} from "lucide-react";
import NavigationComponent from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import {
  validateContactForm,
  sanitizeInput,
  type ContactFormData,
} from "@/lib/security";
import { createContact } from "@/lib/firestore";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor);
    setIsAppointmentModalOpen(true);
  };

  // Validate form data
  const messgae: ContactFormData = {
    patientName: formData.name,
    patientEmail: formData.email,
    patientPhone: formData.phone,
    message: formData.message,
  };

  const validation = validateContactForm(messgae);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91 94426 50505",
      action: "Call Now",
      color: "bg-blue-600",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@tiruppurgastrocare.com",
      action: "Send Email",
      color: "bg-cyan-500",
      link: "mailto:info@tiruppurgastrocare.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Tiruppur, Tamil Nadu, India",
      action: "Get Directions",
      color: "bg-emerald-500",
      link: "https://www.google.com/maps/dir//TIRUPPUR+GASTROCARE+%26+LAPAROSCOPIC+CENTER+154,+Dharapuram+Road+near+Usha+Theater,+opposite+to+HDFC+BANK,+Elango+Layout+Tiruppur,+Pudhukkadu,+Tamil+Nadu+641604/@11.0962364,77.3562595,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba907b6d09df3bd:0x65bab1058b16d6bd!2m2!1d77.3562595!2d11.0962364?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "24/7 Hours Service",
      // details: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM",
      action: "Book Appointment",
      color: "bg-amber-500",
      link: "appointment",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    // Validate form data
    const appointmentData: ContactFormData = {
      patientName: formData.name,
      patientEmail: formData.email,
      patientPhone: formData.phone,
      message: formData.message,
    };

    const validation = validateContactForm(appointmentData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      await createContact({
        patientName: formData.name,
        patientEmail: formData.email,
        patientPhone: formData.phone,
        message: formData.message,
        subject: formData.subject,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      toast({
        title: "Message Submitted",
        description: "We will contact you soon with your concern.",
      });
    } catch (error) {
      setErrors(["Failed to submit your message. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value, name === "message" ? 500 : 100);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationComponent />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-emerald-600 overflow-hidden">
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
            <Activity className="w-6 h-6 text-white/60" />
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
                <MessageSquare className="w-4 h-4" />
                Contact Us
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Get In <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Have questions about our services or need to schedule an appointment? 
                Our expert team is here to help you with all your digestive health concerns.
              </p>
              
              {/* Quick Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+91 94426 50505</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Mail className="w-4 h-4" />
                  <span className="font-semibold">info@tiruppurgastrocare.com</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            {/* Main Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="contact-card h-full shadow-2xl border-0">
                  <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-t-2xl">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-white">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-white/90 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-gray-700 font-semibold text-sm">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Your full name"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-gray-700 font-semibold text-sm">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            name="phone"
                            placeholder="+91 94426 50505"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          name="email"
                          placeholder="your.email@example.com"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold text-sm">
                          Subject
                        </label>
                        <select
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
                          value={formData.subject}
                          onChange={handleInputChange}
                          name="subject"
                        >
                          <option value="">Select a subject</option>
                          <option value="consultation">General Consultation</option>
                          <option value="emergency">Emergency Care</option>
                          <option value="billing">Billing & Insurance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-gray-700 font-semibold text-sm">
                          Message *
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={handleInputChange}
                          name="message"
                          placeholder="Please describe your inquiry or concern..."
                          rows={5}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none transition-colors text-gray-700"
                        />
                      </div>
                      
                      <Button className="w-full btn-primary btn-lg py-4 text-lg font-semibold">
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Hospital Image Card */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative h-80 bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-bold mb-2">Tiruppur Gastrocare</h3>
                        <p className="text-xl opacity-90">& Laparoscopic Centre</p>
                        <div className="mt-4 flex items-center justify-center gap-2">
                          <Star className="w-5 h-5 text-yellow-300" />
                          <span className="text-lg font-semibold">Excellence in Healthcare</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">+91 94426 50505</div>
                        <div className="font-bold text-gray-900 text-lg">+91 98765 43210</div>
                        <div className="text-sm text-gray-600">Emergency & General</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-xl hover:bg-cyan-100 transition-colors">
                      <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">info@tiruppurgastrocare.com</div>
                        <div className="text-sm text-gray-600">General Inquiries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">24/7 Emergency</div>
                        <div className="text-sm text-gray-600">Mon-Sat: 8AM-8PM, Sun: 9AM-6PM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white"/>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">154 Dharapuram Main Rd</div>
                        <div className="text-sm text-gray-600">Tiruppur, Tamil Nadu 641604</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Google Map */}
            <div className="pt-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <h3 className="text-2xl font-bold mb-2">Visit Our Location</h3>
                <p className="opacity-90">
                  Find us easily in the heart of Tiruppur
                </p>
              </div>
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.229896132765!2d77.3562595!3d11.096236399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b6d09df3bd%3A0x65bab1058b16d6bd!2sTIRUPPUR%20GASTROCARE%20%26%20LAPAROSCOPIC%20CENTER!5e0!3m2!1sen!2sin!4v1756816266928!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tiruppur Gastrocare Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Emergency Care Available 24/7
              </h2>
              <p className="text-xl mb-6 opacity-90">
                For urgent medical attention, call our emergency hotline
                immediately
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-secondary btn-lg"
                  onClick={() => {
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
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: +91 94426 50505
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-white btn-lg text-black"
                  onClick={() => handleAppointmentClick()}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Urgent Appointment
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
  );
}
