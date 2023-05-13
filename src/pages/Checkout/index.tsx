import { useContext, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
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
import { Alert } from '../../components/Alert'

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(8).max(8),
  rua: zod.string().min(2).max(20),
  numero: zod.number().nullable(),
  complemento: zod.string().optional(),
  bairro: zod.string().min(2).max(20),
  cidade: zod.string().min(2).max(20),
  uf: zod.string().min(2).max(2),
  payment_method: zod.enum(['credito', 'debito', 'dinheiro']).nullable(),
})

export type UserData = zod.infer<typeof checkoutValidationSchema>

export function Checkout() {
  const [alert, setAlert] = useState(false)

  const [_, dispatch] = useContext(CoffeesContext)

  const navigate = useNavigate()

  const checkoutForm = useForm<UserData>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const { handleSubmit, reset } = checkoutForm

  function onSubmit(data: UserData) {
    dispatch({
      type: ActionTypes.CLEAR_CART_ITEMS,
    })
    dispatch({
      type: ActionTypes.UPDATE_USER_DATA,
      payload: {
        data,
      },
    })
    navigate('/success')
    reset()
  }

  function toggleAlert() {
    setAlert(!alert)
  }

  return (
    <S.CheckoutWrapper>
      <form onSubmit={handleSubmit(onSubmit, toggleAlert)}>
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
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
              </AlertDialog.Trigger>
              <Alert
                description="Preencha o formulário corretamente."
                onToggleAlert={toggleAlert}
              />
            </AlertDialog.Root>
          </S.CartItemsContainer>
        </S.CheckoutItemsContainer>
      </form>
    </S.CheckoutWrapper>
  )
}
