import { createContext, PropsWithChildren, useState } from 'react'

import expressoTradicional from '../assets/expresso.svg'
import cubano from '../assets/cubano.svg'

interface CoffeesProps {
  id: number
  name: string
  description: string
  imageUrl: string
  price: number
  tags: string[]
  quantity: number
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
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imageUrl: expressoTradicional,
      price: 9.9,
      tags: ['Tradicional'],
      quantity: 3,
    },
    {
      id: 5,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      imageUrl: cubano,
      price: 9.9,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      quantity: 3,
    },
  ])
  const [cartQuantity, setCartQuantity] = useState<number>(0)

  return (
    <CoffeesContext.Provider value={{ cartQuantity, coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
