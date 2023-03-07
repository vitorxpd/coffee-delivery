import { CartItems } from './components/CartItems'
import { CartTotalizer } from './components/CartTotalizer'
import { FormInputs } from './components/FormInputs'
import { PaymentMethods } from './components/PaymentMethods'

import * as S from './styles'

export function Checkout() {
  function handleSubmit(event: any) {
    event.preventDefault()
  }

  return (
    <S.CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <S.RegisterContainer>
          <S.FormTitle>Complete seu pedido</S.FormTitle>
          <FormInputs />
          <PaymentMethods />
        </S.RegisterContainer>
        <S.CheckoutItemsContainer>
          <S.FormTitle>Cafés selecionados</S.FormTitle>
          <S.CartItemsContainer>
            <CartItems />
            <CartTotalizer />
            <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
          </S.CartItemsContainer>
        </S.CheckoutItemsContainer>
      </form>
    </S.CheckoutContainer>
  )
}
