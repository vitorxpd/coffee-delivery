import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import * as S from './styles'

export function PaymentMethods() {
  function handleSelectMethod(event: any) {
    document
      .querySelectorAll('input[type="radio"]')
      .forEach((element) => element.classList.remove('checked'))

    event.target.classList.add('checked')
  }

  return (
    <S.PaymentMethodsContainer>
      <S.PaymentDescriptionContainer>
        <CurrencyDollar size={22} />
        <S.PaymentDescriptionTextContainer>
          <S.DescriptionTitle>Endereço de Entrega</S.DescriptionTitle>
          <S.DescriptionSubtitle>
            Informe o endereço onde deseja receber seu pedido
          </S.DescriptionSubtitle>
        </S.PaymentDescriptionTextContainer>
      </S.PaymentDescriptionContainer>
      <S.MethodsContainer>
        <input
          type="radio"
          id="credito"
          name="payment_method"
          onClick={handleSelectMethod}
          hidden
        />
        <S.RadioLabel htmlFor="credito">
          <CreditCard size={16} />
          <S.TextLabel>Cartão de Crédito</S.TextLabel>
        </S.RadioLabel>

        <input
          type="radio"
          id="debito"
          name="payment_method"
          onClick={handleSelectMethod}
          hidden
        />
        <S.RadioLabel htmlFor="debito">
          <Bank size={16} />
          <S.TextLabel>Cartão de Débito</S.TextLabel>
        </S.RadioLabel>

        <input
          type="radio"
          id="dinheiro"
          name="payment_method"
          onClick={handleSelectMethod}
          hidden
        />
        <S.RadioLabel htmlFor="dinheiro">
          <Money size={16} />
          <S.TextLabel>Dinheiro</S.TextLabel>
        </S.RadioLabel>
      </S.MethodsContainer>
    </S.PaymentMethodsContainer>
  )
}
