import { useContext, useEffect, useState } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useMapsReverseGeocoding } from '../../hooks/useMapsReverseGeocoding'

import * as S from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const [place, setPlace] = useState<string[]>([])

  const { coffeesState } = useContext(CoffeesContext)

  const { cartQuantity } = coffeesState

  const address = useMapsReverseGeocoding()

  const navigate = useNavigate()

  function handleCartNavigate() {
    navigate('/checkout')
  }

  useEffect(() => {
    if (Object.keys(address).length) {
      address.address_components.map((adr) => {
        if (adr.types.includes('administrative_area_level_2')) {
          setPlace([adr.long_name])
        }

        if (adr.types.includes('administrative_area_level_1')) {
          setPlace((state) => [...state, adr.short_name])
        }

        return adr
      })
    }
  }, [address])

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <S.HeaderRight>
        <S.LocationContainer>
          <MapPin size={22} />
          <S.LocationText>
            {place.length ? place.join(', ') : 'Endereço não informado.'}
          </S.LocationText>
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
