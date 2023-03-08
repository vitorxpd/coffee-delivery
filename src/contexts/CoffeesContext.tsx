import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffees, CoffeeProps } from '../data/coffees'

interface CartItemProps {
  id: number
  price: number
  amount: number
}

interface Totalizers {
  totalItems: number;
  shipping: number;
  total: number;
}

interface CoffeesStateProps {
  coffees: CoffeeProps[]
  cartItems: CartItemProps[]
  cartQuantity: number
  totalizers: Totalizers
}

interface CoffeesContextProps {
  coffeesState: CoffeesStateProps
  addCoffeeToCart: (id: number, price: number, amount: number) => void
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
        const { id, price, amount } = action.payload
       
        return {
          ...state,
          cartItems: [...state.cartItems, { id, price, amount }],
          cartQuantity: state.cartQuantity + 1,
        }
      }

      return state
    },
    {
      coffees,
      cartItems: [],
      cartQuantity: 0,
      totalizers: {
        totalItems: 0,
        shipping: 3.5,
        total: 0
    }
    },
  )

  function addCoffeeToCart(id: number, price: number, amount: number) {
    dispatch({
      type: 'ADD_COFFEE',
      payload: {
        id,
        price,
        amount,
      },
    })
  }

  useEffect(() => {
    console.log(coffeesState)
  }, [coffeesState])

  return (
    <CoffeesContext.Provider
      value={{ coffeesState, addCoffeeToCart }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
