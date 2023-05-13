import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

import { priceFormatter } from '../../../../utils/helpers'

import * as S from './styles'

export function CartTotalizer() {
  const [{ cartItems, totalizers }] = useContext(CoffeesContext)

  return (
    <S.CartTotalizerWrapper>
      <S.Container>
        <S.TextContent>Total de itens</S.TextContent>
        <S.PriceContent>{priceFormatter(totalizers.totalItems)}</S.PriceContent>
      </S.Container>
      <S.Container>
        <S.TextContent>Entrega</S.TextContent>
        <S.PriceContent>
          {cartItems.length
            ? priceFormatter(totalizers.shipping)
            : priceFormatter(0)}
        </S.PriceContent>
      </S.Container>
      <S.Container>
        <S.HighlightContent>Total</S.HighlightContent>
        <S.HighlightContent>
          {cartItems.length
            ? priceFormatter(totalizers.total)
            : priceFormatter(0)}
        </S.HighlightContent>
      </S.Container>
    </S.CartTotalizerWrapper>
  )
}
