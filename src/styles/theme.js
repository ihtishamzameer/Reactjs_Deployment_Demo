const baseTokens = {
  spacing: (factor) => `${factor * 8}px`,
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
  transitions: {
    default: '0.2s ease-in-out',
    fast: '0.15s ease',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
}

export const lightTheme = {
  ...baseTokens,
  colors: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryLight: 'rgba(99, 102, 241, 0.08)',
    background: '#f1f5f9',
    surface: '#ffffff',
    surfaceHover: '#f8fafc',
    border: '#e2e8f0',
    text: '#0f172a',
    textMuted: '#64748b',
    textSubtle: '#94a3b8',
    sidebar: '#ffffff',
    sidebarTextMuted: '#94a3b8',
    error: '#ef4444',
    errorBg: 'rgba(239, 68, 68, 0.08)',
    success: '#22c55e',
    successBg: 'rgba(34, 197, 94, 0.08)',
    warning: '#f59e0b',
    warningBg: 'rgba(245, 158, 11, 0.08)',
    accent: '#8b5cf6',
    accentLight: 'rgba(139, 92, 246, 0.1)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    md: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    lg: '0 10px 30px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.05)',
    focus: '0 0 0 2px #fff, 0 0 0 4px #6366f1',
  },
}

export const darkTheme = {
  ...baseTokens,
  colors: {
    primary: '#818cf8',
    primaryHover: '#6366f1',
    primaryLight: 'rgba(129, 140, 248, 0.12)',
    background: '#0c0e1a',
    surface: '#13162a',
    surfaceHover: '#1a1e35',
    border: '#1e2340',
    text: '#e2e8f0',
    textMuted: '#94a3b8',
    textSubtle: '#64748b',
    sidebar: '#0f1123',
    sidebarTextMuted: '#64748b',
    error: '#f87171',
    errorBg: 'rgba(248, 113, 113, 0.1)',
    success: '#4ade80',
    successBg: 'rgba(74, 222, 128, 0.1)',
    warning: '#fbbf24',
    warningBg: 'rgba(251, 191, 36, 0.1)',
    accent: '#a78bfa',
    accentLight: 'rgba(167, 139, 250, 0.1)',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.3)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 10px 30px rgba(0,0,0,0.5)',
    focus: '0 0 0 2px #0c0e1a, 0 0 0 4px #818cf8',
  },
}

// Backward compatibility
export const theme = darkTheme