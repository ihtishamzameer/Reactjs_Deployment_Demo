// src/Components/dashboard/UpcomingTasks.jsx
import React from 'react'
import styled from 'styled-components'
import { upcomingTasks } from '../../data/dashboardData'

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
  margin-bottom: 20px;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`

const TodayBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.15s ease;
  opacity: ${({ $done }) => ($done ? 0.6 : 1)};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

const PriorityDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $priority, theme }) => {
    if ($priority === 'high') return theme.colors.error
    if ($priority === 'medium') return theme.colors.warning
    return theme.colors.success
  }};
`

const TaskContent = styled.div`
  flex: 1;
  min-width: 0;
`

const TaskTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3px;
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TaskDue = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ $done, theme }) =>
    $done ? theme.colors.success : theme.colors.border};
  background: ${({ $done, theme }) =>
    $done ? theme.colors.success : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;

  svg {
    display: ${({ $done }) => ($done ? 'block' : 'none')};
    width: 10px;
    height: 10px;
    stroke: white;
    stroke-width: 3;
    fill: none;
  }
`

function UpcomingTasks() {
  return (
    <Card>
      <Header>
        <h3>Upcoming Tasks</h3>
        <TodayBadge>Today</TodayBadge>
      </Header>
      <TaskList>
        {upcomingTasks.map(task => (
          <TaskItem key={task.id} $done={task.done}>
            <PriorityDot $priority={task.priority} />
            <TaskContent>
              <TaskTitle $done={task.done}>{task.title}</TaskTitle>
              <TaskDue>{task.due}</TaskDue>
            </TaskContent>
            <CheckCircle $done={task.done}>
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </CheckCircle>
          </TaskItem>
        ))}
      </TaskList>
    </Card>
  )
}

export default UpcomingTasks
