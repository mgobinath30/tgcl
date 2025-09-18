// Simple test script to verify Google Calendar integration
// Run with: node test-calendar.js

const { createGoogleCalendarEvent } = require('./lib/googleCalendar.ts');

async function testCalendarIntegration() {
  try {
    console.log('Testing Google Calendar integration...');
    
    const testAppointment = {
      patientName: 'Test Patient',
      patientEmail: 'test@example.com',
      patientPhone: '+91 98765 43210',
      appointmentDate: '2024-01-15',
      appointmentTime: '10:00 AM',
      message: 'Test appointment for calendar integration',
      doctorName: 'Dr. Test Doctor'
    };

    const eventId = await createGoogleCalendarEvent(testAppointment);
    console.log('✅ Calendar event created successfully!');
    console.log('Event ID:', eventId);
    
  } catch (error) {
    console.error('❌ Calendar integration test failed:');
    console.error(error.message);
    
    if (error.message.includes('credentials not configured')) {
      console.log('\n📝 Setup required:');
      console.log('1. Create a Google Cloud Project');
      console.log('2. Enable Google Calendar API');
      console.log('3. Create a Service Account');
      console.log('4. Set environment variables in .env.local');
      console.log('5. See GOOGLE_CALENDAR_SETUP.md for detailed instructions');
    }
  }
}

testCalendarIntegration();
