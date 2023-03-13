import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
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

interface UserData {
  cep: string
  rua: string
  numero: number
  complemento?: string | undefined
  bairro: string
  cidade: string
  uf: string
  payment_method: string
}

interface CoffeesContextProps {
  userData: UserData
  coffeesState: CoffeesStateProps
  updateUserData: (data: UserData) => void
  addCoffeeToCart: (id: number, price: number, amount: number) => void
  decrementAmount: (id: number) => void
  incrementAmount: (id: number) => void
  removeCoffee: (id: number) => void
  clearCartItems: () => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [userData, setUserData] = useState<UserData>(Object)
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

      if (action.type === 'DECREMENT_AMOUNT') {
        const { id } = action.payload

        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, amount: item.amount - 1 }
            } else {
              return item
            }
          }),
        }
      }

      if (action.type === 'INCREMENT_AMOUNT') {
        const { id } = action.payload

        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, amount: item.amount + 1 }
            } else {
              return item
            }
          }),
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

      if (action.type === 'CLEAR_CART_ITEMS') {
        return {
          ...state,
          cartItems: [],
          cartQuantity: 0,
        }
      }

      if (action.type === 'UPDATE_TOTALIZERS') {
        const totalizer = state.cartItems.reduce((acc, item) => {
          return acc + item.price * item.amount
        }, 0)

        return {
          ...state,
          totalizers: {
            totalItems: totalizer,
            shipping: 3.5,
            total: totalizer + state.totalizers.shipping,
          },
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

  function updateUserData(data: UserData) {
    setUserData(data)
  }

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

  function decrementAmount(id: number) {
    dispatch({
      type: 'DECREMENT_AMOUNT',
      payload: {
        id,
      },
    })
  }

  function incrementAmount(id: number) {
    dispatch({
      type: 'INCREMENT_AMOUNT',
      payload: {
        id,
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

  function clearCartItems() {
    dispatch({
      type: 'CLEAR_CART_ITEMS',
    })
  }

  function updateTotalizers() {
    dispatch({
      type: 'UPDATE_TOTALIZERS',
    })
  }

  useEffect(() => {
    updateTotalizers()
  }, [coffeesState.cartItems])

  return (
    <CoffeesContext.Provider
      value={{
        userData,
        coffeesState,
        updateUserData,
        addCoffeeToCart,
        decrementAmount,
        incrementAmount,
        removeCoffee,
        clearCartItems,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
