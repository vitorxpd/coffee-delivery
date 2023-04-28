import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CartItem } from '../CartItem'

import * as S from './styles'

export function CartList() {
  const [{ cartItems }] = useContext(CoffeesContext)

  return (
    <S.CartListWrapper>
      {cartItems.map((item) => {
        return <CartItem id={item.id} key={item.id} />
      })}
    </S.CartListWrapper>
  )
}
