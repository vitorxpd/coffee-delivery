import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface CounterCardProps {
  amount: number
  onDecrementAmount: () => void
  onIncrementAmount: () => void
}

export function Counter({
  amount,
  onDecrementAmount,
  onIncrementAmount,
}: CounterCardProps) {
  function handleDecrementAmount() {
    onDecrementAmount()
  }

  function handleIncrementAmount() {
    onIncrementAmount()
  }

  return (
    <S.Counter>
      <S.CounterButton onClick={handleDecrementAmount}>
        <Minus size={14} />
      </S.CounterButton>
      <S.CounterInput type="number" value={amount} disabled />
      <S.CounterButton onClick={handleIncrementAmount}>
        <Plus size={14} />
      </S.CounterButton>
    </S.Counter>
  )
}
