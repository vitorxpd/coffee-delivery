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

  const formattedPriceAmount = priceFormatter(cartItem.price * cartItem.amount)

  function changeDecrementAmount() {
    if (cartItem.amount > 1)
      coffeesDispatch({
        type: ActionTypes.DECREMENT_AMOUNT,
        payload: {
          id,
        },
      })
  }

  function changeIncrementAmount() {
    if (cartItem.amount < coffee.quantity)
      coffeesDispatch({
        type: ActionTypes.INCREMENT_AMOUNT,
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
            amount={cartItem.amount}
            onChangeDecrementAmount={changeDecrementAmount}
            onChangeIncrementAmount={changeIncrementAmount}
          />
          <S.RemoveButton onClick={handleRemoveCoffee}>
            <Trash size={16} />
            <S.RemoveButtonText>Remover</S.RemoveButtonText>
          </S.RemoveButton>
        </S.ActionsContainer>
      </S.MainCoffeeContainer>
      <S.CoffeePrice>{formattedPriceAmount}</S.CoffeePrice>
    </S.CartItem>
  )
}
