// src/pages/PlaceholderPage.jsx
import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeUp} 0.4s ease-out;
`

const PageTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px;

  span { color: ${({ theme }) => theme.colors.primary}; }
`

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 0 32px;
`

const ComingSoonCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg { width: 30px; height: 30px; }
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 8px;
`

const CardDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  max-width: 400px;
  line-height: 1.6;
`

const ComingSoonBadge = styled.span`
  margin-top: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 14px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`

function BuildIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function PlaceholderPage({ title, description }) {
  return (
    <Wrapper>
      <div>
        <PageTitle>{title}<span>.</span></PageTitle>
        <Subtitle>{description}</Subtitle>
      </div>
      <ComingSoonCard>
        <Icon><BuildIcon /></Icon>
        <CardTitle>Under Construction</CardTitle>
        <CardDesc>
          This section is being built. The UI is ready — just waiting for the backend API to connect.
        </CardDesc>
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      </ComingSoonCard>
    </Wrapper>
  )
}

export default PlaceholderPage
