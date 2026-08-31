// src/Components/portfolio/PortfolioNav.jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled, { keyframes, css } from 'styled-components'
import { navLinks } from '../../data/portfolioData'
import ChatWidget from './ChatWidget'

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${slideDown} 0.5s ease-out;
  transition: all 0.3s ease;

  ${({ $scrolled, $theme }) =>
    $scrolled
      ? css`
          background: ${$theme === 'light'
            ? 'rgba(255, 255, 255, 0.92)'
            : 'rgba(12, 14, 26, 0.92)'};
          backdrop-filter: blur(16px);
          border-bottom: 1px solid
            ${$theme === 'light'
              ? 'rgba(99, 102, 241, 0.15)'
              : 'rgba(129, 140, 248, 0.12)'};
          box-shadow: ${$theme === 'light'
            ? '0 4px 20px rgba(99, 102, 241, 0.08)'
            : '0 4px 24px rgba(0, 0, 0, 0.3)'};
        `
      : css`
          background: transparent;
        `}
`

const Logo = styled(Link)`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  span {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItemLink = styled(Link)`
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
    background: ${({ $theme }) =>
      $theme === 'light' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(129, 140, 248, 0.1)'};
  }

  ${({ $active, $theme }) =>
    $active &&
    css`
      color: ${$theme === 'light' ? '#4f46e5' : '#818cf8'};
      background: ${$theme === 'light'
        ? 'rgba(99, 102, 241, 0.12)'
        : 'rgba(129, 140, 248, 0.1)'};
      font-weight: 600;
    `}
`

const HireBtn = styled(Link)`
  padding: 8px 20px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 22px rgba(99, 102, 241, 0.5);
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $open, $theme }) =>
    $open &&
    css`
      color: ${$theme === 'light' ? '#4f46e5' : '#818cf8'};
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
`

const MobileMenu = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'rgba(255, 255, 255, 0.97)'
      : 'rgba(12, 14, 26, 0.97)'};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid
    ${({ $theme }) =>
      $theme === 'light'
        ? 'rgba(99, 102, 241, 0.15)'
        : 'rgba(129, 140, 248, 0.12)'};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 999;
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-120%)')};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileNavLink = styled(Link)`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
    background: ${({ $theme }) =>
      $theme === 'light' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(129, 140, 248, 0.1)'};
  }
`

const ThemeToggleBtn = styled.button`
  background: ${({ $theme }) =>
    $theme === 'dark'
      ? 'rgba(30, 41, 59, 0.8)'
      : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid
    ${({ $theme }) =>
      $theme === 'dark'
        ? 'rgba(129, 140, 248, 0.25)'
        : 'rgba(99, 102, 241, 0.25)'};
  color: ${({ $theme }) => ($theme === 'dark' ? '#fbbf24' : '#4f46e5')};
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: ${({ $theme }) =>
    $theme === 'dark'
      ? '0 4px 14px rgba(0, 0, 0, 0.3)'
      : '0 4px 14px rgba(99, 102, 241, 0.15)'};

  &:hover {
    transform: translateY(-2px) scale(1.06);
    background: ${({ $theme }) =>
      $theme === 'dark'
        ? 'rgba(51, 65, 85, 0.9)'
        : 'rgba(255, 255, 255, 1)'};
    box-shadow: ${({ $theme }) =>
      $theme === 'dark'
        ? '0 0 20px rgba(251, 191, 36, 0.4)'
        : '0 0 20px rgba(99, 102, 241, 0.3)'};
    border-color: ${({ $theme }) => ($theme === 'dark' ? '#fbbf24' : '#6366f1')};
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
    transform: ${({ $theme }) =>
      $theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(360deg) scale(1)'};
  }
`

function PortfolioNav({ theme = 'dark', toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href, e) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      if (location.pathname === '/') {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { replace: false })
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }

  const isDark = theme === 'dark'

  return (
    <>
      <header>
      <Nav $scrolled={scrolled} $theme={theme} aria-label="Main Navigation">
        <Logo to="/" $theme={theme} aria-label="Ihtisham Zameer Portfolio Home">
          IZ<span>.</span>
        </Logo>

        <Links>
          {navLinks.map(link => (
            <NavItemLink
              key={link.label}
              to={link.href}
              $active={location.pathname === link.href}
              $theme={theme}
              onClick={e => handleNavClick(link.href, e)}
            >
              {link.label}
            </NavItemLink>
          ))}
        </Links>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ThemeToggleBtn
            $theme={theme}
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" fill="#fbbf24" stroke="none" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#4f46e5" stroke="none" />
              </svg>
            )}
          </ThemeToggleBtn>

          <HireBtn to="/contact">
            Hire Me
          </HireBtn>

          <MobileMenuBtn
            $open={mobileOpen}
            $theme={theme}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </MobileMenuBtn>
        </div>
      </Nav>

      <MobileMenu $open={mobileOpen} $theme={theme} aria-label="Mobile Navigation">
        {navLinks.map(link => (
          <MobileNavLink
            key={link.label}
            to={link.href}
            $theme={theme}
            onClick={e => handleNavClick(link.href, e)}
          >
            {link.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </header>
    <ChatWidget theme={theme} />
    </>
  )
}

export default PortfolioNav

