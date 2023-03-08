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
  changeQuantityCartItemAmount: (id: number, amount: number) => void
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
          cartQuantity: state.cartQuantity + 1,
        }
      }

      if (action.type === 'CHANGE_CART_ITEM_QUANTITY_AMOUNT') {
        const id = action.payload.id
        const amount = action.payload.amount

        const currentCartItemIndex = state.cartItems.findIndex(
          (item) => item.id === id,
        )

        state.cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...state,
              cartItems: [
                ...state.cartItems,
                (state.cartItems[currentCartItemIndex].amount = amount),
              ],
            }
          } else {
            return {
              ...state,
            }
          }
        })
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

  function changeQuantityCartItemAmount(id: number, amount: number) {
    const currentCoffeeIndex = coffeesState.coffees.findIndex(
      (coffee) => coffee.id === id,
    )

    const coffee = coffeesState.coffees[currentCoffeeIndex]

    if (coffee.quantity > 1 && coffee.quantity > amount) {
      dispatch({
        type: 'CHANGE_CART_ITEM_QUANTITY_AMOUNT',
        payload: {
          id,
          amount,
        },
      })
    }
  }

  useEffect(() => {
    console.log(coffeesState)
  }, [coffeesState])

  return (
    <CoffeesContext.Provider
      value={{ coffeesState, addCoffeeToCart, changeQuantityCartItemAmount }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
