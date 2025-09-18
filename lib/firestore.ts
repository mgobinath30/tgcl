import { db } from '@/lib/firebase'
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  Timestamp,
} from 'firebase/firestore'
// Google Calendar integration moved to server-side API routes

export interface NewAppointment {
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  message?: string
  doctorId: string
  doctorName?: string
  status?: 'scheduled' | 'completed' | 'cancelled'
  googleCalendarEventId?: string
}

export interface NewMessage {
  patientName: string
  patientEmail: string
  patientPhone: string
  message?: string
  createdAt?: Timestamp
  subject?: string
}

export interface NewSubscriber {
  email: string
  name?: string
  status?: 'active' | 'inactive'
}

export async function createAppointment(data: NewAppointment) {
  try {
    // Create appointment in Firebase
    const appointmentData = {
      ...data,
      status: data.status || 'scheduled',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, 'appointments'), appointmentData)
    
    // Create Google Calendar event via API call
    try {
      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          appointment: {
            patientName: data.patientName,
            patientEmail: data.patientEmail,
            patientPhone: data.patientPhone,
            appointmentDate: data.appointmentDate,
            appointmentTime: data.appointmentTime,
            message: data.message,
            doctorName: data.doctorName,
          },
          appointmentId: docRef.id,
        }),
      })

      if (response.ok) {
        const result = await response.json()
        // Update the appointment with the calendar event ID
        await updateDoc(docRef, {
          googleCalendarEventId: result.eventId,
        })
      }
    } catch (error) {
      console.warn('Failed to create Google Calendar event:', error)
      // Continue even if calendar event fails
    }

    return docRef
  } catch (error) {
    console.error('Error creating appointment:', error)
    throw error
  }
}

export async function createContact(data: NewMessage) {
  return await addDoc(collection(db, 'NewMessage'), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function fetchMessages(
  pageSize = 10,
  cursor?: any
): Promise<FirestorePage<any>> {
  const base: any[] = [orderBy('createdAt', 'desc'), limit(pageSize)]
  const q = cursor
    ? query(collection(db, 'NewMessage'), ...base, startAfter(cursor))
    : query(collection(db, 'NewMessage'), ...base)
  const snap = await getDocs(q)
  return {
    items: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
    lastDoc: snap.docs.length ? snap.docs[snap.docs.length - 1] : null,
  }
}

export async function deleteMessage(id: string) {
  const ref = doc(db, 'NewMessage', id)
  await deleteDoc(ref)
}

export async function createSubscriber(data: NewSubscriber) {
  return await addDoc(collection(db, 'subscribers'), {
    ...data,
    status: data.status || 'active',
    subscribedAt: serverTimestamp(),
  })
}

export async function updateAppointment(
  id: string,
  updates: Partial<NewAppointment & { status: string }>
) {
  try {
    const appointmentRef = doc(db, 'appointments', id)
    
    // Update appointment in Firebase
    await updateDoc(appointmentRef, { ...updates, updatedAt: serverTimestamp() })
    
    // Update Google Calendar event if it exists
    if (updates.googleCalendarEventId) {
      try {
        const response = await fetch('/api/calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'update',
            eventId: updates.googleCalendarEventId,
            appointment: {
              patientName: updates.patientName || '',
              patientEmail: updates.patientEmail || '',
              patientPhone: updates.patientPhone || '',
              appointmentDate: updates.appointmentDate || '',
              appointmentTime: updates.appointmentTime || '',
              message: updates.message,
              doctorName: updates.doctorName,
            },
          }),
        })
      } catch (error) {
        console.warn('Failed to update Google Calendar event:', error)
      }
    }
  } catch (error) {
    console.error('Error updating appointment:', error)
    throw error
  }
}

export async function deleteAppointment(id: string, googleCalendarEventId?: string) {
  try {
    // Delete appointment from Firebase
    const ref = doc(db, 'appointments', id)
    await deleteDoc(ref)
    
    // Delete Google Calendar event if it exists
    if (googleCalendarEventId) {
      try {
        await fetch('/api/calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'delete',
            eventId: googleCalendarEventId,
          }),
        })
      } catch (error) {
        console.warn('Failed to delete Google Calendar event:', error)
      }
    }
  } catch (error) {
    console.error('Error deleting appointment:', error)
    throw error
  }
}

export async function updateSubscriber(
  id: string,
  updates: Partial<NewSubscriber>
) {
  const ref = doc(db, 'subscribers', id)
  await updateDoc(ref, updates)
}

export async function deleteSubscriber(id: string) {
  const ref = doc(db, 'subscribers', id)
  await deleteDoc(ref)
}

export type FirestorePage<T> = {
  items: T[]
  lastDoc: any | null
}

export async function fetchAppointmentsByDoctor(
  doctorId: string,
  pageSize = 10,
  cursor?: any
): Promise<FirestorePage<any>> {
  // Fetch all appointments ordered by date. We filter per-doctor on the client because
  // patient-created records do not have a doctor UID association.
  const base: any[] = [orderBy('appointmentDate', 'desc'), limit(pageSize)]
  const q = cursor
    ? query(collection(db, 'appointments'), ...base, startAfter(cursor))
    : query(collection(db, 'appointments'), ...base)
  const snap = await getDocs(q)
  return {
    items: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
    lastDoc: snap.docs.length ? snap.docs[snap.docs.length - 1] : null,
  }
}

export async function fetchSubscribers(
  pageSize = 10,
  cursor?: any
): Promise<FirestorePage<any>> {
  const base: any[] = [orderBy('subscribedAt', 'desc'), limit(pageSize)]
  const q = cursor
    ? query(collection(db, 'subscribers'), ...base, startAfter(cursor))
    : query(collection(db, 'subscribers'), ...base)
  const snap = await getDocs(q)
  return {
    items: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
    lastDoc: snap.docs.length ? snap.docs[snap.docs.length - 1] : null,
  }
}


