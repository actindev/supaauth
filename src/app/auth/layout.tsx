import Link from 'next/link'
import type { ReactNode } from '@/types'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <header className="h-16 bg-gradient-to-b from-background-dark via-background to-transparent border-b border-[#2E2E2E] shadow-[0_1px_0_0_rgba(255,255,255,0.02)] sticky top-0 z-50 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <Link 
              href="/" 
              className="text-2xl font-bold text-text whitespace-nowrap flex items-center h-full"
            >
              SupaAuth
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 overflow-y-auto bg-transparent">
        {children}
      </main>

      {/* Fixed height footer */}
      <footer className="h-16 bg-gradient-to-t from-background-dark via-background to-transparent border-t border-[#2E2E2E] shadow-[0_-1px_0_0_rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <p className="text-text-secondary">© {new Date().getFullYear()} SupaAuth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 