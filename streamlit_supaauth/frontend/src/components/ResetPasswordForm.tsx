import React, { useState } from 'react'
import { Mail, Loader, ArrowRight } from 'lucide-react'

interface ResetPasswordFormProps {
  onResetPassword: (email: string) => void
  loading: boolean
  theme: string
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onResetPassword, loading, theme }) => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onResetPassword(email)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="auth-form">
        <div className="form-header">
          <span className="welcome-badge">
            Check Your Email 📧
          </span>
          <h2>Reset link sent</h2>
          <p>We've sent a password reset link to your email address</p>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-form">
      <div className="form-header">
        <span className="welcome-badge">
          Reset Your Password 🔑
        </span>
        <h2>Forgot your password?</h2>
        <p>Enter your email address and we'll send you a reset link</p>
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

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? (
            <Loader className="animate-spin" size={20} />
          ) : (
            <>
              <span>Send Reset Link</span>
              <ArrowRight className="btn-icon" size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ResetPasswordForm