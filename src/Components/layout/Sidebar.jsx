// src/Components/layout/Sidebar.jsx
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserThunk, clearAuth } from '../../features/auth/authSlice'

// ─── Styled Components ──────────────────────────────────────────────────────

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebar};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 18px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
`

const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`

const NavArea = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const SectionLabel = styled.div`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.sidebarTextMuted};
  padding: 0 10px;
  margin: 12px 0 6px;
`

const navItemStyle = ({ theme }) => `
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.textMuted};
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  width: 100%;
  svg { width: 18px; height: 18px; flex-shrink: 0; opacity: 0.7; transition: opacity 0.15s; }
  &:hover {
    background: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
    svg { opacity: 1; }
  }
  &.active {
    background: ${theme.colors.primary};
    color: #fff;
    font-weight: 600;
    svg { opacity: 1; }
  }
`

const StyledNavLink = styled(NavLink)`
  ${({ theme }) => navItemStyle({ theme })}
`

const LogoutBtn = styled.button`
  ${({ theme }) => navItemStyle({ theme })}
  background: none;
  border: none;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.error};
  svg { color: ${({ theme }) => theme.colors.error}; }

  &:hover {
    background: ${({ theme }) => theme.colors.errorBg};
    color: ${({ theme }) => theme.colors.error};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const BottomPromo = styled.div`
  flex-shrink: 0;
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const PromoCard = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 14px;
  padding: 16px;
  color: white;

  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 4px;
  }

  p {
    font-size: 0.78rem;
    opacity: 0.85;
    margin: 0 0 12px;
    line-height: 1.4;
  }
`

const PromoBtn = styled.button`
  background: white;
  color: #6366f1;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  font-family: inherit;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }
`

// ─── Icons ───────────────────────────────────────────────────────────────────

const DashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
const ProjIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)
const TaskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)
const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const AnalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)
const SettIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
  </svg>
)
const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

// ─── Component ───────────────────────────────────────────────────────────────

function Sidebar({ onClose }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status } = useSelector(state => state.auth)
  const isLoggingOut = status === 'loading'

  const handleNav = () => {
    if (onClose) onClose()
  }

  const handleLogout = async () => {
    const result = await dispatch(logoutUserThunk())
    // Ensure auth state is cleared regardless of outcome
    dispatch(clearAuth())
    // Navigate to login page after logout
    navigate('/login', { replace: true })
    if (onClose) onClose()
  }

  return (
    <SidebarWrapper>
      <Brand>
        <BrandIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
          </svg>
        </BrandIcon>
        <BrandName>DevFlow</BrandName>
      </Brand>

      <NavArea>
        <SectionLabel>Menu</SectionLabel>
        <StyledNavLink to="/" end onClick={handleNav}><DashIcon /> Dashboard</StyledNavLink>
        <StyledNavLink to="/projects" onClick={handleNav}><ProjIcon /> Projects</StyledNavLink>
        <StyledNavLink to="/tasks" onClick={handleNav}><TaskIcon /> Tasks</StyledNavLink>
        <StyledNavLink to="/calendar" onClick={handleNav}><CalIcon /> Calendar</StyledNavLink>
        <StyledNavLink to="/analytics" onClick={handleNav}><AnalIcon /> Analytics</StyledNavLink>

        <SectionLabel>General</SectionLabel>
        <StyledNavLink to="/settings" onClick={handleNav}><SettIcon /> Settings</StyledNavLink>
        <StyledNavLink to="/help" onClick={handleNav}><HelpIcon /> Help</StyledNavLink>
        <LogoutBtn onClick={handleLogout} disabled={isLoggingOut}>
          <LogoutIcon />
          {isLoggingOut ? 'Signing out...' : 'Logout'}
        </LogoutBtn>
      </NavArea>

      <BottomPromo>
        <PromoCard>
          <h4>Get DevFlow Mobile</h4>
          <p>Stay productive anywhere, anytime.</p>
          <PromoBtn>Download App</PromoBtn>
        </PromoCard>
      </BottomPromo>
    </SidebarWrapper>
  )
}

export default Sidebar
