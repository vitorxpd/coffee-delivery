import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react'
import { coffees } from '../mocks/coffees'
import {
  coffeesReducer,
  CoffeesState,
  ActionTypes,
} from '../reducers/coffeesReducer'

const coffeesInitialState: CoffeesState = {
  coffees,
  cartItems: [],
  cartQuantity: 0,
  totalizers: {
    totalItems: 0,
    shipping: 3.5,
    total: 0,
  },
  userData: {
    bairro: '',
    cep: '',
    cidade: '',
    numero: null,
    payment_method: null,
    rua: '',
    uf: '',
    complemento: '',
  },
  isMobile: window.innerWidth <= 1024,
}

export const CoffeesContext = createContext<
  [state: CoffeesState, dispatch: Dispatch<any>]
>([coffeesInitialState, () => {}])

export function CoffeesContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(coffeesReducer, coffeesInitialState)

  const { cartItems } = state

  function updateTotalizers() {
    dispatch({
      type: ActionTypes.UPDATE_TOTALIZERS,
    })
  }

  useEffect(() => {
    updateTotalizers()
  }, [cartItems])

  return (
    <CoffeesContext.Provider value={[state, dispatch]}>
      {children}
    </CoffeesContext.Provider>
  )
}
