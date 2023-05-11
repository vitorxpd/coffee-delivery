import { useEffect, useState } from 'react'
import { MapPin } from 'phosphor-react'

import * as S from './styles'
import { useLocationInfo } from '../../../../hooks/useLocationInfo'

export function Location() {
  const [city, setCity] = useState<string | null>(null)
  const [state, setState] = useState<string | null>(null)

  const { addressComponents } = useLocationInfo()

  useEffect(() => {
    if (addressComponents && !city && !state) {
      for (const component of addressComponents) {
        if (component.types.includes('administrative_area_level_2')) {
          setCity(component.long_name)
        } else if (component.types.includes('administrative_area_level_1')) {
          setState(component.short_name)
        } else if (city && state) {
          break
        }
      }
    }
  }, [addressComponents, city, state])

  return (
    <S.LocationWrapper>
      <MapPin size={22} />
      <S.LocationText>
        {city && state ? `${city}, ${state}` : 'Endereço não informado'}
      </S.LocationText>
    </S.LocationWrapper>
  )
}
