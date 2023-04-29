import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CoffeesContextProvider } from './contexts/CoffeesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
