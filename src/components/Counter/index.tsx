import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface CounterProps {
  amount: number
  onChangeDecrementAmount: () => void
  onChangeIncrementAmount: () => void
}

export function Counter({
  amount,
  onChangeDecrementAmount,
  onChangeIncrementAmount,
}: CounterProps) {
  function handleDecrementAmount() {
    onChangeDecrementAmount()
  }

  function handleIncrementAmount() {
    onChangeIncrementAmount()
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
