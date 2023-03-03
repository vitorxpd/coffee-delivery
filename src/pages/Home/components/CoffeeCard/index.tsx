import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import * as S from './styles'
import cubano from '../../../../assets/cubano.svg'

export function CoffeeCard() {
  const [counter, setCounter] = useState<number>(1)

  return (
    <S.CardContainer>
      <img src={cubano} alt="" />
      <S.TagsContainer>
        <span>Especial</span>
        <span>Acoólico</span>
        <span>Gelado</span>
      </S.TagsContainer>
      <h3>Cubano</h3>
      <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
      <S.BottomContainer>
        <S.PriceContainer>
          <span>R$</span>
          <h3>9,90</h3>
        </S.PriceContainer>
        <S.ActionsContainer>
          <S.Counter>
            <button onClick={() => setCounter((state) => state - 1)}>
              <Minus size={14} />
            </button>
            <input type="number" value={counter} disabled />
            <button onClick={() => setCounter((state) => state + 1)}>
              <Plus size={14} />
            </button>
          </S.Counter>
          <S.CartButton>
            <ShoppingCart size={22} />
          </S.CartButton>
        </S.ActionsContainer>
      </S.BottomContainer>
    </S.CardContainer>
  )
}
