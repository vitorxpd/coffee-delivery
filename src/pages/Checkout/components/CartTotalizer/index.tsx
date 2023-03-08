import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export function CartTotalizer() {
  const { coffeesState } = useContext(CoffeesContext)

  const totalizers = coffeesState.totalizers

  const formattedTotalItemsPrice = priceFormatter(totalizers.totalItems)

  const formattedShippingPrice = priceFormatter(totalizers.shipping)

  const formattedTotalPrice = priceFormatter(totalizers.total)

  return (
    <S.CartTotalizerContainer>
      <S.Container>
        <S.TotalItemsText>Total de itens</S.TotalItemsText>
        <S.TotalItemsPrice>{formattedTotalItemsPrice}</S.TotalItemsPrice>
      </S.Container>
      <S.Container>
        <S.ShippingText>Entrega</S.ShippingText>
        <S.ShippingPrice>{formattedShippingPrice}</S.ShippingPrice>
      </S.Container>
      <S.Container>
        <S.Highlight>Total</S.Highlight>
        <S.Highlight>{formattedTotalPrice}</S.Highlight>
      </S.Container>
    </S.CartTotalizerContainer>
  )
}
