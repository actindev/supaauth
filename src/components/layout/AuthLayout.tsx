'use client'

import Link from 'next/link'
import type { ReactNode } from '@/types'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="h-20 flex items-center px-4 border-b bg-white">
        <Link href="/" className="text-2xl font-bold">
          SupaAuth
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[400px] bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h1 className="text-2xl font-bold text-center">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-gray-600 text-center">{subtitle}</p>
          )}
          <div className="mt-8">{children}</div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} SupaAuth. All rights reserved.</p>
      </footer>
    </div>
  )
} 