import { Controller, useFormContext } from 'react-hook-form'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import * as S from './styles'

export function PaymentMethods() {
  const { control } = useFormContext()

  return (
    <S.PaymentMethodsWrapper>
      <S.PaymentDescriptionContainer>
        <CurrencyDollar size={22} />
        <S.PaymentDescriptionTextContainer>
          <S.DescriptionTitle>Endereço de Entrega</S.DescriptionTitle>
          <S.DescriptionText>
            Informe o endereço onde deseja receber seu pedido
          </S.DescriptionText>
        </S.PaymentDescriptionTextContainer>
      </S.PaymentDescriptionContainer>
      <S.PaymentMethodsContainer>
        <Controller
          control={control}
          name="payment_method"
          render={({ field }) => {
            return (
              <RadioGroup.Root
                className="RadioGroupRoot"
                onValueChange={field.onChange}
              >
                <RadioGroup.Item value="credito" asChild>
                  <S.RadioContent>
                    <CreditCard size={16} />
                    <S.RadioText>Cartão de Crédito</S.RadioText>
                  </S.RadioContent>
                </RadioGroup.Item>
                <RadioGroup.Item value="debito" asChild>
                  <S.RadioContent>
                    <Bank size={16} />
                    <S.RadioText>Cartão de Débito</S.RadioText>
                  </S.RadioContent>
                </RadioGroup.Item>
                <RadioGroup.Item value="dinheiro" asChild>
                  <S.RadioContent>
                    <Money size={16} />
                    <S.RadioText>Dinheiro</S.RadioText>
                  </S.RadioContent>
                </RadioGroup.Item>
              </RadioGroup.Root>
            )
          }}
        />
      </S.PaymentMethodsContainer>
    </S.PaymentMethodsWrapper>
  )
}
