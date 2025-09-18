'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  UserCredential 
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
  isDoctor: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {
    throw new Error('AuthContext not initialized')
  },
  logout: async () => {
    throw new Error('AuthContext not initialized')
  },
  isDoctor: false
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDoctor, setIsDoctor] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      
      if (user) {
        // Check if user is a doctor by checking custom claims or email domain
        // For now, we'll use a simple email check
        const doctorEmails = [
          'dr.shenthil@tiruppurgastrocare.com',
          'dr.priya@tiruppurgastrocare.com',
          'dr.arun@tiruppurgastrocare.com'
        ]
        setIsDoctor(doctorEmails.includes(user.email || ''))
      } else {
        setIsDoctor(false)
      }
      
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    await signOut(auth)
  }

  const value = {
    user,
    loading,
    signIn,
    logout,
    isDoctor
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

