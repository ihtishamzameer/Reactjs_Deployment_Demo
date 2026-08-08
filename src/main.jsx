import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store/store'
import { theme } from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'
import App from './App'
import AppRouter from './routes/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)