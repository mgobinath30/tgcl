'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Phone, 
  Calendar,
  MapPin,
  Mail
} from 'lucide-react'
import Logo from './Logo'
import AppointmentModal from './AppointmentModal'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Enhanced scroll behavior for better UX
      if (currentScrollY > lastScrollY && currentScrollY > 150 && (currentScrollY - lastScrollY) > 30) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY || currentScrollY < 150) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-blue-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 94426 50505</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@tiruppurgastrocare.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Tiruppur, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white'
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <Logo />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-blue-600">Tiruppur Gastrocare</h1>
                <p className="text-xs text-gray-600">Advanced Gastroenterology Center</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                  onClick={closeMenu}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                className="btn-primary btn-md"
                onClick={() => setIsAppointmentModalOpen(true)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="btn-outline btn-md"
                onClick={() => {
                  if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                    window.location.href = 'tel:+919876543210'
                  } else {
                    window.open('tel:+919876543210', '_blank')
                  }
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-blue-600 hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Smooth Slide Animation */}
        <div 
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-blue-600 hover:text-cyan-500 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2"
                    onClick={closeMenu}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button
                    className="w-full btn-primary btn-lg"
                    onClick={() => {
                      setIsAppointmentModalOpen(true)
                      closeMenu()
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full btn-outline btn-lg"
                    onClick={() => {
                      if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
                        window.location.href = 'tel:+919876543210'
                      } else {
                        window.open('tel:+919876543210', '_blank')
                      }
                      closeMenu()
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4 text-cyan-500" />
                    <span>+91 94426 50505</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4 text-cyan-500" />
                    <span>info@tiruppurgastrocare.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    <span>Tiruppur, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-12"></div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  )
}

export default Navigation
