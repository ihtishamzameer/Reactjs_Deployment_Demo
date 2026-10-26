import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  width: ${({ size }) => size || '20px'};
  height: ${({ size }) => size || '20px'};
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 12px 24px;
  background: ${({ $variant, theme }) => 
    $variant === 'secondary' 
      ? theme.colors.surface 
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`};
  color: ${({ $variant, theme }) => 
    $variant === 'secondary' ? theme.colors.text : '#ffffff'};
  border: 1px solid ${({ $variant, theme }) => 
    $variant === 'secondary' ? theme.colors.border : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ $variant, theme }) =>
    $variant === 'secondary' ? 'none' : '0 4px 16px rgba(16, 185, 129, 0.25)'};
  transition: ${({ theme }) => theme.transitions.default};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  backdrop-filter: blur(8px);

  &:hover:not(:disabled) {
    background: ${({ $variant, theme }) => 
      $variant === 'secondary' ? theme.colors.surfaceHover : `linear-gradient(135deg, ${theme.colors.primaryHover}, ${theme.colors.accent})`};
    transform: translateY(-2px);
    box-shadow: ${({ $variant, theme }) =>
      $variant === 'secondary' ? '0 4px 12px rgba(0,0,0,0.1)' : '0 6px 22px rgba(16, 185, 129, 0.4)'};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  backdrop-filter: blur(10px);
  transition: ${({ theme }) => theme.transitions.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing(4)};
  box-shadow: ${({ theme }) => theme.shadows.md};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: rgba(16, 185, 129, 0.3);
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.errorBg};
  border-left: 4px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  word-break: break-word;
`
