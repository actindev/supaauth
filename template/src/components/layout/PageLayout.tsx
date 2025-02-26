'use client'

import dynamic from 'next/dynamic'

// Dynamically import Header with loading fallback
const Header = dynamic(() => import('./Header'), {
  ssr: true,
  loading: () => (
    <div className="h-16 bg-gradient-to-b from-background-dark via-background to-background/95 border-b border-[#2E2E2E]" />
  )
})

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {/* Fixed height header */}
      <Header />
      {/* Main content area with scrolling */}
      <main className="flex-1 bg-transparent">
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