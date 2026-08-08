import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import GlobalStyle from './styles/GlobalStyle'
import { AppThemeProvider } from './styles/ThemeContext'
import AppRouter from './routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <AppRouter />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
)