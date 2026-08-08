// src/pages/Home.jsx
import React from 'react'
import styled, { keyframes } from 'styled-components'
import StatCard from '../Components/dashboard/StatCard'
import ProjectActivity from '../Components/dashboard/ProjectActivity'
import RecentProjects from '../Components/dashboard/RecentProjects'
import UpcomingTasks from '../Components/dashboard/UpcomingTasks'
import ProjectProgress from '../Components/dashboard/ProjectProgress'
import QuickActions from '../Components/dashboard/QuickActions'
import { statCards } from '../data/dashboardData'
import { Button } from '../styles/shared'
import { Link } from 'react-router-dom'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeUp} 0.4s ease-out;
`

const PageHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const HeadingGroup = styled.div``

const PageTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const PageSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

function Home() {
  return (
    <Page>
      <PageHeader>
        <HeadingGroup>
          <PageTitle>Project Management Dashboard<span>.</span></PageTitle>
          <PageSubtitle>Plan, prioritize, and accomplish your work with ease.</PageSubtitle>
        </HeadingGroup>
        <HeaderActions>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button>+ Add Project</Button>
          </Link>
          <Link to="/tasks" style={{ textDecoration: 'none' }}>
            <Button $variant="secondary">Import Data</Button>
          </Link>
        </HeaderActions>
      </PageHeader>

      <StatsRow>
        {statCards.map((card, i) => (
          <StatCard key={card.id} {...card} featured={i === 0} />
        ))}
      </StatsRow>

      <MainGrid>
        <LeftCol>
          <ProjectActivity />
          <RecentProjects />
        </LeftCol>
        <RightCol>
          <UpcomingTasks />
          <ProjectProgress />
        </RightCol>
      </MainGrid>

      <QuickActions />
    </Page>
  )
}

export default Home