// Security utilities for input validation and XSS prevention

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates phone number format (Indian format)
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Validates name format (letters, spaces, and common name characters)
 */
export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\.\-']{2,50}$/
  return nameRegex.test(name.trim())
}

/**
 * Validates date format (YYYY-MM-DD)
 */
export function validateDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(date)) return false
  
  const parsedDate = new Date(date)
  return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
}

/**
 * Validates time format (HH:MM AM/PM)
 */
export function validateTime(time: string): boolean {
  const timeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i
  return timeRegex.test(time)
}

/**
 * Sanitizes and validates user input
 */
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') return ''
  
  // Trim whitespace
  let sanitized = input.trim()
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  // Remove potentially dangerous characters
  sanitized = sanitized.replace(/[<>]/g, '')
  
  return sanitized
}

/**
 * Validates appointment form data
 */
export interface AppointmentFormData {
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  message?: string
}

/**
 * Validates contact form data
 */
export interface ContactFormData {
  patientName: string
  patientEmail: string
  patientPhone: string
  message?: string
}

/**
 * Common validation for fields shared between the forms
 */
function validateCommonFields(data: { patientName: string, patientEmail: string, patientPhone: string, message?: string }): string[] {
  const errors: string[] = []

  // Validate name
  if (!data.patientName || !validateName(data.patientName)) {
    errors.push('Please enter a valid name (2-50 characters, letters only)')
  }

  // Validate email
  if (!data.patientEmail || !validateEmail(data.patientEmail)) {
    errors.push('Please enter a valid email address')
  }

  // Validate phone
  if (!data.patientPhone || !validatePhone(data.patientPhone)) {
    errors.push('Please enter a valid phone number (10 digits, starting with 6-9)')
  }

  // Validate message (optional)
  if (data.message && data.message.length > 500) {
    errors.push('Message must be less than 500 characters')
  }

  return errors
}

/**
 * Validates appointment form data
 */
export function validateAppointmentForm(data: AppointmentFormData): {
  isValid: boolean
  errors: string[]
} {
  let errors = validateCommonFields(data)

  // Validate appointment date
  if (!data.appointmentDate || !validateDate(data.appointmentDate)) {
    errors.push('Please select a valid appointment date')
  }

  // Validate appointment time
  if (!data.appointmentTime || !validateTime(data.appointmentTime)) {
    errors.push('Please select a valid appointment time')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Validates contact form data
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean
  errors: string[]
} {
  let errors = validateCommonFields(data)

  return {
    isValid: errors.length === 0,
    errors
  }
}


/**
 * Rate limiting utility (simple in-memory implementation)
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map()
  
  isAllowed(identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now()
    const windowStart = now - windowMs
    
    // Get existing requests for this identifier
    const requests = this.requests.get(identifier) || []
    
    // Filter out old requests
    const recentRequests = requests.filter(time => time > windowStart)
    
    // Check if under limit
    if (recentRequests.length >= maxRequests) {
      return false
    }
    
    // Add current request
    recentRequests.push(now)
    this.requests.set(identifier, recentRequests)
    
    return true
  }
}

export const rateLimiter = new RateLimiter()

/**
 * Content Security Policy headers 
 */
export const cspHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.google.com https://www.googletagmanager.com https://apis.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://*.firebaseapp.com https://firestore.googleapis.com https://*.googleapis.com https://accounts.google.com https://oauth2.googleapis.com https://www.google-analytics.com https://region1.google-analytics.com",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ')
}


/**
 * Security headers for API routes
 */
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  ...cspHeaders
}

