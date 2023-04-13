import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CartItem } from './components/CartItem'
import { CartTotalizer } from './components/CartTotalizer'
import { FormInputs } from './components/FormInputs'
import { PaymentMethods } from './components/PaymentMethods'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { ActionTypes } from '../../reducers/coffeesReducer'

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  rua: zod.string().min(2).max(20),
  numero: zod.number(),
  complemento: zod.string().optional(),
  bairro: zod.string().min(2).max(20),
  cidade: zod.string().min(2).max(20),
  uf: zod.string().min(2).max(2),
  payment_method: zod.enum(['credito', 'debito', 'dinheiro']),
})

type CheckoutData = zod.infer<typeof checkoutValidationSchema>

export function Checkout() {
  const { coffeesState, coffeesDispatch } = useContext(CoffeesContext)

  const { cartItems } = coffeesState

  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutData>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const { handleSubmit /* formState */ } = checkoutForm

  function handleSubmitCheckout(data: CheckoutData) {
    if (cartItems.length) {
      coffeesDispatch({
        type: ActionTypes.CLEAR_CART_ITEMS,
      })

      coffeesDispatch({
        type: ActionTypes.UPDATE_USER_DATA,
        payload: {
          data,
        },
      })

      navigate('/success')
    }
  }

  /* console.log(formState.errors) */

  return (
    <S.CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitCheckout)}>
        <S.RegisterContainer>
          <S.FormTitle>Complete seu pedido</S.FormTitle>
          <FormProvider {...checkoutForm}>
            <FormInputs />
            <PaymentMethods />
          </FormProvider>
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
