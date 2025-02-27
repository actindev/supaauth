'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { createPortal } from 'react-dom'
// Import version from utility file
import { APP_VERSION } from '@/lib/version'

// Dynamically import AuthButtons with loading state
const AuthButtons = dynamic(() => import('./AuthButtons'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-4">
      <div className="w-16 h-9 bg-accent rounded animate-pulse" />
      <div className="w-20 h-9 bg-accent rounded animate-pulse" />
    </div>
  )
})

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return createPortal(
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu */}
      <div
        className="fixed top-16 right-0 bottom-0 w-[280px] z-50 md:hidden overflow-auto"
        style={{
          backgroundColor: '#0D0B14',
          borderLeft: '1px solid #2E2E2E',
          boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'white' }}>
                Social
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Gitmaxd/supaauth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2"
                  style={{ color: 'white' }}
                  aria-label="View on GitHub"
                  onClick={onClose}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://x.com/gitmaxd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2"
                  style={{ color: 'white' }}
                  aria-label="Follow us on X (Twitter)"
                  onClick={onClose}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
            
            <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '8px 0' }}></div>
            
            {/* Deploy Button in Mobile Menu */}
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'white' }}>
                Deploy
              </div>
              <a
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-black border border-gray-800 hover:bg-gray-900 transition-colors duration-200"
                aria-label="Deploy to Vercel"
                onClick={onClose}
              >
                <svg className="h-4 w-4" viewBox="0 0 116 100" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
                </svg>
                <span>Deploy to Vercel</span>
              </a>
              
              {/* Add Netlify Deploy Button to Mobile Menu */}
              <a
                href="https://app.netlify.com/start/deploy?repository=https://github.com/Gitmaxd/supaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-md font-medium text-white bg-black border border-gray-800 hover:bg-gray-900 transition-colors duration-200"
                aria-label="Deploy to Netlify"
                onClick={onClose}
              >
                <svg className="h-4 w-4" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.579 11.36c.151.077.303.155.456.233l.004-.008 1.16-1.81-1.86-1.86-1.099 1.72.026.013c.435.566.83 1.168 1.313 1.712zm-5.847 14.64h2.64L16.01 22.636l-1.363 1.363 2.085 2.001zm10.32-17.245l-3.395 5.304c-.524-.268-1.057-.536-1.611-.736-.183-.066-.366-.13-.549-.194l4.386-6.851 1.17 2.477zM16.795 9.586c.5.142.97.329 1.425.56l-4.372 6.833c-.475-.243-.95-.487-1.425-.73l4.372-6.663zm-3.584 10.705l6.028 6.028h-6.028v-6.028zm-1.425 6.028H5.848c-.142 0-.284-.284-.284-.426 0-.142 0-.284.142-.426l.852-1.42 5.228-8.68v10.952zm-1.82-12.377c.475.243.95.487 1.425.73L6.984 21.35l-1.82-3.408h4.802zm-4.802 0l2.53-4.23 4.088 6.804c.5.243.994.487 1.493.73l-4.372 6.804-3.74-10.108zm19.57-3.408l-4.088-4.088c-.284-.284-.568-.426-.994-.426H9.148c-.426 0-.71.142-.994.426L4.066 10.58l11.102-4.656 10.566 4.61zm-10.566-6.028c-.284 0-.568.142-.71.426L4.066 10.58 2.53 13.42v-3.408c0-.426.142-.71.426-.994l4.088-4.088c.284-.284.71-.426 1.136-.426h14.64c.426 0 .852.142 1.136.426l4.088 4.088c.284.284.426.568.426.994v3.408l-1.536-2.84-9.856-4.516c-.142-.284-.426-.426-.71-.426z" />
                </svg>
                <span>Deploy to Netlify</span>
              </a>
            </div>
            
            <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '8px 0' }}></div>
            
            <div className="flex flex-col gap-4">
              <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'white' }}>
                Account
              </div>
              <div className="flex flex-col" onClick={onClose}>
                <AuthButtons />
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-6 text-center text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {new Date().getFullYear()} SupaAuth
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle window resize to determine if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Check on initial load
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className="h-16 bg-gradient-to-b from-background-dark via-background to-background/95 border-b border-[#2E2E2E] shadow-[0_1px_0_0_rgba(255,255,255,0.02)] sticky top-0 z-50 backdrop-blur-sm">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" 
        aria-label="Top"
      >
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center h-full">
            <Link 
              href="/" 
              className="text-2xl font-bold text-text whitespace-nowrap flex items-center h-full"
            >
              <div className="inline-flex items-end">
                <span>SupaAuth</span>
                <span className="text-xs text-gray-400 font-normal ml-1.5 mb-0.5">v{APP_VERSION}</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Gitmaxd/supaauth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/80 hover:text-text transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://x.com/gitmaxd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/80 hover:text-text transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="h-6 w-px bg-border/50 mx-1"></div>
            
            {/* Deploy to Vercel Button */}
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-black border border-gray-800 hover:bg-gray-900 transition-colors duration-200 text-white"
              aria-label="Deploy to Vercel"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 116 100" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <span>Deploy</span>
            </a>
            
            {/* Add Netlify Deploy Button to Desktop Navigation */}
            <a
              href="https://app.netlify.com/start/deploy?repository=https://github.com/Gitmaxd/supaauth&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=API%20Keys%20needed%20for%20Supabase%20authentication&envLink=https%3A%2F%2Fgithub.com%2FGitmaxd%2Fsupaauth%23environment-variables"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-black border border-gray-800 hover:bg-gray-900 transition-colors duration-200 text-white"
              aria-label="Deploy to Netlify"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.579 11.36c.151.077.303.155.456.233l.004-.008 1.16-1.81-1.86-1.86-1.099 1.72.026.013c.435.566.83 1.168 1.313 1.712zm-5.847 14.64h2.64L16.01 22.636l-1.363 1.363 2.085 2.001zm10.32-17.245l-3.395 5.304c-.524-.268-1.057-.536-1.611-.736-.183-.066-.366-.13-.549-.194l4.386-6.851 1.17 2.477zM16.795 9.586c.5.142.97.329 1.425.56l-4.372 6.833c-.475-.243-.95-.487-1.425-.73l4.372-6.663zm-3.584 10.705l6.028 6.028h-6.028v-6.028zm-1.425 6.028H5.848c-.142 0-.284-.284-.284-.426 0-.142 0-.284.142-.426l.852-1.42 5.228-8.68v10.952zm-1.82-12.377c.475.243.95.487 1.425.73L6.984 21.35l-1.82-3.408h4.802zm-4.802 0l2.53-4.23 4.088 6.804c.5.243.994.487 1.493.73l-4.372 6.804-3.74-10.108zm19.57-3.408l-4.088-4.088c-.284-.284-.568-.426-.994-.426H9.148c-.426 0-.71.142-.994.426L4.066 10.58l11.102-4.656 10.566 4.61zm-10.566-6.028c-.284 0-.568.142-.71.426L4.066 10.58 2.53 13.42v-3.408c0-.426.142-.71.426-.994l4.088-4.088c.284-.284.71-.426 1.136-.426h14.64c.426 0 .852.142 1.136.426l4.088 4.088c.284.284.426.568.426.994v3.408l-1.536-2.84-9.856-4.516c-.142-.284-.426-.426-.71-.426z" />
              </svg>
              <span>Deploy</span>
            </a>
            
            <div className="h-6 w-px bg-border/50 mx-1"></div>
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-text/80 hover:text-text transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Portal - only render on client side */}
      {isMounted && <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </header>
  )
} 