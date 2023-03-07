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
        <div>{coffee.name}</div>
        <strong>{formattedPriceAmount}</strong>
      </>
    )
  }

  return (
    <S.CartItemsContainer>
      <S.CoffeeList>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              {cartMount({ id: item.id, amount: item.amount })}
            </li>
          )
        })}
      </S.CoffeeList>
    </S.CartItemsContainer>
  )
}
