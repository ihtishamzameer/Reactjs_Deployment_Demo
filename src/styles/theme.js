const baseTokens = {
  spacing: (factor) => `${factor * 8}px`,
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '18px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    default: '0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    fast: '0.15s cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
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
    primary: '#059669', // Cyber Emerald
    primaryHover: '#047857',
    primaryLight: 'rgba(16, 185, 129, 0.12)',
    background: '#f8fafc',
    surface: 'rgba(255, 255, 255, 0.85)',
    surfaceHover: '#f1f5f9',
    border: 'rgba(15, 23, 42, 0.08)',
    text: '#0f172a',
    textMuted: '#64748b',
    textSubtle: '#94a3b8',
    sidebar: '#ffffff',
    sidebarTextMuted: '#64748b',
    error: '#ef4444',
    errorBg: 'rgba(239, 68, 68, 0.08)',
    success: '#10b981',
    successBg: 'rgba(16, 185, 129, 0.1)',
    warning: '#f59e0b',
    warningBg: 'rgba(245, 158, 11, 0.08)',
    accent: '#06b6d4', // Cyber Cyan
    accentLight: 'rgba(6, 182, 212, 0.1)',
    glow: 'rgba(16, 185, 129, 0.35)',
  },
  shadows: {
    sm: '0 2px 4px rgba(15, 23, 42, 0.04)',
    md: '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
    lg: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)',
    focus: '0 0 0 2px #fff, 0 0 0 4px #10b981',
    glow: '0 0 20px rgba(16, 185, 129, 0.35)',
  },
}

export const darkTheme = {
  ...baseTokens,
  colors: {
    primary: '#10b981', // Vivid Cyber Emerald
    primaryHover: '#34d399',
    primaryLight: 'rgba(16, 185, 129, 0.15)',
    background: '#070a0f', // Deep Obsidian Slate
    surface: 'rgba(15, 23, 36, 0.75)', // Glassy Dark Slate
    surfaceHover: 'rgba(24, 35, 54, 0.85)',
    border: 'rgba(30, 48, 70, 0.65)',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    textSubtle: '#64748b',
    sidebar: '#0b1017',
    sidebarTextMuted: '#64748b',
    error: '#f87171',
    errorBg: 'rgba(248, 113, 113, 0.12)',
    success: '#34d399',
    successBg: 'rgba(52, 211, 153, 0.12)',
    warning: '#fbbf24',
    warningBg: 'rgba(251, 191, 36, 0.12)',
    accent: '#06b6d4', // Cyber Cyan / Mint Accent
    accentLight: 'rgba(6, 182, 212, 0.15)',
    glow: 'rgba(16, 185, 129, 0.45)',
  },
  shadows: {
    sm: '0 2px 6px rgba(0, 0, 0, 0.4)',
    md: '0 8px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    lg: '0 20px 48px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
    focus: '0 0 0 2px #070a0f, 0 0 0 4px #10b981',
    glow: '0 0 24px rgba(16, 185, 129, 0.45), 0 0 60px rgba(6, 182, 212, 0.2)',
  },
}

// Backward compatibility
export const theme = darkTheme