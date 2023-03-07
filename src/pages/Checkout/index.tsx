import { CartItems } from './components/CartItems'

import { FormInputs } from './components/FormInputs'
import { PaymentMethods } from './components/PaymentMethods'

import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <form>
        <S.RegisterContainer>
          <S.FormTitle>Complete seu pedido</S.FormTitle>
          <FormInputs />
          <PaymentMethods />
        </S.RegisterContainer>
        <S.CheckoutItemsContainer>
          <S.FormTitle>Cafés selecionados</S.FormTitle>
          <CartItems />
        </S.CheckoutItemsContainer>
      </form>
    </S.CheckoutContainer>
  )
}
