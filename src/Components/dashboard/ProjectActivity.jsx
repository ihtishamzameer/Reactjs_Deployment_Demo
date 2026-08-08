// src/Components/dashboard/ProjectActivity.jsx
import React from 'react'
import styled from 'styled-components'
import { activityData } from '../../data/dashboardData'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`

const PeriodBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
`

const ChartWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 130px;
  padding-bottom: 28px;
  position: relative;
`

const BarColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
  justify-content: flex-end;
`

const Bar = styled.div`
  width: 100%;
  height: ${({ $heightPct }) => $heightPct}%;
  border-radius: 6px 6px 0 0;
  background: ${({ $accent, theme }) =>
    $accent
      ? 'linear-gradient(180deg, #ec4899 0%, #8b5cf6 100%)'
      : theme.colors.primaryLight};
  transition: background 0.2s ease, transform 0.15s ease;
  min-height: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ $accent, theme }) =>
      $accent
        ? 'linear-gradient(180deg, #ec4899 0%, #8b5cf6 100%)'
        : theme.colors.primary};
    transform: scaleY(1.05);
    transform-origin: bottom;
  }
`

const DayLabel = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`

const BarWithLabel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 24px;
`

function ProjectActivity() {
  const maxTasks = Math.max(...activityData.map(d => d.tasks))

  return (
    <Card>
      <Header>
        <h3>Project Analytics</h3>
        <PeriodBadge>Weekly</PeriodBadge>
      </Header>
      <ChartWrapper>
        {activityData.map((item, i) => (
          <BarWithLabel key={`${item.day}-${i}`}>
            <Bar
              $heightPct={Math.round((item.tasks / maxTasks) * 100)}
              $accent={i === 3}
            />
            <DayLabel>{item.day}</DayLabel>
          </BarWithLabel>
        ))}
      </ChartWrapper>
    </Card>
  )
}

export default ProjectActivity
