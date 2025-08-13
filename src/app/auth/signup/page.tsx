'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, User, Loader, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-client'
import type { FormEventType } from '@/types'

export default function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  const handleSubmit = async (e: FormEventType) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      // Show success message and redirect to sign in
      router.push('/auth/signin?message=Check your email to confirm your account')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-8 px-4 sm:px-0">
        <div className="text-center">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary/20">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">Join SupaAuth 👋</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">Create your account</h2>
          <p className="mt-2 text-sm text-text-secondary">Start building your first full-stack app today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 gradient-border p-6 sm:p-8">
          <div className="space-y-5">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2 text-text">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="relative flex items-center">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="rounded border-accent-light bg-accent text-primary focus:ring-primary/50"
                required
              />
              <span className="ml-2 text-sm text-text-secondary">
                I agree to the{' '}
                <Link href="/terms" className="text-primary hover:text-primary-light transition-colors">
                  Terms & Conditions
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading || !acceptTerms}
              className="relative w-full bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors disabled:opacity-70 disabled:hover:bg-primary flex items-center justify-center gap-2 font-medium"
            >
              {isLoading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-text-secondary">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-primary hover:text-primary-light transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 
