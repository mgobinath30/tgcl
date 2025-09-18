# Google Calendar Integration Setup

This guide will help you set up Google Calendar integration for the appointment booking system.

## Prerequisites

1. A Google Cloud Project
2. Google Calendar API enabled
3. Service Account credentials

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your Project ID

## Step 2: Enable Google Calendar API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on it and enable it for your project

## Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `tiruppur-gastrocare-calendar`
   - Description: `Service account for Tiruppur Gastrocare calendar integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Download the JSON file

## Step 5: Share Calendar with Service Account

1. Go to [Google Calendar](https://calendar.google.com/)
2. Create a new calendar or use an existing one for appointments
3. Go to calendar settings
4. Under "Share with specific people", add the service account email
5. Give it "Make changes to events" permission
6. Note down the Calendar ID (found in calendar settings)

## Step 6: Configure Environment Variables

Add these environment variables to your `.env.local` file:

```env
# Google Calendar API Configuration
GOOGLE_CALENDAR_ID=your_calendar_id_here
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_PROJECT_ID=your_project_id_here
```

## Step 7: Extract Values from JSON

From the downloaded JSON file, extract:

- `client_email` → `GOOGLE_CLIENT_EMAIL`
- `private_key` → `GOOGLE_PRIVATE_KEY` (keep the quotes and \n characters)
- `project_id` → `GOOGLE_PROJECT_ID`

## Step 8: Calendar ID

The Calendar ID can be found in Google Calendar settings:
- For primary calendar: use `primary`
- For custom calendar: use the calendar ID from settings

## Features

Once configured, the system will:

1. **Create Calendar Events**: Automatically create Google Calendar events in the hospital calendar when appointments are booked
2. **Hospital Management**: Events are created for hospital admin/staff only - no patient email notifications
3. **Update Events**: Sync changes when appointments are modified
4. **Delete Events**: Remove calendar events when appointments are cancelled

## Event Details

Each appointment creates a calendar event with:
- **Title**: "Appointment: [Patient Name] with [Doctor Name]"
- **Description**: Complete patient details, contact info, appointment time, and notes
- **Location**: Tiruppur Gastrocare address
- **Attendees**: Hospital admin email only (info@tiruppurgastrocare.com)
- **Reminders**: 1 day, 1 hour, and 15 minutes before appointment
- **No Email Notifications**: Events are created silently without sending emails

## Troubleshooting

### Common Issues

1. **Authentication Error**: Check service account credentials
2. **Calendar Not Found**: Verify calendar ID and sharing permissions
3. **API Not Enabled**: Ensure Google Calendar API is enabled
4. **Permission Denied**: Check service account has calendar access

### Testing

Test the integration by:
1. Booking an appointment through the website
2. Checking if the event appears in the hospital Google Calendar
3. Verifying the event contains all patient details and appointment information
4. Confirming no email notifications are sent to patients

## Security Notes

- Keep your service account JSON file secure
- Never commit credentials to version control
- Use environment variables for all sensitive data
- Regularly rotate service account keys
