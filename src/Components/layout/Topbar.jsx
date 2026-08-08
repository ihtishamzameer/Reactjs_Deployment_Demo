// src/Components/layout/Topbar.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useThemeMode } from '../../styles/ThemeContext'

// ─── Styled Components ───────────────────────────────────────────────────────

const TopbarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 64px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
  gap: 16px;
  z-index: 50;
`

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`

const MenuBtn = styled.button`
  display: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.15s;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 8px 14px;
  max-width: 360px;
  width: 100%;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
  }

  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.textMuted};
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.15s ease;
  position: relative;

  svg { width: 17px; height: 17px; }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const NotifDot = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: 50%;
`

const UserChip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
  flex-shrink: 0;
`

const UserText = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const UserName = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`

const UserRole = styled.div`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

// ─── Icons ───────────────────────────────────────────────────────────────────

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

// ─── Component ───────────────────────────────────────────────────────────────

function Topbar({ onMenuToggle }) {
  const { isAuthenticated } = useSelector(state => state.auth)
  const { mode, toggleTheme } = useThemeMode()

  return (
    <TopbarWrapper>
      <LeftArea>
        <MenuBtn onClick={onMenuToggle} title="Toggle navigation">
          <MenuIcon />
        </MenuBtn>
        <SearchBox>
          <SearchIcon />
          <SearchInput placeholder="Search tasks, projects..." />
        </SearchBox>
      </LeftArea>

      <RightArea>
        <IconBtn onClick={toggleTheme} title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
          {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </IconBtn>

        <IconBtn title="Notifications">
          <BellIcon />
          <NotifDot />
        </IconBtn>

        <UserChip>
          <Avatar>D</Avatar>
          <UserText>
            <UserName>{isAuthenticated ? 'Developer' : 'Guest'}</UserName>
            <UserRole>Full Stack Dev</UserRole>
          </UserText>
        </UserChip>
      </RightArea>
    </TopbarWrapper>
  )
}

export default Topbar