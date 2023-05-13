import { ThemeProvider } from 'styled-components'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <Router />
      </CoffeesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
