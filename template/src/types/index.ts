import type { ReactNode as ReactNodeType, FormEvent } from 'react'

export type ReactNode = ReactNodeType
export type FormEventType = FormEvent<HTMLFormElement>

export interface AuthState {
  isAuthenticated: boolean
  user: any | null
  error: string | null
}

export interface WaitlistState {
  email: string
  isSubmitting: boolean
  error: string | null
} 