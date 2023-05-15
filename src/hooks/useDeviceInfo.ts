import { useEffect, useState } from 'react'

type Device = 'phone' | 'laptop' | 'desktop' | null

interface States {
  isMobile: boolean
  type: Device
}

export function useDeviceInfo(): States {
  const [isMobile, setIsMobile] = useState(false)
  const [type, setType] = useState<Device>(null)

  useEffect(() => {
    switch (true) {
      case window.innerWidth <= 1024:
        setIsMobile(true)
        setType('phone')
        break
      case window.innerWidth > 1025 && window.innerWidth <= 1440:
        setType('laptop')
        break
      case window.innerWidth > 1440:
        setType('desktop')
        break
      default:
        break
    }
  }, [])

  return { isMobile, type }
}
