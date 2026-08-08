// src/Components/layout/Topbar.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUserThunk } from '../../features/auth/authSlice'
import { Button, Spinner } from '../../styles/shared'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
`

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`

const StyledLink = styled(Link)`
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transform-origin: top;
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated, status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  const handleLogout = async () => {
    const resultAction = await dispatch(logoutUserThunk())
    if (logoutUserThunk.fulfilled.match(resultAction)) {
      navigate('/login', { replace: true })
    }
  }

  const isLoggingOut = status === 'loading'

  const NavItems = () => (
    <>
      <StyledLink to="/" $active={location.pathname === '/'}>
        Home
      </StyledLink>
      <StyledLink to="/dashboard" $active={location.pathname === '/dashboard'}>
        Dashboard
      </StyledLink>
    </>
  )

  const AuthItems = () => {
    if (isAuthenticated) {
      return (
        <Button 
          $variant="secondary" 
          onClick={handleLogout} 
          disabled={isLoggingOut}
          style={{ padding: '8px 16px' }}
        >
          {isLoggingOut ? <Spinner size="16px" /> : 'Logout'}
        </Button>
      )
    }

    return (
      <>
        <StyledLink to="/login">Sign In</StyledLink>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button style={{ padding: '8px 16px' }}>Sign Up</Button>
        </Link>
      </>
    )
  }

  return (
    <Nav>
      <Logo to="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        MyApp
      </Logo>

      <DesktopNav>
        <NavLinks>
          <NavItems />
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px', paddingLeft: '16px', borderLeft: '1px solid #27272a' }}>
          <AuthItems />
        </div>
      </DesktopNav>

      <MobileMenuBtn onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </MobileMenuBtn>

      {menuOpen && (
        <MobileNav>
          <NavItems />
          <hr style={{ border: 'none', borderTop: '1px solid #27272a', margin: '8px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AuthItems />
          </div>
        </MobileNav>
      )}
    </Nav>
  )
}

export default Topbar