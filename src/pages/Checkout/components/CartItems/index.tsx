import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CartItem } from './CartItem'

import * as S from './styles'

export function CartItems() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartItems } = coffeesState

  return (
    <S.CartItemsList>
      {cartItems.map((item) => {
        return <CartItem id={item.id} amount={item.amount} key={item.id} />
      })}
    </S.CartItemsList>
  )
}
