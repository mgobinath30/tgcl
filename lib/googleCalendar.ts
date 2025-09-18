import { google } from 'googleapis'

// Google Calendar API configuration
// const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary'
// const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
// const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
// const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID

const GOOGLE_CALENDAR_ID = '3857d319a16716a10c82349d2e9ceaaa6f3f26ff5647f60464843a5a0cef4063@group.calendar.google.com'
const GOOGLE_CLIENT_EMAIL = 'tiruppur-gastrocare-calendar@tglc-472107.iam.gserviceaccount.com'
const GOOGLE_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTXnzQB6+FNs0L\nyKjVSjO526PQKnrEPT9qJADiW7jYicnbkYcG6inFZiB9SEyAbqEhuuyzRv0NXurj\naiJ4TmZLJoQUnkV0JFOCWTJEAj+VlN6vTszsNU8RUAH8JRRi7PoDazW70NwlYxiU\nnbwzWD5eJVTn44zuDcfWvpCGoROncJKPiesGLwoU4svROjZBexkfnL20pE0b4TAy\n20D8rgPLlKmSG4ZACKwijoa955Ca1VXeysUk628C73WSaQOAgkHUdxj+e47YYkwx\nIayq7ZF9dccdsnlHmVQs6eTdup9nw0ot1bQ90BfOWsl2OHYUoP1DS2wZIw4PyS1r\ngNK7Jb1TAgMBAAECggEAC69hogtlA1JjCo1fqcXOBhxs3ppwTuMif/29aMYnefiJ\nPaMDvnjCjR/ydAF6kcrL539lDBtW7HEX9jFD9m6LIMAE/o1hHbcYrn3gTJYPhRwY\nAOiiHEZIwc0wclTZleLCGQPbyUGocfxk+45TYbS1h6wqhouYiLex4sNhy+VGMRii\nETvuA5XebWSB3FfFdyOTfsmt3CTjLzHMnWYAFyOCodqsQpFS5kETpxmOU/8nfvzV\ndHVy54y/UaDzJaGglCsx+c0DIGJ7PKCroOOGTO0azlqKI+bYS0bgVwFEKq+C1yRz\nK84Ic+PARUT7XNBqfch8IStb13FQRkTV+oHFNBuYTQKBgQD943im+6G0MKounc8/\nyXSuS+rvwgf3qQ2T+uLqhdzRMxB05PniN4RZtCsdBiRAeXrvUTMmjx7Qmj3PX7vp\nXwwgZcB+5knE5UGatRPFvx9lsB/3QH56ng4oaCHPQEE6hNBrGYoh6dnisj1+Wv4K\nbNU2GG2N792rjQsDn3MWN8Ra5wKBgQDVIH4IHzZ4aObeqUQ5rR8wTRvFeJoHgbTU\n8sRsxbCgDhXcGBy6LyYBO3wG/pBUGjQT3Ls1647AaM5h8kg1F1aEFPFauKgoe5h4\npVp0/j+yj3rP5gQpEZ8QKObjsDit6oi4c5qVrfssKPYhGB/ykDkaRVgbGlYGTlER\n0I2boqvItQKBgGjCjaxJNEYHtpEZqMSnObAZv01DAMqeRO4EndErfxwLOAUj3kAL\nrF7fStLlD9xSw/kvxi1o7MwieNKyq/T1tSlBExbJqzLFbjaJ9SipXik1bVs2j3nE\n8g6WOS0tVDzzRJSMq0SnG7LA3ULgBOcEVU3G8p2Ylh0NS7go+PH3/NuNAoGBAJ3P\nbGL5Ma0hB+pRbZpDbXencOvcbDkousx/YiCklS8+nsMU+5iFNt/sut62+gm8SVl3\ntQus+0vPjxoJe5wMRtyQYVJqruEi+3hB/+PnKyU9hpOQXv5F9QDTOHvZzW5B3rCt\nsQYqCHTfc7h3k5hZYF7qf925t3792JuXUHOwlQCNAoGBANq3olA9rMmo4WuSDEDi\ne3/Eui5L6Nr9sCBUcPnsfHLMwkEmNC7HFKrBwptYUbhti3JetG+SWLIFsDT9Ub7j\nLmGtITM14TAKPNR97T8DenV3hgdBuB6a5Kc2BdxudwdkVCFgdyjReDQEc1b3WKvI\nnOFb4P8TYZ2VKiUZoVyH/MYf\n-----END PRIVATE KEY-----\n'
const GOOGLE_PROJECT_ID = 'tglc-472107'

export interface CalendarEvent {
  summary: string
  description: string
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  attendees?: Array<{
    email: string
    displayName?: string
  }>
  location?: string
  reminders?: {
    useDefault: boolean
    overrides?: Array<{
      method: 'email' | 'popup'
      minutes: number
    }>
  }
}

export interface AppointmentData {
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  message?: string
  doctorName?: string
}

