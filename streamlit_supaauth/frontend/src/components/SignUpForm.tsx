import React, { useState } from 'react'
import { Mail, Lock, User, Loader, ArrowRight } from 'lucide-react'

interface SignUpFormProps {
  onSignUp: (email: string, password: string, fullName?: string) => void
  loading: boolean
  theme: string
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp, loading, theme }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!acceptTerms) {
      setError('Please accept the terms and conditions')
      return
    }

    onSignUp(email, password, fullName)
  }

  return (
    <div className="auth-form">
      <div className="form-header">
        <span className="welcome-badge">
          Join SupaAuth 👋
        </span>
        <h2>Create your account</h2>
        <p>Start building your first full-stack app today</p>
      </div>

      <form onSubmit={handleSubmit} className="form-content">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="form-group">
          <label>Full Name</label>
          <div className="input-wrapper">
            <User className="input-icon" size={20} />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
        </div>

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
              minLength={6}
              placeholder="Create a password"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-wrapper">
            <Lock className="input-icon" size={20} />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            required
          />
          <span>I agree to the Terms & Conditions</span>
        </div>

        <button
          type="submit"
          disabled={loading || !acceptTerms}
          className="submit-btn"
        >
          {loading ? (
            <Loader className="animate-spin" size={20} />
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="btn-icon" size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default SignUpForm