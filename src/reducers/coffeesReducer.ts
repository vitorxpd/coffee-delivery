export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS',
  UPDATE_TOTALIZERS = 'UPDATE_TOTALIZERS',
  UPDATE_USER_DATA = 'UPDATE_USER_DATA',
}

interface Coffee {
  id: number
  name: string
  description: string
  imageUrl: string
  price: number
  tags: string[]
  availableQuantity: number
}

interface CartItem {
  id: number
  price: number
  quantity: number
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
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      const { id, price, quantity } = action.payload

      return {
        ...state,
        cartItems: [...state.cartItems, { id, price, quantity }],
        cartQuantity: state.cartItems.length + 1,
      }
    }
    case ActionTypes.DECREMENT_QUANTITY: {
      const { id } = action.payload

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        }),
      }
    }
    case ActionTypes.INCREMENT_QUANTITY: {
      const { id } = action.payload

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
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
        cartQuantity: state.cartItems.length - 1,
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
        return acc + item.price * item.quantity
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
