import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import * as S from './styles'
import success from '../../assets/success.svg'

export function Success() {
  const [{ userData }] = useContext(CoffeesContext)

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
                Entrega em{' '}
                <strong>
                  {userData.rua}, {userData.numero}
                </strong>
              </span>
              <span>
                {userData.bairro} - {userData.cidade}, {userData.uf}
              </span>
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
              <strong>
                {userData.payment_method === 'credito' && 'Cartão de Crédito'}
                {userData.payment_method === 'debito' && 'Cartão de Débito'}
                {userData.payment_method === 'dinheiro' && 'Dinheiro'}
              </strong>
            </S.TextContent>
          </S.InfoBox>
        </S.BoxWithBorder>
        <img src={success} alt="" />
      </S.InfoContent>
    </S.SuccessWrapper>
  )
}
