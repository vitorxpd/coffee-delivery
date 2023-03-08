import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

export function Counter() {
  function handleDecrementAmount() {}

  function handleIncrementAmount() {}

  return (
    <S.Counter>
      <S.CounterButton onClick={handleDecrementAmount}>
        <Minus size={14} />
      </S.CounterButton>
      <S.CounterInput type="number" value={0} disabled />
      <S.CounterButton onClick={handleIncrementAmount}>
        <Plus size={14} />
      </S.CounterButton>
    </S.Counter>
  )
}
