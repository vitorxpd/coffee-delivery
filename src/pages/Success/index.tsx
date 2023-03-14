import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import * as S from './styles'
import success from '../../assets/success.svg'

export function Success() {
  return (
    <S.SuccessWrapper>
      <S.MainTitle>Uhu! Pedido confirmado</S.MainTitle>
      <S.Subtitle>
        Agora é só aguardar que logo o café chegará até você
      </S.Subtitle>
      <S.InfoContent>
        <S.BoxWithBorder>
          <S.InfoBox>
            <S.IconContainer variant="purple">
              <MapPin size={16} />
            </S.IconContainer>
            <S.TextContent>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </S.TextContent>
          </S.InfoBox>
          <S.InfoBox>
            <S.IconContainer variant="yellow">
              <Timer size={16} />
            </S.IconContainer>
            <S.TextContent>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </S.TextContent>
          </S.InfoBox>
          <S.InfoBox>
            <S.IconContainer variant="yellow-dark">
              <CurrencyDollar size={16} />
            </S.IconContainer>
            <S.TextContent>
              <span>Pagamento na entrega</span>
              <strong>Cartão de crédito</strong>
            </S.TextContent>
          </S.InfoBox>
        </S.BoxWithBorder>
        <img src={success} alt="" />
      </S.InfoContent>
    </S.SuccessWrapper>
  )
}
