import React, { useState } from 'react'
import { Mail, Lock, Loader, ArrowRight } from 'lucide-react'

interface SignInFormProps {
  onSignIn: (email: string, password: string) => void
  loading: boolean
  theme: string
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignIn, loading, theme }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignIn(email, password)
  }

  return (
    <div className="auth-form">
      <div className="form-header">
        <span className="welcome-badge">
          Welcome Back 👋
        </span>
        <h2>Sign in to SupaAuth</h2>
        <p>Your full-stack authentication journey continues here</p>
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-wrapper">
            <Lock className="input-icon" size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="form-options">
          <div className="checkbox-wrapper">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? (
            <Loader className="animate-spin" size={20} />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="btn-icon" size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default SignInForm