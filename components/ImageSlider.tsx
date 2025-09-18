'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import heroImage from '@/assets/hero-medical.jpg';
// import medicalEquipment from '@/assets/medical-equipment.jpg';
// import doctor1 from '@/assets/doctor1.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/building-with-wood.png',
      title: "Advanced Gastroenterology Care",
      description: "State-of-the-art medical facility with cutting-edge technology for comprehensive digestive health care."
    },
    {
      id: 2,
      image: '/images/building-with-wood.png',
      title: "Modern Medical Equipment",
      description: "Advanced endoscopy and diagnostic equipment ensuring accurate diagnosis and effective treatment."
    },
    {
      id: 3,
      image: '/images/building-with-wood.png',
      title: "Expert Medical Team",
      description: "Board-certified gastroenterologists with years of experience in treating complex digestive disorders."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hospital-primary/80 via-hospital-primary/60 to-hospital-secondary/40" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 transform transition-all duration-700 ease-out">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90 transform transition-all duration-700 ease-out delay-200">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default ImageSlider;