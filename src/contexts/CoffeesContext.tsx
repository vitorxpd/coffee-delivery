import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffees, CoffeeProps } from '../data/coffees'

interface CartItemProps {
  id: number
  amount: number
}

interface CoffeesStateProps {
  coffees: CoffeeProps[]
  cartItems: CartItemProps[]
  cartQuantity: number
}

interface CoffeesContextProps {
  coffeesState: CoffeesStateProps
  addCoffeeToCart: (id: number, amount: number) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    (state: CoffeesStateProps, action: any) => {
      if (action.type === 'ADD_COFFEE') {
        const id = action.payload.id
        const amount = action.payload.amount

        return {
          ...state,
          cartItems: [...state.cartItems, { id, amount }],
        }
      }

      return state
    },
    {
      coffees,
      cartItems: [],
      cartQuantity: 0,
    },
  )

  function addCoffeeToCart(id: number, amount: number) {
    dispatch({
      type: 'ADD_COFFEE',
      payload: {
        id,
        amount,
      },
    })
  }

  useEffect(() => {
    console.log(coffeesState)
  }, [coffeesState])

  return (
    <CoffeesContext.Provider value={{ coffeesState, addCoffeeToCart }}>
      {children}
    </CoffeesContext.Provider>
  )
}
