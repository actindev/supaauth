import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/auth'
import EnvVarError from '@/components/EnvVarError'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'SupaAuth - Authentication Made Simple',
  description: 'Get started with authentication in minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check for required environment variables
  const missingEnvVars = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (missingEnvVars) {
    return (
      <html lang="en" className={inter.className}>
        <body>
          <EnvVarError />
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 