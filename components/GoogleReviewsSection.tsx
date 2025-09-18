'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, User, Calendar } from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '@/components/AppointmentModal'

const GoogleReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent care and professional staff. Dr. Rajesh Kumar is very knowledgeable and took time to explain everything clearly. Highly recommended!",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      date: "1 month ago",
      text: "The best gastroenterology center in Tiruppur. Modern facilities and caring doctors. My experience was very positive from start to finish.",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Arun Kumar",
      rating: 5,
      date: "3 weeks ago",
      text: "Outstanding medical care with state-of-the-art equipment. The staff is friendly and the doctors are experts in their field. Thank you!",
      avatar: "AK"
    },
    {
      id: 4,
      name: "Meera Patel",
      rating: 5,
      date: "2 months ago",
      text: "Professional, clean, and efficient. Dr. Priya Sharma is amazing. She made me feel comfortable throughout the entire process.",
      avatar: "MP"
    },
    {
      id: 5,
      name: "Suresh Reddy",
      rating: 5,
      date: "1 week ago",
      text: "Top-notch medical facility with excellent doctors. The endoscopy procedure was smooth and painless. Highly recommend this center.",
      avatar: "SR"
    },
    {
      id: 6,
      name: "Lakshmi Devi",
      rating: 5,
      date: "3 weeks ago",
      text: "Very satisfied with the treatment. The doctors are experienced and the staff is very helpful. Clean and modern facility.",
      avatar: "LD"
    }
  ]
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const averageRating = 5.0
  const totalReviews = '50+'

  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor);
    setIsAppointmentModalOpen(true);
  }; 

  return (
    <>
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Read authentic reviews from our satisfied patients who have experienced 
            our world-class gastroenterology care and treatment.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            </div>
            <span className="text-gray-600">•</span>
            <span className="text-gray-600">{totalReviews} Google Reviews</span>
          </div>

          {/* Google Reviews Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border">
            <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Google Reviews</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="review-card group hover:shadow-xl transition-all duration-500 h-full">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{review.date}</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-600 leading-relaxed pl-4">
                      {review.text}
                    </p>
                  </div>

                  {/* Google Verified Badge */}
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">Google Verified Review</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Satisfied Patients</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the same exceptional care that our patients rave about. 
              Book your appointment today and see why we're the trusted choice for digestive health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => handleAppointmentClick()} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Appointment
              </button>
               <a href='https://share.google/Y28z1F8fcldnVcrbD' target='_blank' rel='noreferrer'>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Read More Reviews
              </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
    </>
  )
}

export default GoogleReviewsSection
