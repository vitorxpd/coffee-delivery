import * as S from './styles'

export function CartTotalizer() {
  return (
    <S.CartTotalizerContainer>
      <S.Container>
        <S.TotalItemsText>Total de itens</S.TotalItemsText>
        <S.TotalItemsPrice>R$ 595</S.TotalItemsPrice>
      </S.Container>
      <S.Container>
        <S.ShippingText>Total de itens</S.ShippingText>
        <S.ShippingPrice>R$ 3</S.ShippingPrice>
      </S.Container>
      <S.Container>
        <S.Highlight>Total de itens</S.Highlight>
        <S.Highlight>R$ 595</S.Highlight>
      </S.Container>
    </S.CartTotalizerContainer>
  )
}
