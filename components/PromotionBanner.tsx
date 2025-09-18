'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Star, Gift, Clock } from 'lucide-react';

interface PromotionBannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromotionBanner({ isOpen, onClose }: PromotionBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (example: 7 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBookAppointment = () => {
    // You can integrate this with your appointment booking system
    window.location.href = '/contact';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919442650505';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Main Content */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 p-8 md:p-12 text-white">
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 mb-4"
                    >
                      <Gift className="w-6 h-6" />
                      <span className="text-lg font-semibold">Special Offer</span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl font-bold mb-4"
                    >
                      Free Consultation
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl opacity-90 mb-6"
                    >
                      Book your first consultation with our expert gastroenterologists at no cost
                    </motion.p>

                    {/* Countdown Timer */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">Offer ends in:</span>
                      <div className="flex gap-2">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                          <div key={unit} className="bg-white/20 rounded-lg px-3 py-1 text-center min-w-[50px]">
                            <div className="text-lg font-bold">{value.toString().padStart(2, '0')}</div>
                            <div className="text-xs opacity-80 capitalize">{unit}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Features */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        What's Included in Your Free Consultation?
                      </h3>
                      
                      <div className="space-y-4">
                        {[
                          {
                            icon: Star,
                            title: "Expert Medical Assessment",
                            description: "Comprehensive evaluation by our experienced gastroenterologists"
                          },
                          {
                            icon: Calendar,
                            title: "Personalized Treatment Plan",
                            description: "Customized care plan tailored to your specific needs"
                          },
                          {
                            icon: Phone,
                            title: "Follow-up Support",
                            description: "Ongoing guidance and support throughout your treatment"
                          }
                        ].map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - CTA */}
                    <div className="flex flex-col justify-center">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          Don't Miss This Opportunity!
                        </h4>
                        
                        <p className="text-gray-600 mb-6">
                          Limited time offer - Book your free consultation today and take the first step towards better digestive health.
                        </p>

                        <div className="space-y-4">
                          <motion.button
                            onClick={handleBookAppointment}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Calendar className="w-5 h-5 inline mr-2" />
                            Book Free Consultation
                          </motion.button>

                          <motion.button
                            onClick={handleCallNow}
                            className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone className="w-5 h-5 inline mr-2" />
                            Call Now: +91 94426 50505
                          </motion.button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                          *Terms and conditions apply. Valid for first-time patients only.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>Trusted by 5000+ patients</span>
                    </div>
                    <div>
                      Tiruppur Gastrocare & Laparoscopic Centre
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
