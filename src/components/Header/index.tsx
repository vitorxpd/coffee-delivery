import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext } from 'react'

import * as S from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const { coffeesState } = useContext(CoffeesContext)

  const { cartQuantity } = coffeesState

  const navigate = useNavigate()

  function handleCartNavigate() {
    navigate('/checkout')
  }

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <S.HeaderRight>
        <S.LocationContainer>
          <MapPin size={22} />
          <S.LocationText>Porto Alegre, RS</S.LocationText>
        </S.LocationContainer>
        <S.CartContainer onClick={handleCartNavigate}>
          <ShoppingCart size={22} />
          {cartQuantity >= 1 && (
            <S.BadgeContainer>
              <S.AmountText>{cartQuantity}</S.AmountText>
            </S.BadgeContainer>
          )}
        </S.CartContainer>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
