'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from 'lucide-react'
import Logo from './Logo'
import { createSubscriber } from '@/lib/firestore'
import { useToast } from '@/hooks/use-toast'
import { validateEmail } from '@/lib/security'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()
  const { toast } = useToast()
  const [subscriberEmail, setSubscriberEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async () => {
    if (!validateEmail(subscriberEmail)) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email address.' })
      return
    }
    try {
      setIsSubscribing(true)
      await createSubscriber({ email: subscriberEmail, status: 'active' })
      setSubscriberEmail('')
      toast({ title: 'Subscribed', description: 'You have been subscribed to our newsletter.' })
    } catch (e) {
      toast({ title: 'Subscription failed', description: 'Please try again later.' })
    } finally {
      setIsSubscribing(false)
    }
  }

  const footerLinks = {
    services: [
      { name: 'Endoscopy', href: '/services#endoscopy' },
      { name: 'Colonoscopy', href: '/services#colonoscopy' },
      { name: 'Laparoscopic Surgery', href: '/services#laparoscopic' },
      { name: 'Liver Disease Treatment', href: '/services#liver' },
      { name: 'Digestive Disorders', href: '/services#digestive' }
    ],
    quickLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Doctors', href: '/doctors' },
      { name: 'Patient Resources', href: '/resources' },
      { name: 'Insurance & Billing', href: '/billing' },
      { name: 'Contact Us', href: '/contact' }
    ],
    support: [
      { name: 'Emergency Care', href: '/emergency' },
      { name: 'Patient Portal', href: '/portal' },
      { name: 'Appointment Booking', href: '/appointment' },
      { name: 'Health Tips', href: '/blog' },
      { name: 'FAQ', href: '/faq' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Logo />
              <div>
                <h3 className="text-xl font-bold text-white">Tiruppur Gastrocare</h3>
                <p className="text-sm text-gray-400">Advanced Gastroenterology Center</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing comprehensive digestive health care with advanced technology and experienced specialists. 
              Your health is our priority.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>+91 94426 50505</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>info@tiruppurgastrocare.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Tiruppur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span>Mon-Sat: 8AM-8PM, Sun: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-md font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-4 text-white">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for health tips and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <Button onClick={handleSubscribe} disabled={isSubscribing} className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Tiruppur Gastrocare & Laparoscopic Centre. All rights reserved.
              <br />
              <span className="text-xs text-gray-500 mt-1 block">
                This website is developed & maintained by Tiruppur Gastrocare IT Team
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                Sitemap
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">Emergency Contact: +91 94426 50505</span>
            <span>•</span>
            <span>24/7 Emergency Care Available</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
