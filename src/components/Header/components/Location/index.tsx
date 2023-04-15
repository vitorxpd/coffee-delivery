import { useEffect, useState } from 'react'
import { MapPin } from 'phosphor-react'
import { useMapsReverseGeocoding } from '../../../../hooks/useMapsReverseGeocoding'

import * as S from './styles'

export function Location() {
  const [location, setLocation] = useState<string[]>([])

  const address = useMapsReverseGeocoding()

  useEffect(() => {
    if (Object.keys(address).length) {
      address.address_components.map((adr) => {
        if (adr.types.includes('administrative_area_level_2')) {
          setLocation([adr.long_name])
        }

        if (adr.types.includes('administrative_area_level_1')) {
          setLocation((state) => [...state, adr.short_name])
        }

        return adr
      })
    }
  }, [address])

  return (
    <S.LocationWrapper>
      <MapPin size={22} />
      <S.LocationText>
        {location.length ? location.join(', ') : 'Endereço não informado.'}
      </S.LocationText>
    </S.LocationWrapper>
  )
}
