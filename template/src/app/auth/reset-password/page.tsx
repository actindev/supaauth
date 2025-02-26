'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, Lock, Loader, ArrowRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase-client'
import type { FormEventType } from '@/types'

export default function ResetPassword() {
  const [step, setStep] = useState<'email' | 'password'>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  // Check for reset token in URL parameters
  useEffect(() => {
    const code = searchParams?.get('code')
    const error = searchParams?.get('error')
    const error_description = searchParams?.get('error_description')
    const recoveryEmail = searchParams?.get('email')

    if (code) {
      setStep('password')
      if (recoveryEmail) {
        setEmail(recoveryEmail)
      }
    } else if (error) {
      setError(error_description || 'An error occurred')
    }
  }, [searchParams])

  const handleSubmit = async (e: FormEventType) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    const supabase = createClient()

    try {
      if (step === 'email') {
        // Send reset email
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        })
        if (error) throw error
        setSuccess('Check your email for the reset link')
      } else if (step === 'password') {
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match')
        }

        // Simply update the password - Supabase handles the session verification
        const { error } = await supabase.auth.updateUser({
          password: password
        })
        if (error) throw error

        setSuccess('Password updated successfully')
        router.push('/auth/signin?message=Password updated successfully')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-8">
        <div className="text-center">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary/20">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">Reset Your Password</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">Set a new password</h2>
          <p className="mt-2 text-sm text-text-secondary">Secure your account with a new password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 gradient-border p-6 sm:p-8">
          <div className="space-y-5 relative">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 text-sm text-green-500 bg-green-500/10 rounded-lg border border-green-500/20">
                {success}
              </div>
            )}

            {step === 'email' && (
              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            )}

            {step === 'password' && (
              <>
                <div className="relative z-10">
                  <label htmlFor="new-password" className="block text-sm font-medium mb-2 text-text">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                    <input
                      id="new-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                      placeholder="Create a new password"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label htmlFor="confirm-password" className="block text-sm font-medium mb-2 text-text">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                    <input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-accent border border-accent-light rounded-lg focus:outline-none focus:border-primary/50 text-text placeholder-text-muted/50 transition-colors"
                      placeholder="Confirm your new password"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="relative z-10 w-full bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg transition-colors disabled:opacity-70 disabled:hover:bg-primary flex items-center justify-center gap-2 font-medium cursor-pointer"
            >
              {isLoading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                <>
                  <span>{step === 'email' ? 'Send Reset Link' : 'Reset Password'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-text-secondary">
            Remember your password?{' '}
            <Link href="/auth/signin" className="text-primary hover:text-primary-light transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 