import { useEffect, useState } from 'react'

interface Position {
  coords: {
    latitude: number
    longitude: number
  }
}

export function useMapsReverseGeocoding() {
  const [address, setAddress] = useState<Object>({})

  async function getAddress({ coords }: Position) {
    const { latitude, longitude } = coords

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude}+${longitude}&key=${
        import.meta.env.VITE_MAPS_KEY
      }`,
    )

    const data = await response.json()
    setAddress(data)
  }

  useEffect(() => {
    if (!Object.keys(address).length)
      navigator.geolocation.getCurrentPosition(getAddress)
  }, [address])

  return address
}
