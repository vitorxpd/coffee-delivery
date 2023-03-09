import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffees, CoffeeProps } from '../data/coffees'

interface CartItemProps {
  id: number
  price: number
  amount: number
}

interface Totalizers {
  totalItems: number
  shipping: number
  total: number
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
  removeCoffee: (id: number) => void
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
      const incrementCartQuantity = state.cartItems.length + 1
      const decrementCartQuantity = state.cartItems.length - 1

      if (action.type === 'ADD_COFFEE') {
        const { id, price, amount } = action.payload

        return {
          ...state,
          cartItems: [...state.cartItems, { id, price, amount }],
          cartQuantity: incrementCartQuantity,
        }
      }

      if (action.type === 'REMOVE_COFFEE') {
        const { id } = action.payload
        const filteredCoffees = state.cartItems.filter((item) => item.id !== id)

        return {
          ...state,
          cartItems: filteredCoffees,
          cartQuantity: decrementCartQuantity,
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
        total: 0,
      },
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

  function removeCoffee(id: number) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: {
        id,
      },
    })
  }

  useEffect(() => {
    console.log(coffeesState)
  }, [coffeesState])

  return (
    <CoffeesContext.Provider
      value={{ coffeesState, addCoffeeToCart, removeCoffee }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
