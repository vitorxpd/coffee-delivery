import { useEffect, useState } from 'react'
import { MapPin } from 'phosphor-react'
import { useMapsReverseGeocoding } from '../../../../hooks/useMapsReverseGeocoding'

import * as S from './styles'

export function Location() {
  const [place, setPlace] = useState<string[]>([])

  const address = useMapsReverseGeocoding()

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
    <S.LocationContainer>
      <MapPin size={22} />
      <S.LocationText>
        {place.length ? place.join(', ') : 'Endereço não informado.'}
      </S.LocationText>
    </S.LocationContainer>
  )
}
