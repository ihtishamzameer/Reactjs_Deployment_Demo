// pages/Register.jsx
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { register } from '../features/auth/authSlice'
import { Button, Input, Label, FormGroup, Card, ErrorMessage, Spinner } from '../styles/shared'

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(4)};
`

const AuthContainer = styled(Card)`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const HelperText = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 4px;
`

const FooterText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.spacing(4)};

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.colors.success};
    width: 48px;
    height: 48px;
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.95rem;
  }
`

function Register() {
  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.auth)
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' })
  const [localError, setLocalError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalError(null)

    if (form.password !== form.confirmPassword) {
      setLocalError('Passwords do not match')
      return
    }

    setSubmitted(true)
    dispatch(register({ username: form.username, password: form.password }))
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'succeeded' && submitted

  return (
    <Page>
      <AuthContainer>
        {isSuccess ? (
          <SuccessMessage>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Account created successfully</h3>
            <p>You can now sign in with your new credentials.</p>
            <Link to="/login" style={{ width: '100%' }}>
              <Button $fullWidth>Go to Login</Button>
            </Link>
          </SuccessMessage>
        ) : (
          <>
            <Header>
              <Title>Create an account</Title>
              <Subtitle>Enter your details to get started</Subtitle>
            </Header>

            {(localError || (status === 'failed' && error)) && (
              <ErrorMessage>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {localError || error}
              </ErrorMessage>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="username">Email address</Label>
                <Input
                  id="username"
                  type="email"
                  name="username"
                  placeholder="name@example.com"
                  value={form.username}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                />
                <HelperText>Must be at least 8 characters.</HelperText>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  disabled={isLoading}
                />
              </FormGroup>

              <Button type="submit" $fullWidth disabled={isLoading} style={{ marginTop: '8px' }}>
                {isLoading ? (
                  <>
                    <Spinner size="18px" />
                    Creating account...
                  </>
                ) : (
                  'Create account'
                )}
              </Button>
            </Form>

            <FooterText>
              Already have an account? 
              <Link to="/login">Sign in</Link>
            </FooterText>
          </>
        )}
      </AuthContainer>
    </Page>
  )
}

export default Register