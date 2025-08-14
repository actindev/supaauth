import React, { useEffect, useState } from "react"
import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import SignInForm from "./components/SignInForm"
import SignUpForm from "./components/SignUpForm"
import ResetPasswordForm from "./components/ResetPasswordForm"
import "./styles.css"

interface State {
  supabase: SupabaseClient | null
  user: any | null
  loading: boolean
  error: string | null
}

class SupaAuthComponent extends StreamlitComponentBase<State> {
  public state: State = {
    supabase: null,
    user: null,
    loading: false,
    error: null
  }

  public componentDidMount(): void {
    const { supabase_url, supabase_anon_key } = this.props.args
    
    if (supabase_url && supabase_anon_key) {
      const supabase = createClient(supabase_url, supabase_anon_key)
      this.setState({ supabase })
      
      // Check for existing session
      this.checkSession(supabase)
      
      // Listen for auth changes
      supabase.auth.onAuthStateChange((event, session) => {
        this.setState({ user: session?.user || null })
        this.sendAuthResult(event, session)
      })
    }
    
    Streamlit.setFrameHeight(600)
  }

  private checkSession = async (supabase: SupabaseClient) => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      this.setState({ user: session?.user || null })
      if (session) {
        this.sendAuthResult('SIGNED_IN', session)
      }
    } catch (error) {
      console.error('Error checking session:', error)
    }
  }

  private sendAuthResult = (event: string, session: any) => {
    Streamlit.setComponentValue({
      event,
      user: session?.user || null,
      session,
      timestamp: new Date().toISOString()
    })
  }

  private handleSignIn = async (email: string, password: string) => {
    if (!this.state.supabase) return

    this.setState({ loading: true, error: null })
    
    try {
      const { data, error } = await this.state.supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      
      this.setState({ user: data.user, loading: false })
      this.sendAuthResult('SIGNED_IN', data.session)
    } catch (error: any) {
      this.setState({ error: error.message, loading: false })
    }
  }

  private handleSignUp = async (email: string, password: string, fullName?: string) => {
    if (!this.state.supabase) return

    this.setState({ loading: true, error: null })
    
    try {
      const { data, error } = await this.state.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      })
      
      if (error) throw error
      
      this.setState({ loading: false })
      this.sendAuthResult('SIGNED_UP', data.session)
    } catch (error: any) {
      this.setState({ error: error.message, loading: false })
    }
  }

  private handleResetPassword = async (email: string) => {
    if (!this.state.supabase) return

    this.setState({ loading: true, error: null })
    
    try {
      const { error } = await this.state.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin
      })
      
      if (error) throw error
      
      this.setState({ loading: false })
      this.sendAuthResult('PASSWORD_RECOVERY', null)
    } catch (error: any) {
      this.setState({ error: error.message, loading: false })
    }
  }

  private handleSignOut = async () => {
    if (!this.state.supabase) return

    try {
      await this.state.supabase.auth.signOut()
      this.setState({ user: null })
      this.sendAuthResult('SIGNED_OUT', null)
    } catch (error: any) {
      this.setState({ error: error.message })
    }
  }

  public render = (): React.ReactNode => {
    const { mode = "signin", theme = "dark" } = this.props.args
    const { supabase, user, loading, error } = this.state

    if (!supabase) {
      return (
        <div className={`supaauth-container ${theme}`}>
          <div className="error-message">
            Missing Supabase configuration. Please provide supabase_url and supabase_anon_key.
          </div>
        </div>
      )
    }

    if (user) {
      return (
        <div className={`supaauth-container ${theme}`}>
          <div className="user-info">
            <h3>Welcome back!</h3>
            <p>Logged in as: {user.email}</p>
            <button 
              onClick={this.handleSignOut}
              className="sign-out-btn"
            >
              Sign Out
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className={`supaauth-container ${theme}`}>
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {mode === "signin" && (
          <SignInForm
            onSignIn={this.handleSignIn}
            loading={loading}
            theme={theme}
          />
        )}
        
        {mode === "signup" && (
          <SignUpForm
            onSignUp={this.handleSignUp}
            loading={loading}
            theme={theme}
          />
        )}
        
        {mode === "reset-password" && (
          <ResetPasswordForm
            onResetPassword={this.handleResetPassword}
            loading={loading}
            theme={theme}
          />
        )}
      </div>
    )
  }
}

export default withStreamlitConnection(SupaAuthComponent)