self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('push', (event) => {
  const data = event.data?.json?.() || { title: 'New update', body: '' }
  event.waitUntil(
    self.registration.showNotification(data.title || 'New appointment', {
      body: data.body || 'You have a new appointment or subscriber',
      icon: '/favicon.ico',
    })
  )
})



