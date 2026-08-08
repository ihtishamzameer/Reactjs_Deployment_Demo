// src/styles/ThemeContext.jsx
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'

const ThemeModeContext = createContext({ mode: 'light', toggleTheme: () => {} })

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light')

  // Load saved mode from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('themeMode')
    if (saved === 'light' || saved === 'dark') setMode(saved)
  }, [])

  const toggleTheme = () => {
    setMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', next)
      return next
    })
  }

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

// Hook for components to access mode & toggle
export const useThemeMode = () => useContext(ThemeModeContext)

// Export a wrapper that can be used in root instead of ThemeProvider directly
export const AppThemeProvider = ({ children }) => {
  return <ThemeModeProvider>{children}</ThemeModeProvider>
}
