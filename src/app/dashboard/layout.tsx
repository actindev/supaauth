import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import type { ReactNode } from '@/types'
import Header from '@/components/layout/Header'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/auth/signin?redirectTo=/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <main className="flex-1 overflow-y-auto bg-transparent">
        {children}
      </main>
      {/* Fixed height footer */}
      <footer className="h-16 bg-gradient-to-t from-background-dark via-background to-transparent border-t border-[#2E2E2E] shadow-[0_-1px_0_0_rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <p className="text-[#666666]">© {new Date().getFullYear()} SupaAuth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 