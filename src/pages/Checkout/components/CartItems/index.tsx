import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

interface CartMountProps {
  id: number
  amount: number
}

export function CartItems() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartItems } = coffeesState

  const { coffees } = coffeesState

  function cartMount({ id, amount }: CartMountProps) {
    const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

    const coffee = coffees[currentCoffeeIndex]

    const formattedPriceAmount = priceFormatter(coffee.price * amount)

    return (
      <>
        <img src={coffee.imageUrl} alt="" />
        <S.MainCoffeeContainer>
          <S.CoffeeName>{coffee.name}</S.CoffeeName>
          <S.ActionsContainer>oi</S.ActionsContainer>
        </S.MainCoffeeContainer>
        <S.CoffeePrice>{formattedPriceAmount}</S.CoffeePrice>
      </>
    )
  }

  return (
    <S.CartItemsContainer>
      <S.CoffeeList>
        {cartItems.map((item) => {
          return (
            <S.CoffeeItem key={item.id}>
              {cartMount({ id: item.id, amount: item.amount })}
            </S.CoffeeItem>
          )
        })}
      </S.CoffeeList>
    </S.CartItemsContainer>
  )
}
