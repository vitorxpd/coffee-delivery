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
    async ({ coords }: Position) => {
      const { latitude, longitude } = coords

      try {
        const response = await fetch(
          `${baseURL}?address=${latitude}+${longitude}&key=${MAPS_KEY}`,
        )

        const data = await response.json()

        if (response.ok) {
          setAddress({
            address_components: data.results[0].address_components,
            formatted_address: data.results[0].formatted_address,
          })
        } else {
          console.log('Status: ', response.status)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [MAPS_KEY],
  )

  useEffect(() => {
    if (!Object.keys(address).length)
      navigator.geolocation.getCurrentPosition(getAddress)
  }, [address, getAddress])

  return address
}
