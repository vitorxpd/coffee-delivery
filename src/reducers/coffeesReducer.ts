import { Coffee } from '../data/coffees'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  DECREMENT_AMOUNT = 'DECREMENT_AMOUNT',
  INCREMENT_AMOUNT = 'INCREMENT_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS',
  UPDATE_TOTALIZERS = 'UPDATE_TOTALIZERS',
  UPDATE_USER_DATA = 'UPDATE_USER_DATA',
}

interface CartItem {
  id: number
  price: number
  amount: number
}

interface Totalizers {
  totalItems: number
  shipping: number
  total: number
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

export interface CoffeesState {
  coffees: Coffee[]
  cartItems: CartItem[]
  cartQuantity: number
  totalizers: Totalizers
  userData: UserData
}

export function coffeesReducer(state: CoffeesState, action: any) {
  const incrementCartQuantity = state.cartItems.length + 1
  const decrementCartQuantity = state.cartItems.length - 1

  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const { id, price, amount } = action.payload

      return {
        ...state,
        cartItems: [...state.cartItems, { id, price, amount }],
        cartQuantity: incrementCartQuantity,
      }
    }
    case ActionTypes.DECREMENT_AMOUNT: {
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
    case ActionTypes.INCREMENT_AMOUNT: {
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
    case ActionTypes.REMOVE_COFFEE: {
      const { id } = action.payload
      const filteredCoffees = state.cartItems.filter((item) => item.id !== id)

      return {
        ...state,
        cartItems: filteredCoffees,
        cartQuantity: decrementCartQuantity,
      }
    }

    case ActionTypes.CLEAR_CART_ITEMS: {
      return {
        ...state,
        cartItems: [],
        cartQuantity: 0,
      }
    }
    case ActionTypes.UPDATE_TOTALIZERS: {
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
    case ActionTypes.UPDATE_USER_DATA: {
      const { data } = action.payload

      return {
        ...state,
        userData: data,
      }
    }
    default: {
      return state
    }
  }
}
