import React from 'react'
import styled, { keyframes } from 'styled-components'

// === Animations ===
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
`

// === Styled Components ===
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  animation: ${fadeIn} 0.6s ease-out forwards;
`

// Hero Section
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
`

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.2);
  color: #818cf8;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 0 0 ${({ theme }) => theme.spacing(2)};
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.75rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #9ca3af;
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

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: #fff;
  border: none;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: ${pulseGlow} 2s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);
    animation: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

// Stats Section
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ $color }) => $color || '#4f46e5'}, transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);

    &::before {
      opacity: 1;
    }
  }
`

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #9ca3af;
  font-size: 0.9rem;
  font-weight: 500;
`

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ $bg }) => $bg || 'rgba(79, 70, 229, 0.1)'};
  color: ${({ $color }) => $color || '#818cf8'};
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
  color: ${({ $positive }) => ($positive ? '#34d399' : '#f87171')};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #6b7280;
    font-weight: 400;
  }
`

// Dashboard Preview / Activity Section
const DashboardPreview = styled.section`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  box-shadow: inset 0 2px 20px rgba(255, 255, 255, 0.02);
`

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    background: none;
    border: none;
    color: #818cf8;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: 12px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ $from }) => $from}, ${({ $to }) => $to});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
  flex-shrink: 0;
`

const ActivityContent = styled.div`
  flex: 1;

  p {
    margin: 0 0 4px 0;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};

    strong {
      color: #e5e7eb;
    }
  }

  span {
    font-size: 0.8rem;
    color: #6b7280;
  }
`

// === Icons ===
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

// === Main Component ===
function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroBadge>✨ Dashboard Preview v2.0</HeroBadge>
        <HeroTitle>
          Welcome to <span>MyApp</span>
        </HeroTitle>
        <HeroSubtitle>
          Everything you need, organized in one simple workspace. Plan, track, and collaborate on your projects with unmatched elegance and speed.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryButton>Get Started Now</PrimaryButton>
          <SecondaryButton>View Documentation</SecondaryButton>
        </HeroActions>
      </HeroSection>

      {/* Stats Grid */}
      <StatsGrid>
        <StatCard $color="#818cf8">
          <StatHeader>
            Total Projects
            <StatIcon $bg="rgba(99, 102, 241, 0.1)" $color="#818cf8">
              <FolderIcon />
            </StatIcon>
          </StatHeader>
          <StatValue>24</StatValue>
          <StatTrend $positive>
            ↑ 12% <span>vs last month</span>
          </StatTrend>
        </StatCard>

        <StatCard $color="#fbbf24">
          <StatHeader>
            Active Tasks
            <StatIcon $bg="rgba(245, 158, 11, 0.1)" $color="#fbbf24">
              <ActivityIcon />
            </StatIcon>
          </StatHeader>
          <StatValue>142</StatValue>
          <StatTrend $positive>
            ↑ 8% <span>vs last month</span>
          </StatTrend>
        </StatCard>

        <StatCard $color="#34d399">
          <StatHeader>
            Completion Rate
            <StatIcon $bg="rgba(16, 185, 129, 0.1)" $color="#34d399">
              <CheckIcon />
            </StatIcon>
          </StatHeader>
          <StatValue>86%</StatValue>
          <StatTrend $positive>
            ↑ 2.4% <span>vs last month</span>
          </StatTrend>
        </StatCard>

        <StatCard $color="#f472b6">
          <StatHeader>
            Team Members
            <StatIcon $bg="rgba(236, 72, 153, 0.1)" $color="#f472b6">
              <UsersIcon />
            </StatIcon>
          </StatHeader>
          <StatValue>8</StatValue>
          <StatTrend $positive={false}>
            — 0% <span>vs last month</span>
          </StatTrend>
        </StatCard>
      </StatsGrid>

      {/* Recent Activity Dashboard Preview */}
      <DashboardPreview>
        <PreviewHeader>
          <h3>Recent Activity</h3>
          <button>View all activity</button>
        </PreviewHeader>
        <ActivityList>
          <ActivityItem>
            <Avatar $from="#4f46e5" $to="#7c3aed">JD</Avatar>
            <ActivityContent>
              <p><strong>Jane Doe</strong> completed the task <strong>"Design System Updates"</strong></p>
              <span>2 hours ago • Project Alpha</span>
            </ActivityContent>
          </ActivityItem>
          
          <ActivityItem>
            <Avatar $from="#10b981" $to="#3b82f6">MK</Avatar>
            <ActivityContent>
              <p><strong>Mike Smith</strong> uploaded a new file <strong>"Q3_Report.pdf"</strong></p>
              <span>4 hours ago • Finance Team</span>
            </ActivityContent>
          </ActivityItem>

          <ActivityItem>
            <Avatar $from="#f59e0b" $to="#ef4444">AS</Avatar>
            <ActivityContent>
              <p><strong>Alex Santos</strong> left a comment on <strong>"Marketing Campaign"</strong></p>
              <span>Yesterday at 4:30 PM • Marketing</span>
            </ActivityContent>
          </ActivityItem>
        </ActivityList>
      </DashboardPreview>
    </PageWrapper>
  )
}

export default Home