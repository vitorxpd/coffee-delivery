import { useCallback, useEffect, useState } from 'react'
import { isLocalhost } from '../utils/isLocalhost'

interface Position {
  coords: {
    latitude: number
    longitude: number
  }
}

interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface Address {
  address_components: AddressComponent[]
  formatted_address: string
}

export function useMapsReverseGeocoding() {
  const [address, setAddress] = useState<Address>(Object)

  const getAddress = useCallback(({ coords }: Position) => {
    const { latitude, longitude } = coords

    const key = isLocalhost
      ? import.meta.env.VITE_MAPS_KEY
      : process.env.MAPS_KEY

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude}+${longitude}&key=${key}`

    fetch(url)
      .then(async (response) => {
        const json = await response.json()

        if (json.status === 'OK') {
          setAddress({
            address_components: json.results[0].address_components,
            formatted_address: json.results[0].formatted_address,
          })
        } else {
          console.log(`Google API Error: ${json.status}`)
        }
      })
      .catch((error) => {
        console.log(`Erro ao obter geolocalização: ${error}`)
      })
  }, [])

  useEffect(() => {
    if (!Object.keys(address).length) {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(getAddress)
        : console.log('Ocorreu um erro ao obter o endereço.')
    }
  }, [address, getAddress])

  return address
}
