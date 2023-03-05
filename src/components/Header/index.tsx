import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'

import * as S from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'
import { useContext } from 'react'

export function Header() {
  const { cartQuantity } = useContext(CoffeesContext)

  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />
      <S.HeaderRight>
        <S.LocationContainer>
          <MapPin size={22} />
          <span>Porto Alegre, RS</span>
        </S.LocationContainer>
        <Link to="">
          <S.CartContainer>
            <ShoppingCart size={22} />
            {cartQuantity >= 1 && (
              <S.BadgeContainer>
                <span>{cartQuantity}</span>
              </S.BadgeContainer>
            )}
          </S.CartContainer>
        </Link>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
