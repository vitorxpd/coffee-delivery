import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { Counter } from './Counter'
import { Trash } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

interface CartItemProps {
  id: number
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const { coffeesState, removeCoffee } = useContext(CoffeesContext)

  const { coffees } = coffeesState

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const formattedPriceAmount = priceFormatter(coffee.price * amount)

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  return (
    <S.CartItem>
      <img src={coffee.imageUrl} alt="" />
      <S.MainCoffeeContainer>
        <S.CoffeeName>{coffee.name}</S.CoffeeName>
        <S.ActionsContainer>
          <Counter coffeeId={id} />
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
