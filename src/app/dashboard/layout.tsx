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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <p className="text-[#666666]">© {new Date().getFullYear()} SupaAuth. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link 
              href="https://github.com/gitmaxd" 
              target="_blank"
              className="text-[#666666] hover:text-text transition-colors duration-300"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://x.com/gitmaxd"
              target="_blank"
              className="text-[#666666] hover:text-text transition-colors duration-300"
              aria-label="Follow on X (Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 