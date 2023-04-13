import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export function Minicart() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartQuantity } = coffeesState

  const navigate = useNavigate()

  function handleCartNavigate() {
    navigate('/checkout')
  }

  return (
    <S.MinicartButton onClick={handleCartNavigate}>
      <ShoppingCart size={22} />
      {cartQuantity >= 1 && (
        <S.BadgeContainer>
          <S.BadgeQuantity>{cartQuantity}</S.BadgeQuantity>
        </S.BadgeContainer>
      )}
    </S.MinicartButton>
  )
}
