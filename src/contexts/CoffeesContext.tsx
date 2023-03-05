import { createContext, PropsWithChildren } from 'react'

export const CoffeesContext = createContext({} as any)

export function CoffeesContextProvider({ children }: PropsWithChildren) {
  return (
    <CoffeesContext.Provider value={{}}>{children}</CoffeesContext.Provider>
  )
}
