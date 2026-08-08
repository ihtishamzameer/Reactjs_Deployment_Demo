import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Body = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`

function Layout() {
  return (
    <Wrapper>
      <Topbar />
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  )
}

export default Layout