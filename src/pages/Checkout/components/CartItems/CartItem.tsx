import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

interface CartItemProps {
  id: number
  amount: number
}

export function CartItem({ id, amount }: CartItemProps) {
  const { coffeesState } = useContext(CoffeesContext)

  const { coffees } = coffeesState

  const currentCoffeeIndex = coffees.findIndex((coffee) => coffee.id === id)

  const coffee = coffees[currentCoffeeIndex]

  const formattedPriceAmount = priceFormatter(coffee.price * amount)

  return (
    <S.CartItem>
      <img src={coffee.imageUrl} alt="" />
      <S.MainCoffeeContainer>
        <S.CoffeeName>{coffee.name}</S.CoffeeName>
        <S.ActionsContainer>
          <S.Counter>
            <S.CounterButton>
              <Minus size={14} />
            </S.CounterButton>
            <S.CounterInput type="number" value={amount} disabled />
            <S.CounterButton>
              <Plus size={14} />
            </S.CounterButton>
          </S.Counter>
          <S.RemoveButton>
            <Trash size={16} />
            <S.RemoveButtonText>Remover</S.RemoveButtonText>
          </S.RemoveButton>
        </S.ActionsContainer>
      </S.MainCoffeeContainer>
      <S.CoffeePrice>{formattedPriceAmount}</S.CoffeePrice>
    </S.CartItem>
  )
}
