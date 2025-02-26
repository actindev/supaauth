'use client'

import { useSearchParams } from 'next/navigation'
import EnvVarError from '@/components/EnvVarError'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const errorType = searchParams?.get('type')

  // For now we only have one error type, but this structure allows for easy addition of more error types
  switch (errorType) {
    case 'env_missing':
      return <EnvVarError />
    default:
      return <EnvVarError /> // Default to env error for now
  }
} 