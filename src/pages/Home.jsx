import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../styles/shared'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  animation: ${fadeIn} 0.6s ease-out forwards;
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
`

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  letter-spacing: 0.5px;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.75rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin: 0 0 ${({ theme }) => theme.spacing(5)};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`

const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`

const StatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: 500;
`

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: rgba(99, 102, 241, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`

const StatValue = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

const StatTrend = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ $positive, theme }) => ($positive ? theme.colors.success : theme.colors.error)};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 400;
  }
`

// Icons
const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
)

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

function Home() {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroBadge>SaaS Dashboard Preview</HeroBadge>
        <HeroTitle>
          Welcome to <span>MyApp</span>
        </HeroTitle>
        <HeroSubtitle>
          Manage your account and access your application from one place. Professional, clean, and blazingly fast.
        </HeroSubtitle>
        <HeroActions>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button>Get Started</Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button $variant="secondary">Sign In</Button>
          </Link>
        </HeroActions>
      </HeroSection>

      <StatsGrid>
        <StatCard>
          <StatHeader>
            Total Projects
            <StatIcon><FolderIcon /></StatIcon>
          </StatHeader>
          <StatValue>24</StatValue>
          <StatTrend $positive>↑ 12% <span>vs last month</span></StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            Active Tasks
            <StatIcon><ActivityIcon /></StatIcon>
          </StatHeader>
          <StatValue>142</StatValue>
          <StatTrend $positive>↑ 8% <span>vs last month</span></StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            Completion Rate
            <StatIcon><CheckIcon /></StatIcon>
          </StatHeader>
          <StatValue>86%</StatValue>
          <StatTrend $positive>↑ 2.4% <span>vs last month</span></StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            Team Members
            <StatIcon><UsersIcon /></StatIcon>
          </StatHeader>
          <StatValue>8</StatValue>
          <StatTrend $positive={false}>— 0% <span>vs last month</span></StatTrend>
        </StatCard>
      </StatsGrid>
    </PageWrapper>
  )
}

export default Home