import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import { coffees } from '../data/coffees'
import {
  ActionTypes,
  coffeesReducer,
  CoffeesState,
} from '../reducers/coffeesReducer'

interface CoffeesContextProps {
  coffeesState: CoffeesState
  coffeesDispatch: Dispatch<any>
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, coffeesDispatch] = useReducer(coffeesReducer, {
    coffees,
    cartItems: [],
    cartQuantity: 0,
    totalizers: {
      totalItems: 0,
      shipping: 3.5,
      total: 0,
    },
    userData: {},
  })

  const { cartItems } = coffeesState

  function updateTotalizers() {
    coffeesDispatch({
      type: ActionTypes.UPDATE_TOTALIZERS,
    })
  }

  useEffect(() => {
    updateTotalizers()
  }, [cartItems])

  return (
    <CoffeesContext.Provider
      value={{
        coffeesState,
        coffeesDispatch,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
