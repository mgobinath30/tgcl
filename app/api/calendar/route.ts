import { NextRequest, NextResponse } from 'next/server'
import { createGoogleCalendarEvent, updateGoogleCalendarEvent, deleteGoogleCalendarEvent } from '@/lib/googleCalendar'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, appointment, eventId, appointmentId } = body

    switch (action) {
      case 'create':
        const newEventId = await createGoogleCalendarEvent(appointment)
        return NextResponse.json({ success: true, eventId: newEventId })

      case 'update':
        await updateGoogleCalendarEvent(eventId, appointment)
        return NextResponse.json({ success: true })

      case 'delete':
        await deleteGoogleCalendarEvent(eventId)
        return NextResponse.json({ success: true })

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Calendar API error:', error)
    return NextResponse.json(
      { error: 'Failed to process calendar request' },
      { status: 500 }
    )
  }
}
