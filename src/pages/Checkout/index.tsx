import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CartItem } from './components/CartItem'
import { CartTotalizer } from './components/CartTotalizer'
import { FormInputs } from './components/FormInputs'
import { PaymentMethods } from './components/PaymentMethods'

import * as S from './styles'

export function Checkout() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartItems } = coffeesState

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
            <S.CartItemsList>
              {cartItems.map((item) => {
                return <CartItem id={item.id} key={item.id} />
              })}
            </S.CartItemsList>
            <CartTotalizer />
            <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
          </S.CartItemsContainer>
        </S.CheckoutItemsContainer>
      </form>
    </S.CheckoutContainer>
  )
}
