import { useState } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`

const Logo = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const Links = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing(2)};
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

const LinkItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.95rem;
    &:hover { color: ${({ theme }) => theme.colors.primary}; }
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Nav>
      <Logo>MyApp</Logo>
      <Links $open={menuOpen}>
        <LinkItem><a href="/">Home</a></LinkItem>
        <LinkItem><a href="/dashboard">Dashboard</a></LinkItem>
        <LinkItem><a href="/login">Login</a></LinkItem>
      </Links>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </MenuButton>
    </Nav>
  )
}

export default Topbar