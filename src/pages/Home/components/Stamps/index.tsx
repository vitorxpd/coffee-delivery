import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import * as S from './styles'

export function Stamps() {
  return (
    <S.StampsWrapper>
      <S.StampContainer>
        <S.StampItem variant="yellow-dark">
          <div>
            <ShoppingCart size={16} />
          </div>
          <span>Compra simples e segura</span>
        </S.StampItem>
        <S.StampItem variant="yellow">
          <div>
            <Timer size={16} />
          </div>
          <span>Entrega rápida e rastreada</span>
        </S.StampItem>
      </S.StampContainer>

      <S.StampContainer>
        <S.StampItem variant="gray">
          <div>
            <Package size={16} />
          </div>
          <span>Embalagem mantém o café intacto</span>
        </S.StampItem>
        <S.StampItem variant="purple">
          <div>
            <Coffee size={16} />
          </div>
          <span>O café chega fresquinho até você</span>
        </S.StampItem>
      </S.StampContainer>
    </S.StampsWrapper>
  )
}
