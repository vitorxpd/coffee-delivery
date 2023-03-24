import { useEffect, useState } from 'react'

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

  async function getAddress({ coords }: Position) {
    const { latitude, longitude } = coords

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude}+${longitude}&key=${
        import.meta.env.VITE_MAPS_KEY
      }`,
    )

    const data = await response.json()

    setAddress({
      address_components: data.results[0].address_components,
      formatted_address: data.results[0].formatted_address,
    })
  }

  useEffect(() => {
    if (!Object.keys(address).length)
      navigator.geolocation.getCurrentPosition(getAddress)
  }, [address])

  return address
}
