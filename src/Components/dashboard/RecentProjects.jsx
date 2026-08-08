// src/Components/dashboard/RecentProjects.jsx
import React from 'react'
import styled from 'styled-components'
import { recentProjects } from '../../data/dashboardData'

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

const NewBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background 0.15s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`

const ProjectAvatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
  flex-shrink: 0;
`

const ProjectInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const ProjectName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ProjectDesc = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const ProgressSection = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color};
  border-radius: 3px;
  transition: width 0.6s ease;
`

const ProgressLabel = styled.div`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 600;
`

const StatusBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $status, theme }) => {
    if ($status === 'Completed') return theme.colors.successBg
    if ($status === 'Review') return theme.colors.warningBg
    return theme.colors.primaryLight
  }};
  color: ${({ $status, theme }) => {
    if ($status === 'Completed') return theme.colors.success
    if ($status === 'Review') return theme.colors.warning
    return theme.colors.primary
  }};
`

function RecentProjects() {
  return (
    <Card>
      <Header>
        <h3>Recent Projects</h3>
        <NewBtn>+ New</NewBtn>
      </Header>
      <ProjectList>
        {recentProjects.map(project => (
          <ProjectItem key={project.id}>
            <ProjectAvatar $color={project.color}>{project.initials}</ProjectAvatar>
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>
            </ProjectInfo>
            <ProgressSection>
              <ProgressLabel>{project.progress}%</ProgressLabel>
              <ProgressBar>
                <ProgressFill $pct={project.progress} $color={project.color} />
              </ProgressBar>
              <StatusBadge $status={project.status}>{project.status}</StatusBadge>
            </ProgressSection>
          </ProjectItem>
        ))}
      </ProjectList>
    </Card>
  )
}

export default RecentProjects
