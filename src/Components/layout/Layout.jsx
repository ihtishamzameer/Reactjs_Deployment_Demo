// src/Components/layout/Layout.jsx
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const SIDEBAR_WIDTH = '260px'

const AppShell = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`

const SidebarArea = styled.aside`
  width: ${SIDEBAR_WIDTH};
  flex-shrink: 0;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 200;
    width: ${SIDEBAR_WIDTH};
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(2px);
    z-index: 199;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.28s ease;
  }
`

const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`

const ContentScroll = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px;
  }
`

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])

  return (
    <AppShell>
      <Overlay $open={sidebarOpen} onClick={closeSidebar} />
      <SidebarArea $open={sidebarOpen}>
        <Sidebar onClose={closeSidebar} />
      </SidebarArea>
      <MainArea>
        <Topbar onMenuToggle={toggleSidebar} />
        <ContentScroll>
          <Outlet />
        </ContentScroll>
      </MainArea>
    </AppShell>
  )
}

export default Layout