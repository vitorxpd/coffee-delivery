import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'
import { ActionTypes } from '../../../../reducers/coffeesReducer'

interface CartItemProps {
  id: number
}

export function CartItem({ id }: CartItemProps) {
  const { coffeesState, coffeesDispatch } = useContext(CoffeesContext)

  const { coffees, cartItems } = coffeesState

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const currentCartIndex = cartItems.findIndex((item) => item.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const cartItem = cartItems[currentCartIndex]

  const formattedPrice = priceFormatter(cartItem.price * cartItem.quantity)

  function decrementQuantity() {
    if (cartItem.quantity > 1)
      coffeesDispatch({
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: {
          id,
        },
      })
  }

  function incrementQuantity() {
    if (cartItem.quantity < coffee.quantity)
      coffeesDispatch({
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: {
          id,
        },
      })
  }

  function handleRemoveCoffee() {
    coffeesDispatch({
      type: ActionTypes.REMOVE_COFFEE,
      payload: {
        id,
      },
    })
  }

  return (
    <S.CartItem>
      <img src={coffee.imageUrl} alt="" />
      <S.MainCoffeeContainer>
        <S.CoffeeName>{coffee.name}</S.CoffeeName>
        <S.ActionsContainer>
          <Counter
            quantity={cartItem.quantity}
            onDecrementQuantity={decrementQuantity}
            onIncrementQuantity={incrementQuantity}
          />
          <S.RemoveButton onClick={handleRemoveCoffee}>
            <Trash size={16} />
            <S.RemoveButtonText>Remover</S.RemoveButtonText>
          </S.RemoveButton>
        </S.ActionsContainer>
      </S.MainCoffeeContainer>
      <S.CoffeePrice>{formattedPrice}</S.CoffeePrice>
    </S.CartItem>
  )
}
