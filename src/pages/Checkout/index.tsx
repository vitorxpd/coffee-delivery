import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { ActionTypes } from '../../reducers/coffeesReducer'
import { FormInputs } from './components/FormInputs'
import { PaymentMethods } from './components/PaymentMethods'
import { CartList } from './components/CartList'
import { CartTotalizer } from './components/CartTotalizer'

import * as S from './styles'

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
  const [{ cartItems }, coffeesDispatch] = useContext(CoffeesContext)

  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutData>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const { handleSubmit, reset } = checkoutForm

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
      reset()
    } else {
      alert('Adicione itens ao carrinho!')
    }
  }

  return (
    <S.CheckoutWrapper>
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
            <CartList />
            <CartTotalizer />
            <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
          </S.CartItemsContainer>
        </S.CheckoutItemsContainer>
      </form>
    </S.CheckoutWrapper>
  )
}
