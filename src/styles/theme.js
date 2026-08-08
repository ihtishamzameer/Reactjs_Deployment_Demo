export const theme = {
  colors: {
    primary: '#6366f1', // Indigo 500
    primaryHover: '#4f46e5', // Indigo 600
    background: '#09090b', // Zinc 950
    surface: '#18181b', // Zinc 900
    surfaceHover: '#27272a', // Zinc 800
    border: '#27272a',
    text: '#f4f4f5', // Zinc 50
    textMuted: '#a1a1aa', // Zinc 400
    error: '#ef4444',
    errorBg: 'rgba(239, 68, 68, 0.1)',
    success: '#22c55e',
    successBg: 'rgba(34, 197, 94, 0.1)',
  },
  spacing: (factor) => `${factor * 8}px`,
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    focus: '0 0 0 2px #09090b, 0 0 0 4px #6366f1',
  },
  transitions: {
    default: '0.2s ease-in-out',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  }
}