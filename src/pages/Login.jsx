// pages/Login.jsx
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../features/auth/authSlice'

const Page = styled.div`
  position: fixed;
  inset: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  background: linear-gradient(135deg, #6a5ce6 0%, #9265e0 50%, #c565c9 100%);
  padding: ${({ theme }) => theme.spacing(3)};
  overflow-y: auto;
  z-index: 0;
`

const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  min-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    max-width: 420px;
    min-height: auto;
  }
`

const WelcomePanel = styled.div`
  position: relative;
  flex: 1.1;
  background: linear-gradient(160deg, #6a5ce6 0%, #8c5fdd 45%, #c565c9 100%);
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 240px;
    padding: ${({ theme }) => theme.spacing(4)};
  }
`

const Glow = styled.span`
  position: absolute;
  top: -60px;
  right: -40px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fb923c 0%, #ec4899 60%, transparent 75%);
  opacity: 0.75;
`

const Comet = styled.span`
  position: absolute;
  border-radius: 999px;
  background: linear-gradient(135deg, #fb923c, #f472b6);
`

const CometTail = styled.span`
  position: absolute;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #fb923c);
`

const WelcomeTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  line-height: 1.15;
`

const WelcomeText = styled.p`
  position: relative;
  z-index: 1;
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  max-width: 300px;
  margin: 0;
`

const FormPanel = styled.div`
  flex: 1;
  background: #ffffff;
  padding: ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`

const FormTitle = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #6a5ce6;
  margin: 0 0 ${({ theme }) => theme.spacing(4)};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  background: #e9e6f9;
  border-radius: 999px;
  padding: 0.75rem 1.2rem;
  transition: box-shadow 0.15s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px #b8a8f0;
  }
`

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  color: #8b7bd8;
  flex-shrink: 0;
`

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #3a3255;
  font-size: 0.9rem;

  &::placeholder {
    color: #a79bd1;
  }

  &:focus {
    outline: none;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0 0.3rem;
`

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6a6280;
  cursor: pointer;
`

const CheckCircle = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ $checked }) => ($checked ? '#6a5ce6' : '#e9e6f9')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s ease;

  svg {
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.15s ease;
  }
`

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`

const ForgotLink = styled.a`
  color: #9a92ab;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const SubmitButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  padding: 0.85rem;
  background: linear-gradient(90deg, #ec4899, #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.1s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:active:not(:disabled) {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const ErrorBanner = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 0.6rem 0.85rem;
  background: #fee2e2;
  border-radius: 999px;
  color: #b91c1c;
  font-size: 0.78rem;
  text-align: center;
`

const SwitchText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)};
  font-size: 0.8rem;
  color: #8a8298;
  text-align: center;

  a {
    color: #6a5ce6;
    font-weight: 600;
  }
`

const Attribution = styled.a`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

// Diagonal comet-tail decoration, positioned to echo the reference asset
function Comets() {
  const items = [
    { size: 90, bottom: 20, left: -20 },
    { size: 60, bottom: 90, left: 90 },
    { size: 130, bottom: -10, left: 200 },
    { size: 50, bottom: 130, left: 320 },
    { size: 100, bottom: 40, left: 400 },
  ]
  return (
    <>
      {items.map((c, i) => (
        <Comet
          key={i}
          style={{
            width: c.size,
            height: Math.max(14, c.size * 0.2),
            bottom: c.bottom,
            left: c.left,
            transform: 'rotate(-40deg)',
          }}
        />
      ))}
      <CometTail style={{ width: 60, bottom: 190, left: 30, transform: 'rotate(-40deg)' }} />
      <CometTail style={{ width: 80, bottom: 250, left: 140, transform: 'rotate(-40deg)' }} />
      <CometTail style={{ width: 50, bottom: 320, left: 260, transform: 'rotate(-40deg)' }} />
    </>
  )
}

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, status, error } = useSelector((state) => state.auth)
  const [form, setForm] = useState({ username: '', password: '' })
  const [rememberMe, setRememberMe] = useState(true)

  // Redirect to home the moment login succeeds — never display the raw token
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log('submit fired')
    e.preventDefault()
    dispatch(login({ ...form, rememberMe }))
  }

  return (
    <Page>
      <Card>
        <WelcomePanel>
          <Glow />
          <Comets />

          <WelcomeTitle>Welcome back</WelcomeTitle>
          <WelcomeText>
            Sign in to pick up right where you left off. Your dashboard,
            projects, and data are all right here waiting for you.
          </WelcomeText>
        </WelcomePanel>

        <FormPanel>
          <FormTitle>USER LOGIN</FormTitle>

          <Form onSubmit={handleSubmit}>
            <Field>
              <IconWrap><MailIcon /></IconWrap>
              <Input
                type="email"
                name="username"
                placeholder="Email ID"
                value={form.username}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </Field>

            <Field>
              <IconWrap><LockIcon /></IconWrap>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </Field>

            <Row>
              <RememberMe>
                <HiddenCheckbox
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <CheckCircle $checked={rememberMe} onClick={() => setRememberMe(!rememberMe)}>
                  <CheckIcon />
                </CheckCircle>
                Remember
              </RememberMe>
              <ForgotLink href="/forgot-password">Forgot password?</ForgotLink>
            </Row>

            <SubmitButton type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'LOGGING IN…' : 'LOGIN'}
            </SubmitButton>
          </Form>

          {status === 'failed' && <ErrorBanner>{error}</ErrorBanner>}

          <SwitchText>
            Don't have an account? <a href="/register">Sign up</a>
          </SwitchText>
        </FormPanel>
      </Card>

      <Attribution href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">
        Designed by Freepik
      </Attribution>
    </Page>
  )
}

export default Login