'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/contexts/auth'

export default function AuthButtons() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()

  // Show skeleton loader during authentication check
  if (loading) {
    return (
      <div className="flex items-center gap-4">
        <div className="w-16 h-9 bg-accent rounded animate-pulse" />
        <div className="w-20 h-9 bg-accent rounded animate-pulse" />
      </div>
    )
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="md:flex md:items-center md:gap-4 flex flex-col md:flex-row gap-6 md:gap-4">
      {user ? (
        <>
          <Link
            href="/dashboard"
            className="h-9 flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors duration-300 whitespace-nowrap"
          >
            <User size={18} className="md:hidden" />
            <span>Dashboard</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="h-9 flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text transition-colors duration-300"
          >
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
        </>
      ) : (
        <>
          <Link
            href="/auth/signin"
            className="h-9 flex items-center gap-2 text-sm font-medium text-text hover:text-primary transition-colors duration-300 w-full md:w-auto"
          >
            <span>Sign in</span>
          </Link>
          <Link
            href="/auth/signup"
            className="h-9 flex items-center justify-center px-4 text-sm font-medium rounded-md bg-card-bg gradient-border hover:text-text transition-all duration-300 w-full md:w-auto"
          >
            <span>Sign up</span>
          </Link>
        </>
      )}
    </div>
  )
} 