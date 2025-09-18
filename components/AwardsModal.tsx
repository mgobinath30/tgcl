'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Calendar, Building, ExternalLink } from 'lucide-react';

interface AwardData {
  title: string;
  year: string;
  organization: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  certificate?: string;
}

interface AwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
  award: AwardData | null;
}

export default function AwardsModal({ isOpen, onClose, award }: AwardsModalProps) {
  if (!award) return null;

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
                <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-8 md:p-12 text-white">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <Award className="w-8 h-8" />
                      <span className="text-lg font-semibold">Award Recognition</span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl font-bold mb-4"
                    >
                      {award.title}
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                    >
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{award.year}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Building className="w-4 h-4" />
                        <span className="text-sm font-medium">{award.organization}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Award Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Award Details
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                          <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Recognition
                          </h4>
                          <p className="text-blue-700 leading-relaxed">
                            {award.description}
                          </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                          <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <Building className="w-5 h-5" />
                            Organization
                          </h4>
                          <p className="text-green-700 font-medium text-lg">
                            {award.organization}
                          </p>
                          <p className="text-green-600 text-sm mt-1">
                            Leading medical institution
                          </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
                          <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Year of Recognition
                          </h4>
                          <p className="text-purple-700 font-bold text-2xl">
                            {award.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Award Image/Certificate */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Award Certificate
                      </h3>
                      
                      <div className="relative">
                        {/* Placeholder for award image */}
                        <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-yellow-300">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Award className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">
                              {award.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                              Certificate of Excellence
                            </p>
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                              <ExternalLink className="w-4 h-4" />
                              View Full Certificate
                            </div>
                          </div>
                        </div>
                        
                        {/* Award Badge */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <award.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What This Award Means
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          This recognition reflects our commitment to excellence in healthcare delivery, 
                          patient safety, and medical innovation. It validates our team's dedication to 
                          providing world-class medical services to our community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span>Recognized for Excellence</span>
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
