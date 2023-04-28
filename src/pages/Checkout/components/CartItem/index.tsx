import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { ActionTypes } from '../../../../reducers/coffeesReducer'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'

import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

interface CartItemProps {
  id: number
}

export function CartItem({ id }: CartItemProps) {
  const [{ coffees, cartItems }, coffeesDispatch] = useContext(CoffeesContext)

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
    if (cartItem.quantity < coffee.availableQuantity)
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
    <S.CartItemWrapper>
      <img src={coffee.imageUrl} alt="" />
      <S.ItemContainer>
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
      </S.ItemContainer>
      <S.CoffeePrice>{formattedPrice}</S.CoffeePrice>
    </S.CartItemWrapper>
  )
}
