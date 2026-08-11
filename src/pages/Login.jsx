// pages/Login.jsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../features/auth/authSlice'
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

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: 0.875rem;
`

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  user-select: none;
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

const ForgotLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
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

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, status, error } = useSelector((state) => state.auth)
  
  const [form, setForm] = useState({ username: '', password: '' })
  const [rememberMe, setRememberMe] = useState(true)

  // Redirect to home when authenticated
  const location = useLocation();
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ ...form, rememberMe }))
  }

  const isLoading = status === 'loading'

  return (
    <Page>
      <AuthContainer>
        <Header>
          <Title>Welcome back</Title>
          <Subtitle>Sign in to your account</Subtitle>
        </Header>

        {status === 'failed' && error && (
          <ErrorMessage>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {error}
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
              autoComplete="current-password"
              required
              disabled={isLoading}
            />
          </FormGroup>

          <Row>
            <RememberMe>
              <Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              Remember me
            </RememberMe>
            <ForgotLink to="/forgot-password">Forgot password?</ForgotLink>
          </Row>

          <Button type="submit" $fullWidth disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner size="18px" />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </Button>
        </Form>

        <FooterText>
          Don't have an account? 
          <Link to="/register">Sign up</Link>
        </FooterText>
      </AuthContainer>
    </Page>
  )
}

export default Login