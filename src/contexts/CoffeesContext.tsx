import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffees } from '../data/coffees'
import {
  addCoffeeToCartAction,
  clearCartItemsAction,
  decrementAmountAction,
  incrementAmountAction,
  removeCoffeeAction,
  updateTotalizersAction,
} from '../reducers/coffees/actions'
import { coffeesReducer, CoffeesStateProps } from '../reducers/coffees/reducer'

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
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees,
    cartItems: [],
    cartQuantity: 0,
    totalizers: {
      totalItems: 0,
      shipping: 3.5,
      total: 0,
    },
  })

  function updateUserData(data: UserData) {
    setUserData(data)
  }

  function addCoffeeToCart(id: number, price: number, amount: number) {
    dispatch(addCoffeeToCartAction(id, price, amount))
  }

  function decrementAmount(id: number) {
    dispatch(decrementAmountAction(id))
  }

  function incrementAmount(id: number) {
    dispatch(incrementAmountAction(id))
  }

  function removeCoffee(id: number) {
    dispatch(removeCoffeeAction(id))
  }

  function clearCartItems() {
    dispatch(clearCartItemsAction())
  }

  function updateTotalizers() {
    dispatch(updateTotalizersAction())
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
