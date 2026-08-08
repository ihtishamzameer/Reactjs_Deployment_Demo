// src/Components/dashboard/StatCard.jsx
import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

const Card = styled.div`
  background: ${({ $featured }) =>
    $featured
      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
      : ({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $featured, theme }) =>
    $featured ? 'transparent' : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  animation: ${slideUp} 0.4s ease-out both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`

const Deco = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  pointer-events: none;
`

const Deco2 = styled.div`
  position: absolute;
  bottom: -40px;
  right: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`

const Label = styled.div`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $featured, theme }) =>
    $featured ? 'rgba(255,255,255,0.75)' : theme.colors.textMuted};
`

const Value = styled.div`
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ $featured, theme }) =>
    $featured ? '#ffffff' : theme.colors.text};
  margin: 4px 0;
`

const Change = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ $featured, $trend, theme }) => {
    if ($featured) return 'rgba(255,255,255,0.8)'
    if ($trend === 'up') return theme.colors.success
    if ($trend === 'down') return theme.colors.error
    return theme.colors.warning
  }};
`

const Arrow = styled.span`
  font-size: 0.9rem;
`

function StatCard({ label, value, change, trend, featured }) {
  return (
    <Card $featured={featured}>
      {featured && <><Deco /><Deco2 /></>}
      <Label $featured={featured}>{label}</Label>
      <Value $featured={featured}>{value}</Value>
      <Change $featured={featured} $trend={trend}>
        <Arrow>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'}
        </Arrow>
        {change}
      </Change>
    </Card>
  )
}

export default StatCard
