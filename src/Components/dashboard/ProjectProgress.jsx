// src/Components/dashboard/ProjectProgress.jsx
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { overallProgress } from '../../data/dashboardData'

const fillIn = keyframes`
  from { stroke-dashoffset: 251.2; }
  to { stroke-dashoffset: ${251.2 - (251.2 * overallProgress) / 100}; }
`

const Card = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  width: 100%;
`

const CircleWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`

const StyledSvg = styled.svg`
  transform: rotate(-90deg);
  width: 140px;
  height: 140px;
`

const TrackCircle = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 10;
`

const ProgressCircle = styled.circle`
  fill: none;
  stroke: white;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 251.2;
  stroke-dashoffset: ${251.2 - (251.2 * overallProgress) / 100};
  animation: ${fillIn} 1.2s ease-out;
`

const CenterLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PercentValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
`

const PercentSub = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  margin-top: 4px;
`

const Description = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: 1.5;
`

function ProjectProgress() {
  return (
    <Card>
      <CardTitle>Project Progress</CardTitle>
      <CircleWrapper>
        <StyledSvg viewBox="0 0 90 90">
          <TrackCircle cx="45" cy="45" r="40" />
          <ProgressCircle cx="45" cy="45" r="40" />
        </StyledSvg>
        <CenterLabel>
          <PercentValue>{overallProgress}%</PercentValue>
          <PercentSub>Completed</PercentSub>
        </CenterLabel>
      </CircleWrapper>
      <Description>
        Overall project portfolio progress based on completed tasks and milestones.
      </Description>
    </Card>
  )
}

export default ProjectProgress
