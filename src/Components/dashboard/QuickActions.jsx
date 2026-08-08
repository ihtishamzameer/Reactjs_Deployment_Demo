// src/Components/dashboard/QuickActions.jsx
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 20px 24px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const Header = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 16px;
`

const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const ActionBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  background: ${({ $primary, theme }) =>
    $primary ? theme.colors.primary : theme.colors.primaryLight};
  color: ${({ $primary, theme }) =>
    $primary ? '#ffffff' : theme.colors.primary};
  border: 1px solid ${({ $primary, theme }) =>
    $primary ? 'transparent' : theme.colors.primaryLight};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ $primary, theme }) =>
      $primary ? theme.colors.primaryHover : theme.colors.primary};
    color: #ffffff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function QuickActions() {
  return (
    <Card>
      <Header>Quick Actions</Header>
      <ActionsRow>
        <ActionBtn to="/projects" $primary>
          <PlusIcon /> Create Project
        </ActionBtn>
        <ActionBtn to="/tasks">
          <PlusIcon /> Create Task
        </ActionBtn>
        <ActionBtn to="/projects">
          <EyeIcon /> View Projects
        </ActionBtn>
        <ActionBtn to="/tasks">
          <EyeIcon /> View Tasks
        </ActionBtn>
      </ActionsRow>
    </Card>
  )
}

export default QuickActions
