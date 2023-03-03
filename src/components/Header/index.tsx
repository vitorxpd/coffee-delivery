import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
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
          </S.CartContainer>
        </Link>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
