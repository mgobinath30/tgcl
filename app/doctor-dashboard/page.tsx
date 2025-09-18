'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Filter,
  Search,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users,
  Award,
  LogOut,
  Settings
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { fetchAppointmentsByDoctor, fetchSubscribers, updateAppointment, deleteAppointment, updateSubscriber, deleteSubscriber, fetchMessages, deleteMessage } from '@/lib/firestore'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'

interface Appointment {
  id: string
  patientName: string
  patientEmail: string
  patientPhone: string
  date: string
  time: string
  status: 'scheduled' | 'completed' | 'cancelled'
  type: string
  notes?: string
  doctorId: string
}

interface Subscriber {
  id: string
  email: string
  name: string
  subscribedAt: string
  status: 'active' | 'inactive'
}

export default function DoctorDashboard() {
  const { user, logout, isDoctor, loading } = useAuth()
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState<string>('')
  const { toast } = useToast()
  const [theme, setTheme] = useState<'blue' | 'emerald' | 'violet'>('blue')
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [showInstallHint, setShowInstallHint] = useState(false)

  // Mock data - in real app, this would come from Firebase
  const [aptCursor, setAptCursor] = useState<any>(null)
  const [subsCursor, setSubsCursor] = useState<any>(null)
  const [msgCursor, setMsgCursor] = useState<any>(null)
  const [editApt, setEditApt] = useState<Appointment | null>(null)
  const [editSub, setEditSub] = useState<Subscriber | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        if (isDoctor && user?.uid) {
          const aptPage = await fetchAppointmentsByDoctor(user.uid, 10)
          setAppointments(
            aptPage.items
              .filter((a: any) => (a.doctorId ? a.doctorId === user.uid : true))
              .map((a: any) => ({
              id: a.id,
              patientName: a.patientName,
              patientEmail: a.patientEmail || '',
              patientPhone: a.patientPhone || '',
              date: a.appointmentDate,
              time: a.appointmentTime,
              status: a.status || 'scheduled',
              type: a.type || 'Consultation',
              notes: a.message || '',
              doctorId: a.doctorId || ''
            }))
          )
          setAptCursor(aptPage.lastDoc)

          const subsPage = await fetchSubscribers(10)
          setSubscribers(
            subsPage.items.map((s: any) => ({
              id: s.id,
              email: s.email,
              name: s.name || s.email?.split('@')[0] || 'Subscriber',
              subscribedAt: s.subscribedAt?.toDate?.().toISOString().split('T')[0] || '',
              status: s.status || 'active'
            }))
          )
          setSubsCursor(subsPage.lastDoc)

          const msgsPage = await fetchMessages(10)
          setMessages(msgsPage.items.map((m: any) => ({
            id: m.id,
            patientName: m.patientName || m.name || 'Unknown',
            patientEmail: m.patientEmail || m.email || '',
            patientPhone: m.patientPhone || '',
            subject: m.subject || 'General',
            message: m.message || '',
            createdAt: m.createdAt?.toDate?.().toISOString() || ''
          })))
          setMsgCursor(msgsPage.lastDoc)
        }
      } catch (e) {
        console.error('Failed to load dashboard data', e)
      }
    }
    load()
  }, [isDoctor, user])

  // Capture PWA install prompt
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setInstallPrompt(e)
      setShowInstallHint(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  useEffect(() => {
    if (!loading && !isDoctor) {
      router.push('/doctors')
    }
  }, [loading, isDoctor, router])

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/doctors')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const getFilteredAppointments = () => {
    let filtered = appointments

    if (searchQuery) {
      filtered = filtered.filter(appointment =>
        appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.patientEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appointment.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(appointment => appointment.status === statusFilter)
    }

    if (dateFilter) {
      filtered = filtered.filter(appointment => appointment.date === dateFilter)
    }

    return filtered
  }

  const loadMoreAppointments = async () => {
    if (!user?.uid) return
    const page = await fetchAppointmentsByDoctor(user.uid, 10, aptCursor)
    setAppointments((prev) => [
      ...prev,
      ...page.items
        .filter((a: any) => (a.doctorId ? a.doctorId === user.uid : true))
        .map((a: any) => ({
        id: a.id,
        patientName: a.patientName,
        patientEmail: a.patientEmail || '',
        patientPhone: a.patientPhone || '',
        date: a.appointmentDate,
        time: a.appointmentTime,
        status: a.status || 'scheduled',
        type: a.type || 'Consultation',
        notes: a.message || '',
        doctorId: a.doctorId || ''
      }))
    ])
    setAptCursor(page.lastDoc)
    if (!page.lastDoc || page.items.length === 0) {
      toast({ title: 'No more appointments', description: 'You have reached the end.' })
    }
  }

  const loadMoreSubscribers = async () => {
    const page = await fetchSubscribers(10, subsCursor)
    setSubscribers((prev) => [
      ...prev,
      ...page.items.map((s: any) => ({
        id: s.id,
        email: s.email,
        name: s.name || s.email?.split('@')[0] || 'Subscriber',
        subscribedAt: s.subscribedAt?.toDate?.().toISOString().split('T')[0] || '',
        status: s.status || 'active'
      }))
    ])
    setSubsCursor(page.lastDoc)
    if (!page.lastDoc || page.items.length === 0) {
      toast({ title: 'No more subscribers', description: 'You have reached the end.' })
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      scheduled: 'bg-blue-100 text-blue-600',
      completed: 'bg-green-100 text-green-600',
      cancelled: 'bg-red-100 text-red-600'
    }
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-600'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isDoctor) {
    return null
  }

  const filteredAppointments = getFilteredAppointments()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className={`text-white py-12 ${
          theme === 'blue' ? 'bg-gradient-to-r from-blue-600 to-cyan-500' :
          theme === 'emerald' ? 'bg-gradient-to-r from-emerald-600 to-teal-500' :
          'bg-gradient-to-r from-violet-600 to-fuchsia-500'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Doctor Dashboard</h1>
                <p className="text-blue-100">Welcome back, Dr. {user?.email?.split('@')[0]}</p>
              </div>
              <div className="flex space-x-4 items-center">
                {/* Theme switcher (temporary) */}
                <div className="hidden md:flex items-center bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                  <button
                    className={`px-3 py-2 text-sm ${theme==='blue'?'bg-white/20':''}`}
                    onClick={() => setTheme('blue')}
                  >Blue</button>
                  <button
                    className={`px-3 py-2 text-sm ${theme==='emerald'?'bg-white/20':''}`}
                    onClick={() => setTheme('emerald')}
                  >Emerald</button>
                  <button
                    className={`px-3 py-2 text-sm ${theme==='violet'?'bg-white/20':''}`}
                    onClick={() => setTheme('violet')}
                  >Violet</button>
                </div>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => {
                    // Preview-only: shows option; to set globally, change GLOBAL_THEME in lib/theme.ts
                    alert('To set globally, update GLOBAL_THEME in lib/theme.ts')
                  }}
                >
                  Make Global
                </Button>
                {installPrompt && (
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={async () => {
                      // Show prompt
                      installPrompt.prompt()
                      const choice = await installPrompt.userChoice
                      if (choice.outcome === 'accepted') {
                        toast({ title: 'Installed', description: 'Dashboard installed successfully.' })
                      }
                      setInstallPrompt(null)
                    }}
                  >
                    Install App
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => router.push('/doctors')}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  View Public Profile
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="appointments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
              </TabsList>

              {/* Appointments (all) */}
              <TabsContent value="appointments" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search appointments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      type="date"
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4">
                  {filteredAppointments.length === 0 && (
                    <div className="text-center text-gray-500 py-10 border rounded-lg">No appointments found.</div>
                  )}
                  {filteredAppointments.map((appointment) => (
                    <motion.div
                      key={appointment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {appointment.patientName}
                            </h3>
                            <Badge className={getStatusBadge(appointment.status)}>
                              {getStatusIcon(appointment.status)}
                              <span className="ml-1 capitalize">{appointment.status}</span>
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(appointment.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{appointment.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>{appointment.patientPhone}</span>
                            </div>
                          </div>
                          {appointment.notes && (
                            <p className="mt-2 text-sm text-gray-600">
                              <strong>Notes:</strong> {appointment.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2 mt-4 md:mt-0">
                          <Button variant="outline" size="sm" onClick={() => setEditApt(appointment)}>
                            <Eye className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" onClick={async () => {
                            await deleteAppointment(appointment.id)
                            setAppointments((prev) => prev.filter(a => a.id !== appointment.id))
                            toast({ title: 'Deleted', description: 'Appointment removed.' })
                          }}>
                            <Download className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Messages */}
              <TabsContent value="messages" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                </div>
                <div className="overflow-x-auto bg-white border rounded-lg">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Date</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Name</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Email</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Phone</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Subject</th>
                        <th className="text-left px-4 py-2 font-semibold text-gray-700">Message</th>
                        <th className="text-right px-4 py-2 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.length === 0 && (
                        <tr>
                          <td className="px-4 py-6 text-center text-gray-500" colSpan={7}>No messages found.</td>
                        </tr>
                      )}
                      {messages.map((m) => (
                        <tr key={m.id} className="border-t">
                          <td className="px-4 py-2 text-gray-600">{m.createdAt ? new Date(m.createdAt).toLocaleString() : '-'}</td>
                          <td className="px-4 py-2 font-medium text-gray-900">{m.patientName}</td>
                          <td className="px-4 py-2 text-gray-600">{m.patientEmail}</td>
                          <td className="px-4 py-2 text-gray-600">{m.patientPhone}</td>
                          <td className="px-4 py-2 text-gray-600">{m.subject}</td>
                          <td className="px-4 py-2 text-gray-600 max-w-[360px] truncate" title={m.message}>{m.message}</td>
                          <td className="px-4 py-2 text-right">
                            <Button variant="outline" size="sm" onClick={async () => {
                              await deleteMessage(m.id)
                              setMessages(prev => prev.filter(x => x.id !== m.id))
                              toast({ title: 'Deleted', description: 'Message removed.' })
                            }}>Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Subscribers */}
              <TabsContent value="subscribers" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Subscribers</h2>
                  <div className="flex space-x-4">
                    <Button className="btn-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Export List
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Send Newsletter
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {subscribers.length === 0 && (
                    <div className="text-center text-gray-500 py-10 border rounded-lg">No subscribers found.</div>
                  )}
                  {subscribers.map((subscriber) => (
                    <motion.div
                      key={subscriber.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {subscriber.name}
                            </h3>
                            <Badge className={subscriber.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}>
                              {subscriber.status === 'active' ? <CheckCircle className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                              <span className="capitalize">{subscriber.status}</span>
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4" />
                              <span>{subscriber.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Subscribed: {new Date(subscriber.subscribedAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4 md:mt-0">
                          <Button variant="outline" size="sm" onClick={() => setEditSub(subscriber)}>
                            <Mail className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" onClick={async () => {
                            await deleteSubscriber(subscriber.id)
                            setSubscribers((prev) => prev.filter(s => s.id !== subscriber.id))
                            toast({ title: 'Deleted', description: 'Subscriber removed.' })
                          }}>
                            <Eye className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-between mt-6">
              <div className="space-x-2">
                <Button variant="outline" onClick={loadMoreAppointments}>Load more appointments</Button>
                <Button variant="outline" onClick={async () => {
                  const page = await fetchMessages(10, msgCursor)
                  setMessages(prev => [...prev, ...page.items.map((m: any) => ({
                    id: m.id,
                    patientName: m.patientName || m.name || 'Unknown',
                    patientEmail: m.patientEmail || m.email || '',
                    patientPhone: m.patientPhone || '',
                    subject: m.subject || 'General',
                    message: m.message || '',
                    createdAt: m.createdAt?.toDate?.().toISOString() || ''
                  }))])
                  setMsgCursor(page.lastDoc)
                }}>Load more messages</Button>
              </div>
              <Button variant="outline" onClick={loadMoreSubscribers}>Load more subscribers</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Edit Appointment Dialog */}
      <Dialog open={!!editApt} onOpenChange={() => setEditApt(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Appointment</DialogTitle>
          </DialogHeader>
          {editApt && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className="border p-2 rounded" value={editApt.patientName} onChange={(e) => setEditApt({ ...editApt, patientName: e.target.value })} placeholder="Patient Name" />
              <input className="border p-2 rounded" value={editApt.patientEmail} onChange={(e) => setEditApt({ ...editApt, patientEmail: e.target.value })} placeholder="Patient Email" />
              <input className="border p-2 rounded" value={editApt.patientPhone} onChange={(e) => setEditApt({ ...editApt, patientPhone: e.target.value })} placeholder="Patient Phone" />
              <input className="border p-2 rounded" type="date" value={editApt.date} onChange={(e) => setEditApt({ ...editApt, date: e.target.value })} />
              <input className="border p-2 rounded" value={editApt.time} onChange={(e) => setEditApt({ ...editApt, time: e.target.value })} placeholder="Time" />
              <select className="border p-2 rounded" value={editApt.status} onChange={(e) => setEditApt({ ...editApt, status: e.target.value as any })}>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <input className="border p-2 rounded" value={editApt.type} onChange={(e) => setEditApt({ ...editApt, type: e.target.value })} placeholder="Type" />
              <textarea className="border p-2 rounded md:col-span-2" rows={3} value={editApt.notes || ''} onChange={(e) => setEditApt({ ...editApt, notes: e.target.value })} placeholder="Notes" />
              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <Button variant="outline" onClick={() => setEditApt(null)}>Cancel</Button>
                <Button onClick={async () => {
                  if (!editApt) return
                  await updateAppointment(editApt.id, {
                    patientName: editApt.patientName,
                    patientEmail: editApt.patientEmail,
                    patientPhone: editApt.patientPhone,
                    appointmentDate: editApt.date,
                    appointmentTime: editApt.time,
                    status: editApt.status,
                    type: editApt.type,
                    message: editApt.notes,
                  } as any)
                  setAppointments(prev => prev.map(a => a.id === editApt.id ? editApt : a))
                  setEditApt(null)
                  toast({ title: 'Saved', description: 'Appointment updated.' })
                }}>Save</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Subscriber Dialog */}
      <Dialog open={!!editSub} onOpenChange={() => setEditSub(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Subscriber</DialogTitle>
          </DialogHeader>
          {editSub && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input className="border p-2 rounded" value={editSub.name} onChange={(e) => setEditSub({ ...editSub, name: e.target.value })} placeholder="Name" />
              <input className="border p-2 rounded" value={editSub.email} onChange={(e) => setEditSub({ ...editSub, email: e.target.value })} placeholder="Email" />
              <select className="border p-2 rounded md:col-span-2" value={editSub.status} onChange={(e) => setEditSub({ ...editSub, status: e.target.value as any })}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <Button variant="outline" onClick={() => setEditSub(null)}>Cancel</Button>
                <Button onClick={async () => {
                  if (!editSub) return
                  await updateSubscriber(editSub.id, { name: editSub.name, email: editSub.email, status: editSub.status })
                  setSubscribers(prev => prev.map(s => s.id === editSub.id ? editSub : s))
                  setEditSub(null)
                  toast({ title: 'Saved', description: 'Subscriber updated.' })
                }}>Save</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
