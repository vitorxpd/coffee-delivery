import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export function CartTotalizer() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartItems, totalizers } = coffeesState

  return (
    <S.CartTotalizerContainer>
      <S.Container>
        <S.TotalItemsText>Total de itens</S.TotalItemsText>
        <S.TotalItemsPrice>
          {priceFormatter(totalizers.totalItems)}
        </S.TotalItemsPrice>
      </S.Container>
      <S.Container>
        <S.ShippingText>Entrega</S.ShippingText>
        <S.ShippingPrice>
          {cartItems.length
            ? priceFormatter(totalizers.shipping)
            : priceFormatter(0)}
        </S.ShippingPrice>
      </S.Container>
      <S.Container>
        <S.Highlight>Total</S.Highlight>
        <S.Highlight>
          {cartItems.length
            ? priceFormatter(totalizers.total)
            : priceFormatter(0)}
        </S.Highlight>
      </S.Container>
    </S.CartTotalizerContainer>
  )
}
