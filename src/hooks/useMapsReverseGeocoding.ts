import { useCallback, useEffect, useState } from 'react'

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

  const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json'

  const MAPS_KEY = import.meta.env.VITE_MAPS_KEY

  const getAddress = useCallback(
    ({ coords }: Position) => {
      const { latitude, longitude } = coords

      const url = `${baseURL}?address=${latitude}+${longitude}&key=${MAPS_KEY}`

      fetch(url)
        .then(async (response) => {
          const json = await response.json()

          setAddress({
            address_components: json.results[0].address_components,
            formatted_address: json.results[0].formatted_address,
          })
        })
        .catch((error) => {
          console.log('Ocorreu um erro: ', error)
        })
    },
    [MAPS_KEY],
  )

  useEffect(() => {
    if (!Object.keys(address).length) {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(getAddress)
        : console.log('Ocorreu um erro ao obter o endereço.')
    }
  }, [address, getAddress])

  return address
}
