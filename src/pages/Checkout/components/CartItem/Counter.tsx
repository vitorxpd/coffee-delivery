import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

import * as S from './styles'

interface CounterProps {
  coffeeId: number
}

export function Counter({ coffeeId }: CounterProps) {
  const { coffeesState } = useContext(CoffeesContext)

  const cartItems = coffeesState.cartItems

  const currentCartIndex = cartItems.findIndex((item) => item.id === coffeeId)

  const cartItem = cartItems[currentCartIndex]

  function handleDecrementAmount() {}

  function handleIncrementAmount() {}

  return (
    <S.Counter>
      <S.CounterButton onClick={handleDecrementAmount}>
        <Minus size={14} />
      </S.CounterButton>
      <S.CounterInput type="number" value={cartItem.amount} disabled />
      <S.CounterButton onClick={handleIncrementAmount}>
        <Plus size={14} />
      </S.CounterButton>
    </S.Counter>
  )
}
