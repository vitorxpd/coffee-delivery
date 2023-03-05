import { createContext, PropsWithChildren, useState } from 'react'

interface CoffeesProps {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
}

interface CoffeesContextProps {
  coffees: CoffeesProps[]
  cartQuantity: number
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

export function CoffeesContextProvider({ children }: PropsWithChildren) {
  const [coffees, setCoffees] = useState<CoffeesProps[]>([
    {
      id: 1,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
    },
  ])
  const [cartQuantity, setCartQuantity] = useState<number>(0)

  return (
    <CoffeesContext.Provider value={{ cartQuantity, coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
