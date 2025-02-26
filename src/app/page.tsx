import Header from '@/components/layout/Header'
import { ArrowRight, Shield, Zap, Users, Lock } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { StepCardProps } from '@/components/cards/StepCard'

// Dynamically import PageLayout
const PageLayout = dynamic(() => import('@/components/layout/PageLayout'), {
  ssr: true
})

// Dynamically import feature cards
const FeatureCard = dynamic(() => import('@/components/cards/FeatureCard'), {
  ssr: true
})

// Dynamically import StepCard with type casting
const StepCard = dynamic(() => import('@/components/cards/StepCard').then(mod => mod.default), {
  ssr: true
}) as any // temporary type casting to fix build

export default function Home() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Enhanced Mobile */}
        <div className="py-6 sm:py-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-primary/20">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">Perfect for New Developers 👋</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">
              From Zero to Auth<br />
              <span className="bg-gradient-to-r from-[#6D5AE6] via-[#4A8CFF] to-[#6BA1FF] text-transparent bg-clip-text">In Under 1 Minute</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary max-w-3xl mx-auto">
              Jumpstart your Next.js app with the Supabase Authentication Suite. Get up and running in seconds with a complete auth system built for beginners.
            </p>
          </div>
          
          {/* Quick Start Preview - Mobile Friendly */}
          <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
            <p className="text-xs sm:text-sm text-text-secondary font-normal mb-3 sm:mb-4">Yes, it&apos;s really this simple:</p>
            <div className="bg-background-dark text-text-secondary p-3 sm:p-4 rounded-lg inline-block text-center sm:text-left w-full sm:w-auto overflow-x-auto border border-primary">
              <code className="text-sm sm:text-base whitespace-nowrap font-mono">npx create-next-supaauth my-app</code>
            </div>
            <p className="mt-4 text-sm sm:text-base font-medium">
              <span className="inline-block gradient-border p-2 sm:p-2.5 group hover:scale-[1.02] transition-transform duration-300">
                <span className="flex items-center gap-2">
                  <span role="img" aria-label="eyes">👀</span>
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold animate-pulse-subtle">You&apos;re looking at the demo right now!</span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Features Grid - Responsive Layout */}
        <div className="py-6 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 px-4 text-text">Built for Learning Developers</h2>
          <p className="text-center text-sm sm:text-base text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Stop struggling with authentication. Start building features that matter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
            <FeatureCard
              icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="1-Minute Setup"
              description="One command setup. No complex configuration. Get a full authentication system faster than making instant noodles."
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Learn As You Go"
              description="Clean, documented code that teaches you best practices. Perfect for learning how authentication really works."
            />
            <FeatureCard
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="No-Code to Code"
              description="Start with our simple UI components, then customize the code as you learn. Grow at your own pace."
            />
            <FeatureCard
              icon={<Lock className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Production Ready"
              description="Built on Supabase. The same auth system used by real companies. No need to reinvent the wheel."
            />
          </div>
        </div>

        {/* How It Works - Mobile Responsive */}
        <div className="py-12 sm:py-16 dark-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-text">How It Works</h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
              From zero to full-stack in three easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              title="Run One Command"
              description="Use our CLI command to scaffold your project with authentication built-in."
            />
            <StepCard
              number="2"
              title="Customize Design"
              description="Modify the included Tailwind CSS components to match your brand."
            />
            <StepCard
              number="3"
              title="Add Your Features"
              description="Focus on building your app's unique features. Auth is handled."
            />
          </div>
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="py-12 sm:py-16 md:py-24">
          <div className="text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-text">Start Building Today</h2>
            <p className="text-sm sm:text-base text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join other developers who are shipping their first full-stack apps with SupaAuth.
            </p>
            <Link 
              href="/auth/signup"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-card-bg gradient-border hover:text-text transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              <span>Try it now!</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
} 