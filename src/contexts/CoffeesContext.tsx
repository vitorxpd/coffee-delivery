import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useReducer,
} from 'react'
import { coffees } from '../mocks/coffees'
import {
  ActionTypes,
  coffeesReducer,
  CoffeesState,
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
    numero: 0,
    payment_method: '',
    rua: '',
    uf: '',
    complemento: '',
  },
}

export const CoffeesContext = createContext<
  [coffeesState: CoffeesState, coffeesDispatch: Dispatch<any>]
>([coffeesInitialState, () => {}])

export function CoffeesContextProvider({ children }: PropsWithChildren) {
  const [coffeesState, coffeesDispatch] = useReducer(
    coffeesReducer,
    coffeesInitialState,
  )

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
    <CoffeesContext.Provider value={[coffeesState, coffeesDispatch]}>
      {children}
    </CoffeesContext.Provider>
  )
}