// Initialize Google Calendar API
function getGoogleCalendar() {
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_PROJECT_ID) {
    throw new Error('Google Calendar credentials not configured')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY,
      project_id: GOOGLE_PROJECT_ID,
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  })

  return google.calendar({ version: 'v3', auth })
}

// Convert appointment data to Google Calendar event
export function createCalendarEventFromAppointment(appointment: AppointmentData): CalendarEvent {
  const { patientName, patientEmail, appointmentDate, appointmentTime, message, doctorName } = appointment
  
  // Parse date and time
  const date = new Date(appointmentDate)
  const [time, period] = appointmentTime.split(' ')
  const [hours, minutes] = time.split(':')
  
  let hour24 = parseInt(hours)
  if (period === 'PM' && hour24 !== 12) {
    hour24 += 12
  } else if (period === 'AM' && hour24 === 12) {
    hour24 = 0
  }
  
  const startDateTime = new Date(date)
  startDateTime.setHours(hour24, parseInt(minutes), 0, 0)
  
  const endDateTime = new Date(startDateTime)
  endDateTime.setHours(startDateTime.getHours() + 1) // 1 hour appointment duration
  
  const event: CalendarEvent = {
    summary: `Appointment: ${patientName} with ${doctorName || 'Doctor'}`,
    description: `PATIENT DETAILS:\nName: ${patientName}\nPhone: ${appointment.patientPhone}\nEmail: ${patientEmail}\n\nDOCTOR: ${doctorName || 'TBD'}\n\nAPPOINTMENT TIME: ${appointmentDate} at ${appointmentTime}\n\nPATIENT NOTES: ${message || 'No additional notes'}\n\n---\nThis appointment was booked through the hospital website.`,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Asia/Kolkata', // Indian Standard Time
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    location: 'Tiruppur Gastrocare & Laparoscopic Centre, 154, Dharapuram Road, Tiruppur, Tamil Nadu 641604',
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 1 day before
        { method: 'popup', minutes: 60 }, // 1 hour before
        { method: 'popup', minutes: 15 }, // 15 minutes before
      ],
    },
  }
  
  return event
}

// Create Google Calendar event
export async function createGoogleCalendarEvent(appointment: AppointmentData): Promise<string> {
  try {
    const calendar = getGoogleCalendar()
    const event = createCalendarEventFromAppointment(appointment)
    
    const response = await calendar.events.insert({
      calendarId: GOOGLE_CALENDAR_ID,
      requestBody: event,
      sendUpdates: 'all', // Don't send email notifications
    })
    
    if (response.data.id) {
      console.log('Google Calendar event created:', response.data.id)
      return response.data.id
    } else {
      throw new Error('Failed to create Google Calendar event')
    }
  } catch (error) {
    console.error('Error creating Google Calendar event:', error)
    throw new Error('Failed to create Google Calendar event')
  }
}

// Update Google Calendar event
export async function updateGoogleCalendarEvent(eventId: string, appointment: AppointmentData): Promise<void> {
  try {
    const calendar = getGoogleCalendar()
    const event = createCalendarEventFromAppointment(appointment)
    
    await calendar.events.update({
      calendarId: GOOGLE_CALENDAR_ID,
      eventId: eventId,
      requestBody: event,
      sendUpdates: 'all',
    })
    
    console.log('Google Calendar event updated:', eventId)
  } catch (error) {
    console.error('Error updating Google Calendar event:', error)
    throw new Error('Failed to update Google Calendar event')
  }
}

// Delete Google Calendar event
export async function deleteGoogleCalendarEvent(eventId: string): Promise<void> {
  try {
    const calendar = getGoogleCalendar()
    
    await calendar.events.delete({
      calendarId: GOOGLE_CALENDAR_ID,
      eventId: eventId,
      sendUpdates: 'all',
    })
    
    console.log('Google Calendar event deleted:', eventId)
  } catch (error) {
    console.error('Error deleting Google Calendar event:', error)
    throw new Error('Failed to delete Google Calendar event')
  }
}

// List upcoming events
export async function listUpcomingEvents(maxResults: number = 10): Promise<any[]> {
  try {
    const calendar = getGoogleCalendar()
    const now = new Date().toISOString()
    
    const response = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: now,
      maxResults: maxResults,
      singleEvents: true,
      orderBy: 'startTime',
    })
    
    return response.data.items || []
  } catch (error) {
    console.error('Error listing Google Calendar events:', error)
    throw new Error('Failed to list Google Calendar events')
  }
}

// Get event by ID
export async function getGoogleCalendarEvent(eventId: string): Promise<any> {
  try {
    const calendar = getGoogleCalendar()
    
    const response = await calendar.events.get({
      calendarId: GOOGLE_CALENDAR_ID,
      eventId: eventId,
    })
    
    return response.data
  } catch (error) {
    console.error('Error getting Google Calendar event:', error)
    throw new Error('Failed to get Google Calendar event')
  }
}
