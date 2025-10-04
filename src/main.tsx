import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppThemeProvider } from './context/AppThemeContext.tsx'
import { Provider } from 'react-redux'
import store from './redux/index.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <App />
      </AppThemeProvider>
    </Provider>
  </StrictMode>
)
