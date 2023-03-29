export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  DECREMENT_AMOUNT = 'DECREMENT_AMOUNT',
  INCREMENT_AMOUNT = 'INCREMENT_AMOUNT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS',
  UPDATE_TOTALIZERS = 'UPDATE_TOTALIZERS',
}

export function addCoffeeToCartAction(
  id: number,
  price: number,
  amount: number,
) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      id,
      price,
      amount,
    },
  }
}

export function decrementAmountAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_AMOUNT,
    payload: {
      id,
    },
  }
}

export function incrementAmountAction(id: number) {
  return {
    type: ActionTypes.INCREMENT_AMOUNT,
    payload: {
      id,
    },
  }
}

export function removeCoffeeAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function clearCartItemsAction() {
  return {
    type: ActionTypes.CLEAR_CART_ITEMS,
  }
}

export function updateTotalizersAction() {
  return {
    type: ActionTypes.UPDATE_TOTALIZERS,
  }
}
