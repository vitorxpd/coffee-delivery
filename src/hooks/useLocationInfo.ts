import { useEffect, useState } from 'react'

interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface Location {
  addressComponents: AddressComponent[] | null
  formattedAddress: string | null
}

export function useLocationInfo(): Location {
  const [location, setLocation] = useState<Location>({
    addressComponents: null,
    formattedAddress: null,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      const API_KEY = import.meta.env.VITE_MAPS_KEY
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude}+${longitude}&key=${API_KEY}`

      fetch(url)
        .then(async (response) => {
          const json = await response.json()
          setLocation({
            addressComponents: json.results[0].address_components,
            formattedAddress: json.results[0].formatted_address,
          })
        })
        .catch((error) => {
          console.log(`Erro ao obter localização: ${error}`)
        })
    })
  }, [])

  return location
}
