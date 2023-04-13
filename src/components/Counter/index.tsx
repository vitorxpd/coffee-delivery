import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface CounterProps {
  quantity: number
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
}

export function Counter({
  quantity,
  onDecrementQuantity,
  onIncrementQuantity,
}: CounterProps) {
  function handleDecrementQuantity() {
    onDecrementQuantity()
  }

  function handleIncrementQuantity() {
    onIncrementQuantity()
  }

  return (
    <S.CounterWrapper>
      <S.CounterButton type="button" onClick={handleDecrementQuantity}>
        <Minus size={14} />
      </S.CounterButton>
      <S.CounterInput type="number" value={quantity} disabled />
      <S.CounterButton type="button" onClick={handleIncrementQuantity}>
        <Plus size={14} />
      </S.CounterButton>
    </S.CounterWrapper>
  )
}
